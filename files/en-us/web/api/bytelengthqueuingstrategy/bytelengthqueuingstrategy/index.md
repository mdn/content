---
title: ByteLengthQueuingStrategy()
slug: Web/API/ByteLengthQueuingStrategy/ByteLengthQueuingStrategy
page-type: web-api-constructor
tags:
  - API
  - ByteLengthQueuingStrategy
  - Constructor
  - Reference
  - Streams
browser-compat: api.ByteLengthQueuingStrategy.ByteLengthQueuingStrategy
---
{{APIRef("Streams")}}

The **`ByteLengthQueuingStrategy()`**
constructor creates and returns a `ByteLengthQueuingStrategy` object
instance.

## Syntax

```js
new ByteLengthQueuingStrategy(highWaterMark)
```

### Parameters

- `highWaterMark`
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
    // …
  },
  pull(controller) {
    // …
  },
  cancel(err) {
    console.log("stream error:", err);
  }
}, queuingStrategy);

const size = queuingStrategy.size(chunk);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
