---
title: CompressionStream
slug: Web/API/CompressionStream
tags:
  - API
  - Interface
  - Reference
  - CompressionStream
browser-compat: api.CompressionStream
---
{{DefaultAPISidebar("Compression Streams API")}}

The **`CompressionStream`** interface of the {{domxref('Compression Streams API','','',' ')}} is an API for compressing a stream of data.

## Constructor

- {{domxref("CompressionStream.CompressionStream()")}}
  - : Creates a new `CompressionStream`

## Properties

- {{domxref("CompressionStream.readable")}}
  - : Returns the {{domxref("ReadableStream")}} instance controlled by this object.
- {{domxref("CompressionStream.writable")}}
  - : Returns the {{domxref("WritableStream")}} instance controlled by this object.

## Examples

In this example a stream is compressed using gzip compression.

```js
const compressedReadableStream = inputReadableStream.pipeThrough(new CompressionStream('gzip'));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
