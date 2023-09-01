---
title: "ReadableStreamDefaultController: error() method"
short-title: error()
slug: Web/API/ReadableStreamDefaultController/error
page-type: web-api-instance-method
browser-compat: api.ReadableStreamDefaultController.error
---

{{APIRef("Streams")}}

The **`error()`** method of the
{{domxref("ReadableStreamDefaultController")}} interface causes any future interactions
with the associated stream to error.

> **Note:** The `error()` method can be called
> more than once, and can be called when the stream is not readable.

## Syntax

```js-nolint
error(e)
```

### Parameters

- `e`
  - : The error you want future interactions to fail with.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the source object is not a `ReadableStreamDefaultController`.

## Examples

The [A readable stream with an underlying push source and backpressure support](https://streams.spec.whatwg.org/#example-rs-push-backpressure) example in the spec
provides a good example of using
{{domxref("ReadablestreamDefaultController.desiredSize")}} to manually detect when the
stream is full and apply backpressure, and also of using `error()` to
manually trigger a stream error if another part of the system it relies on fails.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams)
- {{domxref("ReadableStreamDefaultController")}}
