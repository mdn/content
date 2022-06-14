---
title: ReadableByteStreamController.enqueue()
slug: Web/API/ReadableByteStreamController/enqueue
page-type: web-api-instance-method
tags:
  - API
  - Method
  - ReadableByteStreamController
  - Reference
  - Streams
  - enqueue
browser-compat: api.ReadableByteStreamController.enqueue
---
{{APIRef("Streams")}}

The **`enqueue()`** method of the {{domxref("ReadableByteStreamController")}} interface enqueues a given chunk on the associated stream (the chunk is copied into the stream's internal queues).

This should only be used to transfer data to the queue when {{domxref("ReadableByteStreamController.byobRequest","byobRequest")}} is `null`.

## Syntax

```js
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

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
