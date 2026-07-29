---
title: "SpeechRecognitionEvent: results property"
short-title: results
slug: Web/API/SpeechRecognitionEvent/results
page-type: web-api-instance-property
browser-compat: api.SpeechRecognitionEvent.results
---

{{APIRef("Web Speech API")}}

The **`results`** read-only property of the
{{domxref("SpeechRecognitionEvent")}} interface returns a
{{domxref("SpeechRecognitionResultList")}} object representing all the speech
recognition results for the current session.

Specifically this object will contain all final results that have been returned,
followed by the current best hypothesis for all interim results. When subsequent
{{domxref("SpeechRecognition.result_event", "result")}} events are fired, interim results may be overwritten by a newer
interim result or by a final result — they may even be removed, if they are at the end
of the "results" array and the array length decreases. Final results on the other hand
will not be overwritten or removed.

## Value

A {{domxref("SpeechRecognitionResultList")}} object.

## Examples

This code is excerpted from our
[Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) example.

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
