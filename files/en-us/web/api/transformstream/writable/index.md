---
title: TransformStream.writable
slug: Web/API/TransformStream/writable
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - writable
  - TransformStream
browser-compat: api.TransformStream.writable
---
{{APIRef("Streams")}}

The **`writable`** read-only property of the {{domxref("TransformStream")}} interface returns the {{domxref("WritableStream")}} instance controlled by this `TransformStream`.

## Value

A {{domxref("WritableStream")}}.

## Examples

The following example creates a new {{domxref("TransformStream")}} as a `textEncoderStream`, and prints the value of `writable` to the console.

```js
const textEncoderStream = new TransformStream();
console.log(textEncoderStream.writable) // a WritableStream
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
