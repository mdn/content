---
title: "Summarizer: length property"
short-title: length
slug: Web/API/Summarizer/length
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Summarizer.length
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

The **`length`** read-only property of the {{domxref("Summarizer")}} interface returns the relative length of the generated summaries.

## Value

An enumerated value specifying the relative length of the generated summaries, the exact nature of which depends on the `Summarizer` {{domxref("Summarizer.type", "type")}} value.

Possible values are:

- `short`
  - : A "short" summary
    - For `type` `tldr` and `teaser`, the summary should fit into one sentence.
    - For `type` `key-points`, the summary should be no more than three bullet points.
    - For `type` `headline`, the summary should be no more than 12 words.
- `medium`
  - : A "medium" summary
    - For `type` `tldr` and `teaser`, the summary should fit into one short paragraph.
    - For `type` `key-points`, the summary should be no more than five bullet points.
    - For `type` `headline`, the summary should be no more than 17 words.
- `long`
  - : A "long" summary
    - For `type` `tldr` and `teaser`, the summary should fit into one paragraph.
    - For `type` `key-points`, the summary should be no more than seven bullet points.
    - For `type` `headline`, the summary should be no more than 22 words.

## Examples

```js
const summarizer = await Summarizer.create({
  length: "medium",
  // ...
});

// Logs "medium"
console.log(summarizer.length);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Summarizer API](/en-US/docs/Web/API/Summarizer_API/Using)
- [Web AI demos](https://chrome.dev/web-ai-demos/) on chrome.dev.
