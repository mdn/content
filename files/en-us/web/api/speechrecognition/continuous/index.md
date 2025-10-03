---
title: "SpeechRecognition: continuous property"
short-title: continuous
slug: Web/API/SpeechRecognition/continuous
page-type: web-api-instance-property
browser-compat: api.SpeechRecognition.continuous
---

{{APIRef("Web Speech API")}}

The **`continuous`** property of the
{{domxref("SpeechRecognition")}} interface controls whether continuous results are
returned for each recognition, or only a single result.

It defaults to single results (`false`.)

## Value

A boolean value representing the current `SpeechRecognition`'s
continuous status. `true` means continuous, and `false` means not
continuous (single result each time.)

## Examples

This code is excerpted from our [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) example.

```js
const recognition = new SpeechRecognition();
recognition.continuous = false;
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
