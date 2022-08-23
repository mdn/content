---
title: WritableStreamDefaultWriter
slug: Web/API/WritableStreamDefaultWriter
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - Streams
  - Streams API
  - WritableStream
browser-compat: api.WritableStreamDefaultWriter
---
{{APIRef("Streams")}}

The **`WritableStreamDefaultWriter`** interface of the [Streams API](/en-US/docs/Web/API/Streams_API) is the object returned by {{domxref("WritableStream.getWriter()")}} and once created locks the writer to the `WritableStream` ensuring that no other streams can write to the underlying sink.

## Constructor

- {{domxref("WritableStreamDefaultWriter.WritableStreamDefaultWriter", "WritableStreamDefaultWriter()")}}
  - : Creates a new `WritableStreamDefaultWriter` object instance.

## Properties

- {{domxref("WritableStreamDefaultWriter.closed")}} {{ReadOnlyInline}}
  - : Allows you to write code that responds to an end to the streaming process. Returns a promise that fulfills if the stream becomes closed, or rejects if the stream errors or the writer's lock is released.
- {{domxref("WritableStreamDefaultWriter.desiredSize")}} {{ReadOnlyInline}}
  - : Returns the desired size required to fill the stream's internal queue.
- {{domxref("WritableStreamDefaultWriter.ready")}} {{ReadOnlyInline}}
  - : Returns a {{jsxref("Promise")}} that resolves when the desired size of the stream's internal queue transitions from non-positive to positive, signaling that it is no longer applying backpressure.

## Methods

- {{domxref("WritableStreamDefaultWriter.abort()")}}
  - : Aborts the stream, signaling that the producer can no longer successfully write to the stream and it is to be immediately moved to an error state, with any queued writes discarded.
- {{domxref("WritableStreamDefaultWriter.close()")}}
  - : Closes the associated writable stream.
- {{domxref("WritableStreamDefaultWriter.releaseLock()")}}
  - : Releases the writer's lock on the corresponding stream. After the lock is released, the writer is no longer active. If the associated stream is errored when the lock is released, the writer will appear errored in the same way from now on; otherwise, the writer will appear closed.
- {{domxref("WritableStreamDefaultWriter.write()")}}
  - : Writes a passed chunk of data to a {{domxref("WritableStream")}} and its underlying sink, then returns a {{jsxref("Promise")}} that resolves to indicate the success or failure of the write operation.

## Examples

The following example shows the creation of a `WritableStream` with a custom sink and an API-supplied queuing strategy. It then calls a function called `sendMessage()`, passing the newly created stream and a string. Inside this function it calls the stream's `getWriter()` method, which returns an instance of {{domxref("WritableStreamDefaultWriter")}}. A `forEach()` call is used to write each chunk of the string to the stream. Finally, `write()` and `close()` return promises that are processed to deal with success or failure of chunks and streams.

```js
 const list = document.querySelector('ul');

 function sendMessage(message, writableStream) {
   // defaultWriter is of type WritableStreamDefaultWriter
   const defaultWriter = writableStream.getWriter();
   const encoder = new TextEncoder();
   const encoded = encoder.encode(message, { stream: true });
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
 const writableStream = new WritableStream({
   // Implement the sink
   write(chunk) {
     return new Promise((resolve, reject) => {
       const buffer = new ArrayBuffer(1);
       const view = new Uint8Array(buffer);
       view[0] = chunk;
       const decoded = decoder.decode(view, { stream: true });
       const listItem = document.createElement('li');
       listItem.textContent = `Chunk decoded: ${decoded}`;
       list.appendChild(listItem);
       result += decoded;
       resolve();
     });
   },
   close() {
     const listItem = document.createElement('li');
     listItem.textContent = `[MESSAGE RECEIVED] ${result}`;
     list.appendChild(listItem);
   },
   abort(err) {
     console.log("Sink error:", err);
   }
 }, queuingStrategy);

 sendMessage("Hello, world.", writableStream);
```

You can find the full code in our [Simple writer example](https://mdn.github.io/dom-examples/streams/simple-writer/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
