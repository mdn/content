---
title: SpeechRecognitionAlternative.confidence
slug: Web/API/SpeechRecognitionAlternative/confidence
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechRecognitionAlternative
  - Web Speech API
  - confidence
  - recognition
  - speech
browser-compat: api.SpeechRecognitionAlternative.confidence
---
{{APIRef("Web Speech API")}}{{ SeeCompatTable() }}

The **`confidence`** read-only property of the
{{domxref("SpeechRecognitionResult")}} interface returns a numeric estimate of how
confident the speech recognition system is that the recognition is correct.

> **Note:** Mozilla's implementation of `confidence` is still
> being worked on — at the moment, it always seems to return 1.

## Syntax

```js
var myConfidence = speechRecognitionAlternativeInstance.confidence;
```

### Returns

A number betwen 0 and 1.

## Examples

This code is excerpted from our
[Speech color changer](https://github.com/mdn/web-speech-api/blob/master/speech-color-changer/script.js) example.

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
  console.log('Confidence: ' + event.results[0][0].confidence);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
