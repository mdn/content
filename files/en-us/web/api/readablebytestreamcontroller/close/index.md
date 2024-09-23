---
title: "ReadableByteStreamController: close() method"
short-title: close()
slug: Web/API/ReadableByteStreamController/close
page-type: web-api-instance-method
browser-compat: api.ReadableByteStreamController.close
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

The **`close()`** method of the {{domxref("ReadableByteStreamController")}} interface closes the associated stream.

This might be called by the underlying source when its data source has been exhausted/completed.

> [!NOTE]
> Readers will still be able to read any previously-enqueued chunks from the stream, but once those are read, the stream will become closed.
> However if there is an outstanding and partially written {{domxref("ReadableByteStreamController.byobRequest","byobRequest")}} when `close()` is called, the stream will be errored.

## Syntax

```js-nolint
close()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the source object is not a `ReadableByteStreamController`, it is already closed, or the stream is not readable for some other reason.

## Examples

The example in [Using readable byte streams > Creating a readable socket push byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream) how we might close the stream when there is no more data.

The relevant code is reproduced below.
This relies on the hypothetical `readInto()` method returning 0 bytes only when there is no more data.

```js
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
if (bytesRead === 0) {
  controller.close();
}
```

After calling close, the stream will be closed, and any consumers signalled.
For example if using a {{domxref("ReadableStreamBYOBReader")}} any {{domxref("ReadableStreamBYOBReader.read()","read()")}} requests would resolve with `done: true` and the promise from {{domxref("ReadableStreamBYOBReader.closed")}} would also be resolved.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using readable byte streams](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams)
- {{domxref("ReadableByteStreamController")}}
