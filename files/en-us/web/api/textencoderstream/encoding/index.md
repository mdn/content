---
title: TextEncoderStream.encoding
slug: Web/API/TextEncoderStream/encoding
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - encoding
  - TextEncoderStream
  - Read-only
browser-compat: api.TextEncoderStream.encoding
---
{{APIRef("Encoding API")}}

The **`encoding`** read-only property of the {{domxref("TextEncoderStream")}} interface returns a
string containing the name of the encoding algorithm used by the current `TextEncoderStream` object.

## Value

A string containing `utf-8` encoded data.

## Examples

The following example demonstrates how to return `encoding` from a `TextEncoderStream` object.

```js
stream = new TextEncoderStream();
console.log(stream.encoding);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
