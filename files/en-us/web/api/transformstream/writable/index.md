---
title: "TransformStream: writable property"
short-title: writable
slug: Web/API/TransformStream/writable
page-type: web-api-instance-property
browser-compat: api.TransformStream.writable
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

The **`writable`** read-only property of the {{domxref("TransformStream")}} interface returns the {{domxref("WritableStream")}} instance controlled by this `TransformStream`. This stream accepts input data that will be transformed and emitted to the `readable` stream.

## Value

A {{domxref("WritableStream")}}.

## Examples

This example creates a `TransformStream` that converts all input text to uppercase letters. It writes some text to the `writable` stream, then reads the transformed text from the `readable` stream.

```js
const stream = new TransformStream({
  transform(chunk, controller) {
    controller.enqueue(chunk.toUpperCase());
  },
});

// Write data to be transformed
const writer = stream.writable.getWriter();
writer.write("hello ");
writer.write("world");
writer.close();

// Read transformed data
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
console.log(output); // HELLO WORLD
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
