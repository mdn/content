---
title: ReadableStreamDefaultReader
slug: Web/API/ReadableStreamDefaultReader
tags:
  - API
  - Fetch
  - Interface
  - ReadableStreamDefaultReader
  - Reference
  - Streams
browser-compat: api.ReadableStreamDefaultReader
---
{{APIRef("Streams")}}

The **`ReadableStreamDefaultReader`** interface of the [Streams API](/en-US/docs/Web/API/Streams_API) represents a default reader that can be used to read stream data supplied from a network (e.g. a fetch request).

## Constructor

- {{domxref("ReadableStreamDefaultReader.ReadableStreamDefaultReader", "ReadableStreamDefaultReader()")}}
  - : Creates and returns a `ReadableStreamDefaultReader` object instance.

## Properties

- {{domxref("ReadableStreamDefaultReader.closed")}} {{readonlyInline}}
  - : Returns a {{jsxref("Promise")}} that fulfills when the stream closes or the reader's lock is released, or rejects if the stream throws an error. This property enables you to write code that responds to an end to the streaming process.

## Methods

- {{domxref("ReadableStreamDefaultReader.cancel()")}}
  - : Returns a {{jsxref("Promise")}} that resolves when the stream is canceled. Calling this method signals a loss of interest in the stream by a consumer. The supplied `reason` argument will be given to the underlying source, which may or may not use it.
- {{domxref("ReadableStreamDefaultReader.read()")}}
  - : Returns a promise providing access to the next chunk in the stream's internal queue.
- {{domxref("ReadableStreamDefaultReader.releaseLock()")}}
  - : Releases the reader's lock on the stream.

## Examples

In the following example, an artifical {{domxref("Response")}} is created to stream HTML fragments fetched from another resource to the browser.

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
      };

      push();
    }
  });

  return new Response(stream, { headers: { "Content-Type": "text/html" } });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
