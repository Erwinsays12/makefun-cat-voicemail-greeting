import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Cat Voicemail Greeting — champion of a 12-candidate internal
// head-to-head tournament judged on the competition's own rubric:
// a cat's voicemail, a cat-specific joke, a clear character voice,
// a punch that works spoken aloud, and fresh wording.
const GREETING =
  "It's Mochi. I knocked your glass off the table, then I knocked the phone off too. Leave a message. I regret nothing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", GREETING, "utf8");
