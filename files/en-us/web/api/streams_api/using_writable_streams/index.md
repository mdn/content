---
title: Using writable streams
slug: Web/API/Streams_API/Using_writable_streams
page-type: guide
---

{{DefaultAPISidebar("Streams")}}

As a JavaScript developer, programmatically writing data to a stream is very useful! This article explains the [Streams API](/en-US/docs/Web/API/Streams_API)'s writable stream functionality.

> [!NOTE]
> This article assumes that you understand the use cases of writable streams, and are aware of the high-level concepts.
> If not, we suggest that you first read the [Streams concepts and usage overview](/en-US/docs/Web/API/Streams_API#concepts_and_usage) and dedicated [Streams API concepts](/en-US/docs/Web/API/Streams_API/Concepts) article, then come back.

> [!NOTE]
> If you are looking for information about readable streams, try [Using readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams) and [Using readable byte streams](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams) instead.

## Introducing an example

In our [dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams) repo you'll find a [Simple writer example](https://github.com/mdn/dom-examples/blob/main/streams/simple-writer/index.html) ([see it live also](https://mdn.github.io/dom-examples/streams/simple-writer/)). This takes a given message and writes it into a writable stream, displaying each chunk on the UI as it is written to the stream and also displaying the whole message on the UI when writing has finished.

## How writable streams work

Let's look at how the writable stream functionality in our demo works.

### Constructing a writable stream

To create a writable stream, we use the {{domxref("WritableStream.WritableStream","WritableStream()")}} constructor; the syntax looks complex at first, but actually isn't too bad.

The syntax skeleton looks like this:

```js
const stream = new WritableStream(
  {
    start(controller) {},
    write(chunk, controller) {},
    close(controller) {},
    abort(reason) {},
  },
  {
    highWaterMark: 3,
    size: () => 1,
  },
);
```

The constructor takes two objects as parameters. The first object is required, and creates a model in JavaScript of the underlying sink the data is being written to. The second object is optional, and allows you to specify a [custom queueing strategy](/en-US/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) to use for your stream, which takes the form of an instance of {{domxref("ByteLengthQueuingStrategy")}} or {{domxref("CountQueuingStrategy")}}.

The first object can contain up to four members, all of which are optional:

1. `start(controller)` — A method that is called once, immediately after the {{domxref("WritableStream")}} is constructed. Inside this method, you should include code that sets up the stream functionality, e.g. getting access to the underlying sink.
2. `write(chunk,controller)` — A method that is called repeatedly every time a new chunk is ready to be written to the underlying sink (specified in the `chunk` parameter).
3. `close(controller)` — A method that is called if the app signals that it has finished writing chunks to the stream. It should do whatever is necessary to finalize writes to the underlying sink, and release access to it.
4. `abort(reason)` — A method that will be called if the app signals that it wishes to abruptly close the stream and put it in an errored state.

The constructor call in our example looks like this:

```js
const decoder = new TextDecoder("utf-8");
const queuingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });
let result = "";
const writableStream = new WritableStream(
  {
    // Implement the sink
    write(chunk) {
      return new Promise((resolve, reject) => {
        const buffer = new ArrayBuffer(1);
        const view = new Uint8Array(buffer);
        view[0] = chunk;
        const decoded = decoder.decode(view, { stream: true });
        const listItem = document.createElement("li");
        listItem.textContent = `Chunk decoded: ${decoded}`;
        list.appendChild(listItem);
        result += decoded;
        resolve();
      });
    },
    close() {
      const listItem = document.createElement("li");
      listItem.textContent = `[MESSAGE RECEIVED] ${result}`;
      list.appendChild(listItem);
    },
    abort(err) {
      console.error("Sink error:", err);
    },
  },
  queuingStrategy,
);
```

- The `write()` method contains a promise including code that decodes each written chunk into a format that can be written to the UI. This is called when each chunk is actually written (see the next section).
- The `close()` method is called automatically when writing has finished — it prints the entire decoded result to the UI in one string.
- The `abort()` method prints an error to the console if the stream is aborted.

### Writing

To actually write content to the stream we call the `sendMessage()` function, passing it a message to be written and the stream to write to:

```js
sendMessage("Hello, world.", writableStream);
```

The `sendMessage()` definition looks like so:

```js
function sendMessage(message, writableStream) {
  // defaultWriter is of type WritableStreamDefaultWriter
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message, { stream: true });
  encoded.forEach((chunk) => {
    defaultWriter.ready
      .then(() => defaultWriter.write(chunk))
      .then(() => console.log("Chunk written to sink."))
      .catch((err) => console.error("Chunk error:", err));
  });
  // Call ready again to ensure that all chunks are written
  //   before closing the writer.
  defaultWriter.ready
    .then(() => defaultWriter.close())
    .then(() => console.log("All chunks written"))
    .catch((err) => console.error("Stream error:", err));
}
```

So here we create a writer to write the chunks to the stream using {{domxref("WritableStream.getWriter()")}}. This creates a {{domxref("WritableStreamDefaultWriter")}} instance.

We also create a new {{domxref("TextEncoder")}} instance using the relevant constructor to encode the message into chunks to be put into the stream.

With the chunks encoded, we then call [`forEach()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) on the resulting array. Inside this block we use {{domxref("WritableStreamDefaultWriter.ready")}} to check whether the writer is ready to have another chunk written to it. `ready` returns a promise that fulfills when this is the case, inside of which we call {{domxref("WritableStreamDefaultWriter.write()")}} to actually write the chunk to the stream. This also triggers the `write()` method specified inside the `WritableStream()` constructor, as discussed above.

After the chunks have all been written, we then perform the `ready` check once more, to check that the last chunk has finished being written and all the work is done. When this `ready` check fulfills, we invoke {{domxref("WritableStreamDefaultWriter.close()")}} to close the stream. This also triggers the `close()` method specified inside the `WritableStream()` constructor, as discussed above.

### Controllers

As you'll have noticed when studying the `WritableStream()` syntax skeleton, the `start()`, `write()`, and `close()` methods can optionally have a `controller` parameter passed to them. This contains an instance of the {{domxref("WritableStreamDefaultController")}} interface, which can be used by the developer to further control the stream as required.

This currently only has one method available on it — {{domxref("WritableStreamDefaultController.error()")}}, which when invoked causes future interactions with the stream to error. This is useful when another part of an app goes wrong, and you want to propagate the error to the stream so that the whole system fails cleanly, rather than risking garbage being silently written to the stream (or something similarly bad).

### Closing and aborting

As mentioned above, we call the `close()` method when the writing is finished, which triggers the `close()` method specified inside the `WritableStream()` constructor.

We could also abort the stream by calling {{domxref("WritableStreamDefaultWriter.abort()")}}.

The difference is that when close is called, any previously enqueued chunks are written and finished with before the stream is closed.

When abort is called, any previously enqueued chunks are just thrown away immediately and then the stream is moved to an errored state. This also triggers any `abort()` method specified in the `WritableStream()` constructor to be invoked.
