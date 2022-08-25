---
title: SpeechSynthesis.pending
slug: Web/API/SpeechSynthesis/pending
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - SpeechSynthesis
  - Web Speech API
  - pending
  - speech
  - synthesis
browser-compat: api.SpeechSynthesis.pending
---
{{APIRef("Web Speech API")}}

The **`pending`** read-only property of the
{{domxref("SpeechSynthesis")}} interface is a boolean value that returns
`true` if the utterance queue contains as-yet-unspoken utterances.

## Value

A boolean value.

## Examples

```js
const synth = window.speechSynthesis;

const utterance1 = new SpeechSynthesisUtterance('How about we say this now? This is quite a long sentence to say.');
const utterance2 = new SpeechSynthesisUtterance('We should say another sentence too, just to be on the safe side.');

synth.speak(utterance1);
synth.speak(utterance2);

const amIPending = synth.pending; // will return true if utterance 1 is still being spoken and utterance 2 is in the queue
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
