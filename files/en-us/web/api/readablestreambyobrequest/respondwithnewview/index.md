---
title: ReadableStreamBYOBRequest.respondWithNewView()
slug: Web/API/ReadableStreamBYOBRequest/respondWithNewView
page-type: web-api-instance-method
tags:
  - API
  - Method
  - ReadableStreamBYOBRequest
  - Reference
  - Streams
  - respondWithNewView
browser-compat: api.ReadableStreamBYOBRequest.respondWithNewView
---
{{APIRef("Streams")}}

The **`respondWithNewView()`** method of the {{domxref("ReadableStreamBYOBRequest")}} interface specifies a new view that the consumer of the associated readable byte stream should write to instead of {{domxref("ReadableStreamBYOBRequest.view")}}.

The new view must be an {{domxref("ArrayBufferView")}} that provides a view onto the same backing memory region as {{domxref("ReadableStreamBYOBRequest.view")}}.
After this method is called, the view that was passed into the method will be transferred and no longer modifiable.

The method is intended for use cases where an underlying byte source needs to transfer a `byobRequest.view` internally before finishing its response.
For example, the source may transfer the BYOB view to a separate worker thread, and wait for the worker to transfer it back once it has been filled.

## Syntax

```js
respondWithNewView(view)
```

### Parameters

- `view`
  - : A {{domxref("ArrayBufferView")}} that the consumer of the associated readable byte stream should write to instead of {{domxref("ReadableStreamBYOBRequest.view")}}.

    This must be a view onto the same backing memory region as {{domxref("ReadableStreamBYOBRequest.view")}} and occupy the same or less memory.
    Specifically, it must be either the view's buffer or a transferred version, must have the same `byteOffset`, and a `byteLength` (number of bytes written) that is less than or equal to that of the view.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the source object is not a `ReadableStreamBYOBRequest`, or there is no associated controller, or the associated internal array buffer is non-existent or detached.
    It may also be thrown if the `view` is zero-length when there is an active reader, or non-zero when called on a closed stream.

- {{jsxref("RangeError")}}
  - : Thrown if the new `view` does not match the backing memory region of {{domxref("ReadableStreamBYOBRequest.view")}}.
    For example, it is not the same buffer (or a transferred version), has a different `byteOffset`, or is larger than the memory available to the backing view.

## Examples

The view to be transferred must be of the same type as {{domxref("ReadableStreamBYOBRequest.view")}}, have the same underlying buffer and byte offset, and be the same or smaller byteLength.

For example, we might define the view and respond as shown below:

```js
const v = controller.byobRequest.view;
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
byobRequest.respondWithNewView(byobRequest.view.subarray(v.byteOffset, bytesRead));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using readable byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams)
