---
title: "SpeechSynthesis: paused property"
short-title: paused
slug: Web/API/SpeechSynthesis/paused
page-type: web-api-instance-property
browser-compat: api.SpeechSynthesis.paused
---

{{APIRef("Web Speech API")}}

The **`paused`** read-only property of the
{{domxref("SpeechSynthesis")}} interface is a boolean value that returns
`true` if the `SpeechSynthesis` object is in a paused state, or `false` if not.

It can be set to {{domxref("SpeechSynthesis.pause()", "paused")}} even if nothing is
currently being spoken through it. If
{{domxref("SpeechSynthesisUtterance","utterances")}} are then added to the utterance
queue, they will not be spoken until the `SpeechSynthesis` object is
unpaused, using {{domxref("SpeechSynthesis.resume()")}}.

## Value

A boolean value.

## Examples

```js
const synth = window.speechSynthesis;

synth.pause();

const amIPaused = synth.paused; // will return true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
