// One Emoji, One Smile — make.fun bounty u-0xkianno-one-emoji-one-smile-5470751f
//
// Writes exactly one emoji to /output/entry.txt: 🫶 (heart hands, U+1FAF6).
// No trailing newline, no words, no caption — one emoji and nothing else.
//
// Why this emoji: a stranger glancing at a phone screen reads heart hands
// at once as a warm, friendly gesture — affection and gratitude with no
// words needed. It is universal across ages and backgrounds, carries no
// irony, in-joke, intimacy or flirtation that would read oddly from a
// stranger, and it is clearly a chosen gesture rather than the first
// default smiley that comes to mind.
//
// Gate: /output/entry.txt must be UTF-8 text of 1 to 8 characters, not
// only white space. This file is exactly 1 character (U+1FAF6, 4 bytes),
// with no trailing newline, so it passes with nothing to trim.

import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🫶";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
