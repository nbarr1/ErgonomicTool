# Source log

This log records every source the build reads: its link, retrieval date, file checksum, and terms of use. Third-party documents are never committed to the repository (decision D-104). To use a recorded file, retrieve it from its link and confirm that its SHA-256 checksum matches.

A web page can change after retrieval. The checksum records the exact copy that the build read. A later copy with a different checksum must be reread before anyone relies on it.

**Licensing flags** mark sources whose terms might restrict reuse of their equations, tables, or text. The product owner decides whether to seek permission (see OQ-009).

## Tier 1 primary sources

### NIOSH Applications Manual for the Revised NIOSH Lifting Equation

- **Method:** `rnle`
- **Citation:** Waters TR, Putz-Anderson V, Garg A. Applications manual for the revised NIOSH lifting equation. Cincinnati, OH: U.S. Department of Health and Human Services, Centers for Disease Control and Prevention, National Institute for Occupational Safety and Health. DHHS (NIOSH) Publication No. 94-110 (Revised 9/2021). [https://doi.org/10.26616/NIOSHPUB94110revised092021](https://doi.org/10.26616/NIOSHPUB94110revised092021)
- **Landing page:** [Applications Manual for the Revised NIOSH Lifting Equation](https://www.cdc.gov/niosh/publications/numbered/94-110.html). The link in the build prompt, `https://www.cdc.gov/niosh/docs/94-110/`, redirects to this page.
- **File:** `https://www.cdc.gov/niosh/media/pdfs/2026/06/94-110_2021-revision.pdf`
- **Retrieved:** October 6, 2026
- **SHA-256:** `b25de48aeea47c5941c8eb2013be03c9c9fcf4c26a2ccd39486fae530a59c378`
- **Size:** 17,212,089 bytes, 96 pages. PDF metadata: created July 16, 2021, modified September 23, 2021.
- **Edition note:** The landing page lists one revision, dated September 2021, that "corrects typographical errors in the previous version and is reformatted to be searchable and 508 compliant." The build uses the September 2021 revision.
- **Terms of use:** The manual states on its title page: "This document is in the public domain and may be freely copied or reprinted." No licensing flag.

### BWC/OSU push/pull guidelines

- **Method:** `bwc-osu-push-pull`
- **Citation:** Weston EB, Aurand A, Dufour JS, Knapik GG, Allread WG, Marras WS. An objective set of guidelines for pushing and pulling. Spine Research Institute, The Ohio State University. Hosted by the Ohio Bureau of Workers' Compensation.
- **Landing page:** [BWC/OSU push/pull guidelines](https://www.bwc.ohio.gov/employer/programs/safety/PushPullGuide/PushPullGuide.aspx)
  - **Retrieved:** October 6, 2026
  - **SHA-256 of the HTML:** `d1650e39e1d44d79e3a0acd6b914b85e4fe4ce957228729715590b144d36628f`
  - **Retrieval note:** The server for `www.bwc.ohio.gov` sent an incomplete certificate chain: it omitted the intermediate certificate "Sectigo Public Server Authentication CA OV R36." The build fetched that intermediate from the address in the server certificate's Authority Information Access field (`http://crt.sectigo.com/SectigoPublicServerAuthenticationCAOVR36.crt`), confirmed with `openssl verify` that it chains to a trusted root, and added it to the trust store for this one request. Certificate verification stayed on.
- **File:** `https://dam.assets.ohio.gov/image/upload/info.bwc.ohio.gov/forms/PushPullGuidelines.pdf`, linked from the landing page
- **Retrieved:** October 6, 2026
- **SHA-256:** `4b113c40e672d7b5d025251f8e04860445f6444516a8f53d4ace67eb13981a93`
- **Size:** 527,536 bytes, 5 pages. PDF metadata: title "Push Pull Guidelines," created February 22, 2019, modified June 9, 2026.
- **Terms of use:** The PDF states no copyright notice or terms of use. The terms of the BWC website weren't reviewed. **Licensing flag:** Reuse permission for the tables is unconfirmed.

### LM-MMH equations: Potvin et al. (2021)

- **Method:** `lm-mmh`
- **Citation:** Potvin JR, Ciriello VM, Snook SH, Maynard WS, Brogmus GE. The Liberty Mutual manual materials handling (LM-MMH) equations. Ergonomics. 2021;64(8):955-970. [https://doi.org/10.1080/00140139.2021.1891297](https://doi.org/10.1080/00140139.2021.1891297). PubMed ID 33729096. Bibliographic data from the OpenAlex record.
- **Status:** **Not retrieved.**
- **Attempts on October 6, 2026:** `https://www.tandfonline.com/doi/full/10.1080/00140139.2021.1891297` and `https://www.tandfonline.com/doi/pdf/10.1080/00140139.2021.1891297` both returned HTTP 403. Europe PMC lists no PubMed Central copy.
- **Open-access status:** OpenAlex records the article as open access ("hybrid") with the license "cc-by-nc-nd." Semantic Scholar records the license as "CCBYNCND." The build didn't read the license statement on the article itself.
- **Terms of use:** **Licensing flag:** A CC BY-NC-ND license restricts commercial use and derivative works. Whether implementing the equations in this application falls within those terms is a question for the product owner.
- **Open question:** OQ-103.

### LiFFT: Gallagher et al. (2017)

- **Method:** `lifft`
- **Citation:** Gallagher S, Sesek RF, Schall MC, Huangfu R. Development and validation of an easy-to-use risk assessment tool for cumulative low back loading: The Lifting Fatigue Failure Tool (LiFFT). Applied Ergonomics. 2017;63:142-150. [https://doi.org/10.1016/j.apergo.2017.04.016](https://doi.org/10.1016/j.apergo.2017.04.016). PubMed ID 28477843. The DOI resolves to the ScienceDirect item `S0003687017301023` named in the build prompt.
- **Status:** **Not retrieved.** OpenAlex, Semantic Scholar, and Europe PMC record the article as closed access, with no open copy.
- **Terms of use:** **Licensing flag:** Subscription article. Reuse terms unknown.
- **Open question:** OQ-102.

### DUET: Gallagher et al. (2018)

- **Method:** `duet`
- **Citation:** Gallagher S, Schall MC, Sesek RF, Huangfu R. An upper extremity risk assessment tool based on material fatigue failure theory: The Distal Upper Extremity Tool (DUET). Human Factors. 2018;60(8):1146-1162. [https://doi.org/10.1177/0018720818789319](https://doi.org/10.1177/0018720818789319). PubMed ID 30063405.
- **Status:** **Not retrieved.** OpenAlex, Semantic Scholar, and Europe PMC record the article as closed access, with no open copy.
- **Terms of use:** **Licensing flag:** Subscription article. Reuse terms unknown.
- **Open question:** OQ-102.

### The Shoulder Tool: Bani Hani et al. (2020)

- **Method:** `shoulder-tool`
- **Citation:** Bani Hani D, Huangfu R, Sesek R, Schall MC, Davis GA, Gallagher S. Development and validation of a cumulative exposure shoulder risk assessment tool based on fatigue failure theory. Ergonomics. 2021;64(1):39-54. Published online August 19, 2020. [https://doi.org/10.1080/00140139.2020.1811399](https://doi.org/10.1080/00140139.2020.1811399). PubMed ID 32812850. The build prompt cites the 2020 online date.
- **Status:** **Not retrieved.** OpenAlex, Semantic Scholar, and Europe PMC record the article as closed access, with no open copy.
- **Terms of use:** **Licensing flag:** Subscription article. Reuse terms unknown.
- **Open question:** OQ-102.

## Reference tools

These public calculators support reference-tool parity tests. The build reads their pages but sends no bulk or automated calculation requests.

| Tool                             | Address                                                       | Retrieved       | SHA-256 of the HTML                                                | Result                                                                         |
| -------------------------------- | ------------------------------------------------------------- | --------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| The Shoulder Tool, English units | `https://theshouldertool.pythonanywhere.com/en/unit/english/` | October 6, 2026 | `377928660ad527dab0a11dc5a3543da026172ed429a382ebd0233ee2cb14744d` | Retrieved                                                                      |
| The Shoulder Tool, instructions  | `https://theshouldertool.pythonanywhere.com/en/instruction/`  | October 6, 2026 | `74fa0600802d0eb619547335c4e560b3acc078228b4576747c5174a5f3a2d2ee` | Retrieved                                                                      |
| LiFFT                            | `http://lifft.pythonanywhere.com/`                            | October 6, 2026 | `a2261703fdfa53e3a5fb1048d7a7e46f0532d51e4ef141a8bd77b433d9e26ec0` | Retrieved. Redirected to `https://lifft.pythonanywhere.com/en/unit/english/`.  |
| DUET                             | `http://duet.pythonanywhere.com/`                             | October 6, 2026 | `2511d1b48703af97dad75316a40cfc620a3b391c527b3c5db60693a3947fa9fa` | Retrieved. Redirected to `https://duet.pythonanywhere.com/`.                   |
| Liberty Mutual MMH tables        | `https://libertymmhtables.libertymutual.com/`                 | October 6, 2026 | Not recorded                                                       | **Not retrieved.** HTTP 403 with an Akamai "Access Denied" page. See OQ-105.   |
| OHCOW JobAssess tool page        | `https://my.ohcow.on.ca/tools-and-apps/job-assess-tool/`      | October 6, 2026 | `09eb537d878353647d992ab74a5a0b0a0f82e4d415dfecfc531f69cedb7e001c` | Retrieved. Field-level content requires a login, which the build doesn't have. |
| OHCOW JobAssess announcement     | `https://www.ohcow.on.ca/posts/jobassess-app/`                | October 6, 2026 | `b698d48e867b7d694661902dd406991f674d1331e3584ea98dca4fe2a4abe53b` | Retrieved                                                                      |

## Bibliographic lookups

The build used these public services to find bibliographic data and open-access copies. They aren't sources for any method.

- [OpenAlex API](https://api.openalex.org/), October 6, 2026
- [Semantic Scholar API](https://api.semanticscholar.org/), October 6, 2026
- [Europe PMC REST API](https://www.ebi.ac.uk/europepmc/webservices/rest/), October 6, 2026

## Other sources in the build prompt's register

The workflow references, government guidance pages, and biomechanics sources in the build prompt's register weren't retrieved in this build session yet. Each is added here when the build reads it.
