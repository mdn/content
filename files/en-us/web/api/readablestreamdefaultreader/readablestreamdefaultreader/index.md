---
title: ReadableStreamDefaultReader()
slug: Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader
tags:
  - API
  - Constructor
  - ReadableStreamDefaultReader
  - Reference
  - Streams
browser-compat: api.ReadableStreamDefaultReader.ReadableStreamDefaultReader
---
{{APIRef("Streams")}}

The **`ReadableStreamDefaultReader()`**
constructor creates and returns a `ReadableStreamDefaultReader` object
instance.

> **Note:** You generally wouldn't use this constructor manually; instead,
> you'd use the {{domxref("ReadableStream.getReader()")}} method.

## Syntax

```js
var readableStreamDefaultReader = new ReadableStreamDefaultReader(stream);
```

### Parameters

- stream
  - : The {{domxref("ReadableStream")}} to be read.

### Return value

An instance of the {{domxref("ReadableStreamDefaultReader")}} object.

### Exceptions

- TypeError
  - : The supplied `stream` parameter is not a {{domxref("ReadableStream")}},
    or it is already locked for reading by another reader.

## Examples

In the following simple example, a previously-created custom
`ReadableStream` is read using a {{domxref("ReadableStreamDefaultReader")}}
created using `getReader()`. (see our [Simple random
stream example](https://mdn.github.io/dom-examples/streams/simple-random-stream/) for the full code). Each chunk is read sequentially and output to
the UI, until the stream has finished being read, at which point we return out of the
recursive function and print the entire stream to another part of the UI.

```js
function fetchStream() {
  const reader = stream.getReader();
  let charsReceived = 0;

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

    // value for fetch streams is a Uint8Array
    charsReceived += value.length;
    const chunk = value;
    let listItem = document.createElement('li');
    listItem.textContent = 'Received ' + charsReceived + ' characters so far. Current chunk = ' + chunk;
    list2.appendChild(listItem);

    result += chunk;

    // Read some more, and call this function again
    return reader.read().then(processText);
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
