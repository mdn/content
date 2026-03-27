---
title: DecompressionStream
slug: Web/API/DecompressionStream
page-type: web-api-interface
browser-compat: api.DecompressionStream
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

The **`DecompressionStream`** interface of the {{domxref('Compression Streams API','','',' ')}} decompresses a stream of data. It implements the same shape as a {{domxref("TransformStream")}}, allowing it to be used in {{domxref("ReadableStream.pipeThrough()")}} and similar methods.

## Constructor

- {{domxref("DecompressionStream.DecompressionStream", "DecompressionStream()")}}
  - : Creates a new `DecompressionStream`

## Instance properties

- {{domxref("DecompressionStream.readable")}}
  - : Returns the {{domxref("ReadableStream")}} instance controlled by this object.
- {{domxref("DecompressionStream.writable")}}
  - : Returns the {{domxref("WritableStream")}} instance controlled by this object.

## Examples

In this example a blob is decompressed using gzip compression.

```js
const ds = new DecompressionStream("gzip");
const decompressedStream = blob.stream().pipeThrough(ds);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CompressionStream")}}
- {{domxref("TransformStream")}}
