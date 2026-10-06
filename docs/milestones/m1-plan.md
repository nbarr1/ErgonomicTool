# Milestone 1 plan: sources and specifications

- **Started:** October 6, 2026
- **Branch:** `claude/pensive-maxwell-mqwopv` (see decision D-101)
- **Exit criterion:** The product owner and the reviewer approve the method specifications.

No application code is written in this milestone. The only code is repository tooling that checks the transcription files and the determinism of number handling.

## Goal

Retrieve every Tier 1 primary source, write a specification for each method from its primary source, list every source that couldn't be retrieved with the reason, and propose a band map for each method that publishes thresholds.

## Source retrieval status

The build attempted every Tier 1 primary source on October 6, 2026. The [source log](../sources.md) has the links, checksums, terms of use, and failure details.

| Method              | Primary source                                   | Status                                                                                        | Open question |
| ------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------- | ------------- |
| `rnle`              | NIOSH Publication 94-110, revised September 2021 | Retrieved. Public domain.                                                                     | None          |
| `bwc-osu-push-pull` | BWC/OSU guidelines PDF                           | Retrieved. No terms of use stated.                                                            | OQ-009        |
| `lm-mmh`            | Potvin et al. (2021), Ergonomics                 | Not retrieved. Open access, but the publisher's site returned HTTP 403 to automated requests. | OQ-103        |
| `lifft`             | Gallagher et al. (2017), Applied Ergonomics      | Not retrieved. Subscription only.                                                             | OQ-102        |
| `duet`              | Gallagher et al. (2018), Human Factors           | Not retrieved. Subscription only.                                                             | OQ-102        |
| `shoulder-tool`     | Bani Hani et al. (2020), Ergonomics              | Not retrieved. Subscription only.                                                             | OQ-102        |
| `jda`               | OHCOW JobAssess                                  | Announcement retrieved. Field list requires a login.                                          | OQ-006        |

## Work plan

Each step lists its output. Steps 1 to 4 are done before any specification text is written for a table.

1. **Transcription tooling.** Write the check described in [`methods/README.md`](../../methods/README.md), with unit tests, and add it and the tests to continuous integration. Output: `tools/transcription/`.
2. **Determinism tooling.** Write a script that parses every reconciled table into numbers and emits canonical JSON, run it on Linux x64, macOS arm64, and Windows x64 in continuous integration, and fail the run if any output differs or fewer than two processor architectures ran. This check grows into the engine's determinism run in milestone 2. Output: `tools/determinism/`.
3. **RNLE tables.** For each table in chapter 1 of the NIOSH manual (Tables 1 to 7), make pass B by reading the rendered page image, then pass A by machine extraction of the PDF text layer, then compare and reconcile (decision D-105). Output: `methods/rnle/transcription/`.
4. **BWC/OSU tables.** The same procedure for every table in the guidelines PDF. Output: `methods/bwc-osu-push-pull/transcription/`.
5. **RNLE specification.** Equations, multipliers, input definitions, measurement instructions, valid ranges, restrictions, the multi-task procedure, outputs, interpretation, limitations, and the list of the 10 worked examples as future test fixtures, each with its page number. Output: `docs/methods/rnle.md`.
6. **BWC/OSU specification.** The same content for the push/pull guidelines. Output: `docs/methods/bwc-osu-push-pull.md`.
7. **Blocked methods.** For `lm-mmh`, `lifft`, `duet`, and `shoulder-tool`, write a short status document that states what is blocked and why, and records what the public tool pages state as secondary information to verify later. No equation, coefficient, or threshold is recorded from a secondary source. Output: `docs/methods/<method-id>.md` for each.
8. **Job demands analysis.** Record the section names and lifecycle features that OHCOW's public pages state, and the field-level decisions the product owner needs to make. Output: `docs/methods/jda.md`.
9. **Band map proposals.** For each method whose source publishes thresholds, propose a map from its published bands to the three priority levels, with citations. The reviewer approves each map. Output: a "Proposed band map" section in each specification.
10. **Open questions.** Log every place where a source is silent or ambiguous, such as interpolation between table rows or rounding. Output: [`docs/open-questions.md`](../open-questions.md).
11. **Milestone report.** What is complete, what was verified with evidence, what wasn't verified, and which questions remain open. Output: `docs/milestones/m1-report.md`.

## Decisions that block this milestone

These questions from the [open-question log](../open-questions.md) block milestone 1 work or its exit. Work continues on everything they don't block.

| ID     | Question                                                                | What it blocks                                                                            |
| ------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| OQ-008 | Who is the qualified reviewer?                                          | The exit. Nobody can approve a specification until a reviewer is named.                   |
| OQ-102 | Can the product owner supply the LiFFT, DUET, and Shoulder Tool papers? | Three of the seven specifications.                                                        |
| OQ-103 | Can the product owner download the open-access LM-MMH paper?            | The LM-MMH specification.                                                                 |
| OQ-009 | Is there permission to implement each source's equations and tables?    | Approval of every specification with a licensing flag. The NIOSH manual is public domain. |
| OQ-006 | Which fields make up the job demands analysis?                          | The field-level part of the job demands specification.                                    |
| OQ-104 | Does the reviewer accept the double-transcription procedure?            | Approval of every transcribed table.                                                      |
| OQ-010 | Who approves the band maps and priority level names?                    | Approval of the band map proposals.                                                       |
| OQ-105 | Can the product owner record the Liberty Mutual interpretation figures? | The LM-MMH band map proposal.                                                             |
| OQ-001 | Which Tier 1 methods are in the first release, and in what order?       | Nothing immediately. The build works on the methods whose sources it has.                 |
| OQ-101 | How should the base branch for the milestone pull request be set up?    | Opening the milestone 1 pull request.                                                     |

## Risks

- **Three of seven methods depend on subscription papers.** If the papers aren't available, those methods are deferred with a recorded reason, as the definition of done allows.
- **One agent makes both transcription passes.** Decision D-105 describes how the passes are kept separate. A human second pass would make the check stronger.
- **Table values and formula values can differ.** The NIOSH manual's table of contents lists both a multiplier section and a lookup table for several multipliers. Where a formula and a table both appear, the specification records both and asks the reviewer which one governs, rather than choosing.
