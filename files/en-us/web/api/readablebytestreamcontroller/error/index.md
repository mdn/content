---
title: ReadableByteStreamController.error()
slug: Web/API/ReadableByteStreamController/error
page-type: web-api-instance-method
tags:
  - API
  - Error
  - Method
  - ReadableByteStreamController
  - Reference
  - Streams
browser-compat: api.ReadableByteStreamController.error
---
{{APIRef("Streams")}}

The **`error()`** method of the {{domxref("ReadableByteStreamController")}} interface causes any future interactions with the associated stream to error with the specified reason.

This is commonly called by an underlying source to surface an error from the interface where it gets its data (such as a file-read or socket error).
It can also be called from elsewhere to trigger a stream error, for example if another part of the system that the stream relies on fails.

## Syntax

```js
error(errorObject)
```

### Parameters

- `errorObject`
  - : Any object that you want future interactions to fail with.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the source object is not a `ReadableByteStreamController`, or the stream is not readable for some other reason.

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
