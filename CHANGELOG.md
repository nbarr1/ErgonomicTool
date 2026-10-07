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

### Changed

- CI actions pinned to commit SHAs of their Node.js 24 releases.
- The product owner's answers recorded: reviewer, band map approver, permission to implement the sources, and deferrals (D-110 to D-113).
- Apache License 2.0 adopted for original code and documentation, with a `NOTICE` for third-party material (D-114).
- The LiFFT, DUET, Shoulder Tool, and LM-MMH papers recorded in the source log after the product owner supplied them.
- The status documents for LM-MMH, LiFFT, DUET, and the Shoulder Tool replaced by draft specifications.
- The recommended release order revised after the papers were read: DUET moves ahead of LM-MMH, and LiFFT and the Shoulder Tool wait for their missing equations (D-115).

### Method versions

No method version exists yet. Each method specification is a draft until the product owner and the reviewer approve it.
