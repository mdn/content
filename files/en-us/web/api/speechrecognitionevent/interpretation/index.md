---
title: SpeechRecognitionEvent.interpretation
slug: Web/API/SpeechRecognitionEvent/interpretation
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - SpeechRecognitionEvent
  - Web Speech API
  - interpretation
  - recognition
  - speech
  - Deprecated
  - Non-standard
browser-compat: api.SpeechRecognitionEvent.interpretation
---
{{APIRef("Web Speech API")}}{{deprecated_header}}{{Non-standard_header}}

The **`interpretation`** read-only property of the
{{domxref("SpeechRecognitionEvent")}} interface returns the semantic meaning of what the
user said.

This might be determined, for instance, through the SISR specification of semantics in
a grammar (see
[Semantic Interpretation for Speech Recognition (SISR) Version 1.0](https://www.w3.org/TR/semantic-interpretation/)
for specification and examples.)

## Value

The returned value can be of any type. If no semantic interpretation has been returned
by the speech recognition system, `null` will be returned.

## Examples

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(event.interpretation);
}
```

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
