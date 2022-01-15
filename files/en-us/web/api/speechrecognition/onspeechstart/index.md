---
title: SpeechRecognition.onspeechstart
slug: Web/API/SpeechRecognition/onspeechstart
tags:
  - API
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - onspeechstart
  - recognition
  - speech
browser-compat: api.SpeechRecognition.onspeechstart
---
{{APIRef("Web Speech API")}}

The **`onspeechstart`** property of the
{{domxref("SpeechRecognition")}} interface represents an event handler that will run
when sound recognized by the speech recognition service as speech has been detected
(when the
[`speechstart`](/en-US/docs/Web/API/SpeechRecognition/speechstart_event)
event fires.)

## Syntax

```js
mySpeechRecognition.onspeechstart = function() { /* ... */ };
```

## Examples

```js
recognition.onspeechstart = function() {
  console.log('Speech has been detected');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
