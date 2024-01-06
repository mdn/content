---
title: "ReadableStream: getReader() method"
short-title: getReader()
slug: Web/API/ReadableStream/getReader
page-type: web-api-instance-method
browser-compat: api.ReadableStream.getReader
---

{{APIRef("Streams")}}

The **`getReader()`** method of the {{domxref("ReadableStream")}} interface creates a reader and locks the stream to it.
While the stream is locked, no other reader can be acquired until this one is released.

## Syntax

```js-nolint
getReader()
getReader(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object containing the following properties:

    - `mode` {{optional_inline}}

      - : An property that specifies the type of reader to create.
        Values can be:

        - `"byob"`, which results in a {{domxref("ReadableStreamBYOBReader")}} being created that can read readable byte streams (streams that support zero-copy transfer from an underlying byte source to the reader when internal stream buffers are empty).
        - `undefined` (or not specified at all — this is the default), which results in a {{domxref("ReadableStreamDefaultReader")}} being created that can read individual chunks from a stream.

### Return value

A {{domxref("ReadableStreamDefaultReader")}} or {{domxref("ReadableStreamBYOBReader")}} object instance, depending on the `mode` value.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the provided mode value is not `"byob"` or `undefined`.
- {{jsxref("TypeError")}}
  - : Thrown if the stream you are trying to create a reader for is already locked, or not a {{domxref("ReadableStream")}}.
    This is also thrown if a BYOB reader is requested and the stream controller is not a {{domxref("ReadableByteStreamController")}} (the stream was not [constructed](/en-US/docs/Web/API/ReadableStream/ReadableStream) as an underlying source with [`type="bytes"`](/en-US/docs/Web/API/ReadableStream/ReadableStream#type)).

## Examples

In the following simple example, a previously-created custom `ReadableStream` is read using a {{domxref("ReadableStreamDefaultReader")}} created using `getReader()`.
(see our [Simple random stream example](https://mdn.github.io/dom-examples/streams/simple-random-stream/) for the full code).
Each chunk is read sequentially and output to the UI, until the stream has finished being read, at which point we return out of the recursive function and print the entire stream to another part of the UI.

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
    let listItem = document.createElement("li");
    listItem.textContent = `Received ${charsReceived} characters so far. Current chunk = ${chunk}`;
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

## See also

- {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} constructor
- {{domxref("ReadableStreamDefaultReader")}}
- {{domxref("ReadableStreamBYOBReader")}}
- [Using readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams)
- [Using readable byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams)
