---
title: TextDecoderStream
slug: Web/API/TextDecoderStream
page-type: web-api-interface
browser-compat: api.TextDecoderStream
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

The **`TextDecoderStream`** interface of the {{domxref('Encoding API','','',' ')}} converts a stream of text in a binary encoding, such as UTF-8 etc., to a stream of strings.
It is the streaming equivalent of {{domxref("TextDecoder")}}.

## Constructor

- {{domxref("TextDecoderStream.TextDecoderStream","TextDecoderStream()")}}
  - : Creates a new `TextDecoderStream` object.

## Instance properties

- {{DOMxRef("TextDecoderStream.encoding")}} {{ReadOnlyInline}}
  - : An encoding.
- {{DOMxRef("TextDecoderStream.fatal")}} {{ReadOnlyInline}}
  - : A {{jsxref("boolean")}} indicating if the error mode is fatal.
- {{DOMxRef("TextDecoderStream.ignoreBOM")}} {{ReadOnlyInline}}
  - : A {{jsxref("boolean")}} indicating whether the byte order mark is ignored.
- {{DOMxRef("TextDecoderStream.readable")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("ReadableStream")}} instance controlled by this object.
- {{DOMxRef("TextDecoderStream.writable")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("WritableStream")}} instance controlled by this object.

## Examples

- [Examples of streaming structured data and HTML](https://streams.spec.whatwg.org/demos/)
- [An example of fetch request streams which uses `TextDecoderStream`](https://glitch.com/~fetch-request-stream).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TextEncoderStream")}}
- [Streams API Concepts](/en-US/docs/Web/API/Streams_API/Concepts)
- [Experimenting with the Streams API](https://deanhume.com/experimenting-with-the-streams-api/)
