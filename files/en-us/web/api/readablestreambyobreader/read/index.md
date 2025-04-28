---
title: "ReadableStreamBYOBReader: read() method"
short-title: read()
slug: Web/API/ReadableStreamBYOBReader/read
page-type: web-api-instance-method
browser-compat: api.ReadableStreamBYOBReader.read
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

The **`read()`** method of the {{domxref("ReadableStreamBYOBReader")}} interface is used to read data into a view on a user-supplied buffer from an associated [readable byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams).
A request for data will be satisfied from the stream's internal queues if there is any data present.
If the stream queues are empty, the request may be supplied as a zero-copy transfer from the underlying byte source.

The method takes as an argument a view on a buffer that supplied data is to be read into, and returns a {{jsxref("Promise")}}.
The promise fulfills with an object that has properties `value` and `done` when data comes available, or if the stream is cancelled.
If the stream is errored, the promise will be rejected with the relevant error object.

When a chunk of data is supplied, the `value` property will contain a new view.
This will be a view over the same buffer/backing memory (and of the same type) as the original `view` passed to the `read()` method, now populated with the new chunk of data.
Note that once the promise fulfills, the original `view` passed to the method will be detached and no longer usable.
The promise will fulfill with a `value: undefined` if the stream has been cancelled.
In this case the backing memory region of `view` is discarded and not returned to the caller (all previously read data in the view's buffer is lost).

The `done` property indicates whether or not more data is expected.
The value is set `true` if the stream is closed or cancelled, and `false` otherwise.

The method also has an optional `options.min` argument that can be used to specify the minimum number of elements that must be available before the promise will fulfill, while the stream is active.
The view returned in the `value` property will always have at least this number of elements, except when the stream is closed.

## Syntax

```js-nolint
read(view)
read(view, options)
```

### Parameters

- `view`
  - : The view that data is to be read into.
- `options` {{optional_inline}}

  - : Options are as follows:

    - `min`
      - : The minimum number of elements to read before the promise will fulfill while the stream is active.
        If not given, the promise will resolve with at least one element, up to the maximum size of the view.
        This number must not be bigger than the view that is being read into.

### Return value

A {{jsxref("Promise")}}, which fulfills/rejects with a result depending on the state of the stream. The result object contains two properties, `value` and `done`.

The following are possible:

- If a chunk is available and the stream is still active, the result's `done` is `false`, and `value` is a view containing the new data.
  This is a view of the same type and over the same backing memory as the `view` passed to the `read()` method.
  The original `view` will be detached and no longer usable.

- If the stream is closed, the result's `done` is `true`, and `value` has the same properties as above.

- If the stream is cancelled, the result's `done` is `true`, and `value` is `undefined`.
  In this case the backing memory is discarded.

- If the stream throws an error, the promise rejects with the relevant error.

### Exceptions

- {{jsxref("TypeError")}}
  - : The source object is not a `ReadableStreamBYOBReader`, the stream has no owner, the view is not an object or has become detached, the view's length is 0, `options.min` is 0, or {{domxref("ReadableStreamBYOBReader.releaseLock()")}} is called (when there's a pending read request).
- {{jsxref("RangeError")}}
  - : The `options.min` value is larger than the view being written into.

## Examples

### Reading into a view

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

### Reading a minimum number of elements

This example is almost exactly the same as the previous one, except that we've modified the code to read a minimum of 101 elements on each iteration.

