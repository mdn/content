---
title: DecompressionStream()
slug: Web/API/DecompressionStream/DecompressionStream
tags:
  - API
  - Constructor
  - Reference
  - DecompressionStream
browser-compat: api.DecompressionStream.DecompressionStream
---
{{DefaultAPISidebar("Compression Streams API")}}

The **`DecompressionStream()`** constructor creates a new {{domxref("DecompressionStream")}} object which decompresses a stream of data.

## Syntax

```js
let DecompressionStream = new DecompressionStream(format);
```

### Parameters

- `format`

  - : One of the following compression formats:

    - `"gzip"`
    - `"deflate"`

## Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the format passed to the constructor is not supported.

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
