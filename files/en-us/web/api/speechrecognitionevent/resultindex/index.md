---
title: SpeechRecognitionEvent.resultIndex
slug: Web/API/SpeechRecognitionEvent/resultIndex
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - SpeechRecognitionEvent
  - Web Speech API
  - recognition
  - resultIndex
  - speech
browser-compat: api.SpeechRecognitionEvent.resultIndex
---
{{APIRef("Web Speech API")}}

The **`resultIndex`** read-only property of the
{{domxref("SpeechRecognitionEvent")}} interface returns the lowest index value result in
the {{domxref("SpeechRecognitionResultList")}} "array" that has actually changed.

The {{domxref("SpeechRecognitionResultList")}} object is not an array, but it has a
getter that allows it to be accessed by array syntax.

## Value

A number.

## Examples

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(event.resultIndex); // returns 0 if there is only one result
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
