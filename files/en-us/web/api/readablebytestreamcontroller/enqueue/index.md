---
title: "ReadableByteStreamController: enqueue() method"
short-title: enqueue()
slug: Web/API/ReadableByteStreamController/enqueue
page-type: web-api-instance-method
browser-compat: api.ReadableByteStreamController.enqueue
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

The **`enqueue()`** method of the {{domxref("ReadableByteStreamController")}} interface enqueues a given chunk on the associated readable byte stream (the chunk is copied into the stream's internal queues).

This should only be used to transfer data to the queue when {{domxref("ReadableByteStreamController.byobRequest","byobRequest")}} is `null`.

## Syntax

```js-nolint
enqueue(chunk)
```

### Parameters

- `chunk`
  - : The chunk to enqueue.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the source object is not a `ReadableByteStreamController`, or the stream cannot be read for some other reason, or the chunk is not an object, or the chunk's internal array buffer is non-existent, zero-length, or detached.
    It is also thrown if the stream has been closed.

## Examples

The example in [Using readable byte streams > Creating a readable socket push byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream) shows how you can use `enqueue()` to copy data to the stream if there is no outstanding {{domxref("ReadableByteStreamController.byobRequest","byobRequest")}}.
If there is a `byobRequest` then it should be used!

The code below shows data being read into an `ArrayBuffer` using a "hypothetical" `socket.readInto()` method and then enqueued (but only if data was actually copied):

```js
const buffer = new ArrayBuffer(DEFAULT_CHUNK_SIZE);
bytesRead = socket.readInto(buffer, 0, DEFAULT_CHUNK_SIZE);
if (bytesRead === 0) {
  controller.close();
} else {
  controller.enqueue(new Uint8Array(buffer, 0, bytesRead));
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using readable byte streams](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams)
- {{domxref("ReadableByteStreamController")}}
