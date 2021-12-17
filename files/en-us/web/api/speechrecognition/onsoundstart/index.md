---
title: SpeechRecognition.onsoundstart
slug: Web/API/SpeechRecognition/onsoundstart
tags:
  - API
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - onsoundstart
  - recognition
  - speech
browser-compat: api.SpeechRecognition.onsoundstart
---
{{APIRef("Web Speech API")}}

The **`onsoundstart`** property of the {{domxref("SpeechRecognition")}} interface represents an event handler that will run
when any sound — recognisable speech or not — has been detected (when the [soundstart event](/en-US/docs/Web/API/SpeechRecognition/soundstart_event) fires.)

## Syntax

```js
mySpeechRecognition.onsoundstart = function() { /* ... */ };
```

## Examples

```js
recognition.onsoundstart = function() {
  console.log('Some sound is being received');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
