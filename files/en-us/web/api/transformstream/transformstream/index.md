---
title: "TransformStream: TransformStream() constructor"
short-title: TransformStream()
slug: Web/API/TransformStream/TransformStream
page-type: web-api-constructor
browser-compat: api.TransformStream.TransformStream
---

{{APIRef("Streams")}}

The **`TransformStream()`** constructor creates a new {{domxref("TransformStream")}} object which represents a pair of streams: a {{domxref("WritableStream")}} representing the writable side, and a {{domxref("ReadableStream")}} representing the readable side.

## Syntax

```js-nolint
new TransformStream()
new TransformStream(transformer)
new TransformStream(transformer, writableStrategy)
new TransformStream(transformer, writableStrategy, readableStrategy)
```

### Parameters

- `transformer` {{optional_inline}}

  - : An object representing the `transformer`. If not supplied the resulting stream will be an **identity transform stream** which forwards all chunks written to its writable side to its readable side, without any changes.

    The transformer object can contain any of the following methods. In each method `controller` is an instance of {{domxref("TransformStreamDefaultController")}}.

    - `start(controller)`
      - : Called when the `TransformStream` is constructed. It is typically used to enqueue chunks using {{domxref("TransformStreamDefaultController.enqueue()")}}.
    - `transform(chunk, controller)`
      - : Called when a chunk written to the writable side is ready to be transformed, and performs the work of the transformation stream. It can return a promise to signal success or failure of the write operation. If no `transform()` method is supplied, the identity transform is used, and the chunk will be enqueued with no changes.
    - `flush(controller)`
      - : Called after all chunks written to the writable side have been successfully transformed, and the writable side is about to be closed.

- `writableStrategy` {{optional_inline}}

  - : An object that optionally defines a queuing strategy for the stream. This takes two
    parameters:

    - `highWaterMark`
      - : A non-negative integer. This defines the total number of chunks that can be
        contained in the internal queue before backpressure is applied.
    - `size(chunk)`
      - : A method containing a parameter `chunk`. This indicates the size to
        use for each chunk, in bytes.

- `readableStrategy` {{optional_inline}}

  - : An object that optionally defines a queuing strategy for the stream. This takes two
    parameters:

    - `highWaterMark`
      - : A non-negative integer. This defines the total number of chunks that can be
        contained in the internal queue before backpressure is applied.
    - `size(chunk)`
      - : A method containing a parameter `chunk`. This indicates the size to
        use for each chunk, in bytes.

> **Note:** You could define your own custom
> `readableStrategy` or `writableStrategy`, or use an instance of
> {{domxref("ByteLengthQueuingStrategy")}} or {{domxref("CountQueuingStrategy")}}
> for the object values.

## Examples

### Transforming text to uppercase

The following example transforms text to uppercase chunk by chunk. This example is from [Streams—The Definitive Guide](https://web.dev/streams/), which has a number of examples of different types of streams.

```js
function upperCaseStream() {
  return new TransformStream({
    transform(chunk, controller) {
      controller.enqueue(chunk.toUpperCase());
    },
  });
}

function appendToDOMStream(el) {
  return new WritableStream({
    write(chunk) {
      el.append(chunk);
    },
  });
}

fetch("./lorem-ipsum.txt").then((response) =>
  response.body
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(upperCaseStream())
    .pipeTo(appendToDOMStream(document.body)),
);
```

### Creating an identity transform stream

If no `transformer` argument is supplied then the result will be an identity transform stream which forwards all chunks written to the writable side to the readable side with no changes. In the following example an identity transform stream is used to add buffering to a pipe.

```js
const writableStrategy = new ByteLengthQueuingStrategy({
  highWaterMark: 1024 * 1024,
});
readableStream
  .pipeThrough(new TransformStream(undefined, writableStrategy))
  .pipeTo(writableStream);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
