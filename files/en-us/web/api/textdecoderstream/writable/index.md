---
title: "TextDecoderStream: writable property"
short-title: writable
slug: Web/API/TextDecoderStream/writable
page-type: web-api-instance-property
browser-compat: api.TextDecoderStream.writable
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

The **`writable`** read-only property of the {{domxref("TextDecoderStream")}} interface returns a {{domxref("WritableStream")}}.

## Value

A {{domxref("WritableStream")}}.

## Examples

Returning a {{domxref("WritableStream")}} from a `TextDecoderStream`.

```js
stream = new TextDecoderStream();
console.log(stream.writable); // A WritableStream
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
