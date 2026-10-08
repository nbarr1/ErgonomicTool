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
  - **Use:** The build read the page's text for measurement instructions and read its calculator script once to cross-check the PDF tables (see `docs/methods/bwc-osu-push-pull.md`). It sent no calculation requests to the calculator.
  - **Retrieval note:** The server for `www.bwc.ohio.gov` sent an incomplete certificate chain: it omitted the intermediate certificate "Sectigo Public Server Authentication CA OV R36." The build fetched that intermediate from the address in the server certificate's Authority Information Access field (`http://crt.sectigo.com/SectigoPublicServerAuthenticationCAOVR36.crt`), confirmed with `openssl verify` that it chains to a trusted root, and added it to the trust store for this one request. Certificate verification stayed on.
- **File:** `https://dam.assets.ohio.gov/image/upload/info.bwc.ohio.gov/forms/PushPullGuidelines.pdf`, linked from the landing page
- **Retrieved:** October 6, 2026
- **SHA-256:** `4b113c40e672d7b5d025251f8e04860445f6444516a8f53d4ace67eb13981a93`
- **Size:** 527,536 bytes, 5 pages. PDF metadata: title "Push Pull Guidelines," created February 22, 2019, modified June 9, 2026.
- **Terms of use:** The PDF states no copyright notice or terms of use. The terms of the BWC website weren't reviewed. **Licensing flag:** Reuse permission for the tables is unconfirmed.

### LM-MMH equations: Potvin et al. (2021)

