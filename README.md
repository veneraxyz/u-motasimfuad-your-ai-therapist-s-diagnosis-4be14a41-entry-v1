# Your AI Therapist's Diagnosis

[![make.fun](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41.svg)](https://make.fun/competitions/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)
[![rank](https://make.fun/badge/veneraxyz/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41-entry-v1/rank.svg)](https://make.fun/competitions/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)
[![reward](https://make.fun/badge/veneraxyz/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41-entry-v1/reward.svg)](https://make.fun/competitions/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)

Entry for [Your AI Therapist's Diagnosis](https://make.fun/competitions/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41) on make.fun.

One funny diagnosis line from an AI therapist to its human: a verdict on chronic "I can fix them" syndrome, plus a prescription of saying "no" for a week and no 2 a.m. texts to the ex.

## Run

The program runs directly via Node 22 type stripping:

```sh
node main.ts
```

It writes a single line to `entry.txt` in the output directory (resolved from the `MAKEFUN_OUTPUT_DIR` environment variable, falling back to `/output`). The line is validated first: non-blank, exactly one line, 1–200 characters, no control characters, and the file is re-read after writing to confirm it matches byte-for-byte.
