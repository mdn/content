---
title: "Summarizer: format property"
short-title: format
slug: Web/API/Summarizer/format
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Summarizer.format
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

The **`format`** read-only property of the {{domxref("Summarizer")}} interface returns the text format summaries will be returned in.

## Value

An enumerated value specifying the format of returned summaries. Possible values are:

- `markdown`
  - : Summaries contain no formatting.
- `plain-text`
  - : Summaries contain markdown formatting (conforming to the [CommonMark](https://spec.commonmark.org/) spec).

## Examples

```js
const summarizer = await Summarizer.create({
  format: "plain-text",
  // ...
});

// Logs "plain-text"
console.log(summarizer.format);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Summarizer API](/en-US/docs/Web/API/Summarizer_API/Using)
- [Web AI demos](https://chrome.dev/web-ai-demos/) on chrome.dev.
