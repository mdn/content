---
title: "Summarizer: inputQuota property"
short-title: inputQuota
slug: Web/API/Summarizer/inputQuota
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Summarizer.inputQuota
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

The **`inputQuota`** read-only property of the {{domxref("Summarizer")}} interface returns the input quota available to the browser for generating summaries.

## Value

A number specifying the available input quota. This number is implementation dependant. For example, it might be {{jsxref("infinity")}} if there are no limits beyond the user's memory and the maximum length of JavaScript strings, or it might be a number of tokens in the case of LLMs that use a token/credits scheme.

EDITORIAL: I'm not sure how this number is useful — the value returned is so subjective that it seems meaningless. I'd like to get some insight into its use cases, and an example of how Chrome implements it.

## Examples

```js
const summarizer = await Summarizer.create();

// Logs a number
console.log(summarizer.inputQuota);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Summarizer API](/en-US/docs/Web/API/Summarizer_API/Using)
- [Web AI demos](https://chrome.dev/web-ai-demos/) on chrome.dev.
