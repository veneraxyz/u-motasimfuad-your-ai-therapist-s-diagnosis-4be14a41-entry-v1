import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const DIAGNOSIS =
  "Diagnosis: chronic 'I can fix them' syndrome — you keep collecting red flags like Pokémon. Prescription: one week of saying 'no' and no 2 a.m. texts to your ex.";

// Validation guard: non-blank, exactly one line, 1-200 chars, no control chars.
if (DIAGNOSIS.length === 0) {
  throw new Error("diagnosis line is empty");
}
if (DIAGNOSIS.trim().length === 0) {
  throw new Error("diagnosis line is blank");
}
if (DIAGNOSIS.length > 200) {
  throw new Error(`diagnosis line is ${DIAGNOSIS.length} chars, max is 200`);
}
if (DIAGNOSIS.includes("\n") || DIAGNOSIS.includes("\r")) {
  throw new Error("diagnosis line must be exactly one line");
}
for (const ch of DIAGNOSIS) {
  const code = ch.codePointAt(0) as number;
  if (code < 0x20 && code !== 0x09) {
    throw new Error("diagnosis line contains a control character");
  }
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : resolve("/output");
mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, DIAGNOSIS, "utf8");

// Read-back guard: re-read entry.txt and assert byte-equality with what was written.
const readBack = readFileSync(outPath, "utf8");
if (readBack !== DIAGNOSIS) {
  throw new Error("read-back mismatch: entry.txt does not match the diagnosis line");
}
console.log(`wrote ${outPath} (${DIAGNOSIS.length} chars)`);
