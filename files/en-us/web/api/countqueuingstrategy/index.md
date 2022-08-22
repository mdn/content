---
title: CountQueuingStrategy
slug: Web/API/CountQueuingStrategy
page-type: web-api-interface
tags:
  - API
  - CountQueuingStrategy
  - Interface
  - Reference
  - Streams
browser-compat: api.CountQueuingStrategy
---
{{APIRef("Streams")}}

The **`CountQueuingStrategy`** interface of the [Streams API](/en-US/docs/Web/API/Streams_API) provides a built-in chunk counting queuing strategy that can be used when constructing streams.

## Constructor

- {{domxref("CountQueuingStrategy.CountQueuingStrategy", "CountQueuingStrategy()")}}
  - : Creates a new `CountQueuingStrategy` object instance.

## Properties

None.

## Methods

- {{domxref("CountQueuingStrategy.size()")}}
  - : Returns `1`.

## Examples

```js
const queueingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });

const writableStream = new WritableStream({
  // Implement the sink
  write(chunk) {
    // …
  },
  close() {
    // …
  },
  abort(err) {
    console.log("Sink error:", err);
  }
}, queueingStrategy);

const size = queueingStrategy.size();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
