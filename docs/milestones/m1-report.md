# Milestone 1 report: sources and specifications

- **Date:** October 7, 2026 (first version October 6, 2026)
- **Branch:** `claude/pensive-maxwell-mqwopv`, reviewed in a pull request into `main`
- **Status:** Work complete for every method whose source is in hand. The milestone exits when the product owner, who is also the reviewer (D-110), approves the specifications and answers the questions that block the exit.

## Summary

| Method              | Result                                                                                                                                                                                                                                                                                  |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rnle`              | [Draft specification](../methods/rnle.md). Nine source tables, stored as 12 files, transcribed twice and reconciled. 16 open questions (OQ-110 to OQ-125).                                                                                                                              |
| `bwc-osu-push-pull` | [Draft specification](../methods/bwc-osu-push-pull.md). Three tables transcribed twice and reconciled. 6 open questions (OQ-130 to OQ-135).                                                                                                                                             |
| `duet`              | [Draft specification](../methods/duet.md), draft 2. The authors' workbook confirms the base-10 logarithm and the damage-per-cycle table; the instruction-page examples reproduce. 11 open questions (OQ-190 to OQ-199, OQ-220).                                                         |
| `lm-mmh`            | [Draft specification](../methods/lm-mmh.md). All 14 equations transcribed term by term; the worked example and Table 4 reproduce. 18 open questions (OQ-160 to OQ-177), plus the license question (OQ-150).                                                                             |
| `lifft`             | [Draft specification](../methods/lifft.md), draft 2. Formulas from the authors' LiFFT 1.4.0 workbook (D-117). The workbook's own screenshots reproduce only from a hidden lookup table, not from its damage formula (OQ-231). 16 open questions (OQ-181 to OQ-189, OQ-230 to OQ-236).   |
| `shoulder-tool`     | [Draft specification](../methods/shoulder-tool.md), draft 2. Formulas from the authors' Shoulder Tool 1.0.0 workbook (D-117); the dissertation prints the same risk equation. The workbook leaves one task row without a moment formula (OQ-213). 14 open questions (OQ-201 to OQ-214). |
| `jda`               | [Partly specified](../methods/jda.md). Section names and lifecycle recorded. The field list is deferred (D-113).                                                                                                                                                                        |

## What is complete

- The build prompt is stored unedited as [`docs/build-prompt.md`](../build-prompt.md), with the supporting files it lists.
- Every Tier 1 primary source was attempted and recorded in the [source log](../sources.md). The four papers the build couldn't retrieve were supplied by the product owner and are recorded with their checksums.
- Six method specifications, each with a page locator for every item, a proposed band map, the limitations to show on every result, the worked examples for the published-example tests, and its open questions. Two of them (LiFFT and the Shoulder Tool) record everything their sources print and say exactly what is missing.
- Double transcription of every calculation table, equation term, stated constant, and worked-example screenshot in the six sources: 15 files for the two retrieved sources (D-105) and 14 files for the four supplied papers (D-116). A check in CI enforces the reconciliation rules.
- A cross-platform determinism run in CI, which milestone 2 extends to engine outputs.
- Decision log entries for the 15 design defaults in the build prompt, 10 engineer decisions, and 6 entries for the product owner's answers and the release-order recommendation. The open-question log holds 108 questions: 97 open, 7 answered, 3 deferred, and 1 recommendation awaiting confirmation (OQ-001, the release order in D-115).

## What was verified, with evidence

- **Local checks.** `npm run check` on October 7, 2026, at commit `1a0e912`:

  ```text
  All matched files use Prettier code style!
   Test Files  4 passed (4)
        Tests  39 passed (39)
  ok   methods/bwc-osu-push-pull/transcription
  ok   methods/duet/transcription
  ok   methods/lifft/transcription
  ok   methods/lm-mmh/transcription
  ok   methods/rnle/transcription
  ok   methods/shoulder-tool/transcription
  6 transcription folder(s) checked, 0 problem(s)
  ```

  Lint and type checks ran in the same command and reported no errors.

- **CI.** GitHub lists 32 CI runs for this branch, through commit `1a0e912`. All completed with the conclusion "success", with two exceptions for commit `cd9595a`: its push run was cancelled when the next commit arrived, and its pull request run is still listed as queued. The next commit, `34701ac`, contains `cd9595a` and passed. The determinism comparison covers Linux, macOS, and Windows on x64 and arm64.
- **Pass agreement for the supplied papers.** The two transcription agents agreed on every number in all 14 files. They differed in 8 cells, all in free-text fields that quote the source, and each difference is resolved against the page in a resolutions file. The render-only agents' tool logs show no use of the text layer and no access to the other pass.
- **Pass agreement for the retrieved sources.** RNLE: every data cell agreed; the 6 differences were headings and symbols. BWC/OSU: every cell agreed after one layout-parameter fix that the manifest records.
- **Recomputations from the reconciled transcriptions:**
  - **LM-MMH:** the section 3.4 worked example reproduces (MAL 15.555529 kg, printed 15.56; 81.033% capable, printed 81.0%; MAL75%CAP 12.8276 kg, printed 12.83). Table 4's "75% Capable Max" column reproduces for all 14 equations with the exact standard normal quantile, and for 13 of 14 with the printed 0.675 (OQ-175). Reading the squared frequency term as ln(F²) gives scale factors up to 1.87, which the paper says can't happen; [ln(F)]² keeps them at about 1.0 or less (OQ-172).
  - **DUET:** every cycles-to-failure value in Table 1 reproduces from Eq 1 with a base-10 logarithm, and every damage per cycle equals 1/N to eight decimals. The mono-task example (26.5%) and the cut-point probability (36.2%) reproduce. Figure 3's 60.5% doesn't: the printed equations give 60.0% (OQ-199). Table 3 has one digit transposition (0.0011385 printed, 0.0011358 computed), which the job's printed total confirms.
  - **Shoulder Tool:** Table 1 and the screenshot totals are internally consistent. No probability can be recomputed, because the coefficients aren't printed.
  - **LiFFT:** the mono-task example's moment reproduces (51 N·m) with either common value of g, but 400 × 0.000011 gives 0.0044 against the printed 0.0043.
- **Independent checks of the four new specifications.** A separate agent checked each one against its source: every number against the page and the transcription, every quotation word for word, every locator, every "not printed" claim, and every recomputation. They fixed 26 items, 6 of them errors: two misquotations, two wrong locators, a task's share of cumulative load reported as a risk, and a list introduction that called the specification's own wording a quotation. The engineer settled the judgment calls they left, and the open-question log matches the specifications word for word.
- **RNLE and BWC/OSU checks** from the first version of this report still hold: three RNLE table entries differ from their formulas by 0.01 (OQ-112), the chapter 3 reprints match chapter 1, and the BWC/OSU PDF and calculator agree on 84 of 85 rows (OQ-133).

## What wasn't verified

- **Independent human transcription.** No pass was made by a person. RNLE and BWC/OSU passes come from one agent using two methods (D-105); the supplied papers' passes come from two agents (D-116). OQ-104 asks whether the reviewer accepts these procedures.
- **LM-MMH equations by eye.** The LM-MMH checker re-read 4 of the 12 equation blocks against page renders. The other 8 rest on the double transcription, whose passes agreed on every term.
- **Values read from figures.** Figure endpoints and screenshot values are read from raster images and are approximate where the specifications say so.
- **The RNLE coupling decision tree** was read once from a figure. It needs a second reading.
- **Worked-example worksheets** for RNLE aren't transcribed. They become test fixtures in milestone 2, under the double-transcription procedure.
- **Reference-tool parity** pairs haven't been recorded. That needs a person, by the build prompt's rule. Facts about the public calculators come from saved pages and can't be checked against the papers.
- **License terms.** No legal review of the LM-MMH paper's CC BY-NC-ND 4.0 license (OQ-150) or of the other sources' terms. The build proceeds under the product owner's general permission (D-112).
- **Versions of record.** The LiFFT file is an author manuscript (OQ-181), and the DUET file is the journal's online-first version. Neither was compared with the final issue.
- **The workflow and biomechanics sources** in the build prompt's register weren't retrieved. Milestone 1 covers the Tier 1 primary sources only.

## Questions that block the exit

Every question is in the [open-question log](../open-questions.md). These block the milestone 1 exit:

- **Procedure and order:** OQ-104 (transcription procedures) and OQ-001 (release order; the recommendation is in D-115).
- **Sources:** OQ-181 (whether the LiFFT version of record governs). OQ-180 and OQ-200 are answered (D-117). OQ-105 and the job demands fields (OQ-006, OQ-142) are deferred under D-113.
- **RNLE content:** OQ-110 to OQ-125. The most consequential are OQ-122 (which unit system the engine computes in), OQ-124 (how worked-example tests handle the source's rounded multipliers), OQ-113 (FM interpolation near the maximum frequency), and OQ-118 (CLI tie-breaking).
- **BWC/OSU content:** OQ-130 to OQ-135. The most consequential are OQ-130 (the turning moment arm, where the PDF and the calculator differ by a factor of two), OQ-131 (values between whole-number limits), and OQ-132 (the overlapping row).
- **DUET content:** OQ-190 to OQ-199. The most consequential are OQ-194 (log base), OQ-195 (where the damage per cycle comes from), and OQ-199 (the Figure 3 probability and the Table 3 typo).
- **LM-MMH content:** the blocking questions among OQ-161 to OQ-177. The most consequential are OQ-172 (the meaning of ln(F)²), OQ-175 (the sign and precision of z), OQ-164 (coupling scale factors), and OQ-161 (which sex's result sets the band). OQ-150 (license) decides whether LM-MMH is published and implemented at all.
- **LiFFT content:** OQ-182 to OQ-189 and OQ-230 to OQ-236. The most consequential is OQ-231 (formula or lookup table).
- **Shoulder Tool content:** OQ-201 to OQ-214. The most consequential are OQ-211 (rounding before the probability) and OQ-213 (the missing task-row formula).

## Files added in this milestone

- Specifications: `docs/methods/*.md`
- Transcriptions: `methods/<method-id>/transcription/` for six methods
- Tooling: `tools/transcription/` (CSV parser, transcription check, PDF extraction helpers, and one extraction driver for each retrieved source) and `tools/determinism/`
- Logs: `docs/decisions.md`, `docs/open-questions.md`, `docs/sources.md`
- Repository files: `README.md`, `CONTRIBUTING.md`, `CHANGELOG.md`, `LICENSE`, `NOTICE`, `.github/pull_request_template.md`, `.github/workflows/ci.yml`, and the configuration files
