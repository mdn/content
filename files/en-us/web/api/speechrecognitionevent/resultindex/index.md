---
title: SpeechRecognitionEvent.resultIndex
slug: Web/API/SpeechRecognitionEvent/resultIndex
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechRecognitionEvent
  - Web Speech API
  - recognition
  - resultIndex
  - speech
browser-compat: api.SpeechRecognitionEvent.resultIndex
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`resultIndex`** read-only property of the
{{domxref("SpeechRecognitionEvent")}} interface returns the lowest index value result in
the {{domxref("SpeechRecognitionResultList")}} "array" that has actually changed.

The {{domxref("SpeechRecognitionResultList")}} object is not an array, but it has a
getter that allows it to be accessed by array syntax.

## Syntax

```js
var myResultIndex = event.resultIndex;
```

### Value

A number.

## Examples

```js
recognition.onresult = function(event) {
  var color = event.results[0][0].transcript;
  diagnostic.textContent = 'Result received: ' + color + '.';
  bg.style.backgroundColor = color;
  console.log(event.resultIndex); // returns 0 if there is only one result
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Firefox OS permissions

To use speech recognition in an app, you need to specify the following permissions in
your [manifest](/en-US/docs/Web/Apps/Build/Manifest):

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
