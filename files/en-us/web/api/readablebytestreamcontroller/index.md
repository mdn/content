---
title: ReadableByteStreamController
slug: Web/API/ReadableByteStreamController
page-type: web-api-interface
tags:
  - API
  - Fetch
  - Interface
  - ReadableByteStreamController
  - Reference
  - Streams
browser-compat: api.ReadableByteStreamController
---
{{APIRef("Streams")}}

The **`ReadableByteStreamController`** interface of the [Streams API](/en-US/docs/Web/API/Streams_API) represents a controller for a [readable byte stream](TBD).
It allows control of the state and internal queue of a {{domxref("ReadableStream")}} with an underlying byte source, and enables efficient zero-copy transfer of data from the underlying source to a consumer when the stream's internal queue is empty.

An instance of this controller type is created if an `underlyingSource` object with the property `type="bytes"` is passed as an argument to the [`ReadableStream()` constructor](/en-US/docs/Web/API/ReadableStream/ReadableStream#type).
The `underlyingSource` object may also define [`start()`](/en-US/docs/Web/API/ReadableStream/ReadableStream#start) and [`pull()`](/en-US/docs/Web/API/ReadableStream/ReadableStream#pull) callback functions.
These are called with the controller as a parameter, in order to setup the underlying source, and request data when needed.

The underlying source uses the controller to supply data to the stream via its [`byobRequest`](#readablebytestreamcontroller.byobrequest) property or [`enqueue()`](#readablebytestreamcontroller.enqueue) method.
[`byobRequest`](#readablebytestreamcontroller.byobrequest) is a {{domxref("ReadableStreamBYOBRequest")}} object that represents a pending request from a consumer to make a zero-copy transfer of data direct to a consumer.
`byobRequest` must be used to copy data if it exists (do not use `enqueue()` in this case)!
If the underlying source needs to pass data to the stream and `byobRequest` is `null` then the source can call [`enqueue()`](#readablebytestreamcontroller.enqueue) to add the data to the stream's internal queues.

Note that the [`byobRequest`](#readablebytestreamcontroller.byobrequest) is only created in "BYOB mode" when there is a request from a reader and the stream's internal queue is empty.
"BYOB mode" is enabled when either [`autoAllocateChunkSize`](/en-US/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) is specified in the [`ReadableController()` constructor](/en-US/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) or when using a {{domxref("ReadableStreamBYOBReader")}} (typically constructed by calling {{domxref("ReadableStream.getReader()")}} with the argument `{ mode: 'byob' }`).

An underlying byte source can also use the controller to [`close()`](#readablebytestreamcontroller.close) the stream when all the data has been sent and report errors from the underlying source using [`error()`](#readablebytestreamcontroller.error).
The controller's [`desiredSize`](#readablebytestreamcontroller.desiredsize) property is used to apply "backpressure", informing the underlying source of the size of the internal queue (small values indicate that the queue is filling up, hinting to the underlying source that it is be desirable to pause or throttle the inflow).

## Constructor

None. `ReadableByteStreamController` instances are automatically created if an `underlyingSource` with the property `type="bytes"` is passed to the [`ReadableStream()` constructor](/en-US/docs/Web/API/ReadableStream/ReadableStream#type).

## Properties

- {{domxref("ReadableByteStreamController.byobRequest")}} {{readonlyInline}}
  - : Returns the current BYOB pull request, or `null` if there no outstanding request.
- {{domxref("ReadableByteStreamController.desiredSize")}} {{readonlyInline}}
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
