---
title: ReadableStreamBYOBReader
slug: Web/API/ReadableStreamBYOBReader
page-type: web-api-interface
tags:
  - API
  - Fetch
  - Interface
  - ReadableStreamBYOBReader
  - Reference
  - Streams
browser-compat: api.ReadableStreamBYOBReader
---
{{APIRef("Streams")}}

The `ReadableStreamBYOBReader` interface of the [Streams API](/en-US/docs/Web/API/Streams_API) defines a reader for a {{domxref("ReadableStream")}} that supports zero-copy reading from an underlying byte source.
It is used for efficient copying from underlying sources where the data is delivered as an "anonymous" sequence of bytes, such as files.

An instance of this reader type should usually be obtained by calling {{domxref("ReadableStream.getReader()")}} on the stream, specifying `mode: "byob"` in the options parameter.
The readable stream must have an _underlying byte source_. In other words, it must have been [constructed](/en-US/docs/Web/API/ReadableStream/ReadableStream) specifying an underlying source with [`type: "bytes"`](/en-US/docs/Web/API/ReadableStream/ReadableStream#type)).

Using this kind of reader, a [`read()`](#readablestreambyobreader.read) request when the readable stream's internal queues are empty will result in a zero copy transfer from the underlying source (bypassing the stream's internal queues).
If the internal queues are not empty, a `read()` will satisfy the request from the buffered data.

Note that the methods and properties are similar to those for the default reader ({{domxref("ReadableStreamDefaultReader")}}).
The `read()` method differs in that it provide a view into which data should be written.

## Constructor

- {{domxref("ReadableStreamBYOBReader.ReadableStreamBYOBReader", "ReadableStreamBYOBReader()")}}
  - : Creates and returns a `ReadableStreamBYOBReader` object instance.

## Properties

- {{domxref("ReadableStreamBYOBReader.closed")}} {{ReadOnlyInline}}
  - : Returns a {{jsxref("Promise")}} that fulfills when the stream closes, or rejects if the stream throws an error or the reader's lock is released. This property enables you to write code that responds to an end to the streaming process.

## Methods

- {{domxref("ReadableStreamBYOBReader.cancel()")}}
  - : Returns a {{jsxref("Promise")}} that resolves when the stream is canceled. Calling this method signals a loss of interest in the stream by a consumer. The supplied `reason` argument will be given to the underlying source, which may or may not use it.
- {{domxref("ReadableStreamBYOBReader.read()")}}
  - : Passes a view into which data must be written, and returns a {{jsxref("Promise")}} that resolves with the next chunk in the stream or rejects with an indication that the stream is closed or has errored.
- {{domxref("ReadableStreamBYOBReader.releaseLock()")}}
  - : Releases the reader's lock on the stream.

## Examples

The example below is taken from the live examples in [Using readable byte streams](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams#examples).

First create the reader using {{domxref("ReadableStream.getReader()")}} on the stream, specifying `mode: "byob"` in the options parameter.
As this is a "Bring Your Own Buffer" reader, we also need to create an `ArrayBuffer` to read into.

```js
const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(4000);
```

A function that uses the reader is shown below.
This calls the `read()` method recursively to read data into the buffer.
The method takes a [`Uint8Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) [typed array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) which is a view over the part of the original array buffer that has not yet been written.
The parameters of the view are calculated from the data that was received in previous calls, which define an offset into the original array buffer.

```js
readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let offset = 0;

  while (offset < buffer.byteLength) {
    // read() returns a promise that resolves when a value has been received
    reader.read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
      .then(function processBytes({ done, value }) {
        // Result objects contain two properties:
        // done  - true if the stream has already given all its data.
        // value - some data. Always undefined when done is true.

        if (done) {
          // There is no more data in the stream
          return;
        }

        buffer = value.buffer;
        offset += value.byteLength;
        bytesReceived += value.byteLength;

        // Read some more, and call this function again
        return reader.read(new Uint8Array(buffer, offset, buffer.byteLength - offset)).then(processBytes);
      });
  }
}
```

When there is no more data in the stream, the `read()` method resolves with an object with the property `done` set to `true`, and the function returns.

The {{domxref("ReadableStreamBYOBReader.closed")}} property returns a promise that can be used to monitor for the stream being closed or errored, or the reader lock being released.

```js
reader.closed
  .then(() => { /* Resolved - code to handle stream closing */ } )
  .catch(() => { /* Rejected - code to handle error */ } );
```

To cancel the stream call {{domxref("ReadableStreamBYOBReader.cancel()")}}, optionally specifying a _reason_.
This returns a promise that will resolve when the stream has been cancelled.
When the stream is cancelled the controller will in turn call `cancel()` on the underlying source, passing in the optional reason.

The example code in [Using readable byte streams](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams#examples) calls the cancel method when a button is pressed, as shown:

```js
button.addEventListener('click', () => {
  reader.cancel("user choice").then(() => console.log('cancel complete'));
});
```

The consumer can also call `releaseLock()` to release the reader's hold on the stream, but only when no read is pending:

```js
reader.releaseLock();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using readable byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams)
