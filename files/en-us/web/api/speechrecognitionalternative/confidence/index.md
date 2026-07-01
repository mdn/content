---
title: "SpeechRecognitionAlternative: confidence property"
short-title: confidence
slug: Web/API/SpeechRecognitionAlternative/confidence
page-type: web-api-instance-property
browser-compat: api.SpeechRecognitionAlternative.confidence
---

{{APIRef("Web Speech API")}}

The **`confidence`** read-only property of the
{{domxref("SpeechRecognitionResult")}} interface returns a numeric estimate of how
confident the speech recognition system is that the recognition is correct.

> [!NOTE]
> Mozilla's implementation of `confidence` is still
> being worked on — at the moment, it always seems to return 1.

## Value

A number between 0 and 1.

## Examples

This code is excerpted from our
[Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) example.

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(`Confidence: ${event.results[0][0].confidence}`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
