# Open-question log

This log records every question that needs an answer from the product owner or the reviewer. Each entry states what it blocks and whether it affects a calculation. The application isn't done while any question that affects a calculation remains open.

When a question is answered, record the answer and the date here, record the resulting decision in the [decision log](decisions.md), and change the status to "Answered."

Questions OQ-001 to OQ-029 come from the "Open decisions" section of the [build prompt](build-prompt.md). Questions from OQ-101 onward arose during the build.

## Questions that block milestone 1

| ID     | Question                                                                                                                                                                                                                                                                                                                                         | Blocks                                                         | Affects a calculation | Status |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- | --------------------- | ------ |
| OQ-008 | Who is the qualified reviewer for method specifications and validation reports?                                                                                                                                                                                                                                                                  | Milestone 1 exit                                               | No                    | Open   |
| OQ-009 | Does the product owner have access to each primary source, and permission to implement its equations and tables? See OQ-102 and OQ-103 for the sources this build couldn't retrieve.                                                                                                                                                             | Milestone 1 for `lifft`, `duet`, `shoulder-tool`, and `lm-mmh` | Yes                   | Open   |
| OQ-010 | Who approves each band map, the priority level names, and the tie-breaker order?                                                                                                                                                                                                                                                                 | Milestone 1 exit (band map approval)                           | No                    | Open   |
| OQ-001 | Which Tier 1 methods belong in the first release, and in what order?                                                                                                                                                                                                                                                                             | Milestone 1 ordering, milestone 2 scope                        | No                    | Open   |
| OQ-006 | Which fields make up the job demands analysis? OHCOW's field list sits behind a login.                                                                                                                                                                                                                                                           | Milestone 1 for `jda`                                          | No                    | Open   |
| OQ-101 | How should the base branch for milestone pull requests be set up? The build session can push only to `claude/pensive-maxwell-mqwopv`, which became the repository's first branch. A pull request needs a separate base branch, such as `main`. See decision D-101.                                                                               | The milestone 1 pull request                                   | No                    | Open   |
| OQ-102 | The primary papers for LiFFT (Gallagher et al. 2017), DUET (Gallagher et al. 2018), and the Shoulder Tool (Bani Hani et al. 2020) are subscription-only. Can the product owner supply copies through a licensed channel? Until then, those specifications stop at the scope that public pages state.                                             | Milestone 1 for `lifft`, `duet`, and `shoulder-tool`           | Yes                   | Open   |
| OQ-103 | The LM-MMH paper (Potvin et al. 2021) is open access under a CC BY-NC-ND license, according to its OpenAlex and Semantic Scholar records, but the publisher's site returned HTTP 403 to every automated request from this build. Can the product owner download the PDF and provide it, or its checksum and a local path, for the build to read? | Milestone 1 for `lm-mmh`                                       | Yes                   | Open   |
| OQ-104 | Does the reviewer accept the double-transcription procedure in decision D-105, in which one agent makes both passes by different methods? If not, who makes the second, human pass?                                                                                                                                                              | Milestone 1 exit for every table                               | Yes                   | Open   |
| OQ-105 | The Liberty Mutual population percentile tool returned HTTP 403 (an Akamai "Access Denied" page) to this build. The build prompt asks to confirm the 90% and 75% interpretation figures in the tool. Can the product owner record them from the tool by hand, with the tool version and date?                                                    | Milestone 1 band map for `lm-mmh`                              | No                    | Open   |
| OQ-106 | Which license applies to this repository? The build prompt asks the engineer not to choose one.                                                                                                                                                                                                                                                  | Nothing in milestone 1                                         | No                    | Open   |

## Questions for later milestones

### Scope

