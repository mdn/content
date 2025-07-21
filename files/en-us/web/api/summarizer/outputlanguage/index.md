---
title: "Summarizer: outputLanguage property"
short-title: outputLanguage
slug: Web/API/Summarizer/outputLanguage
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Summarizer.outputLanguage
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`outputLanguage`** read-only property of the {{domxref("Summarizer")}} interface returns the language the summary should be generated in.

## Value

A string specifying the language the summary should be generated in.

The string should be a valid [BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) (as specified in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646)).

## Examples

```js
const summarizer = await Summarizer.create({
  outputLanguage: "en-US",
  // ...
});

// Logs "en-US"
console.log(summarizer.outputLanguage);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Summarizer API](/en-US/docs/Web/API/Summarizer_API/Using)
- [Web AI demos](https://chrome.dev/web-ai-demos/) on chrome.dev
