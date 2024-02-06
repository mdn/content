---
title: "TextEncoderStream: readable property"
short-title: readable
slug: Web/API/TextEncoderStream/readable
page-type: web-api-instance-property
browser-compat: api.TextEncoderStream.readable
---

{{APIRef("Encoding API")}}

The **`readable`** read-only property of the {{domxref("TextEncoderStream")}} interface returns a {{domxref("ReadableStream")}}.

## Value

A {{domxref("ReadableStream")}}.

## Examples

The following example demonstrates how to return a `ReadableStream` from a `TextEncoderStream` object.

```js
stream = new TextEncoderStream();
console.log(stream.readable); //a ReadableStream
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
