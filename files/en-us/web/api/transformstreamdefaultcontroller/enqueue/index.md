---
title: TransformStreamDefaultController.enqueue()
slug: Web/API/TransformStreamDefaultController/enqueue
tags:
  - API
  - Method
  - Reference
  - enqueue
  - TransformStreamDefaultController
browser-compat: api.TransformStreamDefaultController.enqueue
---
{{DefaultAPISidebar("Streams API")}}

The **`enqueue()`** method of the {{domxref("TransformStreamDefaultController")}} interface enqueues the given chunk in the readable side of the stream.

For more information on readable streams and chunks see [Using Readable Streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams).

## Syntax

```js
TransformStreamDefaultController.enqueue(chunk);
```

### Parameters

- `chunk`
  - : The chunk being queued. A chunk is a single piece of data. It can be any type of data, and a stream can contain chunks of different types.

## Examples

In this example an encoded chunk is passed to the queue using the `enqueue()` method.

```js
const textEncoderStream = new TransformStream({
  transform(chunk, controller) {
    controller.enqueue(new TextEncoder().encode(chunk));
  },
  flush(controller) {
    controller.terminate();
  },
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
