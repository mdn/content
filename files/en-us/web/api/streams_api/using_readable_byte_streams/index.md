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

This article explains how readable byte streams differ from normal "default" streams, and how you create and consume them.

> **Note:** Readable byte streams are almost identical to "normal" readable streams and almost all of the concepts are the same.
> This article assumes that you already understand those concepts and will only be covering them superficially (if at all).
> If you're not familiar with the relevent concepts, please first read: [Using readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams), [Streams concepts and usage overview](/en-US/docs/Web/API/Streams_API#concepts_and_usage), and [Streams API concepts](/en-US/docs/Web/API/Streams_API/Concepts).

## Overview

Readable streams provides a consistent interface for streaming data from some "underlying source", like a file or socket, to a consumer, such as a reader, transform stream or writeable stream.
In a normal readable stream, data from the underlying source always passes to a consumer through the internal queues.
A readable byte stream differs in that if the internal queues are empty, the underlying source can write directly to the consumer (an efficient zero-copy transfer).

A readable byte stream is created by specifying `type: "bytes"` in the `underlyingSource` object that may be passed as the first parameter to the [`ReadableStream()` constructor](/en-US/docs/Web/API/ReadableStream/ReadableStream).
With this value set, the stream is created with a {{domxref("ReadableByteStreamController")}} (instead of {{domxref("ReadableStreamDefaultController")}}), and this is the object that is passed to the underlying source when the `start(controller)` and `pull(controller)` callback functions are invoked.

The main difference between {{domxref("ReadableByteStreamController")}} and the default controller is that it has an additional property {{domxref("ReadableByteStreamController.byobRequest")}} of type {{domxref("ReadableStreamBYOBRequest")}}.
This represents a pending read request from a consumer, which will resolve when satisfied as a zero-copy transfer from the underlying source.
The property will be `null` if there is such pending request.

A `byobRequest` is only made available when a read request is made on a readable byte stream and there is no data in the stream's internal queues (if there is data then the request is satisfied from those queues).

In addition, `byobRequest` instances are only created in the controller when automatic buffer allocation is enabled.
This is always true when using a {{domxref("ReadableStreamBYOBReader")}} to read data from a byte stream.
If using a {{domxref("ReadableStreamDefaultReader")}} automatic buffer allocation must be explicitly enabled, by specifying the [`autoAllocateChunkSize`](/en-US/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) property in the `underlyingSource` parameter definition.

An underlying byte source that needs to transfer data must check the `byobRequest` property and use it a request is available.
If the property is `null`, incoming data should be added to the stream using {{domxref("ReadableByteStreamController.enqueue()")}}.
This adds data to the stream's internal queues (this is the only way to add data to the stream in default streams).

The {{domxref("ReadableStreamBYOBRequest")}} has a {{domxref("ReadableStreamBYOBRequest.view","view")}} property, which is a view on the buffer allocated for transfer (the size of this buffer may be set using [`autoAllocateChunkSize`](/en-US/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) if desired).
Data from an underlying source should be written into this property, and then the underlying source must call {{domxref("ReadableStreamBYOBRequest.respond()","respond()")}} indicating the number of bytes written.
This signals that the data should be transferred, and the pending read request resolved.
After calling the `respond()` the `view` can no longer be written.

There is also an additional method {{domxref("ReadableStreamBYOBRequest.respondWithNewView()")}} to which an underlying source can pass a "new" view containing data to be transferred.
Note however that this new view must be over the _same_ memory buffer as the original, and from the same starting offset.
In other words, this method gives developers another way to send less than the full allocated buffer size (the other way being to specify the length in `respond()`).

Readable byte streams are normally read using a {{domxref("ReadableStreamBYOBReader")}}, which can be obtained by calling {{domxref("ReadableStream.getReader()")}} on the stream, specifying `mode: "byob"` in the options parameter.
The stream can also be read using a default reader ({{domxref("ReadableStreamDefaultReader")}}), but as noted above, `byobRequest` objects are only created for default readers when the underlying source has set [`autoAllocateChunkSize`](/en-US/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize).
If this is not specified, the default reader will still "work" but all data will be transferred through the stream's internal queues.

Other than the differences outlined above, the controller and underlying source have the same methods, callbacks and properties, are used [in same way as for default streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams).

## Examples



## Example pull

- Reading from a source
- Show source getting a request or not getting a request
- Show for pull first. 


