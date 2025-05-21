---
title: "Summarizer: expectedInputLanguages property"
short-title: expectedInputLanguages
slug: Web/API/Summarizer/expectedInputLanguages
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Summarizer.expectedInputLanguages
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

The **`expectedInputLanguages`** read-only property of the {{domxref("Summarizer")}} interface returns the languages the `Summarizer` should support.

## Value

An array of strings specifying the languages the `Summarizer` should support.

The strings should be valid [BCP 47 language tags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) (as specified in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646)).

## Examples

```js
const summarizer = await Summarizer.create({
  expectedInputLanguages: ["en-US", "fr"],
  // ...
});

// Logs "en-US"
console.log(summarizer.expectedInputLanguages[0]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Summarizer API](/en-US/docs/Web/API/Summarizer_API/Using)
- [Web AI demos](https://chrome.dev/web-ai-demos/) on chrome.dev
