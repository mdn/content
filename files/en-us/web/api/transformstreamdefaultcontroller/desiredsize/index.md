---
title: "TransformStreamDefaultController: desiredSize property"
short-title: desiredSize
slug: Web/API/TransformStreamDefaultController/desiredSize
page-type: web-api-instance-property
browser-compat: api.TransformStreamDefaultController.desiredSize
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

The **`desiredSize`** read-only property of the {{domxref("TransformStreamDefaultController")}} interface returns the desired size to fill the queue of the associated {{domxref("ReadableStream")}}.

The internal queue of a `ReadableStream` contains chunks that have been enqueued, but not yet read. The browser determines the **desired size** to fill the stream, and it is this value returned by the `desiredSize` property.

If the `desiredSize` is `0` then the queue is full. Therefore you can use this information to [manually apply backpressure](/en-US/docs/Web/API/Streams_API/Concepts#backpressure) to manage the queue.

## Value

A number, or `null`.

The number can be negative if the queue is over-full. When a custom readable queuing strategy is used, its chunk sizes can cause the number to have a fractional component. The value is `null` if the readable side has errored and `0` if it is closed.

## Examples

In the next example the `desiredSize` is logged to the console.

```js
console.log(controller.desiredSize);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
