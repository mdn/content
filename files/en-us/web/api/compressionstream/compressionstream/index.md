---
title: "CompressionStream: CompressionStream() constructor"
short-title: CompressionStream()
slug: Web/API/CompressionStream/CompressionStream
page-type: web-api-constructor
browser-compat: api.CompressionStream.CompressionStream
---

{{APIRef("Compression Streams API")}}

The **`CompressionStream()`** constructor creates a new {{domxref("CompressionStream")}} object which compresses a stream of data.

## Syntax

```js-nolint
new CompressionStream(format)
```

### Parameters

- `format`

  - : One of the following allowed compression formats:

    - `"gzip"`
      - : Compresses the stream using the [GZIP](https://www.rfc-editor.org/rfc/rfc1952) format.
    - `"deflate"`
      - : Compresses the stream using the [DEFLATE](https://www.rfc-editor.org/rfc/rfc1950) algorithm in ZLIB Compressed Data Format.
        The ZLIB format includes a header with information about the compression method and the uncompressed size of the data, and a trailing checksum for verifying the integrity of the data
    - `"deflate-raw"`
      - : Compresses the stream using the [DEFLATE](https://www.rfc-editor.org/rfc/rfc1951) algorithm without a header and trailing checksum.

## Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the format passed to the constructor is not supported.

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
