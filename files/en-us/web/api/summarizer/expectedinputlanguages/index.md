---
title: "Summarizer: expectedInputLanguages property"
short-title: expectedInputLanguages
slug: Web/API/Summarizer/expectedInputLanguages
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Summarizer.expectedInputLanguages
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`expectedInputLanguages`** read-only property of the {{domxref("Summarizer")}} interface returns the languages the `Summarizer` should support.

## Value

An array of strings specifying the languages the `Summarizer` should support.

The strings should be valid {{glossary("BCP 47 language tag", "BCP 47 language tags")}}.

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
