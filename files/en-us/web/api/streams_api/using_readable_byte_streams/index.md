---
title: Using readable byte streams
slug: Web/API/Streams_API/Using_readable_byte_streams
page-type: guide
---

{{DefaultAPISidebar("Streams")}}

Readable _byte streams_ are [readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams) that have an underlying byte source of `type: "bytes"`, and which support efficient zero-copy transfer of data from the underlying source to a consumer (bypassing the stream's internal queues).
They are intended for use cases where data might be supplied or requested in arbitrary sized and potentially very large chunks, and hence where avoiding making copies is likely to improve efficiency.

This article explains how readable byte streams compare to normal "default" streams, and how you create and consume them.

> [!NOTE]
> Readable byte streams are almost identical to "normal" readable streams and almost all of the concepts are the same.
> This article assumes that you already understand those concepts and will only be covering them superficially (if at all).
> If you're not familiar with the relevant concepts, please first read: [Using readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams), [Streams concepts and usage overview](/en-US/docs/Web/API/Streams_API#concepts_and_usage), and [Streams API concepts](/en-US/docs/Web/API/Streams_API/Concepts).

## Overview

Readable streams provides a consistent interface for streaming data from some underlying source, such as a file or socket, to a consumer, such as a reader, transform stream or writable stream.
In a normal readable stream, data from the underlying source always passes to a consumer through the internal queues.
A readable byte stream differs in that if the internal queues are empty, the underlying source can write directly to the consumer (an efficient zero-copy transfer).

A readable byte stream is created by specifying `type: "bytes"` in the `underlyingSource` object that may be passed as the first parameter to the [`ReadableStream()` constructor](/en-US/docs/Web/API/ReadableStream/ReadableStream).
With this value set, the stream is created with a {{domxref("ReadableByteStreamController")}}, and this is the object that is passed to the underlying source when the `start(controller)` and `pull(controller)` callback functions are invoked.

The main difference between {{domxref("ReadableByteStreamController")}} and the default controller ({{domxref("ReadableStreamDefaultController")}}) is that it has an additional property {{domxref("ReadableByteStreamController.byobRequest")}} of type {{domxref("ReadableStreamBYOBRequest")}}.
This represents a pending read request by a consumer that will be made as a zero-copy transfer from the underlying source.
The property will be `null` if there is no pending request.

A `byobRequest` is only made available when a read request is made on a readable byte stream and there is no data in the stream's internal queues (if there is data then the request is satisfied from those queues).

An underlying byte source that needs to transfer data must check the `byobRequest` property and, if it is available, use it to transfer data.
If the property is `null`, incoming data should instead be added to the stream's internal queues using {{domxref("ReadableByteStreamController.enqueue()")}} (this is the only way to transfer data when using a "default" stream).

The {{domxref("ReadableStreamBYOBRequest")}} has a {{domxref("ReadableStreamBYOBRequest.view","view")}} property, which is a view on the buffer allocated for transfer.
Data from an underlying source should be written into this property, and then the underlying source must call {{domxref("ReadableStreamBYOBRequest.respond()","respond()")}} indicating the number of bytes written.
This signals that the data should be transferred, and the pending read request by the consumer resolved.
After calling `respond()` the `view` can no longer be written.

There is also an additional method {{domxref("ReadableStreamBYOBRequest.respondWithNewView()")}} to which an underlying source can pass a "new" view containing data to be transferred.
This new view must be over the _same_ memory buffer as the original, and from the same starting offset.
This method might be used if the underlying byte source needs to first transfer the view to a worker thread to populate (for example) and then get it back before responding to the `byobRequest`.
In most cases this method will not be needed.

Readable byte streams are normally read using a {{domxref("ReadableStreamBYOBReader")}}, which can be obtained by calling {{domxref("ReadableStream.getReader()")}} on the stream, specifying `mode: "byob"` in the options parameter.

A readable byte stream can also be read using a default reader ({{domxref("ReadableStreamDefaultReader")}}), but in this case `byobRequest` objects are only created when automatic buffer allocation is enabled for the stream ([`autoAllocateChunkSize`](/en-US/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) was set for the stream's `underlyingSource`).
Note that the size indicated by `autoAllocateChunkSize` is used for the buffer size in this case; for a byte reader the buffer used is supplied by the consumer.
If the property was not specified, the default reader will still "work" but the underlying source will never be offered a `byobRequest`, and all data will be transferred through the stream's internal queues.

Other than the differences outlined above, the controller and underlying source for bytes streams are very similar to those for default streams, [and are used in much the same way](/en-US/docs/Web/API/Streams_API/Using_readable_streams).

## Examples

### Underlying push source with byte reader

This live example shows how to create a readable byte stream with a _push_ underlying byte source, and read it using a byte reader.

Unlike with a pull underlying byte source, data can arrive at any time.
Therefore the underlying source must use `controller.byobRequest` to transfer incoming data if one exists, and otherwise enqueue the data into the stream's internal queues.
Further, since the data can arrive at any time the monitoring behavior is set up in the `underlyingSource.start()` callback function.

The example is highly influenced by a push byte source example in the stream specification.
It uses a mocked "hypothetical socket" source that supplies data of arbitrary sizes.
The reader is deliberately delayed at various points to allow the underlying source to use both transfer and enqueuing to send data to the stream.
Backpressure support is not demonstrated.

> [!NOTE]
> An underlying byte source can also be used with a default reader.
> If automatic buffer allocation is enabled the controller will supply fixed-size buffers for zero-copy transfers when there is an outstanding request from a reader and the stream's internal queues are empty.
> If automatic buffer allocation is not enabled then all data from the byte stream will always be enqueued.
> This is similar to the behavior shown in the "pull: underlying byte source examples.

#### Mocked underlying socket source

The mocked underlying source has three important methods:

- `select2()` represents an outstanding request on the socket.
  It returns a promise that is resolved when data is available.
- `readInto()` reads data from the socket into a supplied buffer and then clears the data.
- `close()` closes the socket.

The implementation is very simplistic.
As shown below, `select2()` creates a randomly sized buffer of random data on a timeout.
The created data is read into a buffer then cleared in `readInto()`.

```js
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
        //out of data
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

#### Creating a readable socket push byte stream

The following code shows how to define a readable socket "push" byte stream.

The `underlyingSource` object definition is passed as the first parameter to the [`ReadableStream()` constructor](/en-US/docs/Web/API/ReadableStream/ReadableStream).
To make this a readable "byte" stream, we specify `type: "bytes"` as a property of the object.
This ensures that the stream is handed a {{domxref("ReadableByteStreamController")}} (instead of the default controller ({{domxref("ReadableStreamDefaultController")}}))

Since data can arrive at the socket before the consumer is ready to handle it, everything about reading the underlying source is configured in the `start()` callback method (we don't wait on a pull to start handling data).
The implementation opens the "socket" and calls `select2()` to request data.
When the returned promise resolves the code checks if `controller.byobRequest` exists (is not `null`), and if so calls `socket.readInto()` to copy data into the request and transfer it.
If `byobRequest` does not exist there is no outstanding request from a consuming stream that can be satisfied as a zero-copy transfer.
In this case, `controller.enqueue()` used to copy data to the stream internal queues.

The `select2()` request for more data is reposted until a request is returned with no data.
A this point the controller is used to close the stream.

```js
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
```

Note that `readRepeatedly()` returns a promise, and we use this to catch any errors from setting up or handling the read operation.
The errors are then passed to the controller as shown above (see `readRepeatedly().catch((e) => controller.error(e));`).

A `cancel()` method is provided at the end to close the underlying source; the `pull()` callback is not needed, and is therefore not implemented.

#### Consuming the push byte stream

The following code creates a `ReadableStreamBYOBReader` for the socket byte stream and uses it read data into a buffer.
Note `processText()` is called recursively to read more data until the buffer is filled.
When the underlying source signals that it has no more data, the `reader.read()` will have `done` set to true, which in turn completes the read operation.

This code is almost exactly the same as for the [Underlying pull source with byte reader](#underlying_pull_source_with_byte_reader) example above.
The only difference is that the reader includes some code to slow down reading, so the log output can demonstrate that data will be enqueued if not read fast enough.

```js
const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(4000);
readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let offset = 0;

  while (offset < buffer.byteLength) {
    // read() returns a promise that resolves when a value has been received
    reader
      .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
      .then(async function processText({ done, value }) {
        // Result objects contain two properties:
        // done  - true if the stream has already given all its data.
        // value - some data. Always undefined when done is true.

        if (done) {
          logConsumer(`readStream() complete. Total bytes: ${bytesReceived}`);
          return;
        }

        buffer = value.buffer;
        offset += value.byteLength;
        bytesReceived += value.byteLength;

        //logConsumer(`Read ${bytesReceived} bytes: ${value}`);
        logConsumer(`Read ${bytesReceived} bytes`);
        result += value;

        // Add delay to emulate when data can't be read and data is enqueued
        if (bytesReceived > 300 && bytesReceived < 600) {
          logConsumer(`Delaying read to emulate slow stream reading`);
          const delay = (ms) =>
            new Promise((resolve) => setTimeout(resolve, ms));
          await delay(1000);
        }

        // Read some more, and call this function again
        return reader
          .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
          .then(processText);
      });
  }
}
```

#### Cancelling the stream using the reader

We can use {{domxref("ReadableStreamBYOBReader.cancel()")}} to cancel the stream.
For this example we call the method if a button is clicked with a reason "user choice" (other HTML and code for the button not shown).
We also log when the cancel operation completes.

```js
button.addEventListener("click", () => {
  reader
    .cancel("user choice")
    .then(() => logConsumer("reader.cancel complete"));
});
```

{{domxref("ReadableStreamBYOBReader.releaseLock()")}} can be used to release the reader without cancelling the stream.
Note however that any outstanding read requests will immediately be rejected.
A new reader can be acquired later on to read the remaining chunks.

#### Monitoring for stream for close/error

The {{domxref("ReadableStreamBYOBReader.closed")}} property returns a promise that will resolve when the stream is closed, and reject if there is an error.
While no errors are expected in this case, the following code should log the completion case.

```js
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
Not the period in the middle where data is enqueued rather than transferred as a zero-copy operation.

{{EmbedLiveSample("Underlying push source with default reader","100%","500px")}}

### Underlying pull source with byte reader

This live example shows how data might be read from an "pull" underlying byte source, such as a file, and transferred by a stream as a zero-copy transfer to a {{domxref("ReadableStreamBYOBReader")}}.

#### Mocked underlying file source

For the underlying pull source we use the following class to (_very_ superficially) mock a nodejs [`FileHandle`](https://nodejs.org/api/fs.html#class-filehandle), and in particular the [`read()`](https://nodejs.org/api/fs.html#filehandlereadbuffer-offset-length-position) method.
The class generates random data to represent a file.
The `read()` method reads a "semi-random" sized block of random data into a provided buffer from the specified position.
The `close()` method does nothing: it is only provided to show where you might close the source when defining the constructor for the stream.

> [!NOTE]
> A similar class is used for all the "pull source" examples.
> It is shown here for information only (so that it is obvious that it is a mock).

```js
class MockUnderlyingFileHandle {
  constructor() {
    this.maxdata = 100; // "file size"
    this.maxReadChunk = 25; // "max read chunk size"
    this.minReadChunk = 13; // "min read chunk size"
    this.filedata = this.randomByteArray(this.maxdata);
    this.position = 0;
  }

  // Read data from "file" at position/length into specified buffer offset
  read(buffer, offset, length, position) {
    // Object used to resolve promise
    const resultObj = {};
    resultObj["buffer"] = buffer;
    resultObj["bytesRead"] = 0;

    return new Promise((resolve /*, reject*/) => {
      if (position >= this.maxdata) {
        //out of data
        resolve(resultObj);
        return;
      }

      // Simulate a file read that returns random numbers of bytes
      // Read minimum of bytes requested and random bytes that can be returned
      let readLength =
        Math.floor(
          Math.random() * (this.maxReadChunk - this.minReadChunk + 1),
        ) + this.minReadChunk;
      readLength = length > readLength ? readLength : length;

      // Read random data into supplied buffer
      const myView = new Uint8Array(buffer, offset, readLength);
      // Write the length of data specified
      for (let i = 0; i < readLength; i++) {
        myView[i] = this.filedata[position + i];
        resultObj["bytesRead"] = i + 1;
        if (position + i + 1 >= this.maxdata) {
          break;
        }
      }
      // Emulate slow read of data
      setTimeout(() => {
        resolve(resultObj);
      }, 1000);
    });
  }

  // Dummy close function
  close() {
    return;
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

  // Return random Uint8Array of bytes
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

#### Creating a readable file byte stream

The following code shows how to define a readable file byte stream.

Just as for the previous example, the `underlyingSource` object definition is passed as the first parameter to the [`ReadableStream()` constructor](/en-US/docs/Web/API/ReadableStream/ReadableStream).
To make this a readable "byte" stream, we specify `type: "bytes"` as a property of the object.
This ensures that the stream is handed a {{domxref("ReadableByteStreamController")}}.

The `start()` function simply opens the file handle, which is then closed in the `cancel()` callback.
`cancel()` is provided to clean up any resources if {{domxref("ReadableStream.cancel()")}} or {{domxref("ReadableStreamDefaultController.close()")}} are called.

Most of the interesting code is in the `pull()` callback.
This copies data from the file into the pending read request ({{domxref("ReadableByteStreamController.byobRequest")}}) and then calls {{domxref("ReadableStreamBYOBRequest.respond()","respond()")}} to indicate how much data is in the buffer and transfer it.
If 0 bytes were transferred from the file then we know it has all been copied, and call {{domxref("ReadableStreamDefaultController.close()","close()")}} on the controller, which in turn will result in `cancel()` being called on the underlying source.

```js
const stream = makeReadableByteFileStream("dummy file.txt");

function makeReadableByteFileStream(filename) {
  let fileHandle;
  let position = 0;
  return new ReadableStream({
    type: "bytes", // An underlying byte stream!
    start(controller) {
      // Called to initialise the underlying source.
      // For a file source open a file handle (here we just create the mocked object).
      fileHandle = new MockUnderlyingFileHandle();
      logSource(
        `start(): ${controller.constructor.name}.byobRequest = ${controller.byobRequest}`,
      );
    },
    async pull(controller) {
      // Called when there is a pull request for data
      const theView = controller.byobRequest.view;
      const { bytesRead, buffer } = await fileHandle.read(
        theView.buffer,
        theView.byteOffset,
        theView.byteLength,
        position,
      );
      if (bytesRead === 0) {
        await fileHandle.close();
        controller.close();
        controller.byobRequest.respond(0);
        logSource(
          `pull() with byobRequest. Close controller (read bytes: ${bytesRead})`,
        );
      } else {
        position += bytesRead;
        controller.byobRequest.respond(bytesRead);
        logSource(`pull() with byobRequest. Transfer ${bytesRead} bytes`);
      }
    },
    cancel(reason) {
      // This is called if the stream is cancelled (via reader or controller).
      // Clean up any resources
      fileHandle.close();
      logSource(`cancel() with reason: ${reason}`);
    },
  });
}
```

#### Consuming the byte stream

The following code creates a `ReadableStreamBYOBReader` for the file byte stream and uses it read data into a buffer.
Note `processText()` is called recursively to read more data until the buffer is filled.
When the underlying source signals that it has no more data, the `reader.read()` will have `done` set to true, which in turn completes the read operation.

```js
const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(200);
readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let offset = 0;

  // read() returns a promise that resolves when a value has been received
  reader
    .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
    .then(function processText({ done, value }) {
      // Result objects contain two properties:
      // done  - true if the stream has already given all its data.
      // value - some data. Always undefined when done is true.

      if (done) {
        logConsumer(`readStream() complete. Total bytes: ${bytesReceived}`);
        return;
      }

      buffer = value.buffer;
      offset += value.byteLength;
      bytesReceived += value.byteLength;

      logConsumer(
        `Read ${value.byteLength} (${bytesReceived}) bytes: ${value}`,
      );
      result += value;

      // Read some more, and call this function again
      return reader
        .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
        .then(processText);
    });
}
```

Lastly, we add a handler that will cancel the stream if a button is clicked (other HTML and code for the button not shown).

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => {
    logConsumer(`reader.cancel complete`);
  });
});
```

#### Result

The logging from the underlying pull source (left) and consumer (right) are shown below.
Of particular note are that the:

- `start()` function is passed a `ReadableByteStreamController`
- the buffer passed to the reader is large enough to encompass the whole "file".
  The underlying data source supplies the data in random-sized chunks.

{{EmbedLiveSample("Underlying pull source","100%","500px")}}

### Underlying pull source with default reader

This live example shows how the same data might be read as a zero-copy transfer using a default reader ({{domxref("ReadableStreamDefaultReader")}}).
This uses the same [mocked underlying file source](#mocked_underlying_file_source) as in the preceding example.

```js hidden
class MockUnderlyingFileHandle {
  constructor() {
    this.maxdata = 100; // "file size"
    this.maxReadChunk = 25; // "max read chunk size"
    this.minReadChunk = 13; // "min read chunk size"
    this.filedata = this.randomByteArray(this.maxdata);
    this.position = 0;
  }

  // Read data from "file" at position/length into specified buffer offset
  read(buffer, offset, length, position) {
    // Object used to resolve promise
    const resultObj = {};
    resultObj["buffer"] = buffer;
    resultObj["bytesRead"] = 0;

    return new Promise((resolve /*, reject*/) => {
      if (position >= this.maxdata) {
        //out of data
        resolve(resultObj);
        return;
      }

      // Simulate a file read that returns random numbers of bytes
      // Read minimum of bytes requested and random bytes that can be returned
      let readLength =
        Math.floor(
          Math.random() * (this.maxReadChunk - this.minReadChunk + 1),
        ) + this.minReadChunk;
      readLength = length > readLength ? readLength : length;

      // Read random data into supplied buffer
      const myView = new Uint8Array(buffer, offset, readLength);
      // Write the length of data specified
      for (let i = 0; i < readLength; i++) {
        myView[i] = this.filedata[position + i];
        resultObj["bytesRead"] = i + 1;
        if (position + i + 1 >= this.maxdata) {
          break;
        }
      }
      // Emulate slow read of data
      setTimeout(() => {
        resolve(resultObj);
      }, 1000);
    });
  }

  // Dummy close function
  close() {
    return;
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

  // Return random Uint8Array of bytes
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

#### Creating a readable file byte stream with automatic buffer allocation

The only difference in our underlying source is that we must specify `autoAllocateChunkSize`, and that the size will be used as the view buffer size for `controller.byobRequest`, rather than one supplied by the consumer.

```js
const DEFAULT_CHUNK_SIZE = 20;
const stream = makeReadableByteFileStream("dummy file.txt");

function makeReadableByteFileStream(filename) {
  let fileHandle;
  let position = 0;
  return new ReadableStream({
    type: "bytes", // An underlying byte stream!
    start(controller) {
      // Called to initialise the underlying source.
      // For a file source open a file handle (here we just create the mocked object).
      fileHandle = new MockUnderlyingFileHandle();
      logSource(
        `start(): ${controller.constructor.name}.byobRequest = ${controller.byobRequest}`,
      );
    },
    async pull(controller) {
      // Called when there is a pull request for data
      const theView = controller.byobRequest.view;
      const { bytesRead, buffer } = await fileHandle.read(
        theView.buffer,
        theView.byteOffset,
        theView.byteLength,
        position,
      );
      if (bytesRead === 0) {
        await fileHandle.close();
        controller.close();
        controller.byobRequest.respond(0);
        logSource(
          `pull() with byobRequest. Close controller (read bytes: ${bytesRead})`,
        );
      } else {
        position += bytesRead;
        controller.byobRequest.respond(bytesRead);
        logSource(`pull() with byobRequest. Transfer ${bytesRead} bytes`);
      }
    },
    cancel(reason) {
      // This is called if the stream is cancelled (via reader or controller).
      // Clean up any resources
      fileHandle.close();
      logSource(`cancel() with reason: ${reason}`);
    },
    autoAllocateChunkSize: DEFAULT_CHUNK_SIZE, // Only relevant if using a default reader
  });
}
```

#### Consuming the byte stream with default reader

The following code creates a {{domxref("ReadableStreamDefaultReader")}} for the file byte stream by calling `stream.getReader();` without specifying the mode, and uses it read data into a buffer.
The operation of the code is the same as the previous example except that the buffer is supplied by the stream rather than the consumer.

```js
const reader = stream.getReader();
readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let result = "";

  // read() returns a promise that resolves
  // when a value has been received
  reader.read().then(function processText({ done, value }) {
    // Result objects contain two properties:
    // done  - true if the stream has already given you all its data.
    // value - some data. Always undefined when done is true.
    if (done) {
      logConsumer(`readStream() complete. Total bytes: ${bytesReceived}`);
      return;
    }

    bytesReceived += value.length;
    logConsumer(
      `Read ${value.length} (${bytesReceived}). Current bytes = ${value}`,
    );
    result += value;

    // Read some more, and call this function again
    return reader.read().then(processText);
  });
}
```

Lastly, we add a handler that will cancel the stream if a button is clicked (other HTML and code for the button not shown).

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => {
    logConsumer(`reader.cancel complete`);
  });
});
```

#### Result

The logging from the underlying byte pull source (left) and consumer (right) are shown below.

Note that the chunks are now _at most_ 20-byte wide, as this is the size of the auto allocated buffer specified in the underlying byte source (`autoAllocateChunkSize`).
These are made as zero-copy transfers.

{{EmbedLiveSample("Underlying pull source with default reader","100%","500px")}}

### Underlying pull source with default reader and no allocation

For completeness, we can also use a default reader with a byte source that does not support automatic buffer allocation.

```js hidden
class MockUnderlyingFileHandle {
  constructor() {
    this.maxdata = 100; // "file size"
    this.maxReadChunk = 25; // "max read chunk size"
    this.minReadChunk = 13; // "min read chunk size"
    this.filedata = this.randomByteArray(this.maxdata);
    this.position = 0;
  }

  // Read data from "file" at position/length into specified buffer offset
  read(buffer, offset, length, position) {
    // Object used to resolve promise
    const resultObj = {};
    resultObj["buffer"] = buffer;
    resultObj["bytesRead"] = 0;

    return new Promise((resolve /*, reject*/) => {
      if (position >= this.maxdata) {
        //out of data
        resolve(resultObj);
        return;
      }

      // Simulate a file read that returns random numbers of bytes
      // Read minimum of bytes requested and random bytes that can be returned
      let readLength =
        Math.floor(
          Math.random() * (this.maxReadChunk - this.minReadChunk + 1),
        ) + this.minReadChunk;
      readLength = length > readLength ? readLength : length;

      // Read random data into supplied buffer
      const myView = new Uint8Array(buffer, offset, readLength);
      // Write the length of data specified
      for (let i = 0; i < readLength; i++) {
        myView[i] = this.filedata[position + i];
        resultObj["bytesRead"] = i + 1;
        if (position + i + 1 >= this.maxdata) {
          break;
        }
      }
      // Emulate slow read of data
      setTimeout(() => {
        resolve(resultObj);
      }, 1000);
    });
  }

  // Dummy close function
  close() {
    return;
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

  // Return random Uint8Array of bytes
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

However in this case the controller will not supply a `byobRequest` for the underlying source to write into.
Instead the underlying source would have to enqueue the data.
Note below that to support this case, in `pull()` we need to check if the `byobRequest` exists.

```js
const stream = makeReadableByteFileStream("dummy file.txt");
const DEFAULT_CHUNK_SIZE = 40;

function makeReadableByteFileStream(filename) {
  let fileHandle;
  let position = 0;
  return new ReadableStream({
    type: "bytes", // An underlying byte stream!
    start(controller) {
      // Called to initialise the underlying source.
      // For a file source open a file handle (here we just create the mocked object).
      fileHandle = new MockUnderlyingFileHandle();
      logSource(
        `start(): ${controller.constructor.name}.byobRequest = ${controller.byobRequest}`,
      );
    },
    async pull(controller) {
      // Called when there is a pull request for data
      if (controller.byobRequest) {
        const theView = controller.byobRequest.view;
        const { bytesRead, buffer } = await fileHandle.read(
          theView.buffer,
          theView.byteOffset,
          theView.byteLength,
          position,
        );
        if (bytesRead === 0) {
          await fileHandle.close();
          controller.close();
          controller.byobRequest.respond(0);
          logSource(
            `pull() with byobRequest. Close controller (read bytes: ${bytesRead})`,
          );
        } else {
          position += bytesRead;
          controller.byobRequest.respond(bytesRead);
          logSource(`pull() with byobRequest. Transfer ${bytesRead} bytes`);
        }
      } else {
        // No BYOBRequest so enqueue data to stream
        // NOTE, this branch would only execute for a default reader if autoAllocateChunkSize is not defined.
        const myNewBuffer = new Uint8Array(DEFAULT_CHUNK_SIZE);
        const { bytesRead, buffer } = await fileHandle.read(
          myNewBuffer.buffer,
          myNewBuffer.byteOffset,
          myNewBuffer.byteLength,
          position,
        );
        if (bytesRead === 0) {
          await fileHandle.close();
          controller.close();
          controller.enqueue(myNewBuffer);
          logSource(
            `pull() with no byobRequest. Close controller (read bytes: ${bytesRead})`,
          );
        } else {
          position += bytesRead;
          controller.enqueue(myNewBuffer);
          logSource(`pull() with no byobRequest. enqueue() ${bytesRead} bytes`);
        }
      }
    },
    cancel(reason) {
      // This is called if the stream is cancelled (via reader or controller).
      // Clean up any resources
      fileHandle.close();
      logSource(`cancel() with reason: ${reason}`);
    },
  });
}
```

```js hidden
const reader = stream.getReader();

readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let result = "";

  // read() returns a promise that resolves
  // when a value has been received
  reader.read().then(function processText({ done, value }) {
    // Result objects contain two properties:
    // done  - true if the stream has already given you all its data.
    // value - some data. Always undefined when done is true.
    if (done) {
      logConsumer(`readStream() complete. Total bytes: ${bytesReceived}`);
      return;
    }

    bytesReceived += value.length;
    logConsumer(`Read ${bytesReceived} bytes so far. Current bytes = ${value}`);
    result += value;

    // Read some more, and call this function again
    return reader.read().then(processText);
  });
}
```

```js hidden
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => {
    logConsumer(`reader.cancel complete`);
  });
});
```

#### Result

The logging from the underlying pull source (left) and consumer (right) are shown below.
Note that the underlying source side shows that the data has been enqueued rather than zero-byte transferred.

{{EmbedLiveSample("Underlying pull source with default reader and no allocation","100%","500px")}}

## See also

- [Streams API concepts](/en-US/docs/Web/API/Streams_API/Concepts)
- [Streams concepts and usage overview](/en-US/docs/Web/API/Streams_API#concepts_and_usage)
- [Using readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams)
