import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I survived the meeting that could have been an email by replying-all with a calendar invite for a meeting about the meeting.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke + "\n", "utf8");
console.log(joke);
