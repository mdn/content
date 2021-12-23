---
title: ReadableStreamDefaultController.error()
slug: Web/API/ReadableStreamDefaultController/error
tags:
  - API
  - Error
  - Method
  - ReadableStreamDefaultController
  - Reference
  - Streams
browser-compat: api.ReadableStreamDefaultController.error
---
{{APIRef("Streams")}}

The **`error()`** method of the
{{domxref("ReadableStreamDefaultController")}} interface causes any future interactions
with the associated stream to error.

> **Note:** The `error()` method can be called
> more than once, and can be called when the stream is not readable.

## Syntax

```js
readableStreamDefaultController.error(e);
```

### Parameters

- _e_
  - : The error you want future interactions to fail with.

### Return value

`undefined`.

### Exceptions

- TypeError
  - : The source object is not a `ReadableStreamDefaultController`, or the
    stream is not readable for some other reason.

## Examples

The [A readable
stream with an underlying push source and backpressure support](https://streams.spec.whatwg.org/#example-rs-push-backpressure) example in the spec
provides a good example of using
{{domxref("ReadablestreamDefaultController.desiredSize")}} to manually detect when the
stream is full and apply backpressure, and also of using `error()` to
manually trigger a stream error if another part of the system it relies on fails.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
