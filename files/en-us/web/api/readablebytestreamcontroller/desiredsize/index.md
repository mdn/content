---
title: ReadableByteStreamController.desiredSize
slug: Web/API/ReadableByteStreamController/desiredSize
page-type: web-api-instance-property
tags:
  - API
  - Property
  - ReadableByteStreamController
  - Reference
  - Streams
  - desiredSize
browser-compat: api.ReadableByteStreamController.desiredSize
---
{{APIRef("Streams")}}

The **`desiredSize`** read-only property of the {{domxref("ReadableByteStreamController")}} interface returns the number of bytes required to fill the stream's internal queue to its "desired size".

The value is used by the stream to indicate a preferred flow rate to the underlying source.
Sources that support throttling or pausing their inflow of data (not all do!) should control the inflow such that `desiredSize` of the stream buffer is kept positive and as close to zero as possible.

The `desiredSize` is used to apply [backpressure](/en-US/docs/Web/API/Streams_API/Concepts#backpressure) from downstream consumers.

## Value

An integer. Note that this can be negative if the queue is over-full.

The value will be `null` if the stream has errored and `0` if it is closed.

## Examples

The [A readable stream with an underlying push source and backpressure support](https://streams.spec.whatwg.org/#example-rs-push-backpressure) example in the spec provides a good example of using `desiredSize` to manually detect when the stream is full and apply backpressure.

While the example uses a default source, the concepts are exactly the same as for readable byte sources.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
