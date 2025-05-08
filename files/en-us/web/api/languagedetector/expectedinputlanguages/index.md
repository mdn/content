---
title: "LanguageDetector: expectedInputLanguages property"
short-title: expectedInputLanguages
slug: Web/API/LanguageDetector/expectedInputLanguages
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.LanguageDetector.expectedInputLanguages
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}

The **`expectedInputLanguages`** read-only property of the {{domxref("LanguageDetector")}} interface returns the expected languages to be detected in the input text.

A `LanguageDetector` instance's `expectedInputLanguages` are set when creating it via a {{domxref("LanguageDetector.create_static", "create()")}} call.

## Value

An array of strings specifying the expected input languages. These should be valid [BCP 47 language tags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) (as specified in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646)).

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
