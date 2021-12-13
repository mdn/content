---
title: CompressionStream.readable
slug: Web/API/CompressionStream/readable
tags:
  - API
  - Property
  - Reference
  - readable
  - CompressionStream
browser-compat: api.CompressionStream.readable
---
{{DefaultAPISidebar("Compression Streams API")}}

The **`readable`** read-only property of the {{domxref("CompressionStream")}} interface returns a {{domxref("ReadableStream")}}.

## Syntax

```js
let stream = CompressionStream.readable;
```

### Value

A {{domxref("ReadableStream")}}.

## Examples

The following example returns a {{domxref("ReadableStream")}} from a `CompressionStream`.

```js
let stream = new CompressionStream('gzip');
console.log(stream.readable); //a ReadableStream
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
