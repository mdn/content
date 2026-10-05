---
title: "ReadableStreamDefaultController: desiredSize property"
short-title: desiredSize
slug: Web/API/ReadableStreamDefaultController/desiredSize
page-type: web-api-instance-property
browser-compat: api.ReadableStreamDefaultController.desiredSize
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

The **`desiredSize`** read-only property of the
{{domxref("ReadableStreamDefaultController")}} interface returns the desired size
required to fill the stream's internal queue.

## Value

A number, or `null`.

The number can be negative if the queue is over-full. When a custom queuing strategy is used, its chunk sizes can cause the number to have a fractional component. The value is `null` if the stream has errored and `0` if it is closed.

## Examples

The [A readable stream with an underlying push source and backpressure support](https://streams.spec.whatwg.org/#example-rs-push-backpressure) example in the spec
provides a good example of using `desiredSize` to manually detect when the
stream is full and apply backpressure, and also of using
{{domxref("ReadableStreamDefaultController.error()")}} to manually trigger a stream
error if another part of the system it relies on fails.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams)
- {{domxref("ReadableStreamDefaultController")}}
