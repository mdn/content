---
title: WritableStream
slug: Web/API/WritableStream
page-type: web-api-interface
browser-compat: api.WritableStream
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

The **`WritableStream`** interface of the [Streams API](/en-US/docs/Web/API/Streams_API) provides a standard abstraction for writing streaming data to a destination, known as a sink.
This object comes with built-in backpressure and queuing.

`WritableStream` is a [transferable object](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects).

## Constructor

- {{domxref("WritableStream.WritableStream", "WritableStream()")}}
  - : Creates a new `WritableStream` object.

## Instance properties

- {{domxref("WritableStream.locked")}} {{ReadOnlyInline}}
  - : A boolean indicating whether the `WritableStream` is locked to a writer.

## Instance methods

- {{domxref("WritableStream.abort()")}}
  - : Aborts the stream, signaling that the producer can no longer successfully write to the stream and it is to be immediately moved to an error state, with any queued writes discarded.
- {{domxref("WritableStream.close()")}}
  - : Closes the stream.
- {{domxref("WritableStream.getWriter()")}}
  - : Returns a new instance of {{domxref("WritableStreamDefaultWriter")}} and locks the stream to that instance. While the stream is locked, no other writer can be acquired until this one is released.

## Examples

The following example illustrates several features of this interface. It creates the `WritableStream` with a custom sink. It then calls the stream's `getWriter()` method, which returns an instance of {{domxref("WritableStreamDefaultWriter")}}. Next, several strings are written to the stream. Finally, `close()` returns a promise that resolves when all the writes have successfully completed.

```js
const writableStream = new WritableStream(
  // Implement the sink
  {
    write(chunk) {
      const textElement = document.getElementById("text-output");
      textElement.textContent += chunk;
    },
  },
);

const writer = writableStream.getWriter();

try {
  writer.write("Hello, ");
  writer.write("world!\n");
  writer.write("This has been a demo!\n");

  await writer.close(); // wait for all chunks to be written
  console.log("All chunks written");
} catch (error) {
  console.error("Stream error: ", error);
}
```

This example does not support the [backpressure](/en-US/docs/Web/API/Streams_API/Concepts#backpressure) feature of Streams.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Streams—The Definitive Guide](https://web.dev/articles/streams)
