---
title: WritableStream
slug: Web/API/WritableStream
page-type: web-api-interface
browser-compat: api.WritableStream
---

{{APIRef("Streams")}}

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

The following example illustrates several features of this interface. It shows the creation of the `WritableStream` with a custom sink and an API-supplied queueing strategy. It then calls a function called `sendMessage()`, passing the newly created stream and a string. Inside this function it calls the stream's `getWriter()` method, which returns an instance of {{domxref("WritableStreamDefaultWriter")}}. A `forEach()` call is used to write each chunk of the string to the stream. Finally, `write()` and `close()` return promises that are processed to deal with success or failure of chunks and streams.

```js
const list = document.querySelector("ul");

function sendMessage(message, writableStream) {
  // defaultWriter is of type WritableStreamDefaultWriter
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message);
  encoded.forEach((chunk) => {
    defaultWriter.ready
      .then(() => defaultWriter.write(chunk))
      .then(() => {
        console.log("Chunk written to sink.");
      })
      .catch((err) => {
        console.log("Chunk error:", err);
      });
  });
  // Call ready again to ensure that all chunks are written
  //   before closing the writer.
  defaultWriter.ready
    .then(() => {
      defaultWriter.close();
    })
    .then(() => {
      console.log("All chunks written");
    })
    .catch((err) => {
      console.log("Stream error:", err);
    });
}

const decoder = new TextDecoder("utf-8");
const queuingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });
let result = "";
const writableStream = new WritableStream(
  {
    // Implement the sink
    write(chunk) {
      return new Promise((resolve, reject) => {
        const buffer = new ArrayBuffer(1);
        const view = new Uint8Array(buffer);
        view[0] = chunk;
        const decoded = decoder.decode(view, { stream: true });
        const listItem = document.createElement("li");
        listItem.textContent = `Chunk decoded: ${decoded}`;
        list.appendChild(listItem);
        result += decoded;
        resolve();
      });
    },
    close() {
      const listItem = document.createElement("li");
      listItem.textContent = `[MESSAGE RECEIVED] ${result}`;
      list.appendChild(listItem);
    },
    abort(err) {
      console.log("Sink error:", err);
    },
  },
  queuingStrategy,
);

sendMessage("Hello, world.", writableStream);
```

You can find the full code in our [Simple writer example](https://mdn.github.io/dom-examples/streams/simple-writer/).

### Backpressure

Because of how [backpressure](/en-US/docs/Web/API/Streams_API/Concepts#backpressure) is supported in the API, its implementation in code may be less than obvious.
To see how backpressure is implemented look for three things:

- The `highWaterMark` property, which is set when creating the counting strategy (line 35), sets the maximum amount of data that the `WritableStream` instance will handle in a single `write()` operation. In this example, it's the maximum amount of data that can be sent to `defaultWriter.write()` (line 11).
- The `defaultWriter.ready` property returns a promise that resolves when the sink (the first property of the `WritableStream` constructor) is done writing data. The data source can either write more data (line 9) or call `close()` (line 24). Calling close() too early can prevent data from being written. This is why the example calls `defaultWriter.ready` twice (lines 9 and 22).
- The {{jsxref("Promise")}} returned by the sink's `write()` method (line 40) tells the `WritableStream` and its writer when to resolve `defaultWriter.ready`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), for a basic visualization of readable, writable, and transform streams.
