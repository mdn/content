---
title: "ReadableStreamDefaultReader: cancel() method"
short-title: cancel()
slug: Web/API/ReadableStreamDefaultReader/cancel
page-type: web-api-instance-method
browser-compat: api.ReadableStreamDefaultReader.cancel
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

The **`cancel()`** method of the
{{domxref("ReadableStreamDefaultReader")}} interface returns a {{jsxref("Promise")}} that resolves when the stream is canceled. Calling this method signals a loss of interest in the stream by a consumer.

Cancel is used when you've completely finished with the stream and don't need any more
data from it, even if there are chunks enqueued waiting to be read. That data is lost
after cancel is called, and the stream is not readable any more. To read those chunks
still and not completely get rid of the stream, you'd use
{{domxref("ReadableStreamDefaultController.close()")}}.

> [!NOTE]
> If the reader is active, the
> `cancel()` method behaves the same as that for the associated stream
> ({{domxref("ReadableStream.cancel()")}}).

## Syntax

```js-nolint
cancel()
cancel(reason)
```

### Parameters

- `reason` {{optional_inline}}
  - : A human-readable reason for the cancellation. This value may or may not be used.

### Return value

A {{jsxref("Promise")}}, which fulfills with the value given in the `reason`
parameter.

### Exceptions

- {{jsxref("TypeError")}}
  - : The source object is not a `ReadableStreamDefaultReader`, or the stream
    has no owner.

## Examples

In the following simple example, a previously-created custom
`ReadableStream` is read using a {{domxref("ReadableStreamDefaultReader")}}
created using `getReader()`. (this code is based on our [Simple random stream example](https://mdn.github.io/dom-examples/streams/simple-random-stream/)). Each chunk is read sequentially and output to the UI, until the
stream has finished being read, at which point we return out of the recursive function
and print the entire stream to another part of the UI.

When the stream is done (`if (done)`), we run `reader.cancel()`
to cancel the stream, signalling that we don't need to use it any more.

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
      reader.cancel();
      para.textContent = result;
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

- {{domxref("ReadableStreamDefaultReader.ReadableStreamDefaultReader", "ReadableStreamDefaultReader()")}} constructor
- [Using readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams)
