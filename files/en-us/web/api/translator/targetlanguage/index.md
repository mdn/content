---
title: "Translator: targetLanguage property"
short-title: targetLanguage
slug: Web/API/Translator/targetLanguage
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Translator.targetLanguage
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

The **`targetLanguage`** read-only property of the {{domxref("Translator")}} interface returns the language that the input text will be translated into.

A `Translator` instance's `targetLanguage` is set when creating it via a {{domxref("Translator.create_static", "create()")}} call.

## Value

A string specifying the source language. This will be a valid [BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) (as specified in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646)).

## Examples

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});

// Logs "ja"
console.log(translator.targetLanguage);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
