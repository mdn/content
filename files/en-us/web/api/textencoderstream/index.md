---
title: TextEncoderStream
slug: Web/API/TextEncoderStream
page-type: web-api-interface
browser-compat: api.TextEncoderStream
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

The **`TextEncoderStream`** interface of the {{domxref('Encoding API','','',' ')}} converts a stream of strings into bytes in the UTF-8 encoding. It is the streaming equivalent of {{domxref("TextEncoder")}}.

## Constructor

- {{domxref("TextEncoderStream.TextEncoderStream","TextEncoderStream()")}}
  - : Creates a new `TextEncoderStream` object.

## Instance properties

- {{DOMxRef("TextEncoderStream.encoding")}} {{ReadOnlyInline}}
  - : Always returns `"utf-8"`.
- {{DOMxRef("TextEncoderStream.readable")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("ReadableStream")}} instance controlled by this object.
- {{DOMxRef("TextEncoderStream.writable")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("WritableStream")}} instance controlled by this object.

## Examples

[Examples of streaming structured data and HTML](https://streams.spec.whatwg.org/demos/)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TextDecoderStream")}}
- [Streams API Concepts](/en-US/docs/Web/API/Streams_API/Concepts)
- [Experimenting with the Streams API](https://deanhume.com/experimenting-with-the-streams-api/)
- [Streaming requests with the fetch API](https://developer.chrome.com/docs/capabilities/web-apis/fetch-streaming-requests), developer.chrome.com (2020)
