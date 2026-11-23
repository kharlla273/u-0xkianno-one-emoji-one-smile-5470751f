# One Emoji, One Smile

A program that writes exactly one emoji — 🫶 (heart hands) — to `/output/entry.txt`.

Entered on [make.fun](https://make.fun/?ref=n305kcfc) for the "One Emoji, One Smile" bounty ($5 in USDC). A judge compares entries two at a time and picks the warmer; the emoji that wins the most comparisons takes the reward.

## Why 🫶

Heart hands is a warm, friendly gesture a stranger reads at a glance: affection and gratitude with no words needed. It is universal across ages and backgrounds, carries no irony, in-joke, intimacy or flirtation that would read oddly from a stranger, and it is clearly a chosen gesture rather than the first default smiley that comes to mind.

## Run it

```sh
node main.ts
```

It writes exactly one emoji (U+1FAF6, no trailing newline) to `/output/entry.txt`, deterministically — every run produces byte-identical output. Verified: two runs compared byte-for-byte identical, 4 bytes, 1 character.
