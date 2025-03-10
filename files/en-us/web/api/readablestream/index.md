---
title: ReadableStream
slug: Web/API/ReadableStream
page-type: web-api-interface
browser-compat: api.ReadableStream
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

The `ReadableStream` interface of the [Streams API](/en-US/docs/Web/API/Streams_API) represents a readable stream of byte data. The [Fetch API](/en-US/docs/Web/API/Fetch_API) offers a concrete instance of a `ReadableStream` through the {{domxref("Response.body", "body")}} property of a {{domxref("Response")}} object.

`ReadableStream` is a [transferable object](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects).

## Constructor

- {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}}
  - : Creates and returns a readable stream object from the given handlers.

## Instance properties

- {{domxref("ReadableStream.locked")}} {{ReadOnlyInline}}
  - : Returns a boolean indicating whether or not the readable stream is locked to a reader.

## Static methods

- {{domxref("ReadableStream/from_static", "ReadableStream.from()")}} {{Experimental_Inline}}
  - : Returns `ReadableStream` from a provided iterable or async iterable object, such as an array, a set, an async generator, and so on.

## Instance methods

- {{domxref("ReadableStream.cancel()")}}
  - : Returns a {{jsxref("Promise")}} that resolves when the stream is canceled. Calling this method signals a loss of interest in the stream by a consumer. The supplied `reason` argument will be given to the underlying source, which may or may not use it.
- {{domxref("ReadableStream.getReader()")}}
  - : Creates a reader and locks the stream to it. While the stream is locked, no other reader can be acquired until this one is released.
- {{domxref("ReadableStream.pipeThrough()")}}
  - : Provides a chainable way of piping the current stream through a transform stream or any other writable/readable pair.
- {{domxref("ReadableStream.pipeTo()")}}
  - : Pipes the current ReadableStream to a given {{domxref("WritableStream")}} and returns a {{jsxref("Promise")}} that fulfills when the piping process completes successfully, or rejects if any errors were encountered.
- {{domxref("ReadableStream.tee()")}}
  - : The `tee` method [tees](https://streams.spec.whatwg.org/#tee-a-readable-stream) this readable stream, returning a two-element array containing the two resulting branches as new `ReadableStream` instances. Each of those streams receives the same incoming data.

## Async iteration

`ReadableStream` implements the [async iterable protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols).
This enables asynchronous iteration over the chunks in a stream using the [`for await...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) syntax:

```js
const stream = new ReadableStream(getSomeSource());

for await (const chunk of stream) {
  // Do something with each 'chunk'
}
```

The async iterator consumes the stream until it runs out of data or otherwise terminates.
The loop can also exit early due to a `break`, `throw`, or `return` statement.

While iterating, the stream is locked to prevent other consumers from acquiring a reader (attempting to iterate over a stream that is already locked will throw a `TypeError`).
This lock is released when the loop exits.

By default, exiting the loop will also cancel the stream, so that it can no longer be used.
To continue to use a stream after exiting the loop, pass `{ preventCancel: true }` to the stream's `values()` method:

```js
for await (const chunk of stream.values({ preventCancel: true })) {
  // Do something with 'chunk'
  break;
}
// Acquire a reader for the stream and continue reading ...
```

## Examples

### Fetch stream

In the following example, an artificial {{domxref("Response")}} is created to stream HTML fragments fetched from another resource to the browser.

It demonstrates the usage of a `ReadableStream` in combination with a {{jsxref("Uint8Array")}}.

```js
fetch("https://www.example.org")
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
              console.log("done", done);
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
    new Response(stream, { headers: { "Content-Type": "text/html" } }).text(),
  )
  .then((result) => {
    // Do things with result
    console.log(result);
  });
```

### Convert an iterator or async iterator to a stream

The {{domxref("ReadableStream/from_static", "from()")}} static method can convert an iterator, such as an {{jsxref("Array")}} or {{jsxref("Map")}}, or an [(async) iterator](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators) to a readable stream:

```js
const myReadableStream = ReadableStream.from(iteratorOrAsyncIterator);
```

On browsers that don't support the `from()` method you can instead create your own [custom readable stream](/en-US/docs/Web/API/Streams_API/Using_readable_streams#creating_your_own_custom_readable_stream) to achieve the same result:

```js
function iteratorToStream(iterator) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next();

      if (value) {
        controller.enqueue(value);
      }
      if (done) {
        controller.close();
      }
    },
  });
}
```

> [!WARNING]
> This example assumes that the return value (`value` when `done` is `true`), if present, is also a chunk to be enqueued. Some iterator APIs may use the return value for different purposes. You may need to adjust the code based on the API you are interacting with.

### Async iteration of a stream using for await...of

This example shows how you can process the `fetch()` response using a [`for await...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) loop to iterate through the arriving chunks.

```js
const response = await fetch("https://www.example.org");
let total = 0;

// Iterate response.body (a ReadableStream) asynchronously
for await (const chunk of response.body) {
  // Do something with each chunk
  // Here we just accumulate the size of the response.
  total += chunk.length;
}

// Do something with the total
console.log(total);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Streams API concepts](/en-US/docs/Web/API/Streams_API)
- [Using readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams)
- [Using readable byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), for a basic visualization of readable, writable, and transform streams.
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) or [sd-streams](https://github.com/stardazed/sd-streams) - polyfills
