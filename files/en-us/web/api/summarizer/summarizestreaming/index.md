---
title: "Summarizer: summarizeStreaming() method"
short-title: summarizeStreaming()
slug: Web/API/Summarizer/summarizeStreaming
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Summarizer.summarizeStreaming
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

The **`summarizeStreaming()`** method of the {{domxref("Summarizer")}} interface generates a new summary as a {{domxref("ReadableStream")}}.

## Syntax

```js-nolint
summarizeStreaming(input)
summarizeStreaming(input, options)
```

### Parameters

- `input`
  - : A string representing the text to be summarized.
- `options` {{optional_inline}}
  - : An object specifying configuration options for the `summarizeStreaming()` operation. Possible values include:
    - `context`
      - : A string describing the context the input text is being used in, which helps the `Summarizer` generate a more suitable summary.
    - `signal`
      - : An {{domxref("AbortSignal")}} object instance, which allows the `summarizeStreaming()` operation to be aborted via the associated {{domxref("AbortController")}}.

EDITORIAL: Aborting the call via an abort signal doesn't seem to work. Am I missing something?

### Return value

A {{jsxref("Promise")}} that fulfills with a {{domxref("ReadableStream")}} containing the generated summary.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the current {{domxref("Document")}} is not active.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if usage of the Summarizer API is blocked by a {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}}.
- `NotReadableError` {{domxref("DOMException")}}
  - : Thrown if the output summary was filtered by the user agent, for example because it was detected to be harmful, inaccurate, or nonsensical.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the provided `context` is not in language the `Summarizer` supports.
- `UnknownError` {{domxref("DOMException")}}
  - : Thrown if the `summarizeStreaming()` call failed for any other reason, or a reason the user agent did not wish to disclose.

## Examples

### Basic `summarizeStreaming()` usage

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tl;dr",
  length: "short",
});

const stream = await summarizer.summarizeStreaming(myTextString);
const reader = stream.getReader();
let summary = "";

async function processText({ done, value }) {
  if (done) {
    console.log("Stream complete");
    console.log(summary);
    return;
  } else {
    summary += value;
    const result = await reader.read();
    processText(result);
  }
}

const result = await reader.read();
processText(result);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Summarizer API](/en-US/docs/Web/API/Summarizer_API/Using)
- [Web AI demos](https://chrome.dev/web-ai-demos/) on chrome.dev.
