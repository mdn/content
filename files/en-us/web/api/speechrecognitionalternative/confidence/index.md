---
title: "SpeechRecognitionAlternative: confidence property"
short-title: confidence
slug: Web/API/SpeechRecognitionAlternative/confidence
page-type: web-api-instance-property
browser-compat: api.SpeechRecognitionAlternative.confidence
---

{{APIRef("Web Speech API")}}

The **`confidence`** read-only property of the {{domxref("SpeechRecognitionAlternative")}} interface returns a numeric estimate of how confident the speech recognition system is that the recognition is correct.

## Value

A number between 0 and 1, where higher values mean the recognition system is more confident.

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
