---
title: "TextDecoderStream: writable property"
short-title: writable
slug: Web/API/TextDecoderStream/writable
page-type: web-api-instance-property
browser-compat: api.TextDecoderStream.writable
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

The **`writable`** read-only property of the {{domxref("TextDecoderStream")}} interface returns a {{domxref("WritableStream")}} that accepts binary data, in the form of {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, or {{jsxref("DataView")}} chunks ({{jsxref("SharedArrayBuffer")}} and its views are also allowed), to be decoded into strings.

## Value

A {{domxref("WritableStream")}}.

## Examples

This example creates a `TextDecoderStream` that decodes UTF-8 encoded binary data. It writes some encoded binary data to the `writable` stream, then reads the decoded text from the `readable` stream.

```js
const stream = new TextDecoderStream();

// Write data to be decoded
const data = Uint8Array.fromBase64("5L2g5aW95LiW55WM");
const writer = stream.writable.getWriter();
writer.write(data);
writer.close();

// Read decoded data
const reader = stream.readable.getReader();
let done = false;
let output = "";
while (!done) {
  const result = await reader.read();
  if (result.value) {
    output += result.value;
  }
  done = result.done;
}
console.log(output);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TransformStream.writable")}}
