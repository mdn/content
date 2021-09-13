---
title: ByteLengthQueuingStrategy()
slug: Web/API/ByteLengthQueuingStrategy/ByteLengthQueuingStrategy
tags:
  - API
  - ByteLengthQueuingStrategy
  - Constructor
  - Experimental
  - Reference
  - Streams
browser-compat: api.ByteLengthQueuingStrategy.ByteLengthQueuingStrategy
---
{{draft}}{{SeeCompatTable}}{{APIRef("Streams")}}

The **`ByteLengthQueuingStrategy()`**
constructor creates and returns a `ByteLengthQueuingStrategy` object
instance.

## Syntax

```js
var byteLengthQueuingStrategy = new ByteLengthQueuingStrategy({highWaterMark});
```

### Parameters

- {highWaterMark}
  - : An object containing a `highWaterMark` property. This is a non-negative
    integer defining the total number of chunks that can be contained in the internal
    queue before backpressure is applied.

### Return value

An instance of the {{domxref("ByteLengthQueuingStrategy")}} object.

### Exceptions

None.

## Examples

```js
const queuingStrategy = new ByteLengthQueuingStrategy({ highWaterMark: 1 });

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
}, queuingStrategy);

var size = queuingStrategy.size(chunk);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
