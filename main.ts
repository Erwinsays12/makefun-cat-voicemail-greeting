import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Cat Voicemail Greeting — champion of a 12-candidate internal
// head-to-head tournament judged on the competition's own rubric:
// a cat's voicemail, a cat-specific joke, a clear character voice,
// a punch that works spoken aloud, and fresh wording.
const GREETING =
  "It's Mochi. I knocked your glass off the table, then I knocked the phone off too. Leave a message. I regret nothing.";

// The gate only accepts 1 to 120 characters of non-blank UTF-8 text.
// Refuse to write an invalid entry rather than ship one silently.
if (GREETING.length < 1 || GREETING.length > 120 || GREETING.trim().length === 0) {
  throw new Error(`greeting is ${GREETING.length} characters; the gate needs 1-120`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", GREETING, "utf8");
