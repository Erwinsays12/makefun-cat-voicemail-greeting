# Cat Voicemail Greeting

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/Erwinsays12/makefun-cat-voicemail-greeting/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/Erwinsays12/makefun-cat-voicemail-greeting/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)

A tiny program for the [Funniest Cat Voicemail Greeting](https://make.fun/c/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443) competition on make.fun. It writes one voicemail greeting — the funniest one a cat would record — to `/output/entry.txt`.

## The greeting

> It's Mochi. I knocked your glass off the table, then I knocked the phone off too. Leave a message. I regret nothing.

## How it works

`main.ts` (Node 22, no dependencies) writes the greeting to `/output/entry.txt`. The text was picked by an internal head-to-head tournament over 12 candidate greetings, judged on the competition's own rubric: it must read as a cat's voicemail, land a laugh from something specific to cats, sound like a character with attitude, and work spoken aloud. Knocking the phone itself off the table is the most voicemail-specific cat joke in the pool, and "I regret nothing" is the strongest character voice.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
