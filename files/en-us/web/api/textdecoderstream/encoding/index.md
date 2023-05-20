---
title: "TextDecoderStream: encoding property"
short-title: encoding
slug: Web/API/TextDecoderStream/encoding
page-type: web-api-instance-property
browser-compat: api.TextDecoderStream.encoding
---

{{APIRef("Encoding API")}}

The **`encoding`** read-only property of the {{domxref("TextDecoderStream")}} interface returns a string containing the name of the encoding algorithm used by the specific decoder.

The encoding is set by the [constructor](/en-US/docs/Web/API/TextDecoderStream/TextDecoderStream) `label` parameter, and defaults to `utf-8`.

## Value

A string containing the lower-cased ASCII name of the encoding format.

The allowed values are the same as those listed in [`TextDecoder.encoding`](/en-US/docs/Web/API/TextDecoder/encoding) (the labels in [Encoding API Encodings](/en-US/docs/Web/API/Encoding_API/Encodings)).

## Examples

Returning the value of `encoding` from a `TextDecoderStream`.

```js
stream = new TextDecoderStream();
console.log(stream.encoding); // returns the default "utf-8"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
