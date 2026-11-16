---
title: "TextDecoderStream: readable property"
short-title: readable
slug: Web/API/TextDecoderStream/readable
page-type: web-api-instance-property
browser-compat: api.TextDecoderStream.readable
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

The **`readable`** read-only property of the {{domxref("TextDecoderStream")}} interface returns a {{domxref("ReadableStream")}} that emits decoded strings.

## Value

A {{domxref("ReadableStream")}}.

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
console.log(output); // 你好世界
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TransformStream.readable")}}
