---
title: "Summarizer: inputQuota property"
short-title: inputQuota
slug: Web/API/Summarizer/inputQuota
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Summarizer.inputQuota
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`inputQuota`** read-only property of the {{domxref("Summarizer")}} interface returns the input quota available to the browser for generating summaries.

## Value

A number specifying the available input quota. This number is implementation-dependent. For example, it might be {{jsxref("infinity")}} if there are no limits beyond the user's memory and the maximum length of JavaScript strings, or it might be a number of tokens in the case of AI models that use a token/credits scheme.

## Examples

### Checking if you have sufficient quota

In the below snippet, we create a new `Summarizer` instance using {{domxref("Summarizer.create_static", "create()")}}, then return the total input quota via `inputQuota` and the input quota usage for a summarizing a particular text string via {{domxref("Summarizer.measureInputUsage", "measureInputUsage()")}}.

We then test to see if the individual input usage for that string is great than the total available quota. If so, we throw an appropriate error; it not, we commence summarizing the string using {{domxref("Summarizer.summarize", "summarize()")}}.

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tldr",
  length: "short",
});

const totalInputQuota = summarizer.inputQuota;
const inputUsage = await summarizer.measureInputUsage(myTextString);

if (inputUsage > totalInputQuota) {
  throw new Error("Boo, insufficient quota to generate a summary.");
} else {
  console.log("Yay, quota available to generate a summary.");
  const summary = await summarizer.summarize(myTextString);
  // ...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Summarizer API](/en-US/docs/Web/API/Summarizer_API/Using)
- [Web AI demos](https://chrome.dev/web-ai-demos/) on chrome.dev
