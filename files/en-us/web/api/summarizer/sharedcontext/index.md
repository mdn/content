---
title: "Summarizer: sharedContext property"
short-title: sharedContext
slug: Web/API/Summarizer/sharedContext
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Summarizer.sharedContext
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`sharedContext`** read-only property of the {{domxref("Summarizer")}} interface returns a string describing the context the pieces of text to summarize are being used in. This helps the `Summarizer` to generate more suitable summaries.

## Value

A string.

## Examples

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  // ...
});

// Logs "A general summary to help a user ..."
console.log(summarizer.sharedContext);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Summarizer API](/en-US/docs/Web/API/Summarizer_API/Using)
- [Web AI demos](https://chrome.dev/web-ai-demos/) on chrome.dev
