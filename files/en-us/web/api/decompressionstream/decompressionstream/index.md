---
title: "DecompressionStream: DecompressionStream() constructor"
short-title: DecompressionStream()
slug: Web/API/DecompressionStream/DecompressionStream
page-type: web-api-constructor
browser-compat: api.DecompressionStream.DecompressionStream
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

The **`DecompressionStream()`** constructor creates a new {{domxref("DecompressionStream")}} object which decompresses a stream of data.

## Syntax

```js-nolint
new DecompressionStream(format)
```

### Parameters

- `format`
  - : One of the following compression formats:
    - `"brotli"`
      - : Decompress the stream using the [Brotli](https://www.rfc-editor.org/rfc/rfc1952) algorithm.
    - `"gzip"`
      - : Decompress the stream using the [GZIP](https://www.rfc-editor.org/rfc/rfc1952) algorithm.
    - `"deflate"`
      - : Decompress the stream using the [DEFLATE](https://www.rfc-editor.org/rfc/rfc1950) algorithm in ZLIB Compressed Data Format.
        The ZLIB format includes a header with information about the compression method and the uncompressed size of the data, and a trailing checksum for verifying the integrity of the data
    - `"deflate-raw"`
      - : Decompress the stream using the [DEFLATE](https://www.rfc-editor.org/rfc/rfc1951) algorithm without a header and trailing checksum.
    - `"zstd"`
      - : Decompress the stream using the [ZSTD](https://datatracker.ietf.org/doc/html/rfc8478) algorithm.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the format passed to the constructor is not supported.

## Examples

In this example a gzip-compressed blob is decompressed.

```js
const ds = new DecompressionStream("gzip");
const decompressedStream = blob.stream().pipeThrough(ds);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
