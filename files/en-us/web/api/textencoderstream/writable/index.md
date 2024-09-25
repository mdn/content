---
title: "TextEncoderStream: writable property"
short-title: writable
slug: Web/API/TextEncoderStream/writable
page-type: web-api-instance-property
browser-compat: api.TextEncoderStream.writable
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

The **`writable`** read-only property of the {{domxref("TextEncoderStream")}} interface returns a {{domxref("WritableStream")}}.

## Value

A {{domxref("WritableStream")}}.

## Examples

The following example demonstrates how to return a `WritableStream` from a `TextEncoderStream` object.

```js
stream = new TextEncoderStream();
console.log(stream.writable); // A WritableStream
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
