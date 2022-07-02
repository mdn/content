---
title: Using readable byte streams
slug: Web/API/Streams_API/Using_readable_byte_streams
tags:
  - API
  - Controller
  - Fetch
  - Guide
  - ReadableStreams
  - Streams
  - pipe chains
  - readable streams
  - readable byte streams
  - reader
  - tee
---
{{apiref("Streams")}}

Readable _byte streams_ are [readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams) that have an underlying byte source of `type: "bytes"`, and which support efficient zero-copy transfer of data from the underlying source to a consumer (bypassing the stream's internal queues).
They are intended for use cases where data might be supplied or requested in arbitrary sized and potentially very large chunks, and hence where avoiding making copies is likely to improve efficiency.

This article explains how readable byte streams compare to normal "default" streams, and how you create and consume them.

> **Note:** Readable byte streams are almost identical to "normal" readable streams and almost all of the concepts are the same.
> This article assumes that you already understand those concepts and will only be covering them superficially (if at all).
> If you're not familiar with the relevent concepts, please first read: [Using readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams), [Streams concepts and usage overview](/en-US/docs/Web/API/Streams_API#concepts_and_usage), and [Streams API concepts](/en-US/docs/Web/API/Streams_API/Concepts).

## Overview

Readable streams provides a consistent interface for streaming data from some underlying source, such as a file or socket, to a consumer, such as a reader, transform stream or writeable stream.
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

The {{domxref("ReadableStreamBYOBRequest")}} has a {{domxref("ReadableStreamBYOBRequest.view","view")}} property, which is a view on the buffer allocated for transfer (the size of this buffer may be set using [`autoAllocateChunkSize`](/en-US/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) if desired).
Data from an underlying source should be written into this property, and then the underlying source must call {{domxref("ReadableStreamBYOBRequest.respond()","respond()")}} indicating the number of bytes written.
This signals that the data should be transferred, and the pending read request by the consumer resolved.
After calling the `respond()` the `view` can no longer be written.

There is also an additional method {{domxref("ReadableStreamBYOBRequest.respondWithNewView()")}} to which an underlying source can pass a "new" view containing data to be transferred.
Note however that this new view must be over the _same_ memory buffer as the original, and from the same starting offset.
In other words, this method gives developers another way to send less than the full allocated buffer size (the other way being to specify the length in `respond()`).

Readable byte streams are normally read using a {{domxref("ReadableStreamBYOBReader")}}, which can be obtained by calling {{domxref("ReadableStream.getReader()")}} on the stream, specifying `mode: "byob"` in the options parameter.

A readable byte stream can also be read using a default reader ({{domxref("ReadableStreamDefaultReader")}}), but in this case `byobRequest` objects are only created when automatic buffer allocation is enabled for the stream ([`autoAllocateChunkSize`](/en-US/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) was set for the stream's `underlyingSource`).
Note that the size indicated by `autoAllocateChunkSize` is used for the buffer size in this case; for a byte reader the size is set by the consumer.
If the property was not specified, the default reader will still "work" but the underlying source will never be offered a `byobRequest`, and all data will be transferred through the stream's internal queues.

Other than the differences outlined above, the controller and underlying source for bytes streams are very similar to those for default streams, [and are used in much the same way](/en-US/docs/Web/API/Streams_API/Using_readable_streams).

## Examples

### Underlying pull source with byte reader

This live example shows how data might be read from an underlying byte pull source, such as a file, and transferred by a stream as a zero-copy transfer to a {{domxref("ReadableStreamBYOBReader")}}.

#### Mocked underlying file source

For the underlying pull source we use the following class to (_very_ superficially) mock a nodejs [`FileHandle`](https://nodejs.org/api/fs.html#class-filehandle), and in particular the [`read()`](https://nodejs.org/api/fs.html#filehandlereadbuffer-offset-length-position) method.
The class generates random data to represent a file.
The `read()` method reads from this data into a provided buffer from the specified position.
The `close()` method does nothing: it is only provided to show where you might close the source when defining the constructor for the stream.

> **Note:** This same class is used for all the "pull source" examples.
> It is shown here for information only (so that it is obvious that it is a mock).

```js
class MockUnderlyingFileHandle {
  constructor() {
    this.maxdata = 1300; // "file size"
    this.filedata = this.randomByteArray(this.maxdata);
    this.position = 0;
  }

  /* Read data from "file" at position/length into specified buffer offset */
  read(buffer, offset, length, position) {
    // Object used to resolve promise
    const resultobj = {};
    resultobj["buffer"] = buffer;
    resultobj["bytesRead"] = 0;

    return new Promise((resolve, reject) => {
      if (position >= this.maxdata) { //out of data
        resolve(resultobj);
        return;
      }

      // Read random data into supplied buffer
      const myview = new Uint8Array(buffer, offset, length);
      // Write the length of data specified
      for (let i = 0; i < length; i++) {
        myview[i]=this.filedata[position + i];
        resultobj["bytesRead"] = i;
        if (position + i >= this.maxdata) {  
          break;
        }
      }   
      // Emulate slow read of data
      window.setTimeout(() => { resolve(resultobj); }, 1000);
    });
  }

  /* Dummy close function */
  close() {
    return
  }

  /* Return random character string */
  randomChars(length = 8) {
    let string = "";
    let choices = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

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
};
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
// hr {
//  clear: both;
// }
```

```html hidden
<!-- <h2>Final result</h2> 
<p>Waiting ...</p>
<hr>
-->
<div class="input">
  <h2>Underlying source</h2>
  <ul>
  </ul>
</div>
<div class="output">
  <h2>Consumer</h2>
  <ul>
  </ul>
</div>
```

```js hidden
// Store reference to lists, paragraph and button
const list1 = document.querySelector('.input ul');
const list2 = document.querySelector('.output ul');
//const para = document.querySelector('p');

// Create empty string in which to store final result
let result = "";

// Function to log data from underlying source
function logSource(result) {
  const listItem = document.createElement('li');
  listItem.textContent = result;
  list1.appendChild(listItem);
}

// Function to log data from consumer
function logConsumer(result) {
  const listItem = document.createElement('li');
  listItem.textContent = result;
  list2.appendChild(listItem);
}
```

#### Creating a readable file byte stream

The following code shows how to define a readable file byte stream.

The `underlyingSource` object definition is passed as the first parameter to the [`ReadableStream()` constructor](/en-US/docs/Web/API/ReadableStream/ReadableStream).
To make this a readable "byte" stream, we specify `type: "bytes"` as a property of the object.
This is required to ensure that the stream is handed a {{domxref("ReadableByteStreamController")}} (instead of the default controller ({{domxref("ReadableStreamDefaultController")}}).

The `start()` function simply opens the file handle, which is then closed in the `cancel()` callback.
`cancel()` is provided to clean up any resources if {{domxref("ReadableStream.cancel()")}} or {{domxref("ReadableStreamDefaultController.close()")}} are called.

Most of the interesting code is in the `pull()` callback.
This copies data from the file into the pending read request ({{domxref("ReadableByteStreamController.byobRequest")}}) and thenb calls {{domxref("ReadableStreamBYOBRequest.respond()","respond()")}} to indicate how much data is in the buffer and transfer it.
If 0 bytes were transferred from the file then we know it has all been copied, and call {{domxref("ReadableStreamDefaultController.close()","close()")}} on the controller, which in turn will result in `cancel()` being called on the underlying source.

```js
const stream = makeReadableByteFileStream("dummy file.txt")

function makeReadableByteFileStream(filename) {
  let fileHandle;
  let position = 0;
  return new ReadableStream({
    type: "bytes",  // An underlying byte stream!
    start(controller) {
      // Called to initialise the underlying source.
      // For a file source open a file handle (here we just create the mocked object).
      fileHandle = new MockUnderlyingFileHandle();
      logSource(`start(): ${controller.constructor.name}.byobRequest = ${controller.byobRequest}`)
    },
    async pull(controller) {
      // Called when there is a pull request for data
      const theview = controller.byobRequest.view;
      const {bytesRead, buffer} = 
        await fileHandle.read(theview.buffer, theview.offset, theview.length, position)
      if (bytesRead === 0) {
        await fileHandle.close();
        controller.close();
        controller.byobRequest.respond(0);
        logSource(`pull() with byobRequest. Close controller (read bytes: ${bytesRead})`);
      } else {
        position += bytesRead;
        controller.byobRequest.respond(bytesRead);
        logSource(`pull() with byobRequest. Transfer ${bytesRead} bytes`);
      }
    },
    cancel() {
      // This is called if the stream is cancelled (via reader or controller).
      // Clean up any resources
      fileHandle.close();
    }
  });
}
```

#### Consuming the byte stream

The following code creates a `ReadableStreamBYOBReader` for the file byte stream and uses it read data into a buffer.
Note `processText()` is called recurively to do this.
When the underlying source signals that it has no more data, the `reader.read()` will have `done` set to true, which in turn completes the read operation.

```js
const reader = stream.getReader({mode: "byob"});
let buffer = new ArrayBuffer(4000);
readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let offset =  0;

  while (offset < buffer.byteLength) {    
    // read() returns a promise that resolves when a value has been received
    reader.read( new Uint8Array(buffer, offset, buffer.byteLength - offset) ).then(function processText({ done, value }) {
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

      //const chunk = value;
      logConsumer(`Read ${bytesReceived} bytes: ${value}`);
      result += value;

      // Read some more, and call this function again
      return reader.read( new Uint8Array(buffer, offset, buffer.byteLength - offset) ).then(processText);
    });
  }
}
```

#### Result

The logging from the underlying pull source (left) and consumer (right) are shown below.
Of particular note are that the:

- `start()` function is passed a `ReadableByteStreamController`
- buffer passed to the reader is large enough to encompass the whole file, so the whole file is transferred in one operation.

{{EmbedLiveSample("Underlying pull source","100%","500px")}}

### Underlying pull source with default reader

This live example shows how the same data might be read as a zero-copy transfer using a default reader ({{domxref("ReadableStreamDefaultReader")}}).
This uses the same same [mocked underlying file source](#mocked_underlying_file_source) as in the preceding example.

```js hidden
class MockUnderlyingFileHandle {
  constructor() {
    this.maxdata = 1300; // "file size"
    this.filedata = this.randomByteArray(this.maxdata);
    this.position = 0;
  }

  /* Read data from "file" at position/length into specified buffer offset */
  read(buffer, offset, length, position) {
    // Object used to resolve promise
    const resultobj = {};
    resultobj["buffer"] = buffer;
    resultobj["bytesRead"] = 0;

    return new Promise((resolve, reject) => {
      if (position >= this.maxdata) { //out of data
        resolve(resultobj);
        return;
      }

      // Read random data into supplied buffer
      const myview = new Uint8Array(buffer, offset, length);
      // Write the length of data specified
      for (let i = 0; i < length; i++) {
        myview[i]=this.filedata[position + i];
        resultobj["bytesRead"] = i;
        if (position + i >= this.maxdata) {  
          break;
        }
      }   
      // Emulate slow read of data
      window.setTimeout(() => { resolve(resultobj); }, 1000);
    });
  }

  /* Dummy close function */
  close() {
    return
  }

  /* Return random character string */
  randomChars(length = 8) {
    let string = "";
    let choices = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

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
};
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
// hr {
//  clear: both;
// }
```

```html hidden
<!-- <h2>Final result</h2> 
<p>Waiting ...</p>
<hr>
-->
<div class="input">
  <h2>Underlying source</h2>
  <ul>
  </ul>
</div>
<div class="output">
  <h2>Consumer</h2>
  <ul>
  </ul>
</div>
```

```js hidden
// Store reference to lists, paragraph and button
const list1 = document.querySelector('.input ul');
const list2 = document.querySelector('.output ul');
//const para = document.querySelector('p');

// Create empty string in which to store final result
let result = "";

// Function to log data from underlying source
function logSource(result) {
  const listItem = document.createElement('li');
  listItem.textContent = result;
  list1.appendChild(listItem);
}

// Function to log data from consumer
function logConsumer(result) {
  const listItem = document.createElement('li');
  listItem.textContent = result;
  list2.appendChild(listItem);
}
```

#### Creating a readable file byte stream with automatic buffer allocation

The only difference in our underlying source is that we must specify `autoAllocateChunkSize`, and that the size will be used as the view buffer size for `controller.byobRequest`, rather than one supplied by the consumer.

```js
const DEFAULT_CHUNK_SIZE = 200;
const stream = makeReadableByteFileStream("dummy file.txt")

function makeReadableByteFileStream(filename) {
  let fileHandle;
  let position = 0;
  return new ReadableStream({
    type: "bytes",  // An underlying byte stream!
    start(controller) {
      // Called to initialise the underlying source.
      // For a file source open a file handle (here we just create the mocked object).
      fileHandle = new MockUnderlyingFileHandle();
      logSource(`start(): ${controller.constructor.name}.byobRequest = ${controller.byobRequest}`)
    },
    async pull(controller) {
      // Called when there is a pull request for data
      const theview = controller.byobRequest.view;
      const {bytesRead, buffer} = 
        await fileHandle.read(theview.buffer, theview.offset, theview.length, position)
      if (bytesRead === 0) {
        await fileHandle.close();
        controller.close();
        controller.byobRequest.respond(0);
        logSource(`pull() with byobRequest. Close controller (read bytes: ${bytesRead})`);
      } else {
        position += bytesRead;
        controller.byobRequest.respond(bytesRead);
        logSource(`pull() with byobRequest. Transfer ${bytesRead} bytes`);
      }
    },
    cancel() {
      // This is called if the stream is cancelled (via reader or controller).
      // Clean up any resources
      fileHandle.close();
    },
    autoAllocateChunkSize: DEFAULT_CHUNK_SIZE // Only relevant if using a default reader
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
  let result = '';

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

#### Result

The logging from the underlying bye pull source (left) and consumer (right) are shown below.

Note that the chunks are now in 200 byte lots, as specified in the underlying byte source.
These are made as zero-copy transfers.

{{EmbedLiveSample("Underlying pull source with default reader","100%","500px")}}

### Underlying pull source with default reader and no allocation

For completeness, we can also use a default reader with a byte source that does not that does not support automatical buffer allocation.

```js hidden
class MockUnderlyingFileHandle {
  constructor() {
    this.maxdata = 1300; // "file size"
    this.filedata = this.randomByteArray(this.maxdata);
    this.position = 0;
  }

  /* Read data from "file" at position/length into specified buffer offset */
  read(buffer, offset, length, position) {
    // Object used to resolve promise
    const resultobj = {};
    resultobj["buffer"] = buffer;
    resultobj["bytesRead"] = 0;

    return new Promise((resolve, reject) => {
      if (position >= this.maxdata) { //out of data
        resolve(resultobj);
        return;
      }

      // Read random data into supplied buffer
      const myview = new Uint8Array(buffer, offset, length);
      // Write the length of data specified
      for (let i = 0; i < length; i++) {
        myview[i]=this.filedata[position + i];
        resultobj["bytesRead"] = i;
        if (position + i >= this.maxdata) {  
          break;
        }
      }   
      // Emulate slow read of data
      window.setTimeout(() => { resolve(resultobj); }, 1000);
    });
  }

  /* Dummy close function */
  close() {
    return
  }

  /* Return random character string */
  randomChars(length = 8) {
    let string = "";
    let choices = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

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
};
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
// hr {
//  clear: both;
// }
```

```html hidden
<!-- <h2>Final result</h2> 
<p>Waiting ...</p>
<hr>
-->
<div class="input">
  <h2>Underlying source</h2>
  <ul>
  </ul>
</div>
<div class="output">
  <h2>Consumer</h2>
  <ul>
  </ul>
</div>
```

```js hidden
// Store reference to lists, paragraph and button
const list1 = document.querySelector('.input ul');
const list2 = document.querySelector('.output ul');
//const para = document.querySelector('p');

// Create empty string in which to store final result
let result = "";

// Function to log data from underlying source
function logSource(result) {
  const listItem = document.createElement('li');
  listItem.textContent = result;
  list1.appendChild(listItem);
}

// Function to log data from consumer
function logConsumer(result) {
  const listItem = document.createElement('li');
  listItem.textContent = result;
  list2.appendChild(listItem);
}
```

However in this case the controller will not supply a `byobRequest` for the underlying source to write into.
Instead the underlying source would have to enqueue the data.
Note below that to support this case, in `pull()` we need to check if the `byobRequest` exists.

```js
const stream = makeReadableByteFileStream("dummy file.txt")
const DEFAULT_CHUNK_SIZE = 300;
function makeReadableByteFileStream(filename) {
  let fileHandle;
  let position = 0;
  return new ReadableStream({
    type: "bytes",  // An underlying byte stream!
    start(controller) {
      // Called to initialise the underlying source.
      // For a file source open a file handle (here we just create the mocked object).
      fileHandle = new MockUnderlyingFileHandle();
      logSource(`start(): ${controller.constructor.name}.byobRequest = ${controller.byobRequest}`)
    },
    async pull(controller) {
      // Called when there is a pull request for data
      if (controller.byobRequest) {
         const theview = controller.byobRequest.view;
         const {bytesRead, buffer} = await fileHandle.read(theview.buffer, theview.offset, theview.length, position)
         if (bytesRead === 0) {
           await fileHandle.close();
           controller.close();
           controller.byobRequest.respond(0);
           logSource(`pull() with byobRequest. Close controller (read bytes: ${bytesRead})`);
         } else {
            position += bytesRead;
            controller.byobRequest.respond(bytesRead);
            logSource(`pull() with byobRequest. Transfer ${bytesRead} bytes`);
         }
      } else {
        // No BYOBRequest so enqueue data to stream
        // NOTE, this branch would only execute for a default reader if autoAllocateChunkSize is not defined. 
        const mynewBuffer = new Uint8Array(DEFAULT_CHUNK_SIZE);
        const {bytesRead, buffer} = await fileHandle.read(mynewBuffer.buffer, mynewBuffer.offset, mynewBuffer.length, position);
        if (bytesRead === 0) {
          await fileHandle.close();
          controller.close();
          controller.enqueue(mynewBuffer);
          logSource(`pull() with no byobRequest. Close controller (read bytes: ${bytesRead})`);
        } else {
           position += bytesRead;
           controller.enqueue(mynewBuffer);
           logSource(`pull() with no byobRequest. enqueue() ${bytesRead} bytes`);
        }
        
      }
    },
    cancel() {
      // This is called if the stream is cancelled (via reader or controller).
      // Clean up any resources
      fileHandle.close();
    }  
  });
}
```

```js hidden
const reader = stream.getReader();
readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let result = '';

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

#### Result

The logging from the underlying pull source (left) and consumer (right) are shown below.
Note that the underlying source side shows that the data has been enqueued rather than zero-byte transferred.

{{EmbedLiveSample("Underlying pull source with default reader and no allocation","100%","500px")}}


### Underlying push source with byte reader




## Summary

