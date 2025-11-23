---
title: "CompressionStream: readable property"
short-title: readable
slug: Web/API/CompressionStream/readable
page-type: web-api-instance-property
browser-compat: api.CompressionStream.readable
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

The **`readable`** read-only property of the {{domxref("CompressionStream")}} interface
returns a {{domxref("ReadableStream")}} containing the compressed output data.

This stream provides the result of data written into the {{domxref("CompressionStream.writable")}}
property. Developers can consume the compressed content from this stream using
methods such as `pipeTo()`, `pipeThrough()`, or by manually reading chunks with a reader.

## Value

A {{domxref("ReadableStream")}}.

## Examples

The following example returns a {{domxref("ReadableStream")}} from a `CompressionStream`.

```js
let stream = new CompressionStream("gzip");
console.log(stream.readable); // A ReadableStream
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
