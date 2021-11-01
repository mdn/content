---
title: ReadableStreamBYOBRequest
slug: Web/API/ReadableStreamBYOBRequest
tags:
  - API
  - Experimental
  - Fetch
  - Interface
  - ReadableStreamBYOBRequest
  - Reference
  - Steams
browser-compat: api.ReadableStreamBYOBRequest
---
{{APIRef("Streams")}}{{SeeCompatTable}}{{draft}}

The **`ReadableStreamBYOBRequest`** interface of the [Streams API](/en-US/docs/Web/API/Streams_API) represents a pull request into a {{domxref("ReadableByteStreamController")}} view.

A view, as mentioned below, refers to a typed array representing the destination region to which the associated `ReadableByteStreamController` controller can write generated data.

## Constructor

None. `ReadableStreamBYOBRequest` instance is created automatically by `ReadableByteStreamController` as needed.

## Properties

- {{domxref("ReadableStreamBYOBRequest.view")}} {{readonlyInline}}
  - : Returns the current view.

## Methods

- {{domxref("ReadableStreamBYOBRequest.respond()")}}
  - : xxx
- {{domxref("ReadableStreamBYOBRequest.respondWithNewView()")}}
  - : xxx

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
