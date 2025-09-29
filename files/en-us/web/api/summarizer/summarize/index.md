---
title: "Summarizer: summarize() method"
short-title: summarize()
slug: Web/API/Summarizer/summarize
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Summarizer.summarize
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`summarize()`** method of the {{domxref("Summarizer")}} interface generates a new summary string.

## Syntax

```js-nolint
summarize(input)
summarize(input, options)
```

### Parameters

- `input`
  - : A string representing the text to be summarized.
- `options` {{optional_inline}}
  - : An object specifying configuration options for the `summarize()` operation. Possible values include:
    - `context`
      - : A string describing the context the input text is being used in, which helps the `Summarizer` generate a more suitable summary.
    - `signal`
      - : An {{domxref("AbortSignal")}} object instance, which allows the `summarize()` operation to be aborted via the associated {{domxref("AbortController")}}.

### Return value

A {{jsxref("Promise")}} that fulfills with a string containing the generated summary.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the current {{domxref("Document")}} is not active.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if usage of the Summarizer API is blocked by a {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}}.
- `NotReadableError` {{domxref("DOMException")}}
  - : Thrown if the output summary was filtered by the user agent, for example because it was detected to be harmful, inaccurate, or nonsensical.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the provided `context` is not in language the `Summarizer` supports.
- {{domxref("QuotaExceededError")}}
  - : Thrown if the summarize operation exceeds the available {{domxref("Summarizer.inputQuota", "inputQuota")}}.
- `UnknownError` {{domxref("DOMException")}}
  - : Thrown if the `summarize()` call failed for any other reason, or a reason the user agent did not wish to disclose.

## Examples

### Basic `summarize()` usage

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tldr",
  length: "short",
});

const summary = await summarizer.summarize(myTextString);
console.log(summary);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Summarizer API](/en-US/docs/Web/API/Summarizer_API/Using)
- [Web AI demos](https://chrome.dev/web-ai-demos/) on chrome.dev
