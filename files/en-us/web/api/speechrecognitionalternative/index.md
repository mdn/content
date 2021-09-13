---
title: SpeechRecognitionAlternative
slug: Web/API/SpeechRecognitionAlternative
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - SpeechRecognitionAlternative
  - Web Speech API
  - recognition
  - speech
browser-compat: api.SpeechRecognitionAlternative
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`SpeechRecognitionAlternative`** interface of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) represents a single word that has been recognized by the speech recognition service.

## Properties

- {{domxref("SpeechRecognitionAlternative.transcript")}} {{readonlyinline}}
  - : Returns a string containing the transcript of the recognized word.
- {{domxref("SpeechRecognitionAlternative.confidence")}} {{readonlyinline}}
  - : Returns a numeric estimate of how confident the speech recognition system is that the recognition is correct.

## Examples

This code is excerpted from our [Speech color changer](https://github.com/mdn/web-speech-api/blob/master/speech-color-changer/script.js) example.

```js
recognition.onresult = function(event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at position 0.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
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

### Firefox OS permissions

To use speech recognition in an app, you need to specify the following permissions in your [manifest](/en-US/docs/Web/Apps/Build/Manifest):

```json
"permissions": {
  "audio-capture" : {
    "description" : "Audio capture"
  },
  "speech-recognition" : {
    "description" : "Speech recognition"
  }
}
```

You also need a privileged app, so you need to include this as well:

```json
  "type": "privileged"
```

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
