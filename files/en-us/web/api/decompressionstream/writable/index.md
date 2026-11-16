---
title: "DecompressionStream: writable property"
short-title: writable
slug: Web/API/DecompressionStream/writable
page-type: web-api-instance-property
browser-compat: api.DecompressionStream.writable
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

The **`writable`** read-only property of the {{domxref("DecompressionStream")}} interface returns a {{domxref("WritableStream")}} that accepts compressed data to be decompressed, in the form of {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, or {{jsxref("DataView")}} chunks.

## Value

A {{domxref("WritableStream")}}.

## Examples

This example creates a `DecompressionStream` that performs gzip decompression. It writes some compressed binary data to the `writable` stream, then reads the decompressed data from the `readable` stream, decoding it as UTF-8 text.

```js
const stream = new DecompressionStream("gzip");

// Write data to be compressed
const data = Uint8Array.fromBase64(
  "H4sIAAAAAAAAE/NIzcnJ11Eozy/KSVEEAObG5usNAAAA",
);
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
console.log(new TextDecoder().decode(new Uint8Array(output))); // Hello, world!
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TransformStream.writable")}}
