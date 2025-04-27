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

The **`measureInputUsage()`** method of the {{domxref("Summarizer")}} interface reports how much input quota would be used by a summarize operation for a given text input.

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

EDITORIAL: Aborting the call via an abort signal doesn't seem to work. Am I missing something?

### Return value

A {{jsxref("Promise")}} that fulfills with a number specifying the {{domxref("Summarizer.inputQuota", "inputQuota")}} usage of the given input text.

EDITORIAL: As I said on the inputQuota page, I ought to include some information about input quota and how it is determined for each implenentation. Maybe just including all of that info on the inputQuota page and then linking to it from here would be enough? I should specify how accurate the value returned by measureInputUsage is, whether it an estimaate, etc.?

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

### Basic `measureInputUsage()` usage

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tl;dr",
  length: "short",
});

const inputUsage = await summarizer.measureInputUsage(myText);
console.log(`Input usage: ${inputUsage}`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Summarizer API](/en-US/docs/Web/API/Summarizer_API/Using)
- [Web AI demos](https://chrome.dev/web-ai-demos/) on chrome.dev.
