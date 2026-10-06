# Milestone 1 report: sources and specifications

- **Date:** October 6, 2026
- **Branch:** `claude/pensive-maxwell-mqwopv`
- **Status:** Work complete for every method whose source the build could retrieve. The milestone can't exit yet: its exit criterion is approval by the product owner and a reviewer, and no reviewer is named (OQ-008).

## Summary

| Method              | Result                                                                                                                                                                                               |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rnle`              | [Draft specification](../methods/rnle.md). Nine source tables (Tables 1 to 7 and two unnumbered tables), stored as 12 files, transcribed twice and reconciled. 16 open questions (OQ-110 to OQ-125). |
| `bwc-osu-push-pull` | [Draft specification](../methods/bwc-osu-push-pull.md). Three tables transcribed twice and reconciled. 6 open questions (OQ-130 to OQ-135).                                                          |
| `lm-mmh`            | [Blocked](../methods/lm-mmh.md). Open-access paper, but the publisher's site refused automated retrieval (OQ-103).                                                                                   |
| `lifft`             | [Blocked](../methods/lifft.md). Subscription paper (OQ-102).                                                                                                                                         |
| `duet`              | [Blocked](../methods/duet.md). Subscription paper (OQ-102).                                                                                                                                          |
| `shoulder-tool`     | [Blocked](../methods/shoulder-tool.md). Subscription paper (OQ-102).                                                                                                                                 |
| `jda`               | [Partly specified](../methods/jda.md). Section names and lifecycle recorded. Field list needs a decision (OQ-006, OQ-142).                                                                           |

## What is complete

- The build prompt is stored unedited as [`docs/build-prompt.md`](../build-prompt.md), with the supporting files it lists.
- Every Tier 1 primary source was attempted and recorded in the [source log](../sources.md), with a reason for each failure.
- Two draft method specifications, each with a page locator for every item, a proposed band map, the limitations to show on every result, and a verification plan.
- Five status documents for the methods that can't be specified yet. They record what public pages state and nothing that would count as a specification.
- Double transcription of all 12 tables in the two retrieved sources (15 transcription files), with a check in CI that enforces the reconciliation rules.
- A cross-platform determinism run in CI, which milestone 2 extends to engine outputs.
- Decision log entries for all 15 design defaults in the build prompt and 9 engineer decisions. Open-question log entries for the 29 open decisions in the build prompt and 31 questions raised during the build.

## What was verified, with evidence

- **Local checks.** `npm run check` on October 6, 2026, at commit `81e6282` and after it:

  ```text
  All matched files use Prettier code style!
   Test Files  4 passed (4)
        Tests  39 passed (39)
  ok   methods/bwc-osu-push-pull/transcription
  ok   methods/rnle/transcription
  2 transcription folder(s) checked, 0 problem(s)
  ```

  Lint and type checks ran in the same command and reported no errors.

- **CI.** Runs 1 to 8 of the CI workflow on this branch completed with the conclusion "success" (run 8 is for commit `0c36a2c`). The determinism comparison job in run 8 logged:

  ```text
  operating systems: darwin, linux, win32
  processor architectures: arm64, x64
  all outputs are identical
  ```

- **Transcription check catches errors.** Changing one reconciled cell of RNLE Table 5 from ".15" to ".16" made the check fail with `row 12, column 7: the passes agree on ".15" but the reconciled table has ".16"`. Restoring the cell made it pass.
- **Pass agreement.** RNLE: every data cell agreed between passes. The 6 differences were headings and symbols (2 footnote markers in Table 5, and 4 minus signs typed as en dashes in the formula table). BWC/OSU: every cell agreed after one layout-parameter fix in the extraction tool, which the manifest records.
- **RNLE tables against formulas.** Every numeric row of Tables 1 to 4 was compared with its formula in exact decimal arithmetic. Three entries differ by 0.01 (OQ-112).
- **RNLE chapter 3 reprints.** Compared by machine with the chapter 1 tables. No numeric multiplier differs. Label differences are listed in the specification (decision D-106).
- **BWC/OSU tables against the online calculator.** The PDF and the calculator agree on 84 of 85 rows (OQ-133). The PDF has one row with overlapping bands (OQ-132).
- **Worked-example arithmetic.** The RNLE Example 4 origin RWL is 34.9 lb on the worksheet and 34.8 lb at full precision. The CLI example on p. 28 reproduces 1.9 from the printed values.

## What wasn't verified

- **Independent human transcription.** One agent made both passes, by different methods (decision D-105). The pass B transcriber had seen the text layer of two small RNLE tables before transcribing them, which the manifest records. OQ-104 asks whether the reviewer accepts this procedure.
- **The RNLE coupling decision tree** was read once from a figure. It needs a second reading.
- **RNLE worked-example worksheets** aren't transcribed. They become test fixtures in milestone 2, under the double-transcription procedure.
- **Reference-tool parity** pairs haven't been recorded. That needs a person, by the build prompt's rule.
- **License terms** for the BWC/OSU guidelines and the LM-MMH paper haven't been reviewed (OQ-009).
- **The four journal papers** for LM-MMH, LiFFT, DUET, and the Shoulder Tool weren't read, so nothing about those methods is verified.
- **The workflow and biomechanics sources** in the build prompt's register weren't retrieved. Milestone 1 covers the Tier 1 primary sources only.
- **The moderated session script and accessibility checks** belong to later milestones.

## Questions that remain open

Every question is in the [open-question log](../open-questions.md). These block the milestone 1 exit:

- **People and permissions:** OQ-008 (reviewer), OQ-010 (band map approver), OQ-009 (permission to implement each source), OQ-104 (transcription procedure).
- **Sources:** OQ-102 (three subscription papers), OQ-103 (LM-MMH paper), OQ-105 (Liberty Mutual figures), OQ-006 and OQ-142 (job demands fields).
- **RNLE content:** OQ-110 to OQ-125. The most consequential are OQ-122 (which unit system the engine computes in), OQ-124 (how worked-example tests handle the source's rounded multipliers), OQ-113 (FM interpolation near the maximum frequency), and OQ-118 (CLI tie-breaking).
- **BWC/OSU content:** OQ-130 to OQ-135. The most consequential are OQ-130 (the turning moment arm, where the PDF and the calculator differ by a factor of two), OQ-131 (values between whole-number limits), and OQ-132 (the overlapping row).
- **Repository:** OQ-101 (base branch for the pull request) and OQ-106 (license).

## Files added in this milestone

- Specifications and status documents: `docs/methods/*.md`
- Transcriptions: `methods/rnle/transcription/`, `methods/bwc-osu-push-pull/transcription/`
- Tooling: `tools/transcription/` (CSV parser, transcription check, PDF extraction helpers, and one extraction driver for each retrieved source) and `tools/determinism/`
- Logs: `docs/decisions.md`, `docs/open-questions.md`, `docs/sources.md`
- Repository files: `README.md`, `CONTRIBUTING.md`, `CHANGELOG.md`, `.github/pull_request_template.md`, `.github/workflows/ci.yml`, and the configuration files
