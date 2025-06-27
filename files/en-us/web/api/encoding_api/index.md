---
title: Encoding API
slug: Web/API/Encoding_API
page-type: web-api-overview
browser-compat:
  - api.TextDecoder
  - api.TextEncoder
  - api.TextEncoderStream
  - api.TextDecoderStream
spec-urls: https://encoding.spec.whatwg.org/
---

{{DefaultAPISidebar("Encoding API")}}{{AvailableInWorkers}}

The **Encoding API** enables web developers to work with text that is represented in {{Glossary("character encoding", "character encodings")}} systems other than the encoding used internally by JavaScript strings. In particular, it enables developers to convert text between JavaScript strings and the {{glossary("UTF-8")}} encoding that is used for most documents on the web.

It provides two mechanisms:

- **Encoding**: taking a JavaScript string and converting it into an array of bytes representing the {{glossary("UTF-8")}} encoding of the string.
- **Decoding**: taking an array of bytes representing a particular character encoding of some text, and converting it into a JavaScript string.

Note that these operations are asymmetrical: encoding only encodes to UTF-8, while decoding can decode UTF-8 but also [many legacy encoding systems](/en-US/docs/Web/API/Encoding_API/Encodings).

The API provides synchronous interfaces for encoding and decoding, and also [stream-based](/en-US/docs/Web/API/Streams_API) encoders and decoders, which could be used to, for example, decode text as it arrives over a network connection.

## Interfaces

- {{DOMxRef("TextDecoder")}}
  - : A decoder to convert a byte array containing a particular encoding into a JavaScript string.
- {{DOMxRef("TextDecoderStream")}}
  - : A decoder to convert a byte stream containing a particular encoding into a stream of JavaScript strings.
- {{DOMxRef("TextEncoder")}}
  - : An encoder to convert a JavaScript string into an array of bytes representing the UTF-8 encoding of the string.
- {{DOMxRef("TextEncoderStream")}}
  - : An encoder to convert a stream of JavaScript strings into an stream of bytes representing the UTF-8 encoding of the strings.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Encoding API Encodings](/en-US/docs/Web/API/Encoding_API/Encodings) - Encodings that must be supported for decoding text.
