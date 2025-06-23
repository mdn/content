---
title: "Summarizer: measureInputUsage() method"
short-title: measureInputUsage()
slug: Web/API/Summarizer/measureInputUsage
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Summarizer.measureInputUsage
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

The **`measureInputUsage()`** method of the {{domxref("Summarizer")}} interface reports how much {{domxref("Summarizer.inputQuota", "inputQuota")}} would be used by a summarize operation for a given text input.

## Syntax

```js-nolint
measureInputUsage(input)
measureInputUsage(input, options)
```

### Parameters

- `input`
  - : A string representing the input text you want an input usage measurement for.
- `options` {{optional_inline}}
  - : An object specifying configuration options for the `measureInputUsage()` operation. Possible values include:
    - `context`
      - : A string describing the context the input text would be used in, to help generate a more suitable summary.
    - `signal`
      - : An {{domxref("AbortSignal")}} object instance, which allows the `measureInputUsage()` operation to be aborted via the associated {{domxref("AbortController")}}.

### Return value

A {{jsxref("Promise")}} that fulfills with a number specifying the {{domxref("Summarizer.inputQuota", "inputQuota")}} usage of the given input text.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if usage of the Summarizer API is blocked by a {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}}.
- `NotReadableError` {{domxref("DOMException")}}
  - : Thrown if the output summary was filtered by the user agent, for example because it was detected to be harmful, inaccurate, or nonsensical.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the provided `context` is not in language the `Summarizer` supports.
- `UnknownError` {{domxref("DOMException")}}
  - : Thrown if the `measureInputUsage()` call failed for any other reason, or a reason the user agent did not wish to disclose.

## Examples

### Checking if you have sufficient quota

In the below snippet, we create a new `Summarizer` instance using {{domxref("Summarizer.create_static", "create()")}}, then return the total input quota via {{domxref("Summarizer.inputQuota", "inputQuota")}} and the input quota usage for a summarizing a particular text string via `measureInputUsage()`.

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
