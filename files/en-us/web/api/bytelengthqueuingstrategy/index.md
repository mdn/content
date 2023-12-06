---
title: ByteLengthQueuingStrategy
slug: Web/API/ByteLengthQueuingStrategy
page-type: web-api-interface
browser-compat: api.ByteLengthQueuingStrategy
---

{{APIRef("Streams")}}

The **`ByteLengthQueuingStrategy`** interface of the [Streams API](/en-US/docs/Web/API/Streams_API) provides a built-in byte length queuing strategy that can be used when constructing streams.

## Constructor

- {{domxref("ByteLengthQueuingStrategy.ByteLengthQueuingStrategy", "ByteLengthQueuingStrategy()")}}
  - : Creates a new `ByteLengthQueuingStrategy` object instance.

## Instance properties

- {{domxref("ByteLengthQueuingStrategy.highWaterMark")}} {{ReadOnlyInline}}
  - : The total number of bytes that can be contained in the internal queue before [backpressure](/en-US/docs/Web/API/Streams_API/Concepts#backpressure) is applied.

## Instance methods

- {{domxref("ByteLengthQueuingStrategy.size()")}}
  - : Returns the given chunk's `byteLength` property.

## Examples

```js
const queueingStrategy = new ByteLengthQueuingStrategy({ highWaterMark: 1024 });

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
  queueingStrategy,
);

const size = queueingStrategy.size(chunk);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [Internal queues and queuing strategies](/en-US/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies)
- {{domxref("ByteLengthQueuingStrategy.ByteLengthQueuingStrategy", "ByteLengthQueuingStrategy()")}} constructor
