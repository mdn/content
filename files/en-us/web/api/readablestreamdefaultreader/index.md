---
title: ReadableStreamDefaultReader
slug: Web/API/ReadableStreamDefaultReader
page-type: web-api-interface
browser-compat: api.ReadableStreamDefaultReader
---

{{APIRef("Streams")}}

The **`ReadableStreamDefaultReader`** interface of the [Streams API](/en-US/docs/Web/API/Streams_API) represents a default reader that can be used to read stream data supplied from a network (such as a fetch request).

A `ReadableStreamDefaultReader` can be used to read from a {{domxref("ReadableStream")}} that has an underlying source of any type (unlike a {{domxref("ReadableStreamBYOBReader")}}, which can only be used with readable streams that have an _underlying byte source_).

Note however that zero-copy transfer from an underlying source is only supported for underlying byte sources that autoallocate buffers.
In other words, the stream must have been [constructed](/en-US/docs/Web/API/ReadableStream/ReadableStream) specifying both [`type="bytes"`](/en-US/docs/Web/API/ReadableStream/ReadableStream#type) and [`autoAllocateChunkSize`](/en-US/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize).
For any other underlying source, the stream will always satisfy read requests with data from internal queues.

## Constructor

- {{domxref("ReadableStreamDefaultReader.ReadableStreamDefaultReader", "ReadableStreamDefaultReader()")}}
  - : Creates and returns a `ReadableStreamDefaultReader` object instance.

## Instance properties

- {{domxref("ReadableStreamDefaultReader.closed")}} {{ReadOnlyInline}}
  - : Returns a {{jsxref("Promise")}} that fulfills when the stream closes, or rejects if the stream throws an error or the reader's lock is released. This property enables you to write code that responds to an end to the streaming process.

## Instance methods

- {{domxref("ReadableStreamDefaultReader.cancel()")}}
  - : Returns a {{jsxref("Promise")}} that resolves when the stream is canceled. Calling this method signals a loss of interest in the stream by a consumer. The supplied `reason` argument will be given to the underlying source, which may or may not use it.
- {{domxref("ReadableStreamDefaultReader.read()")}}
  - : Returns a promise providing access to the next chunk in the stream's internal queue.
- {{domxref("ReadableStreamDefaultReader.releaseLock()")}}
  - : Releases the reader's lock on the stream.

## Examples

In the following example, an artificial {{domxref("Response")}} is created to stream HTML fragments fetched from another resource to the browser.

It demonstrates the usage of a {{domxref("ReadableStream")}} in combination with a {{jsxref("Uint8Array")}}.

```js
fetch("https://www.example.org/").then((response) => {
  const reader = response.body.getReader();
  const stream = new ReadableStream({
    start(controller) {
      // The following function handles each data chunk
      function push() {
        // "done" is a Boolean and value a "Uint8Array"
        return reader.read().then(({ done, value }) => {
          // Is there no more data to read?
          if (done) {
            // Tell the browser that we have finished sending data
            controller.close();
            return;
          }

          // Get the data and send it to the browser via the controller
          controller.enqueue(value);
          push();
        });
      }

      push();
    },
  });

  return new Response(stream, { headers: { "Content-Type": "text/html" } });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Streams API concepts](/en-US/docs/Web/API/Streams_API)
- [Using readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams)
- {{domxref("ReadableStream")}}
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), for a basic visualization of readable, writable, and transform streams.
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) or [sd-streams](https://github.com/stardazed/sd-streams) - polyfills
