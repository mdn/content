---
title: SpeechRecognitionResult.length
slug: Web/API/SpeechRecognitionResult/length
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - SpeechRecognitionResult
  - Web Speech API
  - length
  - recognition
  - speech
browser-compat: api.SpeechRecognitionResult.length
---
{{APIRef("Web Speech API")}}

The **`length`** read-only property of the
{{domxref("SpeechRecognitionResult")}} interface returns the length of the "array"
— the number of {{domxref("SpeechRecognitionAlternative")}} objects contained
in the result (also referred to as "n-best alternatives".)

The number of alternatives contained in the result depends on what the
{{domxref("SpeechRecognition.maxAlternatives")}} property was set to when the speech
recognition was first initiated.

## Value

A number.

## Examples

This code is excerpted from our [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) example.

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

  console.log(event.results[0].length);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
