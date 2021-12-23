---
title: ReadableStream.tee()
slug: Web/API/ReadableStream/tee
tags:
  - API
  - Method
  - ReadableStream
  - Reference
  - Streams
  - tee
browser-compat: api.ReadableStream.tee
---
{{APIRef("Streams")}}

The **`tee()`** method of the
{{domxref("ReadableStream")}} interface [tees](https://streams.spec.whatwg.org/#tee-a-readable-stream) the current readable stream, returning a
two-element array containing the two resulting branches as
new {{domxref("ReadableStream")}} instances.

This is useful for allowing two readers to read a stream simultaneously, perhaps at
different speeds. You might do this for example in a ServiceWorker if you want to fetch
a response from the server and stream it to the browser, but also stream it to the
ServiceWorker cache. Since a response body cannot be consumed more than once, you’d need
two copies to do this.

To cancel the stream you then need to cancel both resulting branches. Teeing a stream
will generally lock it for the duration, preventing other readers from locking it.

## Syntax

```js
var teedStreams = readableStream.tee();
```

### Parameters

None.

### Return value

An {{jsxref("Array")}} containing two {{domxref("ReadableStream")}} instances.

### Exceptions

- TypeError
  - : The source stream is not a `ReadableStream`.

## Examples

In the following simple example, a previously-created stream is teed, then both
resulting streams (contained in two members of a generated array) are passed to a
function that reads the data out of the two streams and prints each stream's chunks
sequentially to a different part of the UI. See [Simple tee
example](https://mdn.github.io/dom-examples/streams/simple-tee-example/) for the full code.

```js
function teeStream() {
  const teedOff = stream.tee();
  fetchStream(teedOff[0], list2);
  fetchStream(teedOff[1], list3);
}

function fetchStream(stream, list) {
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
      return;
    }

    // value for fetch streams is a Uint8Array
    charsReceived += value.length;
    const chunk = value;
    let listItem = document.createElement('li');
    listItem.textContent = 'Read ' + charsReceived + ' characters so far. Current chunk = ' + chunk;
    list.appendChild(listItem);

    // Read some more, and call this function again
    return reader.read().then(processText);
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
