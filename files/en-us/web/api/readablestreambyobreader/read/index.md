---
title: "ReadableStreamBYOBReader: read() method"
short-title: read()
slug: Web/API/ReadableStreamBYOBReader/read
page-type: web-api-instance-method
browser-compat: api.ReadableStreamBYOBReader.read
---

{{APIRef("Streams")}}

The **`read()`** method of the {{domxref("ReadableStreamBYOBReader")}} interface is used to read data into a view on a user-supplied buffer from an associated [readable byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams).
A request for data will be satisfied from the stream's internal queues if there is any data present.
If the stream queues are empty, the request may be supplied as a zero-copy transfer from the underlying byte source.

The method takes as an argument a view on a buffer that supplied data is to be read into, and returns a {{jsxref("Promise")}}.
The promise fulfills with an object that has properties `value` and `done` when data comes available, or if the stream is cancelled.
If the stream is errored, the promise will be rejected with the relevant error object.

If a chunk of data is supplied, the `value` property will contain a new view.
This will be a view over the same buffer/backing memory (and of the same type) as the original `view` passed to the `read()` method, now populated with the new chunk of data.
Note that once the promise fulfills, the original `view` passed to the method will be detached and no longer usable.
The promise will fulfill with a `value: undefined` if the stream has been cancelled.
In this case the backing memory region of `view` is discarded and not returned to the caller (all previously read data in the view's buffer is lost).

The `done` property indicates whether or not more data is expected.
The value is set `true` if the stream is closed or cancelled, and `false` otherwise.

## Syntax

```js-nolint
read(view)
```

### Parameters

- `view`
  - : The view that data is to be read into.

### Return value

A {{jsxref("Promise")}}, which fulfills/rejects with a result depending on the state of the stream.

The following are possible:

- If a chunk is available and the stream is still active, the promise fulfills with an object of the form:

  ```
  { value: theChunk, done: false }
  ```

  `theChunk` is a view containing the new data.
  This is a view of the same type and over the same backing memory as the `view` passed to the `read()` method.
  The original `view` will be detached and no longer usable.

- If the stream is closed, the promise fulfills with an object of the form (where `theChunk` has the same properties as above):

  ```
  { value: theChunk, done: true }
  ```

- If the stream is cancelled, the promise fulfills with an object of the form:

  ```
  { value: undefined, done: true }
  ```

  In this case the backing memory is discarded.

- If the stream throws an error, the promise rejects with the relevant error.

### Exceptions

- {{jsxref("TypeError")}}
  - : The source object is not a `ReadableStreamBYOBReader`, the stream has no owner, the view is not an object or has become detached, the view's length is 0, or {{domxref("ReadableStreamBYOBReader.releaseLock()")}} is called (when there's is a pending read request).

## Examples

The example code here is taken from the live examples in [Using readable byte streams](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams#examples).

First we create the reader using {{domxref("ReadableStream.getReader()")}} on the stream, specifying `mode: "byob"` in the options parameter.
We also need create an `ArrayBuffer`, which is the "backing memory" of the views that we will write into.

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
    // read() returns a promise that fulfills when a value has been received
    reader
      .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
      .then(function processBytes({ done, value }) {
        // Result objects contain two properties:
        // done  - true if the stream has already given all its data.
        // value - some data. 'undefined' if the reader is canceled.

        if (done) {
          // There is no more data in the stream
          return;
        }

        buffer = value.buffer;
        offset += value.byteLength;
        bytesReceived += value.byteLength;

        // Read some more, and call this function again
        // Note that here we create a new view over the original buffer.
        return reader
          .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
          .then(processBytes);
      });
  }
}
```

When there is no more data in the stream, the `read()` method fulfills with an object with the property `done` set to `true`, and the function returns.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ReadableStreamBYOBReader.ReadableStreamBYOBReader", "ReadableStreamBYOBReader()")}} constructor
- [Using readable byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams)
