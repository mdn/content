---
title: "Translator: inputQuota property"
short-title: inputQuota
slug: Web/API/Translator/inputQuota
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Translator.inputQuota
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}

The **`inputQuota`** read-only property of the {{domxref("Translator")}} interface returns the input quota available to the browser for generating translations.

## Value

A number specifying the available input quota. This number is implementation dependant. For example, it might be {{jsxref("infinity")}} if there are no limits beyond the user's memory and the maximum length of JavaScript strings, or it might be a number of tokens in the case of LLMs that use a token/credits scheme.

EDITORIAL: I'm not sure how this number is useful — the value returned is so subjective that it seems meaningless. I'd like to get some insight into its use cases, and an example of how Chrome implements it.

## Examples

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});

// Logs a number
console.log(translator.inputQuota);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
