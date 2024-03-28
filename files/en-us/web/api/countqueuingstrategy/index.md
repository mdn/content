---
title: CountQueuingStrategy
slug: Web/API/CountQueuingStrategy
page-type: web-api-interface
browser-compat: api.CountQueuingStrategy
---

{{APIRef("Streams")}}

The **`CountQueuingStrategy`** interface of the [Streams API](/en-US/docs/Web/API/Streams_API) provides a built-in chunk counting queuing strategy that can be used when constructing streams.

## Constructor

- {{domxref("CountQueuingStrategy.CountQueuingStrategy", "CountQueuingStrategy()")}}
  - : Creates a new `CountQueuingStrategy` object instance.

## Instance properties

- {{domxref("CountQueuingStrategy.highWaterMark")}} {{ReadOnlyInline}}
  - : The total number of chunks that can be contained in the internal queue before [backpressure](/en-US/docs/Web/API/Streams_API/Concepts#backpressure) is applied.

## Instance methods

- {{domxref("CountQueuingStrategy.size()")}}
  - : Always returns `1`.

## Examples

```js
const queueingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });

const writableStream = new WritableStream(
  {
    // Implement the sink
    write(chunk) {
      // …
    },
    close() {
      // …
    },
    abort(err) {
      console.log("Sink error:", err);
    },
  },
  queueingStrategy,
);

const size = queueingStrategy.size();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Streams API", "Streams API", "", "nocode")}}
- {{domxref("CountQueuingStrategy.CountQueuingStrategy", "CountQueuingStrategy()")}} constructor
- [Internal queues and queuing strategies](/en-US/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies)
