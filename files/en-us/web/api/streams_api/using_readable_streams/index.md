---
title: Using readable streams
slug: Web/API/Streams_API/Using_readable_streams
page-type: guide
---

{{DefaultAPISidebar("Streams")}}

As a JavaScript developer, programmatically reading and manipulating streams of data received over the network, chunk by chunk, is very useful! But how do you use the Streams API's readable stream functionality? This article explains the basics.

> **Note:** This article assumes that you understand the use cases of readable streams, and are aware of the high-level concepts. If not, we suggest that you first read the [Streams concepts and usage overview](/en-US/docs/Web/API/Streams_API#concepts_and_usage) and dedicated [Streams API concepts](/en-US/docs/Web/API/Streams_API/Concepts) article, then come back.

> **Note:** If you are looking for information on writable streams try [Using writable streams](/en-US/docs/Web/API/Streams_API/Using_writable_streams) instead.

## Finding some examples

We will look at various examples in this article, taken from our [dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams) repo. You can find the full source code there, as well as links to the examples.

## Consuming a fetch as a stream

The [Fetch API](/en-US/docs/Web/API/Fetch_API) allows you to fetch resources across the network, providing a modern alternative to [XHR](/en-US/docs/Web/API/XMLHttpRequest). It has a number of advantages, and what is really nice about it is that browsers have recently added the ability to consume a fetch response as a readable stream.

The {{domxref("Request.body")}} and {{domxref("Response.body")}} properties are available, which are getters exposing the body contents as a readable stream.

As our [Simple stream pump](https://github.com/mdn/dom-examples/tree/main/streams/simple-pump) example shows ([see it live also](https://mdn.github.io/dom-examples/streams/simple-pump/)), exposing it is a matter of just accessing the `body` property of the response:

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body);
```

This provides us with a {{domxref("ReadableStream")}} object.

### Attaching a reader

Now we've got our streaming body, reading the stream requires attaching a reader to it. This is done using the {{domxref("ReadableStream.getReader()")}} method:

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body)
  .then((body) => {
    const reader = body.getReader();
    // …
  });
```

Invoking this method creates a reader and locks it to the stream — no other reader may read this stream until this reader is released, e.g. by invoking {{domxref("ReadableStreamDefaultReader.releaseLock()")}}.

Also note that the previous example can be reduced by one step, as `response.body` is synchronous and so doesn't need the promise:

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => {
    const reader = response.body.getReader();
    // …
  });
```

### Reading the stream

Now you've got your reader attached, you can read data chunks out of the stream using the {{domxref("ReadableStreamDefaultReader.read()")}} method. This reads one chunk out of the stream, which you can then do anything you like with. For example, our Simple stream pump example goes on to enqueue each chunk in a new, custom `ReadableStream` (we will find more about this in the next section), then create a new {{domxref("Response")}} out of it, consume it as a {{domxref("Blob")}}, create an object URL out of that blob using {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}, and then display it on screen in an {{htmlelement("img")}} element, effectively creating a copy of the image we originally fetched.

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => {
    const reader = response.body.getReader();
    return new ReadableStream({
      start(controller) {
        return pump();
        function pump() {
          return reader.read().then(({ done, value }) => {
            // When no more data needs to be consumed, close the stream
            if (done) {
              controller.close();
              return;
            }
            // Enqueue the next data chunk into our target stream
            controller.enqueue(value);
            return pump();
          });
        }
      },
    });
  })
  // Create a new response out of the stream
  .then((stream) => new Response(stream))
  // Create an object URL for the response
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  // Update image
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

Let's look in detail at how `read()` is used. In the `pump()` function seen above we first invoke `read()`, which returns a promise containing a results object — this has the results of our read in it, in the form `{ done, value }`:

```js
reader.read().then(({ done, value }) => {
  /* … */
});
```

The results can be one of three different types:

- If a chunk is available to read, the promise will be fulfilled with an object of the form `{ value: theChunk, done: false }`.
- If the stream becomes closed, the promise will be fulfilled with an object of the form `{ value: undefined, done: true }`.
- If the stream becomes errored, the promise will be rejected with the relevant error.

Next, we check whether `done` is `true`. If so, there are no more chunks to read (the value is `undefined`) so we return out of the function and close the custom stream with {{domxref("ReadableStreamDefaultController.close()")}}:

```js
if (done) {
  controller.close();
  return;
}
```

> **Note:** `close()` is part of the new custom stream, not the original stream we are discussing here. We'll explain more about the custom stream in the next section.

If `done` is not `true`, we process the new chunk we've read (contained in the `value` property of the results object) and then call the `pump()` function again to read the next chunk.

```js
// Enqueue the next data chunk into our target stream
controller.enqueue(value);
return pump();
```

This is the standard pattern you'll see when using stream readers:

1. You write a function that starts off by reading the stream.
2. If there is no more stream to read, you return out of the function.
3. If there is more stream to read, you process the current chunk then run the function again.
4. You keep chaining the `pipe` function until there is no more stream to read, in which case step 2 is followed.

Removing all the code to actually perform a "pump", the code might be generalized to something like this:

```js
fetch("http://example.com/somefile.txt")
  // Retrieve its body as ReadableStream
  .then((response) => {
    const reader = response.body.getReader();
    // read() returns a promise that resolves when a value has been received
    reader.read().then(function pump({ done, value }) {
      if (done) {
        // Do something with last chunk of data then exit reader
        return;
      }
      // Otherwise do something here to process current chunk

      // Read some more, and call this function again
      return reader.read().then(pump);
    });
  })
  .catch((err) => console.error(err));
