---
title: ReadableStreamBYOBRequest
slug: Web/API/ReadableStreamBYOBRequest
page-type: web-api-interface
tags:
  - API
  - Fetch
  - Interface
  - ReadableStreamBYOBRequest
  - Reference
  - Steams
browser-compat: api.ReadableStreamBYOBRequest
---
{{APIRef("Streams")}}

The **`ReadableStreamBYOBRequest`** interface of the [Streams API](/en-US/docs/Web/API/Streams_API) represents a "pull request" for data from an underlying source that can be made as a zero-copy transfer to a consumer.

An underlying source can transfer data by writing to the BYOB request's `view` (a preallocated buffer) and calling `respond()`, or by calling `respondWithNewView()` with its own "Bring Your Own Buffer" buffer as an argument.

`ReadableStreamBYOBRequest` objects are created in "BYOB mode" by a readable stream's {{domxref("ReadableByteStreamController")}}.
This happens when a consumer makes a request for data and the stream's internal queue is _empty_.
(The stream will resolve the consumer's request directly if it already has buffered data).
BYOB requests are accessed through the {{domxref("ReadableByteStreamController.byobRequest")}} property, which will be set to `null` if there is no outstanding request.

An underlying source that supports "BYOB mode" should check for {{domxref("ReadableByteStreamController.byobRequest")}} being set to `null`.
If data arrives from the underlying source when there is no `ReadableStreamBYOBRequest`, it can be queued using {{domxref("ReadableByteStreamController.enqueue()")}}.

Note that a {{domxref("ReadableByteStreamController")}}, and hence its associated `ReadableStreamBYOBRequest` objects, are only passed to the underlying source in "BYOB mode".
This mode is enabled when either [`autoAllocateChunkSize`](/en-US/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) is specified in the [`ReadableController` constructor](/en-US/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) or when using a {{domxref("ReadableStreamBYOBReader")}} (typically constructed by calling {{domxref("ReadableStream.getReader()")}} with the argument `{ mode: 'byob' }`).

## Constructor

None. `ReadableStreamBYOBRequest` instance is created automatically by `ReadableByteStreamController` as needed.

## Properties

- {{domxref("ReadableStreamBYOBRequest.view")}} {{readonlyInline}}
  - : Returns the current view.
    This is a view on the auto-allocated buffer that will be transferred to the consumer when `ReadableStreamBYOBRequest.respond()` is called.

## Methods

- {{domxref("ReadableStreamBYOBRequest.respond()")}}
  - : Signals the associated readable byte stream that the specified number of bytes were written into the current {{domxref("ReadableStreamBYOBRequest.view", "view")}}, which then causes the pending request from the consumer to be resolved.
     Note that after this method is called the `view` is transferred and no longer modifiable.
- {{domxref("ReadableStreamBYOBRequest.respondWithNewView()")}}
  - : Signals to the associated readable byte stream that the supplied `ArrayBufferView` should be passed to the consumer of the readable byte stream.
    Note that after this method is called the `view` is transferred and no longer modifiable.

## Examples

TBD.

<!--  Push example - check if the byobRequest exists -->

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
