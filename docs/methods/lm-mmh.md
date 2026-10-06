# LM-MMH equations (`lm-mmh`): specification status

- **Status:** **Blocked.** The primary source hasn't been retrieved, so no specification exists. Operating rule 2 of the build prompt stops work on this method until it is.
- **Primary source:** Potvin JR, Ciriello VM, Snook SH, Maynard WS, Brogmus GE. The Liberty Mutual manual materials handling (LM-MMH) equations. Ergonomics. 2021;64(8):955-970. [https://doi.org/10.1080/00140139.2021.1891297](https://doi.org/10.1080/00140139.2021.1891297)
- **Why it's blocked:** OpenAlex and Semantic Scholar record the article as open access under a CC BY-NC-ND license, but the publisher's site returned HTTP 403 to every automated request from this build, and Europe PMC lists no PubMed Central copy. Open question OQ-103 asks the product owner to download the PDF. OQ-009 asks whether the license permits implementing the equations in this application.
- **Reference tool:** The [Liberty Mutual manual materials handling population percentiles tool](https://libertymmhtables.libertymutual.com/) returned HTTP 403 (an Akamai "Access Denied" page). OQ-105 asks the product owner to record the interpretation figures from it by hand.

## What is known without the paper

Only what the build prompt states, all of which needs checking against the paper:

- The equations cover lifting, lowering, pushing, pulling, and carrying.
- For lifting and lowering, the inputs include frequency, height, distance, and horizontal reach, per the paper's abstract as shown in a search result.
- The output is a maximum acceptable load for 50% of the population, in kilograms, with coefficients of variation for other percentiles.
- The Liberty Mutual tool reports male and female population percentages. A search-result excerpt advises designing for at least 90% of the female population and flags tasks below 75% as much higher risk. Neither figure has been confirmed.
- The Work(s) manual gives large trunk twists and asymmetric hand forces as examples of tasks outside the scope of the LM-MMH equations.

This build didn't read the abstract itself. No equation, coefficient, threshold, or percentile rule is recorded.

## Licensing note

A CC BY-NC-ND license restricts commercial use and derivative works. Whether coding the published equations into this application is a use the license permits depends on the application's purpose and distribution, and on whether equations are protected at all where the application is used. That is a legal question for the product owner (OQ-009).
