---
title: SpeechRecognition.serviceURI
slug: Web/API/SpeechRecognition/serviceURI
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - recognition
  - serviceURI
  - speech
browser-compat: api.SpeechRecognition.serviceURI
---
{{APIRef("Web Speech API")}}{{Deprecated_Header}}{{SeeCompatTable}}

The **`serviceURI`** property of the
{{domxref("SpeechRecognition")}} interface specifies the location of the speech
recognition service used by the current `SpeechRecognition` to handle the
actual recognition. The default is the user agent's default speech service.

## Syntax

```js
var myServiceURI = mySpeechRecognition.serviceURI;
mySpeechRecognition.serviceURI = 'path/to/my/service/';
```

### Value

A {{domxref("DOMString")}} representing the URI of the speech recognition service.

## Examples

```js
var recognition = new SpeechRecognition();

recognition.serviceURI = 'http://www.example.com';

...
```

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
