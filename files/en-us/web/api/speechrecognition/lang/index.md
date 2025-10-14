---
title: "SpeechRecognition: lang property"
short-title: lang
slug: Web/API/SpeechRecognition/lang
page-type: web-api-instance-property
browser-compat: api.SpeechRecognition.lang
---

{{APIRef("Web Speech API")}}

The **`lang`** property of the {{domxref("SpeechRecognition")}}
interface returns and sets the language of the current `SpeechRecognition`.
If not specified, this defaults to the HTML [`lang`](/en-US/docs/Web/HTML/Reference/Global_attributes/lang) attribute
value, or the user agent's language setting if that isn't set either.

## Value

A string representing the language for the current `SpeechRecognition`. The value should be a valid {{glossary("BCP 47 language tag")}}.

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
