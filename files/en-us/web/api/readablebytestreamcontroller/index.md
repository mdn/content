---
title: ReadableByteStreamController
slug: Web/API/ReadableByteStreamController
tags:
  - API
  - Experimental
  - Fetch
  - Interface
  - ReadableByteStreamController
  - Reference
  - Streams
browser-compat: api.ReadableByteStreamController
---
{{APIRef("Streams")}}{{SeeCompatTable}}

The **`ReadableByteStreamController`** interface of the [Streams API](/en-US/docs/Web/API/Streams_API) represents a controller allowing control of a {{domxref("ReadableStream")}}'s state and internal queue. Byte stream controllers are for byte streams.

## Constructor

None. `ReadableByteStreamController` instances are created automatically during `ReadableStream` construction.

## Properties

- {{domxref("ReadableByteStreamController.byobRequest")}} {{readonlyInline}}
  - : Returns the current BYOB pull request.
- {{domxref("ReadableByteStreamController.desiredSize")}} {{readonlyInline}}
  - : Returns the desired size required to fill the stream's internal queue.

## Methods

- {{domxref("ReadableByteStreamController.close()")}}
  - : Closes the associated stream.
- {{domxref("ReadableByteStreamController.enqueue()")}}
  - : Enqueues a given chunk in the associated stream.
- {{domxref("ReadableByteStreamController.error()")}}
  - : Causes any future interactions with the associated stream to error.

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
