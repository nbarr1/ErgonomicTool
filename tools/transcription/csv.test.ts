import { describe, expect, it } from 'vitest';
import { parseCsv } from './csv.ts';

describe('parseCsv', () => {
  it('parses plain fields and LF line endings', () => {
    expect(parseCsv('a,b\n1,2\n')).toEqual([
      ['a', 'b'],
      ['1', '2'],
    ]);
  });

  it('parses CRLF line endings and a final record without a line ending', () => {
    expect(parseCsv('a,b\r\n1,2')).toEqual([
      ['a', 'b'],
      ['1', '2'],
    ]);
  });

  it('keeps cells exactly as written, including spaces and trailing zeros', () => {
    expect(parseCsv(' 1.00 ,0.5\n')).toEqual([[' 1.00 ', '0.5']]);
  });

  it('parses quoted fields with commas, line breaks, and doubled quotes', () => {
    expect(parseCsv('"a,b","c\nd","say ""hi"""\n')).toEqual([['a,b', 'c\nd', 'say "hi"']]);
  });

  it('keeps empty fields', () => {
    expect(parseCsv(',x,\n')).toEqual([['', 'x', '']]);
  });

  it('rejects an unterminated quoted field', () => {
    expect(() => parseCsv('"abc\n')).toThrow(/Unterminated/);
  });

  it('rejects a quote inside an unquoted field', () => {
    expect(() => parseCsv('ab"c\n')).toThrow(/Unexpected quote/);
  });
});
