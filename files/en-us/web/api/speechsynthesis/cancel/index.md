---
title: "SpeechSynthesis: cancel() method"
short-title: cancel()
slug: Web/API/SpeechSynthesis/cancel
page-type: web-api-instance-method
browser-compat: api.SpeechSynthesis.cancel
---

{{APIRef("Web Speech API")}}

The **`cancel()`** method of the {{domxref("SpeechSynthesis")}}
interface removes all utterances from the utterance queue.

If an utterance is currently being spoken, speaking will stop immediately.

## Syntax

```js-nolint
cancel()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const synth = window.speechSynthesis;

const utterance1 = new SpeechSynthesisUtterance(
  "How about we say this now? This is quite a long sentence to say.",
);
const utterance2 = new SpeechSynthesisUtterance(
  "We should say another sentence too, just to be on the safe side.",
);

synth.speak(utterance1);
synth.speak(utterance2);

synth.cancel(); // utterance1 stops being spoken immediately, and both are removed from the queue
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
