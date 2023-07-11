---
title: "CountQueuingStrategy: CountQueuingStrategy() constructor"
short-title: CountQueuingStrategy()
slug: Web/API/CountQueuingStrategy/CountQueuingStrategy
page-type: web-api-constructor
browser-compat: api.CountQueuingStrategy.CountQueuingStrategy
---

{{APIRef("Streams")}}

The **`CountQueuingStrategy()`** constructor
creates and returns a `CountQueuingStrategy` object instance.

## Syntax

```js-nolint
new CountQueuingStrategy(highWaterMark)
```

### Parameters

An object with the following property:

- `highWaterMark`
  - : The total number of chunks that can be contained in the internal
    queue before backpressure is applied.

### Return value

An instance of the {{domxref("CountQueuingStrategy")}} object.

### Exceptions

None.

## Examples

```js
const queuingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });

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
  queuingStrategy,
);

const size = queuingStrategy.size();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CountQueuingStrategy")}}