| ID     | Question                                                                                                                                                                                                                                           | Needed before | Affects a calculation | Status |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------------------- | ------ |
| OQ-002 | Which Tier 2 methods are in scope, and which licenses does the product owner hold?                                                                                                                                                                 | Milestone 2   | Yes                   | Open   |
| OQ-003 | Should any Tier 3 collection be reviewed for further methods? Methods that appear on no crawled page are absent from the build prompt. REBA and the Strain Index are two examples, and both names come from general knowledge, not from the crawl. | Milestone 2   | Yes                   | Open   |
| OQ-004 | Is video-based pose estimation planned for a later release, and what accuracy and repeatability evidence would it need?                                                                                                                            | Milestone 6   | Yes                   | Open   |
| OQ-005 | Is employee self-assessment of office workstations in scope, as Vitrue Health describes?                                                                                                                                                           | Milestone 4   | No                    | Open   |
| OQ-007 | Is anthropometric data needed, and from which licensed source?                                                                                                                                                                                     | Milestone 6   | Yes                   | Open   |

### Accuracy and review

| ID     | Question                                        | Needed before | Affects a calculation | Status |
| ------ | ----------------------------------------------- | ------------- | --------------------- | ------ |
| OQ-011 | What interval or event triggers a reassessment? | Milestone 5   | No                    | Open   |

### Biomechanical analysis

| ID     | Question                                                                                                                                             | Needed before | Affects a calculation | Status |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------------------- | ------ |
| OQ-012 | Does "clinical accuracy" match the working definition in part 2 of the build prompt, or does it refer to a specific clinical or regulatory standard? | Milestone 6   | Yes                   | Open   |
| OQ-013 | Does the product owner hold a 3DSSPP license, and which role applies: benchmark, import, or none?                                                    | Milestone 6   | Yes                   | Open   |
| OQ-014 | Should the static analysis be built natively from published sources, or should the application rely on external tools?                               | Milestone 6   | Yes                   | Open   |
| OQ-015 | Which strength dataset, if any, is licensed for population strength comparisons?                                                                     | Milestone 6   | Yes                   | Open   |
| OQ-016 | Is inverse dynamics part of the first biomechanics release, and which motion capture systems and file formats must import?                           | Milestone 6   | Yes                   | Open   |
| OQ-017 | Which engine performs inverse kinematics and inverse dynamics: a native implementation or an open-source library?                                    | Milestone 6   | Yes                   | Open   |
| OQ-018 | Which spinal level and low-back model does the reviewer approve, and which published limits apply to it?                                             | Milestone 6   | Yes                   | Open   |
| OQ-019 | What tolerance does the reviewer approve for each output in the benchmark comparison?                                                                | Milestone 6   | Yes                   | Open   |
| OQ-020 | Who reviews the biomechanical model? That reviewer needs biomechanics expertise.                                                                     | Milestone 6   | No                    | Open   |
| OQ-021 | Can the application store measured anthropometry for an individual worker, or population values only?                                                | Milestone 6   | Yes                   | Open   |

### Platform and data

| ID     | Question                                                                                                    | Needed before | Affects a calculation | Status |
| ------ | ----------------------------------------------------------------------------------------------------------- | ------------- | --------------------- | ------ |
| OQ-022 | Is the default stack acceptable, or is there a house stack and hosting environment?                         | Milestone 2   | No                    | Open   |
| OQ-023 | Does the application serve one organization or many, and at what scale of sites, users, and assessments?    | Milestone 3   | No                    | Open   |
| OQ-024 | Which identity provider handles sign-in?                                                                    | Milestone 3   | No                    | Open   |
| OQ-025 | Which privacy laws, retention periods, and data-residency rules apply?                                      | Milestone 3   | No                    | Open   |
| OQ-026 | Can attachments show identifiable workers, and how is consent recorded?                                     | Milestone 3   | No                    | Open   |
| OQ-027 | Is offline data capture required?                                                                           | Milestone 4   | No                    | Open   |
| OQ-028 | Which unit system is the default, and which languages are required?                                         | Milestone 4   | No                    | Open   |
| OQ-029 | Should injury and report counts be imported from an existing safety system, and is an integration required? | Milestone 5   | No                    | Open   |
