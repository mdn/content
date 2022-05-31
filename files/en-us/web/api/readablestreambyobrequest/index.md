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

The **`ReadableStreamBYOBRequest`** interface of the [Streams API](/en-US/docs/Web/API/Streams_API) represents a pull request into a {{domxref("ReadableByteStreamController")}} view.

A view, as mentioned below, refers to a typed array representing the destination region to which the associated `ReadableByteStreamController` controller can write generated data.

## Constructor

None. `ReadableStreamBYOBRequest` instance is created automatically by `ReadableByteStreamController` as needed.

## Properties

- {{domxref("ReadableStreamBYOBRequest.view")}} {{readonlyInline}}
  - : Returns the current view.

## Methods

- {{domxref("ReadableStreamBYOBRequest.respond()")}}
  - : Signals to the associated readable byte stream that the specified number of bytes were written into the current {{domxref("ReadableStreamBYOBRequest.view", "view")}}.
- {{domxref("ReadableStreamBYOBRequest.respondWithNewView()")}}
  - : xxx

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
