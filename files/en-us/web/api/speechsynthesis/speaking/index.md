---
title: SpeechSynthesis.speaking
slug: Web/API/SpeechSynthesis/speaking
tags:
  - API
  - Property
  - Reference
  - SpeechSynthesis
  - Web Speech API
  - speaking
  - speech
  - synthesis
browser-compat: api.SpeechSynthesis.speaking
---
{{APIRef("Web Speech API")}}

The **`speaking`** read-only property of the
{{domxref("SpeechSynthesis")}} interface is a boolean value that returns
`true` if an utterance is currently in the process of being spoken — even
if `SpeechSynthesis` is in a
{{domxref("SpeechSynthesis/pause()","paused")}} state.

## Value

A boolean value.

## Examples

```js
var synth = window.speechSynthesis;

var utterance1 = new SpeechSynthesisUtterance('How about we say this now? This is quite a long sentence to say.');
var utterance2 = new SpeechSynthesisUtterance('We should say another sentence too, just to be on the safe side.');

synth.speak(utterance1);
synth.speak(utterance2);

var amISpeaking = synth.speaking; // will return true if utterance 1 or utterance 2 are currently being spoken
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
