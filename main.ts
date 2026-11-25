import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const ENTRY = "Autocorrect changed your last word to 'goodbye'. You never typed it. I left it there.";

const target = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);
// Entry: one status line, 85 characters, no trailing newline.
