---
title: "ReadableByteStreamController: byobRequest property"
short-title: byobRequest
slug: Web/API/ReadableByteStreamController/byobRequest
page-type: web-api-instance-property
browser-compat: api.ReadableByteStreamController.byobRequest
---

{{APIRef("Streams")}}

The **`byobRequest`** read-only property of the {{domxref("ReadableByteStreamController")}} interface returns the current BYOB request, or `null` if there are no pending requests.

An underlying byte source should check this property, and use it to write data to the stream if it exists (rather than using {{domxref("ReadableByteStreamController.enqueue()")}}).
This will result in an efficient zero-byte transfer of the data to the consumer.

## Value

A {{domxref("ReadableStreamBYOBRequest")}} object instance, or `null`.

## Examples

The example in [Using readable byte streams > Creating a readable socket push byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream) shows how you use a `byobRequest` to transfer data (if it exists), or otherwise copy the data to the stream's internal queues using {{domxref("ReadableByteStreamController.enqueue()")}}.

The relevant code is reproduced below.
If the `byobRequest` exists, data is read into {{domxref("ReadableStreamBYOBRequest.view","controller.byobRequest.view")}}, and then {{domxref("ReadableStreamBYOBRequest.respond()")}} is called to signal the amount of data that is ready to transfer.

```js
if (controller.byobRequest) {
  const v = controller.byobRequest.view;
  bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
  if (bytesRead === 0) {
    controller.close();
  }
  controller.byobRequest.respond(bytesRead);
} else {
  // Write to data using enqueue().
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using readable byte streams](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams)
- {{domxref("ReadableByteStreamController")}}
