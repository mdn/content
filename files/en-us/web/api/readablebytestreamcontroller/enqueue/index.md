---
title: ReadableByteStreamController.enqueue()
slug: Web/API/ReadableByteStreamController/enqueue
tags:
  - API
  - Experimental
  - Method
  - ReadableByteStreamController
  - Reference
  - Streams
  - enqueue
browser-compat: api.ReadableByteStreamController.enqueue
---
{{SeeCompatTable}}{{APIRef("Streams")}}

The **`enqueue()`** method of the
{{domxref("ReadableByteStreamController")}} interface enqueues a given chunk in the
associated stream.

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
  - : Thrown if the source object is not a `ReadableByteStreamController`, or the stream
    cannot be read for some other reason, or the chunk is not an object, or the chunk's
    internal array buffer is non-existent or detached.

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
