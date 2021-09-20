---
title: ReadableStream.pipeThrough()
slug: Web/API/ReadableStream/pipeThrough
tags:
  - API
  - Experimental
  - Method
  - ReadableStream
  - Reference
  - Streams
  - pipeThrough
browser-compat: api.ReadableStream.pipeThrough
---
{{SeeCompatTable}}{{APIRef("Streams")}}

The **`pipeThrough()`** method of the
{{domxref("ReadableStream")}} interface provides a chainable way of piping the current
stream through a transform stream or any other writable/readable pair.

Piping a stream will generally lock it for the duration of the pipe, preventing other
readers from locking it.

## Syntax

```js
pipeThrough(transformStream);
pipeThrough(transformStream, options);
```

### Parameters

- transformStream
  - : A {{domxref("TransformStream")}} (or an object with the structure
    `{writable, readable}`) consisting of a readable stream and a writable
    stream working together to transform some data from one form to another. Data writen
    to the `writable` stream can be read in some transformed state by the
    `readable` stream. For example, a {{domxref("TextDecoder")}}, has bytes
    written to it and strings read from it, while a video decoder has encoded bytes
    written to it and uncompressed video frames read from it.
- options {{optional_inline}}

  - : The options that should be used when piping to the `writable` stream.
    Available options are:

    1.  `preventClose`: If this is set to `true`, the source
        `ReadableStream` closing will no longer cause the destination
        `WritableStream` to be closed. The method will return a fulfilled
        promise once this process completes, unless an error is encountered while closing
        the destination in which case it will be rejected with that error.
    2.  `preventAbort`: If this is set to `true`, errors in the
        source `ReadableStream` will no longer abort the destination
        `WritableStream`. The method will return a promise rejected with the
        source’s error, or with any error that occurs during aborting the destination.
    3.  `preventCancel`: If this is set to `true`, errors in the
        destination `WritableStream` will no longer cancel the source
        `ReadableStream`. In this case the method will return a promise
        rejected with the source’s error, or with any error that occurs during canceling
        the source. In addition, if the destination writable stream starts out closed or
        closing, the source readable stream will no longer be canceled. In this case the
        method will return a promise rejected with an error indicating piping to a closed
        stream failed, or with any error that occurs during canceling the source.
    4.  `signal`: If set to an
        [`AbortSignal`](/en-US/docs/Web/API/AbortSignal) object,
        ongoing pipe operations can then be aborted via the corresponding
        [`AbortController`](/en-US/docs/Web/API/AbortController).

### Return value

The `readable` side of the `transformStream`.

### Exceptions

- TypeError
  - : The `writable` and/or `readable` property of
    `transformStream` are undefined.

## Examples

In the following example (see [Unpack chunks
of a PNG](https://mdn.github.io/dom-examples/streams/png-transform-stream/) for the full code running live, and [png-transform-stream](https://github.com/mdn/dom-examples/tree/master/streams/png-transform-stream)
for the source code), an image is fetched and its body retrieved as a
{{domxref("ReadableStream")}}. Next, we log the contents of the readable stream, use
`pipeThrough()` to send it to a new function that creates a gray-scaled
version of the stream, then log the new stream's contents too.

```js
// Fetch the original image
fetch('png-logo.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => logReadableStream('Fetch Response Stream', rs))
// Create a gray-scaled PNG stream out of the original
.then(body => body.pipeThrough(new PNGTransformStream()))
.then(rs => logReadableStream('PNG Chunk Stream', rs))
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