We've also made it into a live example.
Note that most of the code is not relevant to the example and is therefore hidden.
For more information see [Using readable byte streams](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams#examples).

<!-- Below here is hidden live implementation -->

```js hidden
class MockHypotheticalSocket {
  constructor() {
    this.max_data = 800; // total amount of data to stream from "socket"
    this.max_per_read = 100; // max data per read
    this.min_per_read = 40; // min data per read
    this.data_read = 0; // total data read so far (capped is maxdata)
    this.socketData = null;
  }

  // Method returning promise when this socket is readable.
  select2() {
    // Object used to resolve promise
    const resultObj = {};
    resultObj["bytesRead"] = 0;

    return new Promise((resolve /*, reject*/) => {
      if (this.data_read >= this.max_data) {
        // Out of data
        resolve(resultObj);
        return;
      }

      // Emulate slow read of data
      setTimeout(() => {
        const numberBytesReceived = this.getNumberRandomBytesSocket();
        this.data_read += numberBytesReceived;
        this.socketData = this.randomByteArray(numberBytesReceived);
        resultObj["bytesRead"] = numberBytesReceived;
        resolve(resultObj);
      }, 500);
    });
  }

  /* Read data into specified buffer offset */
  readInto(buffer, offset, length) {
    let dataLength = 0;
    if (this.socketData) {
      dataLength = this.socketData.length;
      const myView = new Uint8Array(buffer, offset, length);
      // Write the length of data specified into buffer
      // Code assumes buffer always bigger than incoming data
      for (let i = 0; i < dataLength; i++) {
        myView[i] = this.socketData[i];
      }
      this.socketData = null; // Clear "socket" data after reading
    }
    return dataLength;
  }

  // Dummy close function
  close() {
    return;
  }

  // Return random number bytes in this call of socket
  getNumberRandomBytesSocket() {
    // Capped to remaining data and the max min return-per-read range
    const remaining_data = this.max_data - this.data_read;
    const numberBytesReceived =
      remaining_data < this.min_per_read
        ? remaining_data
        : this.getRandomIntInclusive(
            this.min_per_read,
            Math.min(this.max_per_read, remaining_data),
          );
    return numberBytesReceived;
  }

  // Return random number between two values
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Return random character string
  randomChars(length = 8) {
    let string = "";
    let choices =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      string += choices.charAt(Math.floor(Math.random() * choices.length));
    }
    return string;
  }

  /* Return random Uint8Array of bytes */
  randomByteArray(bytes = 8) {
    const textEncoder = new TextEncoder();
    return textEncoder.encode(this.randomChars(bytes));
  }
}
```

<!-- The following html and js sets up reporting. Hidden because it is not useful for readers -->

```css hidden
.input {
  float: left;
  width: 50%;
}
.output {
  float: right;
  width: 50%;
  overflow-wrap: break-word;
}
button {
  display: block;
}
```

```html hidden
<button>Cancel stream</button>
<div class="input">
  <h2>Underlying source</h2>
  <ul></ul>
</div>
<div class="output">
  <h2>Consumer</h2>
  <ul></ul>
</div>
```

```js hidden
// Store reference to lists, paragraph and button
const list1 = document.querySelector(".input ul");
const list2 = document.querySelector(".output ul");
const button = document.querySelector("button");

// Create empty string in which to store final result
let result = "";

// Function to log data from underlying source
function logSource(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list1.appendChild(listItem);
}

// Function to log data from consumer
function logConsumer(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list2.appendChild(listItem);
}
```

```js hidden
const stream = makeSocketStream("dummy host", "dummy port");

const DEFAULT_CHUNK_SIZE = 400;

function makeSocketStream(host, port) {
  const socket = new MockHypotheticalSocket();

  return new ReadableStream({
    type: "bytes",

    start(controller) {
      readRepeatedly().catch((e) => controller.error(e));
      function readRepeatedly() {
        return socket.select2().then(() => {
          // Since the socket can become readable even when there's
          // no pending BYOB requests, we need to handle both cases.
          let bytesRead;
          if (controller.byobRequest) {
            const v = controller.byobRequest.view;
            bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
            if (bytesRead === 0) {
              controller.close();
            }
            controller.byobRequest.respond(bytesRead);
            logSource(`byobRequest with ${bytesRead} bytes`);
          } else {
            const buffer = new ArrayBuffer(DEFAULT_CHUNK_SIZE);
            bytesRead = socket.readInto(buffer, 0, DEFAULT_CHUNK_SIZE);
            if (bytesRead === 0) {
              controller.close();
            } else {
              controller.enqueue(new Uint8Array(buffer, 0, bytesRead));
            }
            logSource(`enqueue() ${bytesRead} bytes (no byobRequest)`);
          }

          if (bytesRead === 0) {
            return;
            // no more bytes in source
          }
          return readRepeatedly();
        });
      }
    },

    cancel() {
      socket.close();
      logSource(`cancel(): socket closed`);
    },
  });
}

const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(4000);
readStream(reader);
```

#### JavaScript

```js
function readStream(reader) {
  let bytesReceived = 0;
  let offset = 0;

  while (offset < buffer.byteLength) {
    // read() returns a promise that resolves when a value has been received
    reader
      .read(new Uint8Array(buffer, offset, buffer.byteLength - offset), {
        min: 101,
      })
      .then(async function processText({ done, value }) {
        // Result objects contain two properties:
        // done  - true if the stream has already given all its data.
        // value - some data. Always undefined when done is true.

        if (done) {
          logConsumer(
            `readStream() complete. Read ${value.byteLength} bytes (total: ${bytesReceived})`,
          );
          return;
        }

        buffer = value.buffer;
        offset += value.byteLength;
        bytesReceived += value.byteLength;

        // logConsumer(`Read ${bytesReceived} bytes: ${value}`);
        logConsumer(`Read ${value.byteLength} bytes (total: ${bytesReceived})`);
        result += value;

        // Read some more, and call this function again
        return reader
          .read(new Uint8Array(buffer, offset, buffer.byteLength - offset), {
            min: 101,
          })
          .then(processText);
      });
  }
}
```

```js hidden
button.addEventListener("click", () => {
  reader
    .cancel("user choice")
    .then(() => logConsumer("reader.cancel complete"));
});

reader.closed
  .then(() => {
    logConsumer("ReadableStreamBYOBReader.closed: resolved");
  })
  .catch(() => {
    logConsumer("ReadableStreamBYOBReader.closed: rejected:");
  });
```

#### Result

The logging from the underlying push source (left) and consumer (right) are shown below.
Note that if the browser supports the `options.min` argument then at least 101 elements are returned every time (and often more), except when the stream closes.

{{EmbedLiveSample("Reading a minimum number of elements","100%","500px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ReadableStreamBYOBReader.ReadableStreamBYOBReader", "ReadableStreamBYOBReader()")}} constructor
- [Using readable byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams)
