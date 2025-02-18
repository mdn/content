---
title: Base64
slug: Glossary/Base64
page-type: glossary-definition
---

{{GlossarySidebar}}

**Base64** is a group of similar [binary-to-text encoding](https://en.wikipedia.org/wiki/Binary-to-text_encoding) schemes that represent binary data in an {{glossary("ASCII")}} string format by transforming it into a radix-64 representation. The term _Base64_ originates from a specific [MIME content transfer encoding](https://en.wikipedia.org/wiki/MIME#Content-Transfer-Encoding).

When the term "Base64" is used on its own to refer to a specific {{glossary("algorithm")}}, it typically refers to the version of Base64 outlined in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648), section 4, which uses the following alphabet to represent the radix-64 digits, alongside `=` as a padding character:

```plain
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```

A common variant is "Base64 URL safe", which omits the padding and replaces `+/` with `-_` to avoid characters that might cause problems in {{glossary("URL")}} path segments or query parameters. You don't need this encoding if you are not putting the data in a path segment or query parameter — for example, [data URLs](/en-US/docs/Web/URI/Reference/Schemes/data) have neither and can use the standard Base64 encoding.

Base64 encoding schemes are commonly used to encode binary data for storage or transfer over media that can only deal with ASCII text (or some superset of ASCII that still falls short of accepting arbitrary binary data). This ensures that the data remains intact without modification during transport. Common applications of Base64 include:

- Email via [MIME](https://en.wikipedia.org/wiki/MIME)
- Storing complex data in [XML](/en-US/docs/Web/XML)
- Encoding binary data so that it can be included in a [`data:` URL](/en-US/docs/Web/URI/Reference/Schemes/data)

## Encoded size increase

Each Base64 digit represents 6 bits of data. So, three 8-bit bytes of the input string/binary file (3×8 bits = 24 bits) can be represented by four 6-bit Base64 digits (4×6 = 24 bits).

This means that the Base64 version of a string or file is typically roughly a third larger than its source (the exact size increase depends on various factors, such as the absolute length of the string, its length modulo 3, and whether padding characters are used).

## Last chunk

The base64 string can be partitioned into chunks of 4 characters, where the last chunk may have fewer than 4 characters. The last chunk may be padded with `=` characters so it's exactly 4 characters long. Excluding padding characters, the last chunk may be one of the following:

- 2 characters: encodes 12 bits representing 1 byte (8 bits) of data
- 3 characters: encodes 18 bits representing 2 bytes (16 bits) of data
- 4 characters: encodes 24 bits representing 3 bytes (24 bits) of data

In the first two cases, the characters may have 4 or 2 extra trailing bits that don't represent any data. In this case, [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648#section-3.5) requires encoders to set these bits to zero and decoders to optionally throw an error if they are not zero. For example, if the encoded data is a single byte `0b01010101`, then it needs two characters `0b010101` (`V`) and `0b010000` (`Q`), where the second character has 4 trailing bits set to zero. Decoding `VR==` (where the second character represents `0b010001`) technically results in the same byte `0b01010101`, but the decoder may throw an error due to the trailing bits not being zero.

## JavaScript support

The {{jsxref("Uint8Array")}} class provides the {{jsxref("Uint8Array.fromBase64()")}}, {{jsxref("Uint8Array.prototype.toBase64()")}}, and {{jsxref("Uint8Array.prototype.setFromBase64()")}} methods for conversion to/from base64 strings.

Browsers also natively provide two JavaScript functions for decoding and encoding Base64 strings:

- {{domxref("Window.btoa()")}} (also {{domxref("WorkerGlobalScope.btoa()", "available in workers", "", "nocode")}}): creates a Base64-encoded ASCII string from a string of binary data ("btoa" should be read as "binary to ASCII").
- {{domxref("Window.atob()")}} (also {{domxref("WorkerGlobalScope.atob()", "available in workers", "", "nocode")}}): decodes a Base64-encoded string ("atob" should be read as "ASCII to binary").

> [!NOTE]
> Base64 is a binary encoding rather than a text encoding, but `btoa` and `atob` were added to the web platform before it supported binary data types. As a result, the two functions use strings to represent binary data, with the {{glossary("code point")}} of each character representing the value of each byte. This has led to a common misconception that `btoa` can be used to encode arbitrary text data — for example, creating a Base64 `data:` URL of a text or HTML document.
>
> However, the byte-to-code-point correspondence only reliably holds true for code points up to `0x7f`. Furthermore, code points over `0xff` will cause `btoa` to throw an error due to exceeding the maximum value for 1 byte. The next section details how to work around this limitation when encoding arbitrary Unicode text.

## See Also

- JavaScript APIs:
  - {{domxref("Window.atob()")}} (also {{domxref("WorkerGlobalScope.atob()", "available in workers", "", "nocode")}})
  - {{domxref("Window.btoa()")}} (also {{domxref("WorkerGlobalScope.btoa()", "available in workers", "", "nocode")}})
  - {{jsxref("Uint8Array")}}
- [Data URLs](/en-US/docs/Web/URI/Reference/Schemes/data)
- [Base64](https://en.wikipedia.org/wiki/Base64) on Wikipedia
- Base64 Algorithm described in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648)
