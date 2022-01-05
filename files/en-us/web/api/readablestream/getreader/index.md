---
title: ReadableStream.getReader()
slug: Web/API/ReadableStream/getReader
tags:
  - API
  - Method
  - ReadableStream
  - Reference
  - Streams
  - getReader
browser-compat: api.ReadableStream.getReader
---
{{APIRef("Streams")}}

The **`getReader()`** method of the
{{domxref("ReadableStream")}} interface creates a reader and locks the stream to it.
While the stream is locked, no other reader can be acquired until this one is released.

## Syntax

```js
var reader = readableStream.getReader({mode});
```

### Parameters

- {mode} {{optional_inline}}

  - : An object containing a property `mode`, specifying the type of reader to
    create.  Values can be:

    - `"byob"`, which results in a {{domxref("ReadableStreamBYOBReader")}}
      being created that can read readable byte streams (i.e. can handle "bring your own
      buffer" reading).
    - `undefined` (or not specified at all — this is the default), which
      results in a {{domxref("ReadableStreamDefaultReader")}} being created that can
      read individual chunks from a stream.

### Return value

A {{domxref("ReadableStreamDefaultReader")}} or {{domxref("ReadableStreamBYOBReader")}}
object instance, depending on the `mode` value.

### Exceptions

- RangeError
  - : The provided mode value is not `"byob"` or `undefined`.
- TypeError
  - : The stream you are trying to create a reader for is not a
    {{domxref("ReadableStream")}}.

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
      para.textContent = value;
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
