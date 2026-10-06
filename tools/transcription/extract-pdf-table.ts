/**
 * Pass A of the double transcription: a machine extraction of a table from a PDF text layer.
 *
 * The extraction reads word bounding boxes from Poppler's `pdftotext -bbox` and arranges them into
 * a grid using layout parameters only: the page region, the header line, and the column
 * boundaries. It never supplies a cell value; every value comes from the PDF text layer.
 *
 * This file is not run in continuous integration, because the source PDFs are never committed
 * (decision D-104). Run it locally against a copy whose checksum matches docs/sources.md.
 */
import { execFileSync } from 'node:child_process';

export interface Word {
  xMin: number;
  yMin: number;
  xMax: number;
  yMax: number;
  text: string;
}

export interface Region {
  page: number;
  /** Words whose top edge lies in [yMin, yMax) and whose left edge lies in [xMin, xMax). */
  yMin: number;
  yMax: number;
  xMin: number;
  xMax: number;
  /** Number of lines at the top of the region that form the header. */
  headerLines: number;
}

const ENTITIES: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&apos;': "'",
};

export function decodeEntities(text: string): string {
  return text.replace(/&(?:amp|lt|gt|quot|apos);/g, (entity) => ENTITIES[entity] ?? entity);
}

/** Parses the XHTML that `pdftotext -bbox` writes. */
export function parseBboxXhtml(xhtml: string): Word[] {
  const pattern =
    /<word xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">(.*?)<\/word>/g;
  const words: Word[] = [];
  for (const match of xhtml.matchAll(pattern)) {
    const [, xMin, yMin, xMax, yMax, text] = match;
    words.push({
      xMin: Number(xMin),
      yMin: Number(yMin),
      xMax: Number(xMax),
      yMax: Number(yMax),
      text: decodeEntities(text ?? ''),
    });
  }
  return words;
}

export function readPageWords(pdfPath: string, page: number): Word[] {
  const xhtml = execFileSync(
    'pdftotext',
    ['-bbox', '-f', String(page), '-l', String(page), pdfPath, '-'],
    { encoding: 'utf8' },
  );
  return parseBboxXhtml(xhtml);
}

/** Groups words into lines: a word starts a new line when its top edge moves by 3 points or more. */
export function groupLines(words: Word[]): Word[][] {
  const sorted = [...words].sort((a, b) => a.yMin - b.yMin || a.xMin - b.xMin);
  const lines: Word[][] = [];
  let currentY = Number.NEGATIVE_INFINITY;
  for (const word of sorted) {
    const current = lines.at(-1);
    if (current && Math.abs(word.yMin - currentY) < 3) {
      current.push(word);
    } else {
      lines.push([word]);
      currentY = word.yMin;
    }
  }
  return lines.map((line) => line.sort((a, b) => a.xMin - b.xMin));
}

export function wordsInRegion(words: Word[], region: Region): Word[] {
  return words.filter(
    (w) =>
      w.yMin >= region.yMin &&
      w.yMin < region.yMax &&
      w.xMin >= region.xMin &&
      w.xMin < region.xMax,
  );
}

/** Splits a line into cells wherever the gap between neighboring words exceeds `gap` points. */
export function splitCells(line: Word[], gap: number): Word[][] {
  const cells: Word[][] = [];
  for (const word of line) {
    const current = cells.at(-1);
    const previous = current?.at(-1);
    if (current && previous && word.xMin - previous.xMax <= gap) {
      current.push(word);
    } else {
      cells.push([word]);
    }
  }
  return cells;
}

export function cellText(cell: Word[]): string {
  return cell.map((w) => w.text).join(' ');
}

function center(cell: Word[]): number {
  const first = cell[0];
  const last = cell.at(-1);
  if (!first || !last) {
    throw new Error('empty cell');
  }
  return (first.xMin + last.xMax) / 2;
}

export interface Column {
  header: string;
  center: number;
}

/** Reads the columns from the header lines at the top of a region. */
export function headerColumns(pages: Map<number, Word[]>, region: Region, gap = 6): Column[] {
  const lines = groupLines(wordsInRegion(pages.get(region.page) ?? [], region));
  const headerWords = lines.slice(0, region.headerLines).flat();
  return splitCells(
    headerWords.sort((a, b) => a.xMin - b.xMin),
    gap,
  ).map((cell) => ({ header: cellText(cell), center: center(cell) }));
}

/**
 * Extracts a numeric grid. Each data cell goes to the column whose center is nearest to the
 * cell's center. Every region skips its own header lines.
 */
export function extractGrid(
  pages: Map<number, Word[]>,
  regions: Region[],
  columns: Column[],
  gap = 6,
): string[][] {
  const grid: string[][] = [columns.map((c) => c.header)];
  for (const region of regions) {
    const lines = groupLines(wordsInRegion(pages.get(region.page) ?? [], region)).slice(
      region.headerLines,
    );
    for (const line of lines) {
      const row = columns.map(() => [] as string[]);
      for (const cell of splitCells(line, gap)) {
        const c = center(cell);
        let best = 0;
        columns.forEach((column, i) => {
          if (Math.abs(column.center - c) < Math.abs((columns[best]?.center ?? 0) - c)) {
            best = i;
          }
        });
        row[best]?.push(cellText(cell));
      }
      grid.push(row.map((parts) => parts.join(' ')));
    }
  }
  return grid;
}

/**
 * Extracts a text grid. Explicit column boundaries assign each word to a column, and a vertical
 * gap larger than `rowGap` points between lines starts a new row.
 */
export function extractTextGrid(
  words: Word[],
  region: Region,
  boundaries: number[],
  rowGap: number,
): string[][] {
  const lines = groupLines(wordsInRegion(words, region));
  const columnOf = (w: Word): number => boundaries.filter((b) => w.xMin >= b).length;
  const columns = boundaries.length + 1;
  const rows: string[][][] = [];
  let previousY = Number.NEGATIVE_INFINITY;
  lines.forEach((line, index) => {
    const y = line[0]?.yMin ?? 0;
    const startsRow = index < region.headerLines || index === region.headerLines;
    if (startsRow || y - previousY > rowGap) {
      rows.push(Array.from({ length: columns }, () => [] as string[]));
    }
    previousY = y;
    const row = rows.at(-1);
    for (const word of line) {
      row?.[columnOf(word)]?.push(word.text);
    }
  });
  return rows.map((row) => row.map((parts) => parts.join(' ')));
}

export function toCsv(grid: string[][]): string {
  const escape = (cell: string): string =>
    /[",\n\r]/.test(cell) ? `"${cell.replace(/"/g, '""')}"` : cell;
  return grid.map((row) => row.map(escape).join(',')).join('\n') + '\n';
}
