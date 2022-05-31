---
title: ReadableStreamBYOBRequest.respond()
slug: Web/API/ReadableStreamBYOBRequest/respond
page-type: web-api-instance-method
tags:
  - API
  - Method
  - ReadableStreamBYOBRequest
  - Reference
  - Streams
  - respond
browser-compat: api.ReadableStreamBYOBRequest.respond
---
{{APIRef("Streams")}}

The **`respond()`** method of the {{domxref("ReadableStreamBYOBRequest")}} interface is used to signal to the associated readable byte stream that the specified number of bytes were written into the {{domxref("ReadableStreamBYOBRequest.view")}}.

After this method is called, the {{domxref("ReadableStreamBYOBRequest/view","view")}} will be transferred and no longer modifiable.

## Syntax

```js
respond(bytesWritten)
```

### Parameters

- `bytesWritten`
  - : The number of bytes written into {{domxref("ReadableStreamBYOBRequest.view")}}.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `TypeError`
  - : The request does not have an associated {{domxref("ReadableByteStreamController")}} or the view buffer is not detached/cannot be transferred into.

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
