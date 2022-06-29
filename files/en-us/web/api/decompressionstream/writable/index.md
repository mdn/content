---
title: DecompressionStream.writable
slug: Web/API/DecompressionStream/writable
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - writable
  - DecompressionStream
browser-compat: api.DecompressionStream.writable
---
{{APIRef("Compression Streams API")}}

The **`writable`** read-only property of the {{domxref("DecompressionStream")}} interface returns a {{domxref("WritableStream")}}.

## Value

A {{domxref("WritableStream")}}.

## Examples

The following example returns a {{domxref("WritableStream")}} from a `DecompressionStream`.

```js
let stream = new DecompressionStream('gzip');
console.log(stream.writeable); //a WritableStream
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
