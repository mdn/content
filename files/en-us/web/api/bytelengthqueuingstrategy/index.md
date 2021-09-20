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

The **`ByteLengthQueuingStrategy`** interface of the [Streams API](/en-US/docs/Web/API/Streams_API) provides a built-in byte length queuing strategy that can be used when constructing streams.

## Constructor

- {{domxref("ByteLengthQueuingStrategy.ByteLengthQueuingStrategy", "ByteLengthQueuingStrategy()")}}
  - : Creates a new `ByteLengthQueuingStrategy` object instance.

## Properties

None.

## Methods

- {{domxref("ByteLengthQueuingStrategy.size()")}}
  - : Returns the given chunk’s `byteLength` property.

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
