---
title: "Summarizer: expectedContextLanguages property"
short-title: expectedContextLanguages
slug: Web/API/Summarizer/expectedContextLanguages
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Summarizer.expectedContextLanguages
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

The **`expectedContextLanguages`** read-only property of the {{domxref("Summarizer")}} interface returns the languages the context strings should be written in.

## Value

An array of strings specifying the expected languages of any provided context strings (either the {{domxref("Summarizer.sharedContext")}}, or a `context` specified during a {{domxref("Summarizer.summarize", "summarize()")}} or {{domxref("Summarizer.summarizeStreaming", "summarizeStreaming()")}} call).

The strings should be valid [BCP 47 language tags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) (as specified in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646)).

## Examples

```js
const summarizer = await Summarizer.create({
  expectedContextLanguages: ["en-US", "fr"],
  // ...
});

// Logs "en-US"
console.log(summarizer.expectedContextLanguages[0]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Summarizer API](/en-US/docs/Web/API/Summarizer_API/Using)
- [Web AI demos](https://chrome.dev/web-ai-demos/) on chrome.dev.
