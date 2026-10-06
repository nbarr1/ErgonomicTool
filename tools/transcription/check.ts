import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseCsv } from './csv.ts';

/** One cell where pass A and pass B differ, and how it was resolved against the source. */
export interface Resolution {
  /** 1-based row number, counting the header row. */
  row: number;
  /** 1-based column number. */
  column: number;
  passA: string;
  passB: string;
  resolved: string;
  /** What the source shows, with its locator. */
  evidence: string;
}

export interface PassDescription {
  method: string;
  date: string;
  by: string;
}

export interface ManifestTable {
  id: string;
  title: string;
  locator: string;
  passA: PassDescription;
  passB: PassDescription;
  notes?: string;
}

export interface Manifest {
  method: string;
  source: { title: string; file: string; sha256: string };
  tables: ManifestTable[];
}

export interface CellDifference {
  row: number;
  column: number;
  passA: string;
  passB: string;
}

const FILE_SUFFIXES = ['.pass-a.csv', '.pass-b.csv', '.reconciled.csv', '.resolutions.json'];

/** Cells are compared as text after removing leading and trailing spaces, and nothing else. */
export function normalizeCell(cell: string): string {
  return cell.trim();
}

/** Lists every cell where two grids differ. The grids must have the same shape. */
export function diffGrids(a: string[][], b: string[][]): CellDifference[] {
  const differences: CellDifference[] = [];
  a.forEach((rowA, r) => {
    const rowB = b[r] ?? [];
    rowA.forEach((cellA, c) => {
      const cellB = rowB[c] ?? '';
      if (normalizeCell(cellA) !== normalizeCell(cellB)) {
        differences.push({ row: r + 1, column: c + 1, passA: cellA, passB: cellB });
      }
    });
  });
  return differences;
}

/** Describes every shape mismatch between two grids. An empty list means the shapes match. */
export function shapeProblems(
  nameA: string,
  a: string[][],
  nameB: string,
  b: string[][],
): string[] {
  const problems: string[] = [];
  if (a.length !== b.length) {
    problems.push(`${nameA} has ${a.length} rows but ${nameB} has ${b.length} rows`);
    return problems;
  }
  a.forEach((rowA, r) => {
    const lengthB = b[r]?.length ?? 0;
    if (rowA.length !== lengthB) {
      problems.push(
        `row ${r + 1}: ${nameA} has ${rowA.length} cells but ${nameB} has ${lengthB} cells`,
      );
    }
  });
  return problems;
}

/**
 * Checks one transcribed table against the rules in methods/README.md.
 * Returns a list of problems; an empty list means the table passes.
 */
export function checkTable(
  passA: string[][],
  passB: string[][],
  reconciled: string[][],
  resolutions: Resolution[],
): string[] {
  const problems = [
    ...shapeProblems('pass A', passA, 'pass B', passB),
    ...shapeProblems('pass A', passA, 'the reconciled table', reconciled),
  ];
  if (problems.length > 0) {
    return problems;
  }

  const byCell = new Map<string, Resolution>();
  for (const resolution of resolutions) {
    const key = `${resolution.row},${resolution.column}`;
    if (byCell.has(key)) {
      problems.push(`row ${resolution.row}, column ${resolution.column}: duplicate resolution`);
    }
    byCell.set(key, resolution);
  }

  passA.forEach((rowA, r) => {
    rowA.forEach((cellA, c) => {
      const cellB = passB[r]?.[c] ?? '';
      const cellR = reconciled[r]?.[c] ?? '';
      const where = `row ${r + 1}, column ${c + 1}`;
      const key = `${r + 1},${c + 1}`;
      const resolution = byCell.get(key);
      byCell.delete(key);

      if (normalizeCell(cellA) === normalizeCell(cellB)) {
        if (resolution) {
          problems.push(`${where}: the passes agree, so no resolution may be recorded`);
        }
        if (normalizeCell(cellR) !== normalizeCell(cellA)) {
          problems.push(
            `${where}: the passes agree on "${cellA}" but the reconciled table has "${cellR}"`,
          );
        }
        return;
      }

      if (!resolution) {
        problems.push(
          `${where}: pass A has "${cellA}" and pass B has "${cellB}", with no resolution`,
        );
        return;
      }
      if (
        normalizeCell(resolution.passA) !== normalizeCell(cellA) ||
        normalizeCell(resolution.passB) !== normalizeCell(cellB)
      ) {
        problems.push(`${where}: the resolution records pass values that don't match the files`);
      }
      if (normalizeCell(resolution.resolved) !== normalizeCell(cellR)) {
        problems.push(
          `${where}: the resolution says "${resolution.resolved}" but the reconciled table has "${cellR}"`,
        );
      }
      if (resolution.evidence.trim().length === 0) {
        problems.push(`${where}: the resolution has no evidence`);
      }
    });
  });

  for (const leftover of byCell.values()) {
    problems.push(
      `row ${leftover.row}, column ${leftover.column}: the resolution refers to a cell outside the table`,
    );
  }
  return problems;
}

function readJson(path: string): unknown {
  return JSON.parse(readFileSync(path, 'utf8')) as unknown;
}

/** Checks every table in one method's transcription folder. Returns problems keyed by file. */
export function checkTranscriptionFolder(folder: string): string[] {
  const problems: string[] = [];
  const manifestPath = join(folder, 'manifest.json');
  if (!existsSync(manifestPath)) {
    return [`${folder}: manifest.json is missing`];
  }
  const manifest = readJson(manifestPath) as Manifest;
  const listed = new Set<string>();

  for (const table of manifest.tables) {
    for (const suffix of FILE_SUFFIXES) {
      listed.add(`${table.id}${suffix}`);
    }
    const paths = FILE_SUFFIXES.map((suffix) => join(folder, `${table.id}${suffix}`));
    const missing = paths.filter((path) => !existsSync(path));
    if (missing.length > 0) {
      problems.push(...missing.map((path) => `${path}: file is missing`));
      continue;
    }
    const [aPath, bPath, rPath, resPath] = paths as [string, string, string, string];
    const tableProblems = checkTable(
      parseCsv(readFileSync(aPath, 'utf8')),
      parseCsv(readFileSync(bPath, 'utf8')),
      parseCsv(readFileSync(rPath, 'utf8')),
      readJson(resPath) as Resolution[],
    );
    problems.push(...tableProblems.map((problem) => `${join(folder, table.id)}: ${problem}`));
  }

  for (const file of readdirSync(folder)) {
    if (file === 'manifest.json' || file === 'README.md') {
      continue;
    }
    if (!listed.has(file)) {
      problems.push(`${join(folder, file)}: file isn't listed in the manifest`);
    }
  }
  return problems;
}

/** Finds every methods/<method-id>/transcription folder under the given root. */
export function findTranscriptionFolders(methodsRoot: string): string[] {
  return readdirSync(methodsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => join(methodsRoot, entry.name, 'transcription'))
    .filter((path) => existsSync(path))
    .sort();
}
