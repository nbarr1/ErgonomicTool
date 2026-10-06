# DUET (`duet`): specification status

- **Status:** **Blocked.** The primary source hasn't been retrieved, so no specification exists. Operating rule 2 of the build prompt stops work on this method until it is.
- **Primary source:** Gallagher S, Schall MC, Sesek RF, Huangfu R. An upper extremity risk assessment tool based on material fatigue failure theory: The Distal Upper Extremity Tool (DUET). Human Factors. 2018;60(8):1146-1162. [https://doi.org/10.1177/0018720818789319](https://doi.org/10.1177/0018720818789319)
- **Why it's blocked:** The article is subscription-only. OpenAlex, Semantic Scholar, and Europe PMC record no open copy (see the [source log](../sources.md)). Open question OQ-102 asks the product owner for a copy.

## What this document contains

This document records what the public DUET pages state. **Nothing here is a specification.** No equation, coefficient, threshold, or damage-risk relationship is recorded. Every statement below must be checked against the paper.

## What the public pages state

Sources: the DUET calculator page (version 1.3.1) and its instructions page ("Version 1.3.1 - Last updated 11/28/2023"), retrieved October 6, 2026. Checksums are in the source log.

- **Purpose:** "to determine the cumulative upper extremity load experienced during a workday."
- **Outcome:** "a probability of an upper extremity outcome (specifically a first time office visit due to upper extremity symptoms) is calculated (Gallagher et al., 2017)." The cited 2017 reference is a conference proceedings paper, not the 2018 journal article.
- **Inputs for each task:** "1) a rating of the intensity of the exertion for the task; 2) the number of repetitions of the task during the workday."
- **Rating by the worker:** The worker is shown the OMNI-RES scale and instructed: "Please give your subjective intensity of effort, strain, discomfort, and/or fatigue that you feel during performance of this task guided by the descriptors on the 10-point scale provided." The instruction is described as "modified from Robertson et al., 2003."
- **Rating by an observer:** The page recommends this relationship, while noting that "a professional ergonomist should always use their best judgement":

  | Observation    | OMNI-RES score |
  | -------------- | -------------- |
  | Extremely Easy | 0              |
  | Easy           | 2              |
  | Somewhat Easy  | 4              |
  | Somewhat Hard  | 6              |
  | Hard           | 8              |
  | Extremely Hard | 10             |

  The calculator's dropdown offers every whole number from 0 to 10, with these descriptors on the even numbers.

- **Calculator columns:** OMNI-RES Scale, Repetitions (per work day), Damage (cumulative), % Total (damage), with 10 task rows.
- **Multiple tasks:** "The cumulative damage associated with each task will be summed by the DUET tool to determine the daily dose of cumulative upper extremity damage."
- **Binning:** "upper extremity tasks with the same exertion level would be summed together."

## Worked examples on the instructions page

| Example            | Inputs stated in the text                                   | Result stated in the text                                                                                                         |
| ------------------ | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Mono-task          | OMNI-RES 4 ("Somewhat Easy"), 1,350 repetitions per workday | "approximately a 32.1% probability of experiencing distal upper extremity symptoms"                                               |
| Multiple exertions | Three tasks, shown only in a screenshot                     | Combined probability 48.2%. Task 3 "accounts for approximately 92.5% of the total damage." With task 3 at "Somewhat Easy," 29.5%. |
| Highly variable    | Bins shown only in a screenshot                             | "greater than 60%"                                                                                                                |

## Findings for the reviewer

- **The calculator's damage calculation has changed.** The version history lists "V1.2.0 - 02/12/2018: updated damage per cycle and the probability of distal upper extremity outcome (%)" and "V1.3.0 - 04/19/2018: updated damage per cycle and the related damage-risk relationship with rounding correction." Whether the published paper matches version 1.3.x is unknown (OQ-140).
- **The rating is subjective or observational.** Repeatability between analysts depends on how the rating is obtained. The application must record who gave the rating (worker or observer) as input provenance.
- **Ten task rows:** As for LiFFT, whether the limit is part of the method can only be answered from the paper.
