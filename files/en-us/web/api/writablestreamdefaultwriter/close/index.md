---
title: WritableStreamDefaultWriter.close()
slug: Web/API/WritableStreamDefaultWriter/close
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Streams
  - WritableStreamDefaultWriter
  - close
browser-compat: api.WritableStreamDefaultWriter.close
---
{{APIRef("Streams")}}

The **`close()`** method of the
{{domxref("WritableStreamDefaultWriter")}} interface closes the associated writable
stream.

The underlying sink will finish processing any previously-written chunks, before
invoking the close behavior. During this time any further attempts to write will fail
(without erroring the stream).

## Syntax

```js
close()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}}, which fulfills with the `undefined` if all
remaining chunks were successfully written before the close, or rejects with an error if
a problem was encountered during the process.

### Exceptions

- {{jsxref("TypeError")}}
  - : The stream you are trying to close is not a {{domxref("WritableStream")}}.

## Examples

The following example shows the creation of a `WritableStream` with a custom
sink and an API-supplied queuing strategy. It then calls a function called
`sendMessage()`, passing the newly created stream and a string. Inside this
function it calls the stream's `getWriter()` method, which returns an
instance of {{domxref("WritableStreamDefaultWriter")}}. A `forEach()` call is
used to write each chunk of the string to the stream. Finally, `write()` and
`close()` return promises that are processed to deal with success or failure
of chunks and streams.

```js
const list = document.querySelector('ul');

function sendMessage(message, writableStream) {
  // defaultWriter is of type WritableStreamDefaultWriter
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message, { stream: true });
  encoded.forEach((chunk) => {
    defaultWriter.ready
      .then(() => defaultWriter.write(chunk))
      .then(() => {
        console.log("Chunk written to sink.");
      })
      .catch((err) => {
        console.log("Chunk error:", err);
      });
  });
  // Call ready again to ensure that all chunks are written
  //   before closing the writer.
  defaultWriter.ready
    .then(() => {
      defaultWriter.close();
    })
    .then(() => {
      console.log("All chunks written");
    })
    .catch((err) => {
      console.log("Stream error:", err);
    });
}

const decoder = new TextDecoder("utf-8");
const queuingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });
let result = "";
const writableStream = new WritableStream({
  // Implement the sink
  write(chunk) {
    return new Promise((resolve, reject) => {
      const buffer = new ArrayBuffer(1);
      const view = new Uint8Array(buffer);
      view[0] = chunk;
      const decoded = decoder.decode(view, { stream: true });
      const listItem = document.createElement('li');
      listItem.textContent = `Chunk decoded: ${decoded}`;
      list.appendChild(listItem);
      result += decoded;
      resolve();
    });
  },
  close() {
    const listItem = document.createElement('li');
    listItem.textContent = `[MESSAGE RECEIVED] ${result}`;
    list.appendChild(listItem);
  },
  abort(err) {
    console.log("Sink error:", err);
  }
}, queuingStrategy);

sendMessage("Hello, world.", writableStream);
```

You can find the full code in our [Simple writer example](https://mdn.github.io/dom-examples/streams/simple-writer/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
