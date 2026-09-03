---
title: "SpeechRecognitionResult: isFinal property"
short-title: isFinal
slug: Web/API/SpeechRecognitionResult/isFinal
page-type: web-api-instance-property
browser-compat: api.SpeechRecognitionResult.isFinal
---

{{APIRef("Web Speech API")}}

The **`isFinal`** read-only property of the
{{domxref("SpeechRecognitionResult")}} interface is a boolean value that states
whether this result is final (`true`) or not (`false`) — if so,
then this is the final time this result will be returned; if not, then this result is an
interim result, and may be updated later on.

## Value

A boolean value.

## Examples

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;

  console.log(event.results[0].isFinal);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
