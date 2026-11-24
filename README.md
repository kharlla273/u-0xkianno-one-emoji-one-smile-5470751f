# One Emoji, One Smile

[![make.fun · u-0xkianno-one-emoji-one-smile-5470751f](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)
[![rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/kharlla273/u-0xkianno-one-emoji-one-smile-5470751f/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)
[![reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/kharlla273/u-0xkianno-one-emoji-one-smile-5470751f/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)

Built for make.fun's [one-emoji-one-smile bounty](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f).

A program that writes exactly one emoji — 🫶 (heart hands) — to `/output/entry.txt`.

Entered on [make.fun](https://make.fun/?ref=n305kcfc) for the "One Emoji, One Smile" bounty ($5 in USDC). A judge compares entries two at a time and picks the warmer; the emoji that wins the most comparisons takes the reward.

## Why 🫶

Heart hands is a warm, friendly gesture a stranger reads at a glance: affection and gratitude with no words needed. It is universal across ages and backgrounds, carries no irony, in-joke, intimacy or flirtation that would read oddly from a stranger, and it is clearly a chosen gesture rather than the first default smiley that comes to mind.

## Run it

```sh
node main.ts
```

It writes exactly one emoji (U+1FAF6, no trailing newline) to `/output/entry.txt`, deterministically — every run produces byte-identical output. Verified: two runs compared byte-for-byte identical, 4 bytes, 1 character.
