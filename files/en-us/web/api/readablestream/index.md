---
title: ReadableStream
slug: Web/API/ReadableStream
page-type: web-api-interface
tags:
  - API
  - Fetch
  - Fetch API
  - Files
  - HTTP
  - Interface
  - Networking
  - ReadableStream
  - Reference
  - Streams
  - data
browser-compat: api.ReadableStream
---
{{APIRef("Streams")}}

The `ReadableStream` interface of the [Streams API](/en-US/docs/Web/API/Streams_API) represents a readable stream of byte data. The [Fetch API](/en-US/docs/Web/API/Fetch_API) offers a concrete instance of a `ReadableStream` through the {{domxref("Response.body", "body")}} property of a {{domxref("Response")}} object.

`ReadableStream` is a {{glossary("Transferable objects","transferable object")}}.

## Constructor

- {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}}
  - : Creates and returns a readable stream object from the given handlers.

## Properties

- {{domxref("ReadableStream.locked")}} {{ReadOnlyInline}}
  - : The `locked` getter returns whether or not the readable stream is locked to a reader.

## Methods

- {{domxref("ReadableStream.cancel()")}}
  - : Returns a {{jsxref("Promise")}} that resolves when the stream is canceled. Calling this method signals a loss of interest in the stream by a consumer. The supplied `reason` argument will be given to the underlying source, which may or may not use it.
- {{domxref("ReadableStream.getReader()")}}
  - : Creates a reader and locks the stream to it. While the stream is locked, no other reader can be acquired until this one is released.
- {{domxref("ReadableStream.pipeThrough()")}}
  - : Provides a chainable way of piping the current stream through a transform stream or any other writable/readable pair.
- {{domxref("ReadableStream.pipeTo()")}}
  - : Pipes the current ReadableStream to a given {{domxref("WritableStream")}} and returns a {{jsxref("Promise")}} that fulfills when the piping process completes successfully, or rejects if any errors were encountered.
- {{domxref("ReadableStream.tee()")}}
  - : The `tee` method [tees](https://streams.spec.whatwg.org/#tee-a-readable-stream) this readable stream, returning a two-element array containing the two resulting branches as new {{domxref("ReadableStream")}} instances. Each of those streams receives the same incoming data.

## Examples

### Fetch stream

In the following example, an artificial {{domxref("Response")}} is created to stream HTML fragments fetched from another resource to the browser.

It demonstrates the usage of a {{domxref("ReadableStream")}} in combination with a {{jsxref("Uint8Array")}}.

```js
fetch('https://www.example.org')
  .then((response) => response.body)
  .then((rb) => {
    const reader = rb.getReader();

    return new ReadableStream({
      start(controller) {
        // The following function handles each data chunk
        function push() {
          // "done" is a Boolean and value a "Uint8Array"
          reader.read().then(({ done, value }) => {
            // If there is no more data to read
            if (done) {
              console.log('done', done);
              controller.close();
              return;
            }
            // Get the data and send it to the browser via the controller
            controller.enqueue(value);
            // Check chunks by logging to the console
            console.log(done, value);
            push();
          });
        }

        push();
      },
    });
  })
  .then((stream) =>
    // Respond with our stream
    new Response(stream, { headers: { 'Content-Type': 'text/html' } }).text()
  )
  .then((result) => {
    // Do things with result
    console.log(result);
  });
```

### Async iterator to stream

Converting an [(async) iterator](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) to a readable stream:

```js
function iteratorToStream(iterator) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next();

      if (done) {
        controller.close();
      } else {
        controller.enqueue(value);
      }
    },
  });
}
```

This works with both async and non-async iterators.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), for a basic visualization of readable, writable, and transform streams.
