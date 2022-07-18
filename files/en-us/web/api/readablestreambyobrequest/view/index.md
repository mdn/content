---
title: ReadableStreamBYOBRequest.view
slug: Web/API/ReadableStreamBYOBRequest/view
page-type: web-api-instance-property
tags:
  - API
  - Property
  - ReadableStreamBYOBRequest
  - Reference
  - Streams
  - View
browser-compat: api.ReadableStreamBYOBRequest.view
---
{{APIRef("Streams")}}

The **`view`** getter property of the {{domxref("ReadableStreamBYOBRequest")}} interface returns the current view.

## Value

A [typed array](/en-US/docs/Web/JavaScript/Typed_arrays) representing the destination region to which the controller can write generated data.

`null` if the request has already been responded to, by calling {{domxref("ReadableStreamBYOBRequest.respond()")}} or {{domxref("ReadableStreamBYOBRequest.respondWithNewView()")}}.

## Examples

See the examples in {{domxref("ReadableStreamBYOBRequest")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using readable byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams)
