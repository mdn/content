---
title: "DecompressionStream: readable property"
short-title: readable
slug: Web/API/DecompressionStream/readable
page-type: web-api-instance-property
browser-compat: api.DecompressionStream.readable
---

{{APIRef("Compression Streams API")}}

The **`readable`** read-only property of the {{domxref("DecompressionStream")}} interface returns a {{domxref("ReadableStream")}}.

## Value

A {{domxref("ReadableStream")}}.

## Examples

The following example returns a {{domxref("ReadableStream")}} from a `DecompressionStream`.

```js
let stream = new DecompressionStream("gzip");
console.log(stream.readable); //a ReadableStream
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
