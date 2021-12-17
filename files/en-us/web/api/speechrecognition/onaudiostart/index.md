---
title: SpeechRecognition.onaudiostart
slug: Web/API/SpeechRecognition/onaudiostart
tags:
  - API
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - onaudiostart
  - recognition
  - speech
browser-compat: api.SpeechRecognition.onaudiostart
---
{{APIRef("Web Speech API")}}

The **`onaudiostart`** property of the
{{domxref("SpeechRecognition")}} interface represents an event handler that will run
when the user agent has started to capture audio (when the {{event("audiostart")}} event
fires.)

## Syntax

```js
mySpeechRecognition.onaudiostart = function() { /* ... */ };
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

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
