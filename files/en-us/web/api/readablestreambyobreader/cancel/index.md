---
title: ReadableStreamBYOBReader.cancel()
slug: Web/API/ReadableStreamBYOBReader/cancel
page-type: web-api-instance-method
tags:
  - API
  - Experimental
  - Method
  - ReadableStreamBYOBReader
  - Reference
  - Streams
  - cancel
browser-compat: api.ReadableStreamBYOBReader.cancel
---
{{SeeCompatTable}}{{APIRef("Streams")}}

The **`cancel()`** method of the
{{domxref("ReadableStreamBYOBReader")}} interface returns a {{jsxref("Promise")}} that resolves when the stream is canceled. Calling this method signals a loss of interest in the stream by a consumer.

> **Note:** If the reader is active, the `cancel()` method
> behaves the same as that for the associated stream
> ({{domxref("ReadableStream.cancel()")}}).

## Syntax

```js
cancel()
cancel(reason)
```

### Parameters

- `reason` {{optional_inline}}
  - : A human-readable reason for the cancellation. The underlying source may or may not use it.

### Return value

A {{jsxref("Promise")}}, which fulfills with the value given in the `reason`
parameter.

### Exceptions

- {{jsxref("TypeError")}}
  - : The source object is not a `ReadableStreamBYOBReader`, or the stream has
    no owner.

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
