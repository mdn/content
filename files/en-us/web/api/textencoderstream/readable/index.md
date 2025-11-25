---
title: "TextEncoderStream: readable property"
short-title: readable
slug: Web/API/TextEncoderStream/readable
page-type: web-api-instance-property
browser-compat: api.TextEncoderStream.readable
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

The **`readable`** read-only property of the {{domxref("TextEncoderStream")}} interface returns a {{domxref("ReadableStream")}} that emits encoded binary data.

## Value

A {{domxref("ReadableStream")}}.

## Examples

This example creates a `TextEncoderStream` that encodes strings as UTF-8. It writes some strings to the `writable` stream, then reads the encoded binary data from the `readable` stream.

```js
const stream = new TextEncoderStream();

// Write data to be encoded
const data = "你好世界";
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
console.log(new Uint8Array(output).toBase64()); // 5L2g5aW95LiW55WM
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TransformStream.readable")}}
