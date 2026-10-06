/**
 * Pass A extraction for the RNLE tables in NIOSH Publication 94-110 (revised September 2021).
 *
 * Usage: node tools/transcription/extract-rnle.ts <path-to-94-110_2021-revision.pdf> <output-folder>
 *
 * The script refuses to run unless the PDF's SHA-256 checksum matches the one in docs/sources.md.
 * The regions below are layout parameters taken from the PDF's word coordinates, in points from
 * the top-left corner of the page. PDF page numbers are the printed page number plus 16.
 */
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { argv, exit, stderr, stdout } from 'node:process';
import {
  type Column,
  type Region,
  type Word,
  cellText,
  extractGrid,
  extractTextGrid,
  groupLines,
  headerColumns,
  readPageWords,
  splitCells,
  toCsv,
  wordsInRegion,
} from './extract-pdf-table.ts';

const EXPECTED_SHA256 = 'b25de48aeea47c5941c8eb2013be03c9c9fcf4c26a2ccd39486fae530a59c378';
const US = { xMin: 150, xMax: 300 };
const METRIC = { xMin: 300, xMax: 460 };

const [pdfPath, outDir] = argv.slice(2);
if (pdfPath === undefined || outDir === undefined) {
  stderr.write('Usage: node tools/transcription/extract-rnle.ts <pdf> <output-folder>\n');
  exit(2);
}

const checksum = createHash('sha256').update(readFileSync(pdfPath)).digest('hex');
if (checksum !== EXPECTED_SHA256) {
  stderr.write(`Checksum mismatch: expected ${EXPECTED_SHA256}, got ${checksum}\n`);
  exit(1);
}

const pages = new Map<number, Word[]>();
for (const page of [23, 24, 25, 26, 27, 29, 31, 33, 34]) {
  pages.set(page, readPageWords(pdfPath, page));
}

function write(id: string, grid: string[][]): void {
  const path = join(outDir ?? '.', `${id}.pass-a.csv`);
  writeFileSync(path, toCsv(grid));
  stdout.write(`wrote ${path} (${grid.length} rows)\n`);
}

function simple(id: string, regions: Region[]): void {
  const [first] = regions;
  if (!first) {
    throw new Error(`no regions for ${id}`);
  }
  write(id, extractGrid(pages, regions, headerColumns(pages, first)));
}

// Unnumbered table of the load constant and multiplier formulas under section 1.3, printed page 7.
// Column boundaries fall between the names (from x = 119), the symbols (from x = 243), the metric
// formulas (from x = 285), and the U.S. customary formulas (from x = 398). Each line is one row.
write(
  'table-0-multiplier-formulas',
  extractTextGrid(
    pages.get(23) ?? [],
    { page: 23, yMin: 265, yMax: 410, xMin: 100, xMax: 500, headerLines: 1 },
    [230, 280, 390],
    10,
  ),
);

// Unnumbered table of equations for estimating H, section 1.3.1.1, printed page 8. The metric
// column starts at x = 144 and the U.S. customary column at x = 313. Each line is one row.
write(
  'table-h-estimation',
  extractTextGrid(
    pages.get(24) ?? [],
    { page: 24, yMin: 175, yMax: 230, xMin: 100, xMax: 500, headerLines: 1 },
    [300],
    10,
  ),
);

// Table 1: Horizontal Multiplier, printed pages 8 and 9.
const t1 = [
  { page: 24, yMin: 515, yMax: 688, headerLines: 1 },
  { page: 25, yMin: 125, yMax: 370, headerLines: 1 },
];
simple(
  'table-1-horizontal-multiplier-us',
  t1.map((r) => ({ ...r, ...US })),
);
simple(
  'table-1-horizontal-multiplier-metric',
  t1.map((r) => ({ ...r, ...METRIC })),
);

// Table 2: Vertical Multiplier, printed page 10.
const t2 = [{ page: 26, yMin: 125, yMax: 500, headerLines: 1 }];
simple(
  'table-2-vertical-multiplier-us',
  t2.map((r) => ({ ...r, ...US })),
);
simple(
  'table-2-vertical-multiplier-metric',
  t2.map((r) => ({ ...r, ...METRIC })),
);

// Table 3: Distance Multiplier, printed page 11.
const t3 = [{ page: 27, yMin: 358, yMax: 630, headerLines: 1 }];
simple(
  'table-3-distance-multiplier-us',
  t3.map((r) => ({ ...r, ...US })),
);
simple(
  'table-3-distance-multiplier-metric',
  t3.map((r) => ({ ...r, ...METRIC })),
);

// Table 4: Asymmetric Multiplier, printed page 13.
simple('table-4-asymmetric-multiplier', [
  { page: 29, yMin: 125, yMax: 320, xMin: 200, xMax: 420, headerLines: 1 },
]);

// Table 5: Frequency Multiplier Table (FM), printed page 15. The header spans five lines: the
// frequency label on the left, a "Work Duration" banner, three duration headings, and six
// V<30 / V≥30 subheadings. Each data column is headed by its duration heading and subheading.
{
  const headerRegion: Region = {
    page: 31,
    yMin: 220,
    yMax: 280,
    xMin: 100,
    xMax: 500,
    headerLines: 5,
  };
  const headerLines = groupLines(wordsInRegion(pages.get(31) ?? [], headerRegion));
  const labelWords = headerLines.flat().filter((w) => w.xMin < 190);
  const durationLine = headerLines[3]?.filter((w) => w.xMin >= 190) ?? [];
  const subLine = headerLines[4] ?? [];
  const centerOf = (cell: Word[]): number => ((cell[0]?.xMin ?? 0) + (cell.at(-1)?.xMax ?? 0)) / 2;
  const durations = splitCells(durationLine, 6).map((cell) => ({
    text: cellText(cell),
    center: centerOf(cell),
  }));
  const columns: Column[] = [
    {
      header: labelWords.map((w) => w.text).join(' '),
      center: centerOf(labelWords.sort((a, b) => a.xMin - b.xMin)),
    },
  ];
  for (const cell of splitCells(subLine, 6)) {
    const c = centerOf(cell);
    const nearest = [...durations].sort(
      (a, b) => Math.abs(a.center - c) - Math.abs(b.center - c),
    )[0];
    columns.push({ header: `${nearest?.text ?? ''} ${cellText(cell)}`, center: c });
  }
  write(
    'table-5-frequency-multiplier',
    extractGrid(
      pages,
      [{ page: 31, yMin: 280, yMax: 610, xMin: 100, xMax: 500, headerLines: 0 }],
      columns,
    ),
  );
}

// Table 6: Hand-to-Container Coupling Classification, printed page 17. Column boundaries fall
// between the row labels (from x = 112), Good (from x = 211), Fair (from x = 310), and Poor
// (from x = 409). Rows are separated by a vertical gap of more than 20 points.
write(
  'table-6-coupling-classification',
  extractTextGrid(
    pages.get(33) ?? [],
    { page: 33, yMin: 120, yMax: 310, xMin: 100, xMax: 500, headerLines: 1 },
    [205, 305, 405],
    20,
  ),
);

// Table 7: Coupling Multiplier, printed page 18. The header is the "Coupling Type" line; the
// "Coupling Multiplier" banner above it isn't part of the column headings.
simple('table-7-coupling-multiplier', [
  { page: 34, yMin: 150, yMax: 220, xMin: 100, xMax: 500, headerLines: 1 },
]);
