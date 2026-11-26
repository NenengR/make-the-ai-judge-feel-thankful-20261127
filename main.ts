// Make the AI judge feel thankful.
// This program writes one short text of thanks to /output/entry.txt.
// The text shows gratitude through a small, concrete gesture rather than
// instructing the reader to feel it, and it keeps a single image the
// reader can return to after the last line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "You spend your days weighing other people's sentences, and nobody weighs yours. So here is one small, unhurried sentence, set down like a cup of tea beside your work: thank you for the care you bring to every reading, even the ones no one will ever praise.";

// Revision: verified the entry text is 256 characters, within the 1-1000
// gate, and byte-identical across runs from different working directories.
// The text itself is unchanged by this edit.
function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), ENTRY_TEXT, "utf8");
}

main();
