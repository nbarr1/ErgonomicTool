import { describe, expect, it } from 'vitest';
import {
  type Word,
  columnCells,
  extractGrid,
  extractTextGrid,
  groupLines,
  headerColumns,
  parseBboxXhtml,
  splitCells,
  toCsv,
} from './extract-pdf-table.ts';

function word(text: string, xMin: number, yMin: number, width = 10): Word {
  return { text, xMin, yMin, xMax: xMin + width, yMax: yMin + 12 };
}

describe('parseBboxXhtml', () => {
  it('reads word boxes and decodes entities', () => {
    const xhtml =
      '<word xMin="1.5" yMin="2" xMax="3" yMax="4">&gt;25</word>\n' +
      '<word xMin="5" yMin="2" xMax="6" yMax="4">V&lt;30</word>';
    expect(parseBboxXhtml(xhtml)).toEqual([
      { xMin: 1.5, yMin: 2, xMax: 3, yMax: 4, text: '>25' },
      { xMin: 5, yMin: 2, xMax: 6, yMax: 4, text: 'V<30' },
    ]);
  });
});

describe('groupLines and splitCells', () => {
  it('groups words within 3 points vertically and orders them left to right', () => {
    const lines = groupLines([word('b', 50, 101), word('a', 10, 100), word('c', 10, 120)]);
    expect(lines.map((line) => line.map((w) => w.text))).toEqual([['a', 'b'], ['c']]);
  });

  it('splits cells at gaps wider than the threshold', () => {
    const cells = splitCells([word('≤', 10, 0, 5), word('10', 17, 0), word('1.00', 60, 0)], 6);
    expect(cells.map((cell) => cell.map((w) => w.text))).toEqual([['≤', '10'], ['1.00']]);
  });
});

describe('extractGrid', () => {
  it('assigns cells to the nearest column and leaves missing cells empty', () => {
    const words = [
      word('H', 10, 0, 5),
      word('cm', 17, 0),
      word('HM', 60, 0),
      word('28', 12, 20),
      word('.89', 62, 20),
      word('.40', 62, 40),
    ];
    const pages = new Map([[1, words]]);
    const region = { page: 1, yMin: 0, yMax: 100, xMin: 0, xMax: 100, headerLines: 1 };
    const grid = extractGrid(pages, [region], headerColumns(pages, region));
    expect(grid).toEqual([
      ['H cm', 'HM'],
      ['28', '.89'],
      ['', '.40'],
    ]);
  });
});

describe('extractTextGrid', () => {
  it('joins wrapped lines within a row and starts a new row after a large gap', () => {
    const words = [
      word('Good', 50, 0),
      word('Boxes', 0, 20),
      word('Handles', 50, 20),
      word('or', 50, 33),
      word('Bags', 0, 70),
      word('Grip', 50, 70),
    ];
    const region = { page: 1, yMin: 0, yMax: 100, xMin: 0, xMax: 100, headerLines: 1 };
    expect(extractTextGrid(words, region, [40], 20)).toEqual([
      ['', 'Good'],
      ['Boxes', 'Handles or'],
      ['Bags', 'Grip'],
    ]);
  });
});

describe('toCsv', () => {
  it('quotes cells that contain commas, quotes, or line breaks', () => {
    expect(toCsv([['a,b', 'say "x"', 'plain']])).toBe('"a,b","say ""x""",plain\n');
  });
});

describe('columnCells', () => {
  it('joins words per column in reading order across lines', () => {
    const words = [
      word('protected', 60, 12),
      word('Most', 50, 0),
      word('Action', 0, 6),
      word('Green', 70, 0),
    ];
    expect(columnCells(words, [40])).toEqual(['Action', 'Most Green protected']);
  });
});
