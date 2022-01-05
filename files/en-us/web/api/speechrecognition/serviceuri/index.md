---
title: SpeechRecognition.serviceURI
slug: Web/API/SpeechRecognition/serviceURI
tags:
  - API
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - recognition
  - serviceURI
  - speech
  - Deprecated
browser-compat: api.SpeechRecognition.serviceURI
---
{{APIRef("Web Speech API")}}{{Deprecated_Header}}

The **`serviceURI`** property of the
{{domxref("SpeechRecognition")}} interface specifies the location of the speech
recognition service used by the current `SpeechRecognition` to handle the
actual recognition. The default is the user agent's default speech service.

## Value

A {{domxref("DOMString")}} representing the URI of the speech recognition service.

## Examples

```js
var recognition = new SpeechRecognition();

recognition.serviceURI = 'http://www.example.com';

...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
