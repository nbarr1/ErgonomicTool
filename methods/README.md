# Method folders

Each method has one folder here, named by its identifier from decision D-103 in the [decision log](../docs/decisions.md). The specification document for the method is at `docs/methods/<method-id>.md`. This folder holds the material that supports it.

```text
methods/<method-id>/
  transcription/   Two independent transcription passes of every source table, and their reconciliation
  data/            Data files with provenance (milestone 2, after the specification is approved)
  src/             Calculation code (milestone 2)
  test/            Tests, including published worked examples (milestone 2)
```

## Transcription files

Part 2 of the [build prompt](../docs/build-prompt.md) requires that every table be transcribed twice, in two independent passes, and that each difference be resolved against the source. Each `transcription/` folder holds these files:

- **`manifest.json`:** Lists each transcribed table with its source document, checksum, page, and table number, and describes how each pass was made.
- **`<table-id>.pass-a.csv` and `<table-id>.pass-b.csv`:** The two passes, stored exactly as transcribed. They are never edited after the comparison, so that the record of the comparison stays intact.
- **`<table-id>.reconciled.csv`:** The reconciled table. Where the passes agree, it holds the agreed value. Where they differ, it holds the value that the source shows.
- **`<table-id>.resolutions.json`:** One entry for each cell where the passes differ, with both values, the resolved value, and the evidence from the source.

The check `npm run check:transcriptions` enforces these rules:

1. The two passes and the reconciled table have the same number of rows, and each row has the same number of cells.
2. Where the passes agree, the reconciled cell equals the agreed value.
3. Where the passes differ, a resolution entry exists, its recorded pass values match the files, and its resolved value equals the reconciled cell.
4. No resolution entry exists for a cell where the passes agree.
5. Every table in the manifest has all four files, and every transcription file is listed in the manifest.

Cells are compared as text after removing leading and trailing spaces. No other normalization is applied, so "1.0" and "1.00" count as different and must be resolved against the source.
