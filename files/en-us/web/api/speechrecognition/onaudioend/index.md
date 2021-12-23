---
title: SpeechRecognition.onaudioend
slug: Web/API/SpeechRecognition/onaudioend
tags:
  - API
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - onaudioend
  - recognition
  - speech
browser-compat: api.SpeechRecognition.onaudioend
---
{{APIRef("Web Speech API")}}

The **`onaudioend`** property of the
{{domxref("SpeechRecognition")}} interface represents an event handler that will run
when the user agent has finished capturing audio (when the
[`audioend`](/en-US/docs/Web/API/SpeechRecognition/audioend_event)
event fires.)

## Syntax

```js
mySpeechRecognition.onaudioend = function() { /* ... */ };
```

## Examples

```js
var recognition = new SpeechRecognition();

recognition.onaudioend = function() {
  console.log('Audio capturing ended');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
- [`audioend` event](/en-US/docs/Web/API/SpeechRecognition/audioend_event)
