import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import {
  checkTable,
  checkTranscriptionFolder,
  diffGrids,
  findTranscriptionFolders,
  type Manifest,
  type Resolution,
} from './check.ts';

const header = ['H (in)', 'HM'];

describe('diffGrids', () => {
  it('reports differing cells with 1-based positions', () => {
    const a = [header, ['10', '1.00']];
    const b = [header, ['10', '1.0']];
    expect(diffGrids(a, b)).toEqual([{ row: 2, column: 2, passA: '1.00', passB: '1.0' }]);
  });

  it('ignores leading and trailing spaces only', () => {
    expect(diffGrids([[' 0.85 ']], [['0.85']])).toEqual([]);
    expect(diffGrids([['0 .85']], [['0.85']])).toHaveLength(1);
  });
});

describe('checkTable', () => {
  it('passes when the passes agree and the reconciled table matches', () => {
    const grid = [header, ['10', '1.00']];
    expect(checkTable(grid, grid, grid, [])).toEqual([]);
  });

  it('fails when the passes have different shapes', () => {
    const a = [header, ['10', '1.00']];
    const b = [header];
    expect(checkTable(a, b, a, [])[0]).toMatch(/2 rows but pass B has 1 rows/);
  });

  it('fails when a row has a different number of cells', () => {
    const a = [header, ['10', '1.00']];
    const b = [header, ['10']];
    expect(checkTable(a, b, a, [])[0]).toMatch(/row 2: pass A has 2 cells but pass B has 1/);
  });

  it('fails when the passes agree but the reconciled table differs', () => {
    const grid = [header, ['10', '1.00']];
    const reconciled = [header, ['10', '0.99']];
    expect(checkTable(grid, grid, reconciled, [])).toEqual([
      'row 2, column 2: the passes agree on "1.00" but the reconciled table has "0.99"',
    ]);
  });

  it('fails when the passes differ and no resolution exists', () => {
    const a = [header, ['10', '1.00']];
    const b = [header, ['10', '1.0']];
    expect(checkTable(a, b, a, [])).toEqual([
      'row 2, column 2: pass A has "1.00" and pass B has "1.0", with no resolution',
    ]);
  });

  it('passes when every difference has a matching resolution with evidence', () => {
    const a = [header, ['10', '1.00']];
    const b = [header, ['10', '1.0']];
    const resolutions: Resolution[] = [
      { row: 2, column: 2, passA: '1.00', passB: '1.0', resolved: '1.00', evidence: 'Table 1' },
    ];
    expect(checkTable(a, b, a, resolutions)).toEqual([]);
  });

  it('fails when the resolution disagrees with the reconciled table', () => {
    const a = [header, ['10', '1.00']];
    const b = [header, ['10', '1.0']];
    const resolutions: Resolution[] = [
      { row: 2, column: 2, passA: '1.00', passB: '1.0', resolved: '1.0', evidence: 'Table 1' },
    ];
    expect(checkTable(a, b, a, resolutions)).toEqual([
      'row 2, column 2: the resolution says "1.0" but the reconciled table has "1.00"',
    ]);
  });

  it('fails when the resolution records stale pass values', () => {
    const a = [header, ['10', '1.00']];
    const b = [header, ['10', '1.0']];
    const resolutions: Resolution[] = [
      { row: 2, column: 2, passA: '0.99', passB: '1.0', resolved: '1.00', evidence: 'Table 1' },
    ];
    expect(checkTable(a, b, a, resolutions)).toEqual([
      "row 2, column 2: the resolution records pass values that don't match the files",
    ]);
  });

  it('fails when a resolution has no evidence', () => {
    const a = [header, ['10', '1.00']];
    const b = [header, ['10', '1.0']];
    const resolutions: Resolution[] = [
      { row: 2, column: 2, passA: '1.00', passB: '1.0', resolved: '1.00', evidence: ' ' },
    ];
    expect(checkTable(a, b, a, resolutions)).toEqual([
      'row 2, column 2: the resolution has no evidence',
    ]);
  });

  it('fails when a resolution is recorded for a cell where the passes agree', () => {
    const grid = [header, ['10', '1.00']];
    const resolutions: Resolution[] = [
      { row: 2, column: 1, passA: '10', passB: '10', resolved: '10', evidence: 'Table 1' },
    ];
    expect(checkTable(grid, grid, grid, resolutions)).toEqual([
      'row 2, column 1: the passes agree, so no resolution may be recorded',
    ]);
  });

  it('fails when a resolution refers to a cell outside the table', () => {
    const grid = [header];
    const resolutions: Resolution[] = [
      { row: 5, column: 1, passA: 'x', passB: 'y', resolved: 'x', evidence: 'Table 1' },
    ];
    expect(checkTable(grid, grid, grid, resolutions)).toEqual([
      'row 5, column 1: the resolution refers to a cell outside the table',
    ]);
  });

  it('fails on duplicate resolutions for one cell', () => {
    const a = [header, ['10', '1.00']];
    const b = [header, ['10', '1.0']];
    const resolution: Resolution = {
      row: 2,
      column: 2,
      passA: '1.00',
      passB: '1.0',
      resolved: '1.00',
      evidence: 'Table 1',
    };
    expect(checkTable(a, b, a, [resolution, resolution])).toEqual([
      'row 2, column 2: duplicate resolution',
    ]);
  });
});

describe('checkTranscriptionFolder', () => {
  let root = '';

  afterEach(() => {
    if (root) {
      rmSync(root, { recursive: true, force: true });
    }
  });

  function makeFolder(files: Record<string, string>): string {
    root = mkdtempSync(join(tmpdir(), 'transcription-'));
    const folder = join(root, 'example-method', 'transcription');
    mkdirSync(folder, { recursive: true });
    for (const [name, content] of Object.entries(files)) {
      writeFileSync(join(folder, name), content);
    }
    return folder;
  }

  const manifest: Manifest = {
    method: 'example-method',
    source: {
      title: 'Example',
      file: 'https://example.invalid/source.pdf',
      sha256: '0'.repeat(64),
    },
    tables: [
      {
        id: 'table-1',
        title: 'Table 1',
        locator: 'Example, Table 1, page 1',
        passA: { method: 'machine extraction', date: '2026-10-06', by: 'test' },
        passB: { method: 'manual reading', date: '2026-10-06', by: 'test' },
      },
    ],
  };

  it('passes a complete, consistent folder', () => {
    const folder = makeFolder({
      'manifest.json': JSON.stringify(manifest),
      'table-1.pass-a.csv': 'a,b\n1,2\n',
      'table-1.pass-b.csv': 'a,b\n1,2\n',
      'table-1.reconciled.csv': 'a,b\n1,2\n',
      'table-1.resolutions.json': '[]',
    });
    expect(checkTranscriptionFolder(folder)).toEqual([]);
    expect(findTranscriptionFolders(root)).toEqual([folder]);
  });

  it('reports missing files and unlisted files', () => {
    const folder = makeFolder({
      'manifest.json': JSON.stringify(manifest),
      'table-1.pass-a.csv': 'a,b\n1,2\n',
      'table-2.pass-a.csv': 'a,b\n1,2\n',
    });
    const problems = checkTranscriptionFolder(folder);
    expect(problems.filter((p) => p.endsWith('file is missing'))).toHaveLength(3);
    expect(problems.filter((p) => p.includes("isn't listed"))).toHaveLength(1);
  });

  it('reports a missing manifest', () => {
    const folder = makeFolder({});
    expect(checkTranscriptionFolder(folder)).toEqual([`${folder}: manifest.json is missing`]);
  });
});
