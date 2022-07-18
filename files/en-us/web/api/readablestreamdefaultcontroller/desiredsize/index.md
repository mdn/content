---
title: ReadableStreamDefaultController.desiredSize
slug: Web/API/ReadableStreamDefaultController/desiredSize
page-type: web-api-instance-property
tags:
  - API
  - Property
  - ReadableStreamDefaultController
  - Reference
  - Streams
  - desiredSize
browser-compat: api.ReadableStreamDefaultController.desiredSize
---
{{APIRef("Streams")}}

The **`desiredSize`** read-only property of the
{{domxref("ReadableStreamDefaultController")}} interface returns the desired size
required to fill the stream's internal queue.

## Value

An integer. Note that this can be negative if the queue is over-full.

## Examples

The [A readable stream with an underlying push source and backpressure support](https://streams.spec.whatwg.org/#example-rs-push-backpressure) example in the spec
provides a good example of using `desiredSize` to manually detect when the
stream is full and apply backpressure, and also of using
{{domxref("ReadablestreamDefaultController.error()")}} to manually trigger a stream
error if another part of the system it relies on fails.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
