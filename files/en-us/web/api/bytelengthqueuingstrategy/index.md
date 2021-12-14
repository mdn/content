---
title: ByteLengthQueuingStrategy
slug: Web/API/ByteLengthQueuingStrategy
tags:
  - API
  - ByteLengthQueuingStrategy
  - Experimental
  - Interface
  - Reference
  - Streams
browser-compat: api.ByteLengthQueuingStrategy
---
{{SeeCompatTable}}{{APIRef("Streams")}}

The **`ByteLengthQueuingStrategy`** interface of the [Streams API](/en-US/docs/Web/API/Streams_API) provides a built-in byte length queuing strategy that can be used when constructing streams.

## Constructor

- {{domxref("ByteLengthQueuingStrategy.ByteLengthQueuingStrategy", "ByteLengthQueuingStrategy()")}}
  - : Creates a new `ByteLengthQueuingStrategy` object instance.

## Properties

- {{domxref("ByteLengthQueuingStrategy.size")}}
  - : Returns a reference to the `size` function passed in the object's constructor.

- {{comxref("ByteLengthQueuingStrategy.highWaterMark")}}
  - : Returns the total number of chunks that can be in the streaming queue before backpressure will be applied. This is the value suplied by the `highWaterMark` property passed to the object's constructor.

## Methods

None.

## Examples

```js
const queueingStrategy = new ByteLengthQueuingStrategy({ highWaterMark: 1 });

const readableStream = new ReadableStream({
  start(controller) {
    ...
  },
  pull(controller) {
    ...
  },
  cancel(err) {
    console.log("stream error:", err);
  }
}, queueingStrategy);

var size = queueingStrategy.size(chunk);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
