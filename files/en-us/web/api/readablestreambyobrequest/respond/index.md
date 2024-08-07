---
title: "ReadableStreamBYOBRequest: respond() method"
short-title: respond()
slug: Web/API/ReadableStreamBYOBRequest/respond
page-type: web-api-instance-method
browser-compat: api.ReadableStreamBYOBRequest.respond
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

The **`respond()`** method of the {{domxref("ReadableStreamBYOBRequest")}} interface is used to signal to the associated [readable byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams) that the specified number of bytes were written into the {{domxref("ReadableStreamBYOBRequest.view")}}.

After this method is called, the {{domxref("ReadableStreamBYOBRequest/view","view")}} will be transferred and no longer modifiable.

## Syntax

```js-nolint
respond(bytesWritten)
```

### Parameters

- `bytesWritten`
  - : The number of bytes written into {{domxref("ReadableStreamBYOBRequest.view")}}.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : The request does not have an associated {{domxref("ReadableByteStreamController")}} or the view buffer is not detached/cannot be transferred into.

## Examples

The code below is taken from the live examples in [Using readable byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams).

The method is called by an underlying byte source as part of making a zero-copy transfer of data to fulfill a pending read request from a consumer.
The underlying source first writes data into the {{domxref("ReadableStreamBYOBRequest.view")}} and then calls this `respond()` method to indicate _how_ much data was copied into the buffer, and cause the data to be transferred to the reader.

The code below shows this case using a hypothetical `readInto()` method to copy data into the view:

```js
const v = controller.byobRequest.view;
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
controller.byobRequest.respond(bytesRead);
```

After the operation the `byobRequest.view` is detached and the request should be discarded.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using readable byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams)
