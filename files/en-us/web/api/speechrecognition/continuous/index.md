---
title: "SpeechRecognition: continuous property"
short-title: continuous
slug: Web/API/SpeechRecognition/continuous
page-type: web-api-instance-property
browser-compat: api.SpeechRecognition.continuous
---

{{APIRef("Web Speech API")}}

The **`continuous`** property of the {{domxref("SpeechRecognition")}} interface represents whether recognition returns a single final result, or multiple final results from consecutive recognitions.

The default value is `false`.

## Value

A boolean value.

- `true` means recognition can return any number of final results, one for each consecutive recognition, as in dictation.
- `false` (the default) means recognition returns at most one final result.

This setting doesn't affect interim results.
See {{domxref("SpeechRecognition.interimResults")}}.

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
