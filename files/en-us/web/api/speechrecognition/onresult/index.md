---
title: SpeechRecognition.onresult
slug: Web/API/SpeechRecognition/onresult
tags:
  - API
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - onresult
  - recognition
  - speech
browser-compat: api.SpeechRecognition.onresult
---
{{APIRef("Web Speech API")}}

The **`onresult`** property of the
{{domxref("SpeechRecognition")}} interface represents an event handler that will run
when the speech recognition service returns a result — a word or phrase has been
positively recognized and this has been communicated back to the app (when the [`result` event](/en-US/docs/Web/API/SpeechRecognition/result_event) fires.)

## Syntax

```js
mySpeechRecognition.onresult = function() { /* ... */ };
```

## Examples

This code is excerpted from our [Speech
color changer](https://github.com/mdn/web-speech-api/blob/master/speech-color-changer/script.js) example.

```js
recognition.onresult = function(event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at position 0.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects
  // that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  var color = event.results[0][0].transcript;
  diagnostic.textContent = 'Result received: ' + color + '.';
  bg.style.backgroundColor = color;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
