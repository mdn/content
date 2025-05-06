---
title: Summarizer API
slug: Web/API/Summarizer_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.Summarizer
spec-urls: https://webmachinelearning.github.io/writing-assistance-apis/#summarizer-api
---

{{SeeCompatTable}}{{DefaultAPISidebar("Summarizer API")}}

The **Summarizer API** summarizes a given body of text via a browser's own internal language model.

## Concepts and usage

Writing a summary of a larger body of text is a common writing task, and one that AI is well-suited to. Typical use cases include:

- Providing a summary of a full article so the reader can judge whether to read the whole thing.
- Summarizing a meeting transcript so those joining the meeting late can get up to speed with what they've missed.
- Summarizing a set of product reviews to quickly communicate overall sentiment.

The Summarizer API provides an asynchronous ({{jsxref("Promise")}}-based) mechanism for a website to feed a body of text into the browser's own internal language model and request that it returns a summary of the text based on specified options.

This is done using the functionality made available by the {{domxref("Summarizer")}} interface, in a two-step process:

1. Create a `Summarizer` object instance using the {{domxref("Summarizer.create()")}} static method, specifying options for what kind of summary you want written. Options include length, type (for example, "tl;dr" or key points), format (plain text or markdown), and input and output languages.
   > [!NOTE]
   > If you want to check whether the browser LLM is able to support your preferences, you can do so with the {{domxref("Summarizer.availability()")}} static method.
2. Run the {{domxref("Summarizer.summarize()")}} instance method to request the summary.

After a `Summarizer` instance has been created, you can remove it again using the {{domxref("Summarizer.destroy()")}} instance method. You can also cancel a pending `create()` or `summarize()` operation using an {{domxref("AbortController")}}.

See [Using the Summarizer API](/en-US/docs/Web/API/Summarizer_API/Using) for a walkthrough of how the API works.

## Interfaces

- {{domxref("Summarizer")}} {{Experimental_Inline}}
  - : Contains all the functionality for the Summarizer API, including checking AI model availability, creating a new `Summarizer` instance, using it to generate a new summary, and more.

## HTTP headers

- {{httpheader("Permissions-Policy")}}; the {{httpheader('Permissions-Policy/summarizer','summarizer')}} directive
  - : Controls access to the Summarizer API. Where a policy specifically disallows the use of the Summarizer API, any attempts to call the API's methods will fail with a `NotAllowedError` {{domxref("DOMException")}}.

## Examples

For a full example, see [Using the Summarizer API](/en-US/docs/Web/API/Summarizer_API/Using)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Summarize with built-in AI](https://developer.chrome.com/docs/ai/summarizer-api) on developer.chrome.com (2025)
- [Web AI demos](https://chrome.dev/web-ai-demos/) on chrome.dev.