```

> **Note:** The function looks as if `pump()` calls itself and leads to a potentially deep recursion.
> However, because `pump` is asynchronous and each `pump()` call is at the end of the promise handler, it's actually analogous to a chain of promise handlers.

Reading the stream is even easier when written using async/await rather than promises:

```js
async function readData(url) {
  const response = await fetch(url);
  const reader = response.body.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      // Do something with last chunk of data then exit reader
      return;
    }
    // Otherwise do something here to process current chunk
  }
}
```

## Consuming a fetch() using asynchronous iteration

There is another even simpler way to consume a `fetch()`, which is to iterate the returned `response.body` using the [`for await...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) syntax.
This works because the `response.body` returns a `ReadableStream`, which is an [async iterable](/en-US/docs/Web/API/ReadableStream#async_iteration).

Using this approach, the example code in the previous section can be rewritten as shown:

```js
async function readData(url) {
  const response = await fetch(url);
  for await (const chunk of response.body) {
    // Do something with each "chunk"
  }
  // Exit when done
}
```

If you want to stop iterating the stream you can cancel the `fetch()` operation using an [`AbortController`](/en-US/docs/Web/API/AbortController) and its associated [`AbortSignal`](/en-US/docs/Web/API/AbortSignal):

```js
const aborter = new AbortController();
button.addEventListener("click", () => aborter.abort());
logChunks("http://example.com/somefile.txt", { signal: aborter.signal });

async function logChunks(url, { signal }) {
  const response = await fetch(url, signal);
  for await (const chunk of response.body) {
    // Do something with the chunk
  }
}
```

Alternatively, you can exit the loop using `break`, as shown in the code below.
Note that code in the loop is only run when the stream has new data to process, so there may be some delay between the signal being aborted and `break` being called.

```js
const aborter = new AbortController();
button.addEventListener("click", () => aborter.abort());
logChunks("http://example.com/somefile.txt", { signal: aborter.signal });

async function logChunks(url, { signal }) {
  const response = await fetch(url);
  for await (const chunk of response.body) {
    if (signal.aborted) break; // just break out of loop
    // Do something with the chunk
  }
}
```

### Example async reader

<!-- most of the code below is deliberately hidden as it is not relevant to the example -->

```js hidden
// A mock push source.
// Used to simulate some random data arriving
class MockPushSource {
  // total amount of data to stream from the push source
  static #maxData = 90;
  // total data read so far (capped to maxData)
  #dataRead = 0;

  // Method returning promise when this push source is readable.
  dataRequest() {
    const result = {
      bytesRead: 8,
      data: "",
    };

    return new Promise((resolve) => {
      if (this.#dataRead >= MockPushSource.#maxData) {
        // Out of data
        result.bytesRead = 0;
        result.data = "";
        resolve(result);
        return;
      }

      // Emulate slow read of data
      setTimeout(() => {
        const numberBytesReceived = 8;
        this.#dataRead += numberBytesReceived;
        result.data = MockPushSource.#randomChars();
        resolve(result);
      }, 500);
    });
  }

  // Dummy close function
  close() {
    return;
  }

  // Return random character string
  static #randomChars(length = 8) {
    let string = "";
    const choices =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      string += choices[Math.floor(Math.random() * choices.length)];
    }
    return string;
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
const stream = makePushSourceStream();

function makePushSourceStream() {
  const pushSource = new MockPushSource();

  return new ReadableStream({
    start(controller) {
      readRepeatedly().catch((e) => controller.error(e));
      function readRepeatedly() {
        return pushSource.dataRequest().then((result) => {
          if (result.data.length == 0) {
            logSource(`No data from source: closing`);
            controller.close();
            return;
          }

          logSource(`Enqueue data: ${result.data}`);
          controller.enqueue(result.data);
          return readRepeatedly();
        });
      }
    },

    cancel() {
      logSource(`cancel() called on underlying source`);
      pushSource.close();
    },
  });
}
```

```js hidden
// Monkey patch fetch() so it returns a response that is a mocked stream
window.fetch = async (...args) => {
  return { body: stream };
};
```

The code below shows a more complete example.
Here the fetch stream is consumed using the iterator inside a try/catch block.
On each iteration of the loop the code simply logs and counts the received bytes.
If there is an error it logs the issue.
The `fetch()` operation can be cancelled using an `AbortSignal`, which would also be logged as an error.

```js
let bytes = 0;

const aborter = new AbortController();
button.addEventListener("click", () => aborter.abort());
logChunks("http://example.com/somefile.txt", { signal: aborter.signal });

async function logChunks(url, { signal }) {
  try {
    const response = await fetch(url, signal);
    for await (const chunk of response.body) {
      if (signal.aborted) throw signal.reason;
      bytes += chunk.length;
      logConsumer(`Chunk: ${chunk}. Read ${bytes} characters.`);
    }
  } catch (e) {
    if (e instanceof TypeError) {
      console.log(e);
      logConsumer("TypeError: Browser may not support async iteration");
    } else {
      logConsumer(`Error in async iterator: ${e}.`);
    }
  }
}
```

The example log below shows the code running or reports that your browser does not support async iteration of `ReadableStream`.
The right hand side shows the received chunks; you can press the cancel button to stop the fetch.

> **Note:** This fetch operation is _mocked_ for the purpose of demonstration, and just returns a `ReadableStream` that generates random chunks of text.
> The "Underlying source" on the left below is the data being generated in the mocked source, while the column on the right is log from the consumer.
> (The code for the mocked source is not displayed as it is not relevant to the example.)

{{EmbedLiveSample("Example async reader","100%","400px")}}

## Creating your own custom readable stream

The Simple stream pump example we've been studying throughout this article includes a second part — once we've read the image from the fetch body in chunks, we then enqueue them into another, custom stream of our own creation. How do we create this? The `ReadableStream()` constructor.

### The ReadableStream() constructor

It is easy to read from a stream when the browser provides it for you as in the case of Fetch, but sometimes you need to create a custom stream and populate it with your own chunks. The {{domxref("ReadableStream.ReadableStream","ReadableStream()")}} constructor allows you to do this via a syntax that looks complex at first, but actually isn't too bad.

The generic syntax skeleton looks like this:

```js
const stream = new ReadableStream(
  {
    start(controller) {},
    pull(controller) {},
    cancel() {},
    type,
    autoAllocateChunkSize,
  },
  {
    highWaterMark: 3,
    size: () => 1,
  },
);
```

The constructor takes two objects as parameters. The first object is required, and creates a model in JavaScript of the underlying source the data is being read from. The second object is optional, and allows you to specify a [custom queuing strategy](/en-US/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) to use for your stream. You'll rarely have to do this, so we'll just concentrate on the first one for now.

The first object can contain up to five members, only the first of which is required:

1. `start(controller)` — A method that is called once, immediately after the `ReadableStream` is constructed. Inside this method, you should include code that sets up the stream functionality, e.g. beginning generation of data or otherwise getting access to the source.
2. `pull(controller)` — A method that, when included, is called repeatedly until the stream's internal queue is full. This can be used to control the stream as more chunks are enqueued.
3. `cancel()` — A method that, when included, will be called if the app signals that the stream is to be cancelled (e.g. if {{domxref("ReadableStream.cancel()")}} is called). The contents should do whatever is necessary to release access to the stream source.
4. `type` and `autoAllocateChunkSize` — These are used — when included — to signify that the stream is to be a bytestream.
   Bytestreams are covered separately in [Using readable byte streams](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams), as they are somewhat different in purpose and use case to regular (default) streams.

Looking at our simple example code again, you can see that our `ReadableStream()` constructor only includes a single method — `start()`, which serves to read all the data out of our fetch stream.

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => {
    const reader = response.body.getReader();
    return new ReadableStream({
      start(controller) {
        return pump();
        function pump() {
          return reader.read().then(({ done, value }) => {
            // When no more data needs to be consumed, close the stream
            if (done) {
              controller.close();
              return;
            }
            // Enqueue the next data chunk into our target stream
            controller.enqueue(value);
            return pump();
          });
        }
      },
    });
  });
