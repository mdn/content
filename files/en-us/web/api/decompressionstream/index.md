---
title: DecompressionStream
slug: Web/API/DecompressionStream
tags:
  - API
  - Interface
  - Reference
  - DecompressionStream
browser-compat: api.DecompressionStream
---
{{DefaultAPISidebar("Compression Streams API")}}

The **`DecompressionStream`** interface of the {{domxref('Compression Streams API','','',' ')}} is an API for decompressing a stream of data.

## Constructor

- {{domxref("DecompressionStream.DecompressionStream()")}}
  - : Creates a new `DecompressionStream`

## Properties

- {{domxref("DecompressionStream.readable")}}
  - : Returns the {{domxref("ReadableStream")}} instance controlled by this object.
- {{domxref("DecompressionStream.writable")}}
  - : Returns the {{domxref("WritableStream")}} instance controlled by this object.

## Examples

In this example a blob is decompressed using gzip compression.

```js
const ds = new DecompressionStream('gzip');
const decompressedStream = blob.stream().pipeThrough(ds);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
