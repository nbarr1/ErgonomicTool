import { describe, expect, it } from 'vitest';
import { compareRuns, type RunRecord } from './compare.ts';
import { parseNumericCells } from './emit.ts';

function run(platform: string, arch: string, output: unknown): RunRecord {
  return { environment: { platform, arch, node: 'v22.22.0' }, output };
}

describe('parseNumericCells', () => {
  it('parses decimal cells and skips text cells', () => {
    const result = parseNumericCells([
      ['H (in)', 'HM'],
      ['10', '1.00'],
      [' 25 ', '.40'],
      ['>25', 'n/a'],
    ]);
    expect(result.cells).toEqual([
      { row: 2, column: 1, text: '10', value: 10 },
      { row: 2, column: 2, text: '1.00', value: 1 },
      { row: 3, column: 1, text: '25', value: 25 },
      { row: 3, column: 2, text: '.40', value: 0.4 },
    ]);
  });

  it('sums in row-major order', () => {
    // 0.1 + 0.2 + 0.3 in this order is 0.6000000000000001 in IEEE 754 double precision.
    const result = parseNumericCells([['0.1', '0.2'], ['0.3']]);
    expect(result.rowMajorSum).toBe(0.1 + 0.2 + 0.3);
    expect(result.rowMajorSum).not.toBe(0.6);
  });

  it('leaves zero out of the product', () => {
    expect(parseNumericCells([['0', '2', '3']]).rowMajorProduct).toBe(6);
  });
});

describe('compareRuns', () => {
  it('passes identical outputs from two operating systems and two architectures', () => {
    const output = [{ table: 't', value: 1 }];
    const result = compareRuns([run('linux', 'x64', output), run('darwin', 'arm64', output)]);
    expect(result.problems).toEqual([]);
  });

  it('fails when an output differs', () => {
    const result = compareRuns([
      run('linux', 'x64', [1]),
      run('darwin', 'arm64', [1]),
      run('win32', 'x64', [2]),
    ]);
    expect(result.problems).toEqual(['output from win32-x64 differs from linux-x64']);
  });

  it('fails when fewer than two architectures ran', () => {
    const result = compareRuns([run('linux', 'x64', [1]), run('win32', 'x64', [1])]);
    expect(result.problems).toEqual([
      'runs cover 1 processor architecture(s); at least 2 are required',
    ]);
  });

  it('fails when fewer than two operating systems ran', () => {
    const result = compareRuns([run('linux', 'x64', [1]), run('linux', 'arm64', [1])]);
    expect(result.problems).toEqual(['runs cover 1 operating system(s); at least 2 are required']);
  });

  it('fails with no runs', () => {
    expect(compareRuns([]).problems).toContain('no runs to compare');
  });
});