```

### ReadableStream controllers

You'll notice that the `start()` and `pull()` methods passed into the `ReadableStream()` constructor are given `controller` parameters — these are instances of the {{domxref("ReadableStreamDefaultController")}} class, which can be used to control your stream.

In our example we are using the controller's {{domxref("ReadableStreamDefaultController.enqueue","enqueue()")}} method to enqueue a value into the custom stream after it is read from the fetch body.

In addition, when we are done reading the fetch body we use the controller's {{domxref("ReadableStreamDefaultController.close","close()")}} method to close the custom stream — any previously-enqueued chunks can still be read from it, but no more can be enqueued, and the stream is closed when reading has finished.

### Reading from custom streams

In our Simple stream pump example, we consume the custom readable stream by passing it into a {{domxref("Response.Response", "Response")}} constructor call, after which we consume it as a `blob()`.

```js
readableStream
  .then((stream) => new Response(stream))
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

But a custom stream is still a `ReadableStream` instance, meaning you can attach a reader to it. As an example, have a look at our [Simple random stream demo](https://github.com/mdn/dom-examples/blob/main/streams/simple-random-stream/index.html) ([see it live also](https://mdn.github.io/dom-examples/streams/simple-random-stream/)), which creates a custom stream, enqueues some random strings into it, and then reads the data out of the stream again once the _Stop string generation_ button is pressed.

> **Note:** In order to consume a stream using {{domxref("FetchEvent.respondWith()")}}, the enqueued stream contents must be of type {{jsxref("Uint8Array")}}; for example, encoded using {{domxref("TextEncoder")}}.

The custom stream constructor has a `start()` method that uses a {{domxref("setInterval()")}} call to generate a random string every second. {{domxref("ReadableStreamDefaultController.enqueue()")}} is then used to enqueue it into the stream. When the button is pressed, the interval is cancelled, and a function called `readStream()` is invoked to read the data back out of the stream again. We also close the stream, as we've stopped enqueuing chunks to it.

```js
let interval;
const stream = new ReadableStream({
  start(controller) {
    interval = setInterval(() => {
      const string = randomChars();
      // Add the string to the stream
      controller.enqueue(string);
      // show it on the screen
      const listItem = document.createElement("li");
      listItem.textContent = string;
      list1.appendChild(listItem);
    }, 1000);
    button.addEventListener("click", () => {
      clearInterval(interval);
      readStream();
      controller.close();
    });
  },
  pull(controller) {
    // We don't really need a pull in this example
  },
  cancel() {
    // This is called if the reader cancels,
    // so we should stop generating strings
    clearInterval(interval);
  },
});
```

In the `readStream()` function itself, we lock a reader to the stream using {{domxref("ReadableStream.getReader()")}}, then follow the same kind of pattern we saw earlier — reading each chunk with `read()`, checking whether `done` is `true` and then ending the process if so, and reading the next chunk and processing it if not, before running the `read()` method again.

```js
function readStream() {
  const reader = stream.getReader();
  let charsReceived = 0;
  let result = "";

  // read() returns a promise that resolves
  // when a value has been received
  reader.read().then(function processText({ done, value }) {
    // Result objects contain two properties:
    // done  - true if the stream has already given you all its data.
    // value - some data. Always undefined when done is true.
    if (done) {
      console.log("Stream complete");
      para.textContent = result;
      return;
    }

    charsReceived += value.length;
    const chunk = value;
    const listItem = document.createElement("li");
    listItem.textContent = `Read ${charsReceived} characters so far. Current chunk = ${chunk}`;
    list2.appendChild(listItem);

    result += chunk;

    // Read some more, and call this function again
    return reader.read().then(processText);
  });
}
```

### Closing and cancelling streams

We've already shown examples of using {{domxref("ReadableStreamDefaultController.close()")}} to close a reader. As we said before, any previously enqueued chunks will still be read, but no more can be enqueued because it is closed.

If you wanted to completely get rid of the stream and discard any enqueued chunks, you'd use {{domxref("ReadableStream.cancel()")}} or {{domxref("ReadableStreamDefaultReader.cancel()")}}.

## Teeing a stream

Sometimes you might want to read a stream twice, simultaneously. This is achieved via the {{domxref("ReadableStream.tee()")}} method — it outputs an array containing two identical copies of the original readable stream, which can then be read independently by two separate readers.

You might do this for example in a [ServiceWorker](/en-US/docs/Web/API/Service_Worker_API) if you want to fetch a response from the server and stream it to the browser, but also stream it to the Service Worker cache. Since a response body cannot be consumed more than once, and a stream can't be read by more than one reader at once, you'd need two copies to do this.

We provide an example of this in our [Simple tee example](https://github.com/mdn/dom-examples/blob/main/streams/simple-tee-example/index.html) ([see it live also](https://mdn.github.io/dom-examples/streams/simple-tee-example/)). This example works much the same way as our Simple random stream, except that when the button is pressed to stop generating random strings, the custom stream is taken and teed, and both resulting streams are then read:

```js
function teeStream() {
  const teedOff = stream.tee();
  readStream(teedOff[0], list2);
  readStream(teedOff[1], list3);
}
```

## Pipe chains

Another feature of streams is the ability to pipe streams into one another (called a [pipe chain](/en-US/docs/Web/API/Streams_API/Concepts#pipe_chains)). This involves two methods — {{domxref("ReadableStream.pipeThrough()")}}, which pipes a readable stream through a writer/reader pair to transform one data format into another, and {{domxref("ReadableStream.pipeTo()")}}, which pipes a readable stream to a writer acting as an end point for the pipe chain.

We do have a simple example called [Unpack Chunks of a PNG](https://github.com/mdn/dom-examples/tree/main/streams/png-transform-stream) ([see it live also](https://mdn.github.io/dom-examples/streams/png-transform-stream/)) that fetches an image as a stream, then pipes it through to a custom PNG transform stream that retrieves PNG chunks out of a binary data stream.

```js
// Fetch the original image
fetch("png-logo.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body)
  // Create a gray-scaled PNG stream out of the original
  .then((rs) => logReadableStream("Fetch Response Stream", rs))
  .then((body) => body.pipeThrough(new PNGTransformStream()))
  .then((rs) => logReadableStream("PNG Chunk Stream", rs));
```

We don't yet have an example that uses {{domxref("TransformStream")}}.

## Summary

That explains the basics of "default" readable streams.

See [Using readable byte streams](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams) for information about how to use readable _byte_ streams: streams with an underlying byte source that can perform efficient zero-copy transfers to a consumer, bypassing the stream's internal queues.
