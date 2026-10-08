import { readdirSync, readFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { parseCsv } from '../transcription/csv.ts';
import { findTranscriptionFolders } from '../transcription/check.ts';

/** A decimal number as written in a source table, such as "0.85", "-1", or "1.5e-3". */
const DECIMAL = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/;

export interface ParsedCell {
  row: number;
  column: number;
  text: string;
  value: number;
}

export interface TableOutput {
  /** Path relative to the repository root, with forward slashes on every platform. */
  table: string;
  cells: ParsedCell[];
  /** Sum of every numeric cell in row-major order, the fixed order of operations. */
  rowMajorSum: number;
  /** Product of every nonzero numeric cell in row-major order. */
  rowMajorProduct: number;
}

/** Parses every numeric cell of one grid and computes order-fixed aggregates. */
export function parseNumericCells(grid: string[][]): Omit<TableOutput, 'table'> {
  const cells: ParsedCell[] = [];
  let rowMajorSum = 0;
  let rowMajorProduct = 1;
  grid.forEach((row, r) => {
    row.forEach((raw, c) => {
      const text = raw.trim();
      if (!DECIMAL.test(text)) {
        return;
      }
      const value = Number(text);
      cells.push({ row: r + 1, column: c + 1, text, value });
      rowMajorSum += value;
      if (value !== 0) {
        rowMajorProduct *= value;
      }
    });
  });
  return { cells, rowMajorSum, rowMajorProduct };
}

/** Builds the determinism output for every reconciled table under the repository root. */
export function emit(repoRoot: string): TableOutput[] {
  const outputs: TableOutput[] = [];
  for (const folder of findTranscriptionFolders(join(repoRoot, 'methods'))) {
    const files = readdirSync(folder)
      .filter((name) => name.endsWith('.reconciled.csv'))
      .sort();
    for (const file of files) {
      const path = join(folder, file);
      const grid = parseCsv(readFileSync(path, 'utf8'));
      outputs.push({
        table: relative(repoRoot, path).split(sep).join('/'),
        ...parseNumericCells(grid),
      });
    }
  }
  return outputs;
}
