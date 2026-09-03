---
title: "LanguageDetector: expectedInputLanguages property"
short-title: expectedInputLanguages
slug: Web/API/LanguageDetector/expectedInputLanguages
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.LanguageDetector.expectedInputLanguages
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

The **`expectedInputLanguages`** read-only property of the {{domxref("LanguageDetector")}} interface returns the expected languages to be detected in the input text. Specifying expected input languages helps improve the accuracy of the language detection.

A `LanguageDetector` instance's `expectedInputLanguages` are set when creating it via a {{domxref("LanguageDetector.create_static", "create()")}} call.

## Value

An array of strings specifying the expected input languages. These will be valid {{glossary("BCP 47 language tag", "BCP 47 language tags")}}.

## Examples

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});

// Logs ["en-US", "zh"]
console.log(detector.expectedInputLanguages);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
