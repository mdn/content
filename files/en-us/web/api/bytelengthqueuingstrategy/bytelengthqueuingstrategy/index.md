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
var byteLengthQueuingStrategy = new ByteLengthQueuingStrategy(QueuingStrategy);
```

### Parameters

- `QueuingStrategy`
  - : An object with the following properties:
    - highWaterMark
      - : A non-negative integer defining the total number of chunks that can be contained in the internal queue before backpressure is applied.
    - size
      - : A reference to an script- or app-defined function that computes and returns the finite non-negative size of the given chunk value. Typically, this function just returns `chucnk.length`. For readable byte streams, this function is not used. This function must not cause any side effects.

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
