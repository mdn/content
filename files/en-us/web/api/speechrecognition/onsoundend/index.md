---
title: SpeechRecognition.onsoundend
slug: Web/API/SpeechRecognition/onsoundend
tags:
  - API
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - onsoundend
  - recognition
  - speech
browser-compat: api.SpeechRecognition.onsoundend
---
{{APIRef("Web Speech API")}}

The **`onsoundend`** property of the
{{domxref("SpeechRecognition")}} interface represents an event handler that will run
when any sound — recognisable speech or not — has stopped being detected (when the
[`soundend`](/en-US/docs/Web/API/SpeechRecognition/soundend_event)
event fires.)

## Syntax

```js
mySpeechRecognition.onsoundend = function() { /* ... */ };
```

## Examples

```js
recognition.onsoundend = function() {
  console.log('Sound has stopped being received');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
