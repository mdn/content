---
title: "WritableStreamDefaultWriter: ready property"
short-title: ready
slug: Web/API/WritableStreamDefaultWriter/ready
page-type: web-api-instance-property
browser-compat: api.WritableStreamDefaultWriter.ready
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

The **`ready`** read-only property of the
{{domxref("WritableStreamDefaultWriter")}} interface returns a {{jsxref("Promise")}}
that resolves when the desired size of the stream's internal queue transitions from
non-positive to positive, signaling that it is no longer applying backpressure.

## Value

A {{jsxref("Promise")}}.

## Examples

The following example shows two uses of the `ready` property. The first uses
`ready` to ensure that the `WritableStream` is done writing and
thus able to receive data before sending a binary chunk. The second also checks whether
the `WritableStream` is done writing, but this time because the writing
must be finished before the writer can be closed.

```js
function sendMessage(message, writableStream) {
  // defaultWriter is of type WritableStreamDefaultWriter
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message);
  encoded.forEach((chunk) => {
    // Make sure the stream and its writer are able to
    //   receive data.
    defaultWriter.ready
      .then(() => defaultWriter.write(chunk))
      .then(() => {
        console.log("Chunk written to sink.");
      })
      .catch((err) => {
        console.error(`Chunk error: ${err}`);
      });
    // Call ready again to ensure that all chunks are written
    //   before closing the writer.
    defaultWriter.ready
      .then(() => defaultWriter.close())
      .then(() => {
        console.log("All chunks written");
      })
      .catch((err) => {
        console.error(`Stream error: ${err}`);
      });
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
