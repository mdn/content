---
title: CompressionStream.writable
slug: Web/API/CompressionStream/writable
tags:
  - API
  - Property
  - Reference
  - writable
  - CompressionStream
browser-compat: api.CompressionStream.writable
---
{{DefaultAPISidebar("Compression Streams API")}}

The **`writable`** read-only property of the {{domxref("CompressionStream")}} interface returns a {{domxref("WritableStream")}}.

## Syntax

```js
let writableStream = CompressionStream.writable;
```

### Value

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
