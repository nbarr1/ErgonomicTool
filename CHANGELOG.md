# Changelog

This log has one entry for each milestone and one entry for each method version. Method versions are listed under the milestone that introduced them. Dates use the format "October 6, 2026."

## Milestone 1: sources and specifications (awaiting review)

Started October 6, 2026.

### Added

- The governing specification, stored unedited as `docs/build-prompt.md`.
- Repository scaffolding: README, contribution guide, changelog, EditorConfig, ESLint, Prettier, TypeScript configuration, and a continuous integration workflow.
- The decision log, open-question log, and source log.
- Draft method specifications for the Revised NIOSH Lifting Equation (`rnle`) and the BWC/OSU push/pull guidelines (`bwc-osu-push-pull`).
- Draft method specifications for DUET (`duet`) and the LM-MMH equations (`lm-mmh`), written from the papers the product owner supplied.
- Draft specifications for LiFFT (`lifft`) and the Shoulder Tool (`shoulder-tool`) that record everything their sources print and mark both methods as blocked, because the sources don't print the equations or values the calculation needs (OQ-180, OQ-200).
- A status document for the job demands analysis, which is blocked on its field list.
- Double transcriptions and reconciliations of every table in the two retrieved sources, with a check that enforces the reconciliation rules.
- Double transcriptions of the tables, equation terms, constants, and worked-example screenshots in the four supplied papers, made by two independent agents (D-116).
- A cross-platform determinism run in CI on Linux x64, macOS arm64, and Windows x64.
- The milestone 1 plan and report.
- Double transcriptions of the calculation cells in the authors' LiFFT, Shoulder Tool, and DUET Excel workbooks.
- Draft 2 of the LiFFT, Shoulder Tool, and DUET specifications, which take the formulas the papers don't print from the authors' workbooks (D-117), with an independent check of each one.

### Changed

- CI actions pinned to commit SHAs of their Node.js 24 releases.
- The product owner's answers recorded: reviewer, band map approver, permission to implement the sources, and deferrals (D-110 to D-113).
- Apache License 2.0 adopted for original code and documentation, with a `NOTICE` for third-party material (D-114).
- The LiFFT, DUET, Shoulder Tool, and LM-MMH papers recorded in the source log after the product owner supplied them.
- The status documents for LM-MMH, LiFFT, DUET, and the Shoulder Tool replaced by draft specifications.
- The recommended release order revised after the papers were read: DUET moves ahead of LM-MMH, and LiFFT and the Shoulder Tool wait for their missing equations (D-115).
- The product owner's answers to the RNLE and BWC/OSU questions, the transcription procedure, the stack, and first-release scope recorded (D-119 to D-125).

### Method versions

- `rnle` 1.0.0, October 14, 2026: specification approved (D-126). The method stays in draft until its validation report is signed in milestone 2.
- `bwc-osu-push-pull` 1.0.0, October 14, 2026: specification approved, without two-handed turning (D-122, D-126). The method stays in draft until its validation report is signed in milestone 2.
