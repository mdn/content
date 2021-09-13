---
title: SpeechRecognition.onaudiostart
slug: Web/API/SpeechRecognition/onaudiostart
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - onaudiostart
  - recognition
  - speech
browser-compat: api.SpeechRecognition.onaudiostart
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`onaudiostart`** property of the
{{domxref("SpeechRecognition")}} interface represents an event handler that will run
when the user agent has started to capture audio (when the {{event("audiostart")}} event
fires.)

## Syntax

```js
mySpeechRecognition.onaudiostart = function() { ... };
```

## Examples

```js
var recognition = new SpeechRecognition();

recognition.onaudiostart = function() {
  console.log('Audio capturing started');
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
