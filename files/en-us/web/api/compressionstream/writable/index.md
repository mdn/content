---
title: CompressionStream.writable
slug: Web/API/CompressionStream/writable
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - writable
  - CompressionStream
browser-compat: api.CompressionStream.writable
---
{{APIRef("Compression Streams API")}}

The **`writable`** read-only property of the {{domxref("CompressionStream")}} interface returns a {{domxref("WritableStream")}}.

## Value

A {{domxref("WritableStream")}}.

## Examples

The following example returns a {{domxref("WritableStream")}} from a `CompressionStream`.

```js
let stream = new CompressionStream('gzip');
console.log(stream.writeable); //a WritableStream
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
