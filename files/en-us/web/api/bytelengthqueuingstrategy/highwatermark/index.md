---
title: "ByteLengthQueuingStrategy: highWaterMark property"
short-title: highWaterMark
slug: Web/API/ByteLengthQueuingStrategy/highWaterMark
page-type: web-api-instance-property
browser-compat: api.ByteLengthQueuingStrategy.highWaterMark
---

{{APIRef("Streams")}}

The read-only **`ByteLengthQueuingStrategy.highWaterMark`** property returns the total number of bytes that can be contained in the internal queue before [backpressure](/en-US/docs/Web/API/Streams_API/Concepts#backpressure) is applied.

> **Note:** Unlike [`CountQueuingStrategy()`](/en-US/docs/Web/API/CountQueuingStrategy/CountQueuingStrategy) where the `highWaterMark` property specifies a simple count of the number of chunks, with `ByteLengthQueuingStrategy()`, the `highWaterMark` parameter specifies a number of _bytes_ — specifically, given a stream of chunks, how many bytes worth of those chunks (rather than a count of how many of those chunks) can be contained in the internal queue before backpressure is applied.

## Values

An integer.

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
console.log(`highWaterMark value: ${queuingStrategy.highWaterMark}$`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ByteLengthQueuingStrategy.ByteLengthQueuingStrategy", "ByteLengthQueuingStrategy()")}} constructor
