---
title: "TransformStream: readable property"
short-title: readable
slug: Web/API/TransformStream/readable
page-type: web-api-instance-property
browser-compat: api.TransformStream.readable
---

{{APIRef("Streams")}}

The **`readable`** read-only property of the {{domxref("TransformStream")}} interface returns the {{domxref("ReadableStream")}} instance controlled by this `TransformStream`.

## Value

A {{domxref("ReadableStream")}}.

## Examples

The following example creates a new {{domxref("TransformStream")}} as `textEncoderStream`, and prints the value of `readable` to the console.

```js
const textEncoderStream = new TransformStream();
console.log(textEncoderStream.readable); // a ReadableStream
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
