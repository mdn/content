---
title: ReadableByteStreamController.close()
slug: Web/API/ReadableByteStreamController/close
page-type: web-api-instance-method
tags:
  - API
  - Method
  - ReadableByteStreamController
  - Reference
  - Streams
  - close
browser-compat: api.ReadableByteStreamController.close
---
{{APIRef("Streams")}}

The **`close()`** method of the {{domxref("ReadableByteStreamController")}} interface closes the associated stream.

This might be called by the underlying source when its data source has been exhausted/completed.

> **Note:** Readers will still be able to read any previously-enqueued chunks from the stream, but once those are read, the stream will become closed.
> However if there is an outstanding and partially written {{domxref("ReadableByteStreamController.byobRequest","byobRequest")}} when `close()` is called, the stream will be errored.

## Syntax

```js
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

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
