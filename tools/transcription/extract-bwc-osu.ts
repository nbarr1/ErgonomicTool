/**
 * Pass A extraction for the BWC/OSU push/pull guideline tables.
 *
 * Usage: node tools/transcription/extract-bwc-osu.ts <path-to-PushPullGuidelines.pdf> <output-folder>
 *
 * The script refuses to run unless the PDF's SHA-256 checksum matches the one in docs/sources.md.
 * The regions and column boundaries below are layout parameters taken from the PDF's word
 * coordinates, in points from the top-left corner of the page. The Action cell is merged across
 * rows in the source; by the convention recorded in the manifest, it is written on every row.
 */
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { argv, exit, stderr, stdout } from 'node:process';
import { type Word, columnCells, groupLines, readPageWords, toCsv } from './extract-pdf-table.ts';

const EXPECTED_SHA256 = '4b113c40e672d7b5d025251f8e04860445f6444516a8f53d4ace67eb13981a93';

const [pdfPath, outDir] = argv.slice(2);
if (pdfPath === undefined || outDir === undefined) {
  stderr.write('Usage: node tools/transcription/extract-bwc-osu.ts <pdf> <output-folder>\n');
  exit(2);
}

const checksum = createHash('sha256').update(readFileSync(pdfPath)).digest('hex');
if (checksum !== EXPECTED_SHA256) {
  stderr.write(`Checksum mismatch: expected ${EXPECTED_SHA256}, got ${checksum}\n`);
  exit(1);
}

interface Block {
  yMin: number;
  yMax: number;
}

const inRange = (words: Word[], yMin: number, yMax: number): Word[] =>
  words.filter((w) => w.yMin >= yMin && w.yMin < yMax);

/**
 * Builds one table: the header from the header band, then one row per hand height in each block.
 * The first boundary separates the Action column from the rest.
 */
function table(words: Word[], header: Block, blocks: Block[], boundaries: number[]): string[][] {
  const [actionLimit] = boundaries;
  if (actionLimit === undefined) {
    throw new Error('no boundaries');
  }
  const grid: string[][] = [columnCells(inRange(words, header.yMin, header.yMax), boundaries)];
  for (const block of blocks) {
    const blockWords = inRange(words, block.yMin, block.yMax);
    const action = blockWords
      .filter((w) => w.xMin < actionLimit)
      .sort((a, b) => a.yMin - b.yMin || a.xMin - b.xMin)
      .map((w) => w.text)
      .join(' ');
    for (const line of groupLines(blockWords.filter((w) => w.xMin >= actionLimit))) {
      const cells = columnCells(line, boundaries);
      grid.push([action, ...cells.slice(1)]);
    }
  }
  return grid;
}

function write(id: string, grid: string[][]): void {
  const path = join(outDir ?? '.', `${id}.pass-a.csv`);
  writeFileSync(path, toCsv(grid));
  stdout.write(`wrote ${path} (${grid.length} rows)\n`);
}

const page3 = readPageWords(pdfPath, 3);
const page4 = readPageWords(pdfPath, 4);

// Page 3: straight pushing and pulling with two hands (limits in lbs.).
write(
  'two-hand-straight',
  table(
    page3,
    { yMin: 85, yMax: 120 },
    [
      { yMin: 120, yMax: 323 },
      { yMin: 323, yMax: 530 },
    ],
    [100, 200, 320, 460],
  ),
);

// Page 4, upper table: turning pushing and pulling with two hands (limits in ft-lbs.).
write(
  'two-hand-turning',
  table(page4, { yMin: 85, yMax: 120 }, [{ yMin: 120, yMax: 325 }], [100, 200, 320, 460]),
);

// Page 4, lower table: straight and turning pulling with one hand (limits in lbs.).
write(
  'one-hand-pull',
  table(page4, { yMin: 450, yMax: 476 }, [{ yMin: 476, yMax: 680 }], [90, 195, 320, 450]),
);
