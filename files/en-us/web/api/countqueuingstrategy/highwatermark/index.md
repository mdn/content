---
title: "CountQueuingStrategy: highWaterMark property"
short-title: highWaterMark
slug: Web/API/CountQueuingStrategy/highWaterMark
page-type: web-api-instance-property
browser-compat: api.CountQueuingStrategy.highWaterMark
---

{{APIRef("Streams")}}

The read-only **`CountQueuingStrategy.highWaterMark`** property returns the total number of chunks that can be contained in the internal queue before backpressure is applied.

## Values

An integer representing a number of chunks.

## Examples

```js
const queueingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });

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

- {{domxref("CountQueuingStrategy.CountQueuingStrategy", "CountQueuingStrategy()")}} constructor
