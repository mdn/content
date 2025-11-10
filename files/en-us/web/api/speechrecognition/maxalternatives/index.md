---
title: "SpeechRecognition: maxAlternatives property"
short-title: maxAlternatives
slug: Web/API/SpeechRecognition/maxAlternatives
page-type: web-api-instance-property
browser-compat: api.SpeechRecognition.maxAlternatives
---

{{APIRef("Web Speech API")}}

The **`maxAlternatives`** property of the
{{domxref("SpeechRecognition")}} interface sets the maximum number of
{{domxref("SpeechRecognitionAlternative")}}s provided per
{{domxref("SpeechRecognitionResult")}}.

The default value is 1.

## Value

A number representing the maximum returned alternatives for each result.

## Examples

This code is excerpted from our [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) example.

```js
const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
