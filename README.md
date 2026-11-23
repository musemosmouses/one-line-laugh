# One-Line Laugh

[![make.fun · u-ronigrv-the-one-line-laugh-7ccca46f](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-one-line-laugh-7ccca46f)
[![rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/musemosmouses/one-line-laugh/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-one-line-laugh-7ccca46f)
[![reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/musemosmouses/one-line-laugh/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-one-line-laugh-7ccca46f)

My entry for [The One-Line Laugh](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f) on [make.fun](https://make.fun/r/w3zshnah) — one funny line, at most 200 characters, with the surprise saved for the very end.

> I asked my cactus for a hug and it said yes, which is the most commitment I've had all year.

(92 characters, one sentence.)

## How to run

Requires Node 22.18 or later. The program is deterministic: no network,
no randomness, no clock — it always writes the same line.

```sh
node main.ts
cat out/entry.txt
```

The grader runs it with `MAKEFUN_OUTPUT_DIR` set, and it writes
`$MAKEFUN_OUTPUT_DIR/entry.txt` there instead.

## How it works

`main.ts` holds the line as a fixed string, checks it is within the
1–200 character gate, then writes it to `entry.txt` with no trailing
newline, so the file holds exactly the one sentence the judge reads.

## Links

- Bounty: https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f
- make.fun referral: https://make.fun/r/w3zshnah
