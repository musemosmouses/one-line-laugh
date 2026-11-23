// One-Line Laugh: writes a single original one-liner (one sentence,
// at most 200 characters) to entry.txt.
// The line is a fixed string: no randomness, no network, no clock, so
// the program is fully deterministic and writes byte-identical output
// on every run. The output directory comes from MAKEFUN_OUTPUT_DIR,
// falling back to a local out/ directory for manual runs.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one sentence, under the 200-character cap.
// Setup names an everyday truth (wanting affection, and dodging
// commitment); the twist lands at the very end and still makes sense:
// a cactus saying yes is the most commitment the speaker got all year.
const LINE =
  "I asked my cactus for a hug and it said yes, which is the most commitment I've had all year.";

// Guard: the gate rejects anything over 200 characters (or empty), so
// fail loudly instead of writing an invalid entry.
if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry length ${LINE.length} is outside 1..200 characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "out");
mkdirSync(outDir, { recursive: true });
// Write the line exactly, with no trailing newline, so the file holds
// precisely the one sentence the judge reads.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
