---
title: TextDecoderStream.writable
slug: Web/API/TextDecoderStream/writable
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - writable
  - TextDecoderStream
browser-compat: api.TextDecoderStream.writable
---
{{APIRef("Encoding API")}}

The **`writable`** read-only property of the {{domxref("TextDecoderStream")}} interface returns a {{domxref("WritableStream")}}.

## Value

A {{domxref("WritableStream")}}.

## Examples

Returning a {{domxref("WritableStream")}} from a `TextDecoderStream`.

```js
stream = new TextDecoderStream();
console.log(stream.writeable); //a WritableStream
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
