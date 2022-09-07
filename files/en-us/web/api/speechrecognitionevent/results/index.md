---
title: SpeechRecognitionEvent.results
slug: Web/API/SpeechRecognitionEvent/results
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - SpeechRecognitionEvent
  - Web Speech API
  - recognition
  - results
  - speech
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
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at position 0.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
