---
title: "SpeechRecognition: SpeechRecognition() constructor"
short-title: SpeechRecognition()
slug: Web/API/SpeechRecognition/SpeechRecognition
page-type: web-api-constructor
browser-compat: api.SpeechRecognition.SpeechRecognition
---

{{APIRef("Web Speech API")}}

The **`SpeechRecognition()`** constructor creates a new
{{domxref("SpeechRecognition")}} object instance.

## Syntax

```js-nolint
new SpeechRecognition()
```

### Parameters

None.

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
