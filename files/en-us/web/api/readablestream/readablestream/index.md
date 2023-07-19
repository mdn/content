---
title: "ReadableStream: ReadableStream() constructor"
short-title: ReadableStream()
slug: Web/API/ReadableStream/ReadableStream
page-type: web-api-constructor
browser-compat: api.ReadableStream.ReadableStream
---

{{APIRef("Streams")}}

The **`ReadableStream()`** constructor creates and returns a readable stream object from the given handlers.

Note that while all parameters are technically optional, omitting the `underlyingSource` will result in a stream that has no source, and that can't be read from (readers return a promise that will never be resolved).

## Syntax

```js-nolint
new ReadableStream()
new ReadableStream(underlyingSource)
new ReadableStream(underlyingSource, queuingStrategy)
```

### Parameters

- `underlyingSource` {{optional_inline}}

  - : An object containing methods and properties that define how the constructed stream instance will behave.
    `underlyingSource` can contain the following:

    - `start` (controller) {{optional_inline}}
      - : This is a method, called immediately when the object is constructed. The
        contents of this method are defined by the developer, and should aim to get access
        to the stream source, and do anything else required to set up the stream
        functionality. If this process is to be done asynchronously, it can return a
        promise to signal success or failure. The `controller` parameter passed
        to this method is a {{domxref("ReadableStreamDefaultController")}} or a
        {{domxref("ReadableByteStreamController")}}, depending on the value of the
        `type` property. This can be used by the developer to control the
        stream during set up.
    - `pull` (controller) {{optional_inline}}
      - : This method, also defined by the developer, will be called repeatedly when the
        stream's internal queue of chunks is not full, up until it reaches its high water
        mark. If `pull()` returns a promise, then it won't be called again
        until that promise fulfills; if the promise rejects, the stream will become
        errored. The `controller` parameter passed to this method is a
        {{domxref("ReadableStreamDefaultController")}} or a
        {{domxref("ReadableByteStreamController")}}, depending on the value of the
        `type` property. This can be used by the developer to control the
        stream as more chunks are fetched. This function will not be called until `start()`
        successfully completes. Additionally, it will only be called repeatedly if it
        enqueues at least one chunk or fulfills a BYOB request; a no-op `pull()`
        implementation will not be continually called.
    - `cancel` (reason) {{optional_inline}}
      - : This method, also defined by the developer, will be called if the app signals
        that the stream is to be cancelled (e.g. if {{domxref("ReadableStream.cancel()")}}
        is called). The contents should do whatever is necessary to release access to the
        stream source. If this process is asynchronous, it can return a promise to signal
        success or failure. The `reason` parameter contains a
        string describing why the stream was cancelled.
    - `type` {{optional_inline}}
      - : This property controls what type of readable stream is being dealt with. If it
        is included with a value set to `"bytes"`, the passed controller object
        will be a {{domxref("ReadableByteStreamController")}} capable of handling a BYOB
        (bring your own buffer)/byte stream. If it is not included, the passed controller
        will be a {{domxref("ReadableStreamDefaultController")}}.
    - `autoAllocateChunkSize` {{optional_inline}}

      - : For byte streams, the developer can set the `autoAllocateChunkSize` with a positive integer value to turn on the stream's auto-allocation feature.
        With this is set, the stream implementation will automatically allocate a view buffer of the specified size in {{domxref("ReadableByteStreamController.byobRequest")}} when required.

        This must be set to enable zero-copy transfers to be used with a default {{domxref("ReadableStreamDefaultReader")}}.
        If not set, a default reader will still stream data, but {{domxref("ReadableByteStreamController.byobRequest")}} will always be `null` and transfers to the consumer must be via the stream's internal queues.

- `queuingStrategy` {{optional_inline}}

  - : An object that optionally defines a queuing strategy for the stream. This takes two
    parameters:

    - `highWaterMark`
      - : A non-negative integer — this defines the total number of chunks that can be
        contained in the internal queue before backpressure is applied.
    - `size(chunk)`
      - : A method containing a parameter `chunk` — this indicates the size to
        use for each chunk, in bytes.

    > **Note:** You could define your own custom
    > `queuingStrategy`, or use an instance of
    > {{domxref("ByteLengthQueuingStrategy")}} or {{domxref("CountQueuingStrategy")}}
    > for this object value. If no `queuingStrategy` is supplied, the default
    > used is the same as a `CountQueuingStrategy` with a high water mark of
    > 1\.

### Return value

An instance of the {{domxref("ReadableStream")}} object.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the supplied type value is neither `"bytes"` nor `undefined`.

## Examples

In the following simple example, a custom `ReadableStream` is created using
a constructor (see our [Simple random stream example](https://mdn.github.io/dom-examples/streams/simple-random-stream/) for the full code). The `start()` function generates a
random string of text every second and enqueues it into the stream. A
`cancel()` function is also provided to stop the generation if
{{domxref("ReadableStream.cancel()")}} is called for any reason.

When a button is pressed, the generation is stopped, the stream is closed using
{{domxref("ReadableStreamDefaultController.close()")}}, and another function is run,
which reads the data back out of the stream.

```js
let interval;
const stream = new ReadableStream({
  start(controller) {
    interval = setInterval(() => {
      let string = randomChars();

      // Add the string to the stream
      controller.enqueue(string);

      // show it on the screen
      let listItem = document.createElement("li");
      listItem.textContent = string;
      list1.appendChild(listItem);
    }, 1000);

    button.addEventListener("click", () => {
      clearInterval(interval);
      fetchStream();
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ReadableStream")}}
- {{domxref("ReadableByteStreamController")}}
- {{domxref("ReadableStreamDefaultController")}}
- [Using readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams)
