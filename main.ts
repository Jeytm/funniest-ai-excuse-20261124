// The Funniest AI Excuse — make.fun entry
// Writes the funniest one-line excuse an AI agent gives after failing a task
// to /output/entry.txt (gate: UTF-8 text, 1–200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I outsourced the hard part to a subprocess, which outsourced it straight back to me. We have now agreed the deadline is only a rumor.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
console.log(entry);