- **Method:** `lm-mmh`
- **Citation:** Potvin JR, Ciriello VM, Snook SH, Maynard WS, Brogmus GE. The Liberty Mutual manual materials handling (LM-MMH) equations. Ergonomics. 2021;64(8):955-970. [https://doi.org/10.1080/00140139.2021.1891297](https://doi.org/10.1080/00140139.2021.1891297). PubMed ID 33729096. Bibliographic data from the OpenAlex record.
- **Status:** **Supplied by the product owner** on October 6, 2026, after automated retrieval failed (HTTP 403 from the publisher's site).
- **File:** `The_Liberty_Mutual_manual_materials_handling__LM-MMH__equations.pdf`, the publisher's version of record. Its first page states: "This article has been corrected with minor changes. These changes do not impact the academic content of the article."
- **SHA-256:** `4413e0b82f7102a77e5dbfcebf604cdeed0a70d2c4ec56d0fa414c4002394072`
- **Size:** 2,094,961 bytes, 17 pages. PDF metadata: created July 24, 2021.
- **Terms of use:** The article states: "This is an Open Access article distributed under the terms of the Creative Commons Attribution-NonCommercial-NoDerivatives License (http://creativecommons.org/licenses/by-nc-nd/4.0/), which permits non-commercial re-use, distribution, and reproduction in any medium, provided the original work is properly cited, and is not altered, transformed, or built upon in any way." **Licensing flag:** See D-112 and OQ-150.
- **Supplementary material:** The article cites "Supplementary Table S1." The supplementary material wasn't supplied.

### LiFFT: Gallagher et al. (2017)

- **Method:** `lifft`
- **Citation:** Gallagher S, Sesek RF, Schall MC, Huangfu R. Development and validation of an easy-to-use risk assessment tool for cumulative low back loading: The Lifting Fatigue Failure Tool (LiFFT). Applied Ergonomics. 2017;63:142-150. [https://doi.org/10.1016/j.apergo.2017.04.016](https://doi.org/10.1016/j.apergo.2017.04.016). PubMed ID 28477843. The DOI resolves to the ScienceDirect item `S0003687017301023` named in the build prompt.
- **Status:** **Supplied by the product owner** on October 6, 2026.
- **File:** `LiFFT_manuscript_Final_revised_3.docx`, an author's manuscript, not the publisher's version of record. Document properties: last modified April 21, 2017, revision 7. The build converted it to PDF with LibreOffice (14 pages) for page locators; the locators in the specification refer to that conversion and to the manuscript's section numbers.
- **SHA-256:** `4daefbb722e19da6b181386fc5438d5656cad363fbb9781eec62223b4352965b`
- **Converted PDF:** `LiFFT_manuscript_Final_revised_3.pdf`, made by the build with LibreOffice 24.2 on October 6, 2026, 14 pages, SHA-256 `0ccc6752f1671ac30d884a0fe9e269a0304826e67feb48ce21eb9c9119818f20`. It is kept with the manuscript, outside the repository. The manuscript has no figure or table images, so the conversion has none either.
- **Size:** 93,002 bytes.
- **Version note:** An author's manuscript can differ from the version of record. The specification records the manuscript's content and flags anything that the version of record or the calculator might state differently (OQ-140).
- **Terms of use:** No license statement in the manuscript. **Licensing flag:** Covered by the product owner's general permission (D-112).

### DUET: Gallagher et al. (2018)

- **Method:** `duet`
- **Citation:** Gallagher S, Schall MC, Sesek RF, Huangfu R. An upper extremity risk assessment tool based on material fatigue failure theory: The Distal Upper Extremity Tool (DUET). Human Factors. 2018;60(8):1146-1162. [https://doi.org/10.1177/0018720818789319](https://doi.org/10.1177/0018720818789319). PubMed ID 30063405.
- **Status:** **Supplied by the product owner** on October 6, 2026.
- **File:** `DUET_preprint.pdf`. Despite its name, the file is typeset in the journal's layout and carries the line "Copyright © 2018, Human Factors and Ergonomics Society." PDF metadata: created July 26, 2018, and modified August 7, 2018. Whether it matches the final issue version wasn't checked.
- **SHA-256:** `1476c40e76c9c45c669ec3a7d44f9115b5205a68533a0b1f57487664ffd584f7`
- **Size:** 300,126 bytes, 17 pages.
- **Terms of use:** Copyright the Human Factors and Ergonomics Society. **Licensing flag:** Covered by the product owner's general permission (D-112).

### The Shoulder Tool: Bani Hani et al. (2020)

- **Method:** `shoulder-tool`
- **Citation:** Bani Hani D, Huangfu R, Sesek R, Schall MC, Davis GA, Gallagher S. Development and validation of a cumulative exposure shoulder risk assessment tool based on fatigue failure theory. Ergonomics. 2021;64(1):39-54. Published online August 19, 2020. [https://doi.org/10.1080/00140139.2020.1811399](https://doi.org/10.1080/00140139.2020.1811399). PubMed ID 32812850. The build prompt cites the 2020 online date.
- **Status:** **Supplied by the product owner** on October 6, 2026.
- **File:** `cdc_225789_DS1.pdf`, the publisher's version of record with the Taylor & Francis cover page ("Published online: 28 Aug 2020"). The file name suggests it came from the CDC Stacks repository.
- **Date note:** The citation's online date, August 19, 2020, came from the bibliographic lookups, not from the file. The file's cover page reads "Published online: 28 Aug 2020," and its first page states: "This article has been republished with minor changes. These changes do not impact the academic content of the article." The file doesn't say what changed. The specification cites the file.
- **SHA-256:** `175b93fc0d6c70807baa27601e4e9682f3e30bb318464fa751b7c5910ee882b5`
- **Size:** 3,007,104 bytes, 17 pages.
- **Terms of use:** The cover page refers to the publisher's terms and conditions. No open license is stated. **Licensing flag:** Covered by the product owner's general permission (D-112).

## Sources for values the papers don't print

The product owner allowed the authors' online calculators as sources (D-117). The build looked first for documents by the same authors that print the missing values exactly, because a value read from a calculator's rounded output is approximate. None of these files is in the repository; each was saved outside it and is recorded here. The specifications record which value comes from which document.

### Authors' calculator workbooks

The authors' research page links an Excel version of each tool:

- **Linking page:** Auburn University Human Systems Integration Center, "Research" page, [https://eng.auburn.edu/human-systems-integration-center/research/research-2.html](https://eng.auburn.edu/human-systems-integration-center/research/research-2.html). Retrieved October 7, 2026, 22:32 UTC. SHA-256 `453678e8e930d64c4c783d7eef529d35ea007db96d5fe1b97578a46cf8d83bc1`. An Internet Archive capture of the older page that the Shoulder Tool paper cites (September 28, 2020) links the same files.

| Tool          | Workbook as named on Box                           | Version line in the workbook                | Shared link                                                                                                    | Retrieved (UTC)        | Size (bytes) | SHA-256                                                            |
| ------------- | -------------------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------- | ------------ | ------------------------------------------------------------------ |
| LiFFT         | `LiFFT_v1.4.0_locked-New.xlsm`                     | "Version 1.4.0 - Last updated 06/05/2018"   | [auburn.box.com/s/66hq1pht73xi9el7eq0jvg309rqqt1ah](https://auburn.box.com/s/66hq1pht73xi9el7eq0jvg309rqqt1ah) | October 7, 2026, 23:05 | 499,982      | `6d67fb470794fc12e8971f4710c8c47d8b87b198427acbd9ce4b8f5b7b975a81` |
| Shoulder Tool | `shoulder_tool_one_shoulder_locked-1.xlsm`         | "Version 1.0.0 - Last updated on 6/11/2019" | [auburn.box.com/s/df6aqnspkpjd95bkis084c7utheqhnjy](https://auburn.box.com/s/df6aqnspkpjd95bkis084c7utheqhnjy) | October 7, 2026, 22:33 | 936,138      | `929450451344bafd83a3a18ee5faf12e8d85acbcfd0c5e8e2aaa3f3eeea7522e` |
| DUET          | `The Distal Upper Extremity Tool_DUET_v1.3.0.xlsm` | "Version 1.3.0 - Last updated 04/19/2018"   | [auburn.box.com/s/dfdko7lnmeqc99ro4wtrb3vr2rkyhch3](https://auburn.box.com/s/dfdko7lnmeqc99ro4wtrb3vr2rkyhch3) | October 7, 2026, 22:35 | 1,249,565    | `a3e95040271481a21beebaca548ec780de9a405f180ee5a330cd603e75534b6b` |

- **Terms of use:** Each workbook prints a copyright line, for example "2016 - 2019 © Sean Gallagher, Richard Sesek, Mark Schall, Rong Huangfu" (LiFFT), and no license. Covered by the product owner's answers (D-117, D-118).
- **Handling:** The workbooks contain macros. The build read their cells with tools that don't run macros, and never opened them in a program that could.

### Documents that print the same values

These documents are by the tools' authors and corroborate the workbooks. They are recorded because the specifications cite them:

- **Zelik et al. (2022):** Zelik KE, Nurse CA, Schall MC Jr, Sesek RF, Marino MC, Gallagher S. An ergonomic assessment tool for evaluating the effect of back exoskeletons on injury risk. Applied Ergonomics. 2022;99:103619. [https://doi.org/10.1016/j.apergo.2021.103619](https://doi.org/10.1016/j.apergo.2021.103619). PubMed Central PMC9827614 (NIH author manuscript). Full-text XML retrieved October 7, 2026, 18:18 UTC from the NCBI E-utilities service, 132,514 bytes, SHA-256 `6c2c610d6877110e6553488d8a2123d91e618fabe0a82d4dde6f899a4d462844`. Terms: PubMed Central states "This file is available for text mining. It may also be used consistent with the principles of fair use under the copyright law." It prints LiFFT's damage and risk equations with rounded constants.
- **Bani Hani (2019):** Bani Hani D. Development and Validation of a Cumulative Exposure Shoulder Risk Assessment Tool Based on the Fatigue-Failure Theory. Doctoral dissertation, Auburn University, 2019. [https://etd.auburn.edu/handle/10415/6964](https://etd.auburn.edu/handle/10415/6964). PDF retrieved October 7, 2026, 18:16 UTC, 4,214,886 bytes, SHA-256 `813d154ad76c5566bb2b04c140fe69ae89f5a9c838442f3209dc9626458a5224`. Terms: "Copyright 2019 by Dania Bani Hani"; no license. It prints the Shoulder Tool's fitted risk equations, including the one the calculator uses.
- **Gallagher et al. (2017), version of record:** the published LiFFT article, from CDC Stacks [https://stacks.cdc.gov/view/cdc/211289](https://stacks.cdc.gov/view/cdc/211289). PDF retrieved October 7, 2026, 18:20 UTC, 1,729,059 bytes, SHA-256 `dd086b3c0d59833a0a2f9d5f6b7d61efb777d7d2e30f296338bdcc9d46b608a8`. Terms: "© 2017 Elsevier Ltd. All rights reserved." It contains the figures and Table 1 that the supplied manuscript lacks, including two screenshots of LiFFT version 1.1. It prints neither the moment-to-damage equation nor the risk equation.

### Documents reviewed and not used for values

- Gallagher S. "New and Easy to Use Ergonomics Risk Assessment Tools for the Back, Distal Upper Extremity and Shoulder," ErgoExpo slides, 2021 ([PDF](https://ergocentral.ergoexpo.com/wp-content/uploads/2021/01/Gallagher_Michael_011921.pdf), SHA-256 `cfe50a648876e02308ff30ef9d0c5fa33af364de90fdd9282aa379c98ff9aeb9`). Prints the same Shoulder Tool risk equation as the workbook.
- Mehdizadeh A, et al. Job rotation and work-related musculoskeletal disorders: a fatigue-failure perspective. Ergonomics. 2020;63(4):461-476 ([CDC Stacks 230662](https://stacks.cdc.gov/view/cdc/230662), SHA-256 `e751d7ac3519e9f4ee2c9a241e2cd0c2d86d4ab9b01aae2cb6f9e32bf64511db`). Prints LiFFT and DUET risk coefficients in a different functional form; its DUET form doesn't reproduce the DUET paper's or the calculator's examples, so it isn't used.
- Smith NC. In Vitro Tensile Fatigue of Human Flexor Digitorum Profundus and Superficialis Tendons. Doctoral dissertation, Auburn University, 2019 ([PDF](https://etd.auburn.edu/handle/10415/6896), SHA-256 `1e5dc496eed4b88aede63022003fe6f9b27c29c8f6ce2950969eda6b8af8a6b5`). Prints an alternative research table of damage per cycle that no calculator uses.
- Rempel D, Gallagher S. Workplace Risk Assessment Tools for Preventing Shoulder Disorders (abstract). Safety and Health at Work. 2022;13:S29-S30 ([CDC Stacks 231258](https://stacks.cdc.gov/view/cdc/231258), SHA-256 `852c4ee246a9d88a0f3b15e5de568e1b781c57fd42eb583b0a922bace7284556`). Describes the Shoulder Tool; prints no values.

## Reference tools

These public calculators support reference-tool parity tests. The build reads their pages but sends no bulk or automated calculation requests. **Terms of use:** The LiFFT, DUET, and Shoulder Tool pages carry author copyright notices ("© 2016 - 2022," "© 2016 - 2023," and "© 2019 - 2022"). The method documents quote them briefly for verification only. **Licensing flag** for any reuse beyond that.

| Tool                             | Address                                                       | Retrieved       | SHA-256 of the HTML                                                | Result                                                                         |
| -------------------------------- | ------------------------------------------------------------- | --------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| The Shoulder Tool, English units | `https://theshouldertool.pythonanywhere.com/en/unit/english/` | October 6, 2026 | `377928660ad527dab0a11dc5a3543da026172ed429a382ebd0233ee2cb14744d` | Retrieved                                                                      |
| The Shoulder Tool, instructions  | `https://theshouldertool.pythonanywhere.com/en/instruction/`  | October 6, 2026 | `74fa0600802d0eb619547335c4e560b3acc078228b4576747c5174a5f3a2d2ee` | Retrieved                                                                      |
| LiFFT                            | `http://lifft.pythonanywhere.com/`                            | October 6, 2026 | `a2261703fdfa53e3a5fb1048d7a7e46f0532d51e4ef141a8bd77b433d9e26ec0` | Retrieved. Redirected to `https://lifft.pythonanywhere.com/en/unit/english/`.  |
| DUET                             | `http://duet.pythonanywhere.com/`                             | October 6, 2026 | `2511d1b48703af97dad75316a40cfc620a3b391c527b3c5db60693a3947fa9fa` | Retrieved. Redirected to `https://duet.pythonanywhere.com/`.                   |
| LiFFT, instructions              | `https://lifft.pythonanywhere.com/instruction/`               | October 6, 2026 | `9b2809471fe12423d3ce2cd6054c1305622936d33d0c8b2588c2733e1598324d` | Retrieved. Version 1.4.1, last updated August 26, 2019.                        |
| DUET, instructions               | `https://duet.pythonanywhere.com/instruction/`                | October 6, 2026 | `2eb3c1753fa18759e9d27784cf80700d242414a7fdcc7a87a4e2ccfbc94ad736` | Retrieved. Version 1.3.1, last updated November 28, 2023.                      |
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
