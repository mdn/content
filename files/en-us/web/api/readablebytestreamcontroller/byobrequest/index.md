---
title: ReadableByteStreamController.byobRequest
slug: Web/API/ReadableByteStreamController/byobRequest
page-type: web-api-instance-property
tags:
  - API
  - Property
  - ReadableByteStreamController
  - Reference
  - Streams
  - byobRequest
browser-compat: api.ReadableByteStreamController.byobRequest
---
{{APIRef("Streams")}}

The **`byobRequest`** read-only property of the {{domxref("ReadableByteStreamController")}} interface returns the current BYOB request, or `null` if there are no pending requests.

An underlying byte source should check this property, and use it to write data to the stream if it exists (rather than using {{domxref("ReadableByteStreamController.enqueue()")}}).
This will result in an efficient zero-byte transfer of the data to the consumer.

## Value

A {{domxref("ReadableStreamBYOBRequest")}} object instance, or `null`.

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
