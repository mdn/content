---
title: CompressionStream
slug: Web/API/CompressionStream
page-type: web-api-interface
browser-compat: api.CompressionStream
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

The **`CompressionStream`** interface of the {{domxref('Compression Streams API','','',' ')}} compresses a stream of data. It implements the same shape as a {{domxref("TransformStream")}}, allowing it to be used in {{domxref("ReadableStream.pipeThrough()")}} and similar methods.

## Constructor

- {{domxref("CompressionStream.CompressionStream", "CompressionStream()")}}
  - : Creates a new `CompressionStream`.

## Instance properties

- {{domxref("CompressionStream.readable")}}
  - : Returns the {{domxref("ReadableStream")}} instance controlled by this object.
- {{domxref("CompressionStream.writable")}}
  - : Returns the {{domxref("WritableStream")}} instance controlled by this object.

## Examples

In this example a stream is compressed using gzip compression.

```js
const compressedReadableStream = inputReadableStream.pipeThrough(
  new CompressionStream("gzip"),
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DecompressionStream")}}
- {{domxref("TransformStream")}}
