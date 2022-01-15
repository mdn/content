---
title: CompressionStream()
slug: Web/API/CompressionStream/CompressionStream
tags:
  - API
  - Constructor
  - Reference
  - CompressionStream
browser-compat: api.CompressionStream.CompressionStream
---
{{DefaultAPISidebar("Compression Streams API")}}

The **`CompressionStream()`** constructor creates a new {{domxref("CompressionStream")}} object which compresses a stream of data.

## Syntax

```js
let CompressionStream = new CompressionStream(format);
```

### Parameters

- `format`

  - : One of the following allowed compression formats:

    - `"gzip"`
    - `"deflate"`

## Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the format passed to the constructor is not supported.

## Examples

In this example a stream is compressed using gzip compression.

```js
const compressedReadableStream = inputReadableStream.pipeThrough(new CompressionStream('gzip'));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
