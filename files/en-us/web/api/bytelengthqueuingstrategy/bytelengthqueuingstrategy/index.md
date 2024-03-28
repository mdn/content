---
title: "ByteLengthQueuingStrategy: ByteLengthQueuingStrategy() constructor"
short-title: ByteLengthQueuingStrategy()
slug: Web/API/ByteLengthQueuingStrategy/ByteLengthQueuingStrategy
page-type: web-api-constructor
browser-compat: api.ByteLengthQueuingStrategy.ByteLengthQueuingStrategy
---

{{APIRef("Streams")}}

The **`ByteLengthQueuingStrategy()`**
constructor creates and returns a `ByteLengthQueuingStrategy` object
instance.

## Syntax

```js-nolint
new ByteLengthQueuingStrategy(highWaterMark)
```

### Parameters

An object with the following property:

- `highWaterMark`

  - : The total number of bytes that can be contained in the internal queue before backpressure is applied.

    Unlike [`CountQueuingStrategy()`](/en-US/docs/Web/API/CountQueuingStrategy/CountQueuingStrategy) where the `highWaterMark` parameter specifies a simple count of the number of chunks, with `ByteLengthQueuingStrategy()`, the `highWaterMark` parameter specifies a number of _bytes_ — specifically, given a stream of chunks, how many bytes worth of those chunks (rather than a count of how many of those chunks) can be contained in the internal queue before backpressure is applied.

### Return value

An instance of the {{domxref("ByteLengthQueuingStrategy")}} object.

### Exceptions

None.

## Examples

```js
const queuingStrategy = new ByteLengthQueuingStrategy({
  highWaterMark: 1 * 1024,
});

const readableStream = new ReadableStream(
  {
    start(controller) {
      // …
    },
    pull(controller) {
      // …
    },
    cancel(err) {
      console.log("stream error:", err);
    },
  },
  queuingStrategy,
);

const size = queuingStrategy.size(chunk);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ByteLengthQueuingStrategy")}} interface
