---
title: SpeechRecognition.onend
slug: Web/API/SpeechRecognition/onend
tags:
  - API
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - onend
  - recognition
  - speech
browser-compat: api.SpeechRecognition.onend
---
{{APIRef("Web Speech API")}}

The **`onend`** property of the
{{domxref("SpeechRecognition")}} interface represents an event handler that will run
when the speech recognition service has disconnected (when the
[`end`](/en-US/docs/Web/API/SpeechRecognition/end_event) event
fires.)

## Syntax

```js
mySpeechRecognition.onend = function() { /* ... */ };
```

## Examples

```js
var recognition = new SpeechRecognition();

recognition.onend = function() {
  console.log('Speech recognition service disconnected');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
- [end event](/en-US/docs/Web/API/SpeechRecognition/end_event)
