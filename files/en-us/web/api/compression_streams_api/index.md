---
title: Compression Streams API
slug: Web/API/Compression_Streams_API
page-type: web-api-overview
browser-compat: api.CompressionStream
---

{{DefaultAPISidebar("Compression Streams API")}}

The **Compression Streams API** provides a JavaScript API for compressing and decompressing streams of data using the gzip or deflate formats.

Built in compression means that JavaScript applications will not need to include a compression library, which makes the download size of the application smaller.

## Interfaces

- {{domxref("CompressionStream")}}
  - : Compresses a stream of data.
- {{domxref("DecompressionStream")}}
  - : Decompresses a stream of data.

## Examples

In this example a stream is compressed using gzip compression.

```js
const compressedReadableStream = inputReadableStream.pipeThrough(
  new CompressionStream("gzip"),
);
```

In the following example a function decompresses a blob using gzip.

```js
async function DecompressBlob(blob) {
  const ds = new DecompressionStream("gzip");
  const decompressedStream = blob.stream().pipeThrough(ds);
  return await new Response(decompressedStream).blob();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
