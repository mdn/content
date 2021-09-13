---
title: ReadableByteStreamController.close()
slug: Web/API/ReadableByteStreamController/close
tags:
  - API
  - Experimental
  - Method
  - ReadableByteStreamController
  - Reference
  - Streams
  - close
browser-compat: api.ReadableByteStreamController.close
---
{{draft}}{{SeeCompatTable}}{{APIRef("Streams")}}

The **`close()`** method of the
{{domxref("ReadableByteStreamController")}} interface closes the associated stream.

> **Note:** Readers will still be able to read any previously-enqueued
> chunks from the stream, but once those are read, the stream will become closed.

## Syntax

```js
readableByteStreamController.close();
```

### Parameters

None.

### Return value

`undefined`.

### Exceptions

- TypeError
  - : The source object is not a `ReadableByteStreamController`, or the stream
    is not readable for some other reason.

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
