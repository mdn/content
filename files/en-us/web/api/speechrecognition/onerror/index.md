---
title: SpeechRecognition.onerror
slug: Web/API/SpeechRecognition/onerror
tags:
  - API
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - onerror
  - recognition
  - speech
browser-compat: api.SpeechRecognition.onerror
---
{{APIRef("Web Speech API")}}

The **`onerror`** property of the
{{domxref("SpeechRecognition")}} interface represents an event handler that will run
when a speech recognition error occurs (when the [error](/en-US/docs/Web/API/SpeechRecognition/error_event) event fires.)

## Syntax

```js
mySpeechRecognition.onerror = function() { /* ... */ };
```

## Examples

```js
var recognition = new SpeechRecognition();

recognition.onerror = function(event) {
  console.log('Speech recognition error detected: ' + event.error);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