In the following simple example, a custom `ReadableStream` is created using a constructor (see our [Simple random stream example](https://mdn.github.io/dom-examples/streams/simple-random-stream/) for the full code). The `start()` function generates a random string of text every second and enqueues it into the stream. A `cancel()` function is also provided to stop the generation if {{domxref("ReadableStream.cancel()")}} is called for any reason.

Note that a {{domxref("ReadableStreamDefaultController")}} object is provided as the parameter of the `start()` and `pull()` functions.

When a button is pressed, the generation is stopped, the stream is closed using {{domxref("ReadableStreamDefaultController.close()")}}, and another function is run, which reads the data back out of the stream.

```css
.input {
  float: left;
  width: 50%;
}
.output {
  float: right;
  width: 50%;
}
hr {
  clear: both;
}
button {
  display: block;
}
```

```html
<button>Close stream</button>
<h2>Final result</h2>
<p>Waiting ...</p>

<hr>
<div class="input">
  <h2>Custom stream input</h2>
  <ul>
  </ul>
</div>
<div class="output">
  <h2>Reading custom stream</h2>
  <ul>
  </ul>
</div>
```

```js
// Object that can be used as a push or pull underlying source
// If init() is called it will emit events.
// As a pull source just call randomByteArray() for bytes, or randomChars() for characters
class DemoUnderlyingSource extends EventTarget {
  constructor() {
    super();
    this.interval;
    this.maxdata = 10; //maximum data that can be sent (magic)
  }

  // Function to start simulating push underlying source
  // Sets up code to emit random events.
  // After maxdata (10) events will close 
  init() {
    // emit this event after every second
    this.interval = setInterval(() => {
      if (this.maxdata > 0) {
        let string = this.randomChars();
        let newEvent = new Event("newdata");
        newEvent.data=string;
        this.dispatchEvent(newEvent);
      } else {
        let endEvent = new Event("enddata");
        this.dispatchEvent(endEvent);
      } 
      //Iterate down until all "data" sent 
      this.maxdata--;
    }, 1000);
  }

  // Simulate pausing source (clears the interval)
  pauseSource() { clearInterval( this.interval ); }

  // Return random character string
  // Use to get chunk for pull source
  randomChars() {
    let string = "";
    let choices = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    for (let i = 0; i < 8; i++) {
      string += choices.charAt(Math.floor(Math.random() * choices.length));
    }
    return string;
  }

  // Return random Uint8Array of bytes
  // Use to get bytes for pull source
  randomByteArray() {
    const textEncoder = new TextEncoder();
    return textEncoder.encode(this.randomChars());
  }
};
```

```js
// Store reference to lists, paragraph and button
const list1 = document.querySelector('.input ul');
const list2 = document.querySelector('.output ul');
const para = document.querySelector('p');
const button = document.querySelector('button');

// Create empty string in which to store final result
let result = "";

// Create my underlying source
let myUnderlyingSource = new DemoUnderlyingSource();

// Close my source
button.addEventListener('click', function() {
  //myUnderlyingSource.pauseSource(); //This I can do!
  reader.releaseLock(); //These fail, I can't cancel without releasing a lock and I can't release a lock while I have an outstanding read. Not sure of "right" approach.
  stream.cancel();
})
```

```js
const stream = new ReadableStream({
  type: "bytes",
  start(controller) {
    // no initialization for this "demo" source
    
    // Show type of controller?
    //Show type of 
    let listItem = document.createElement('li');
    listItem.textContent = `start(): ${controller.constructor.name}.byobRequest = ${controller.byobRequest}`;
    list1.appendChild(listItem);
  },
  pull(controller) {
    // Request data from source
    const someData = myUnderlyingSource.randomByteArray();
    let listItem = document.createElement('li');
    listItem.textContent = `pull(): byobRequest = ${controller.byobRequest}`;
    list1.appendChild(listItem);
    if (controller.byobRequest) {
      //value defined
       para.textContent = `BYOB!`;
       controller.byobRequest.view = someData;
    } else {
      para.textContent = `ENQUEUE`;
      //No BYOBRequest so enqueue data to stream
      //controller.enqueue(someData);
    }


  },
  cancel() {
    // This is called if the reader cancels,
    // so we should stop generating strings
    myUnderlyingSource.pauseSource();
  },

  //autoAllocateChunkSize: 5

});
```

```js
const reader = stream.getReader({mode: "byob"});
let buffer = new ArrayBuffer(1024);
readStream(reader);


/*
let startingAB = new ArrayBuffer(1024);
const buffer = await readInto(startingBuffer);


async function readInto(buffer) {

  
  let offset = 0;

  while (offset < buffer.byteLength) {
    const {value: view, done} =
     await reader.read(new Uint8Array(buffer, offset, buffer.byteLength - offset));
    buffer = view.buffer;
    if (done) {
      break;
    }
    offset += view.byteLength;
  }
  return buffer;
}
*/

function readStream(reader) {
  let bytesReceived = 0;
  
  console.log(`The first 1024 bytes: ${buffer}`);
  let offset =  0;

  while (offset < buffer.byteLength) {
    
    // read() returns a promise that resolves when a value has been received
    reader.read( new Uint8Array(buffer, offset, buffer.byteLength - offset) ).then(function processText({ done, value }) {
      // Result objects contain two properties:
      // done  - true if the stream has already given you all its data.
      // value - some data. Always undefined when done is true.
      if (done) {
        console.log("Stream complete");
        para.textContent = result;
        return;
      }

      buffer = value.buffer;
      offset += value.byteLength;

      bytesReceived += value.byteLength;

      const chunk = value;
      let listItem = document.createElement('li');
      listItem.textContent = `Read ${bytesReceived} chars. Chunk = ${chunk}`;
      list2.appendChild(listItem);
      result += chunk;

      // Read some more, and call this function again
      //return reader.read().then(processText);
    });

  }


}

```

{{EmbedLiveSample("Examples pull","100%","500px")}}

## Examples push




## Summary


