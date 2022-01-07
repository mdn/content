---
title: SpeechRecognition.onstart
slug: Web/API/SpeechRecognition/onstart
tags:
  - API
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - onstart
  - recognition
  - speech
browser-compat: api.SpeechRecognition.onstart
---
{{APIRef("Web Speech API")}}

The **`onstart`** property of the
{{domxref("SpeechRecognition")}} interface represents an event handler that will run
when the speech recognition service has begun listening to incoming audio with intent to
recognize grammars associated with the current `SpeechRecognition` (when the
[start event](/en-US/docs/Web/API/SpeechRecognition/start_event) fires.)

## Syntax

```js
mySpeechRecognition.onstart = function() { /* ... */ };
```

## Examples

```js
recognition.onstart = function() {
  console.log('Speech recognition service has started');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
