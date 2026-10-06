# LiFFT (`lifft`): specification status

- **Status:** **Blocked.** The primary source hasn't been retrieved, so no specification exists. Operating rule 2 of the build prompt stops work on this method until it is.
- **Primary source:** Gallagher S, Sesek RF, Schall MC, Huangfu R. Development and validation of an easy-to-use risk assessment tool for cumulative low back loading: The Lifting Fatigue Failure Tool (LiFFT). Applied Ergonomics. 2017;63:142-150. [https://doi.org/10.1016/j.apergo.2017.04.016](https://doi.org/10.1016/j.apergo.2017.04.016)
- **Why it's blocked:** The article is subscription-only. OpenAlex, Semantic Scholar, and Europe PMC record no open copy (see the [source log](../sources.md)). Open question OQ-102 asks the product owner for a copy.

## What this document contains

This document records what the public LiFFT pages state, so that the specification can start quickly once the paper is available. **Nothing here is a specification.** No equation, coefficient, threshold, or damage-risk relationship is recorded, because none may come from a secondary source. Every statement below must be checked against the paper.

## What the public pages state

Sources: the LiFFT calculator page (version 1.4.1) and its instructions page ("Version 1.4.1 - Last updated 08/26/2019"), retrieved October 6, 2026. Checksums are in the source log.

- **Purpose:** "to determine the cumulative low back load experienced during a workday. Based on LiFFT's cumulative damage measure, a probability that the job is high risk is calculated."
- **Outcome:** "A high-risk job is defined as a job having 12+ injuries per 200,000 hours worked (Marras et al., 1993)."
- **Inputs for each task:** "1) the weight of the load; 2) a measurement of the greatest horizontal distance from the hip joint to the center of the load during the lift (using a measuring tape); and 3) the number of repetitions of this task during the workday."
- **Calculator columns:** Lever Arm (inch), Load (lb), Moment (ft.lb), Repetitions (per work day), Damage (cumulative), % Total (damage), with 10 task rows, Total Cumulative Damage, and Probability of High Risk Job (%). Metric units are available.
- **Multiple tasks:** "The cumulative damage associated with each lift will be summed by the LiFFT tool to determine the daily dose of cumulative spine loading."
- **Binning:** For highly variable lifting, lifts within the same range of peak moments are grouped and "entered into the tool using the top load moment of the range."

## Worked examples on the instructions page

These are candidates for reference-tool parity tests. Whether they also appear in the paper is unknown.

| Example         | Inputs stated in the text                                                      | Result stated in the text                                                                                                         |
| --------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| Mono-task       | 30 lb load, 760 repetitions per workday, maximal horizontal distance 16 inches | "a 40% probability of being a high-risk job"                                                                                      |
| Multi-task      | Three tasks, shown only in a screenshot                                        | Combined probability 51%. Task 3 "accounts for about 81% of the total damage." With task 3's lever arm reduced to 15 inches, 38%. |
| Highly variable | Bins shown only in a screenshot                                                | Overall probability 48%                                                                                                           |

The screenshots weren't transcribed. A person records their values by hand if the reviewer wants them as fixtures.

## Findings for the reviewer

- **The calculator's damage-risk relationship has changed since the paper.** The instructions page's version history lists "V1.3.0 - 11/06/2017: updated damage - risk relationship and color coding calculation" and "V1.4.0 - 06/05/2018: updated damage - risk relationship." The paper was published in 2017. The current calculator therefore may not reproduce the paper's equations, and parity tests against it may fail for that reason (OQ-140).
- **Ten task rows:** The calculator has 10 rows. The build prompt asks whether that limit is part of the method. That can only be answered from the paper (OQ-102).
- **Color coding:** The version history mentions a "color coding calculation." The build prompt allows bands only where the source publishes thresholds, so any color bands must come from the paper.

## Next steps when the paper is available

1. Record the paper in the source log with its checksum and terms of use.
2. Write `docs/methods/lifft.md` as a full specification, transcribing every table twice.
3. Resolve OQ-140 with the reviewer before any parity test is written.
