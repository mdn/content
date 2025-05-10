---
title: "LanguageDetector: inputQuota property"
short-title: inputQuota
slug: Web/API/LanguageDetector/inputQuota
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.LanguageDetector.inputQuota
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}

The **`inputQuota`** read-only property of the {{domxref("LanguageDetector")}} interface returns the input quota available to the browser for detecting languages.

## Value

A number specifying the available input quota. This number is implementation dependant. For example, it might be {{jsxref("infinity")}} if there are no limits beyond the user's memory and the maximum length of JavaScript strings, or it might be a number of tokens in the case of LLMs that use a token/credits scheme.

EDITORIAL: I'm not sure how this number is useful — the value returned is so subjective that it seems meaningless. I'd like to get some insight into its use cases, and an example of how Chrome implements it.

## Examples

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});

// Logs a number
console.log(detector.inputQuota);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
