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
    - `"deflate"`
    - `"deflate-raw"`

## Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the format passed to the constructor is not supported.

## Examples

In this example a stream is compressed using gzip compression.

```js
const compressedReadableStream = inputReadableStream.pipeThrough(
  new CompressionStream("gzip")
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
