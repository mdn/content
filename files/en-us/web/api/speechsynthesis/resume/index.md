---
title: "SpeechSynthesis: resume() method"
short-title: resume()
slug: Web/API/SpeechSynthesis/resume
page-type: web-api-instance-method
browser-compat: api.SpeechSynthesis.resume
---

{{APIRef("Web Speech API")}}

The **`resume()`** method of the {{domxref("SpeechSynthesis")}}
interface puts the `SpeechSynthesis` object into a non-paused state:
resumes it if it was already paused.

## Syntax

```js-nolint
resume()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
let synth = window.speechSynthesis;

let utterance1 = new SpeechSynthesisUtterance(
  "How about we say this now? This is quite a long sentence to say.",
);
let utterance2 = new SpeechSynthesisUtterance(
  "We should say another sentence too, just to be on the safe side.",
);

synth.speak(utterance1);
synth.speak(utterance2);

synth.pause(); // pauses utterances being spoken
synth.resume(); // resumes speaking
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
