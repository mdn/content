---
title: SpeechRecognition.onspeechend
slug: Web/API/SpeechRecognition/onspeechend
tags:
  - API
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - onspeechend
  - recognition
  - speech
browser-compat: api.SpeechRecognition.onspeechend
---
{{APIRef("Web Speech API")}}

The **`onspeechend`** property of the
{{domxref("SpeechRecognition")}} interface represents an event handler that will run
when speech recognized by the speech recognition service has stopped being detected
(when the
[`speechend`](/en-US/docs/Web/API/SpeechRecognition/speechend_event)
event fires.)

## Syntax

```js
mySpeechRecognition.onspeechend = function() { /* ... */ };
```

## Examples

```js
recognition.onspeechend = function() {
  console.log('Speech has stopped being detected');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
