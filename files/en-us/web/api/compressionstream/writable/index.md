---
title: "CompressionStream: writable property"
short-title: writable
slug: Web/API/CompressionStream/writable
page-type: web-api-instance-property
browser-compat: api.CompressionStream.writable
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

The **`writable`** read-only property of the {{domxref("CompressionStream")}} interface returns a {{domxref("WritableStream")}} that accepts uncompressed data to be compressed, in the form of {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, or {{jsxref("DataView")}} chunks.

## Value

A {{domxref("WritableStream")}}.

## Examples

This example creates a `CompressionStream` that performs gzip compression. It writes some binary data to the `writable` stream, then reads the compressed data from the `readable` stream.

```js
const stream = new CompressionStream("gzip");

// Write data to be compressed
const data = new TextEncoder().encode("Hello, world!");
const writer = stream.writable.getWriter();
writer.write(data);
writer.close();

// Read compressed data
const reader = stream.readable.getReader();
let done = false;
let output = [];
while (!done) {
  const result = await reader.read();
  if (result.value) {
    output.push(...result.value);
  }
  done = result.done;
}
console.log(new Uint8Array(output).toBase64()); // H4sIAAAAAAAAE/NIzcnJ11Eozy/KSVEEAObG5usNAAAA
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TransformStream.writable")}}
