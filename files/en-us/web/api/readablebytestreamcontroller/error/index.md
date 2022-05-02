---
title: ReadableByteStreamController.error()
slug: Web/API/ReadableByteStreamController/error
tags:
  - API
  - Error
  - Experimental
  - Method
  - ReadableByteStreamController
  - Reference
  - Streams
browser-compat: api.ReadableByteStreamController.error
---
{{SeeCompatTable}}{{APIRef("Streams")}}

The **`error()`** method of the
{{domxref("ReadableByteStreamController")}} interface causes any future interactions
with the associated stream to error.

## Syntax

```js
error(e)
```

### Parameters

- _e_
  - : The error you want future interactions to fail with.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the source object is not a `ReadableByteStreamController`, or the stream
    is not readable for some other reason.

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
