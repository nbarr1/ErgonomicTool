/**
 * Minimal RFC 4180 CSV parser for transcription files.
 *
 * Fields may be quoted with double quotes, and a doubled quote inside a quoted field is a literal
 * quote. Records end with LF or CRLF. A final line ending is optional. Cells are returned exactly
 * as written: no trimming, number parsing, or other normalization happens here.
 */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let inQuotes = false;
  let fieldStarted = false;
  let i = 0;

  const endField = (): void => {
    row.push(field);
    field = '';
    fieldStarted = false;
  };
  const endRow = (): void => {
    endField();
    rows.push(row);
    row = [];
  };

  while (i < text.length) {
    const ch = text.charAt(i);
    if (inQuotes) {
      if (ch === '"') {
        if (text.charAt(i + 1) === '"') {
          field += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i += 1;
        continue;
      }
      field += ch;
      i += 1;
      continue;
    }
    if (ch === '"') {
      if (fieldStarted || field.length > 0) {
        throw new Error(`Unexpected quote inside an unquoted field at offset ${i}`);
      }
      inQuotes = true;
      fieldStarted = true;
      i += 1;
      continue;
    }
    if (ch === ',') {
      endField();
      i += 1;
      continue;
    }
    if (ch === '\r' && text.charAt(i + 1) === '\n') {
      endRow();
      i += 2;
      continue;
    }
    if (ch === '\n') {
      endRow();
      i += 1;
      continue;
    }
    field += ch;
    fieldStarted = true;
    i += 1;
  }

  if (inQuotes) {
    throw new Error('Unterminated quoted field at end of input');
  }
  // A final record without a trailing line ending.
  if (fieldStarted || field.length > 0 || row.length > 0) {
    endRow();
  }
  return rows;
}
