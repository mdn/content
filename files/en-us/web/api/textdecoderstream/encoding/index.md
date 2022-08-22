---
title: TextDecoderStream.encoding
slug: Web/API/TextDecoderStream/encoding
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - encoding
  - TextDecoderStream
browser-compat: api.TextDecoderStream.encoding
---
{{APIRef("Encoding API")}}

The **`encoding`** read-only property of the {{domxref("TextDecoderStream")}} interface returns a string containing the name of the encoding algorithm used by the specific encoder.

## Value

A string, ASCII lowercased.

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
