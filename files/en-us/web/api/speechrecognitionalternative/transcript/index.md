---
title: "SpeechRecognitionAlternative: transcript property"
short-title: transcript
slug: Web/API/SpeechRecognitionAlternative/transcript
page-type: web-api-instance-property
browser-compat: api.SpeechRecognitionAlternative.transcript
---

{{APIRef("Web Speech API")}}

The **`transcript`** read-only property of the
{{domxref("SpeechRecognitionResult")}} interface returns a string containing the
transcript of the recognized word(s).

For continuous recognition, leading or trailing whitespace will be included where
necessary so that concatenation of consecutive {{domxref("SpeechRecognitionResult")}}s
produces a proper transcript of the session.

## Value

A string.

## Examples

This code is excerpted from our
[Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) example.

```js
recognition.onresult = (event) => {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at position 0.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects
  // that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
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
