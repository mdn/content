---
title: "CountQueuingStrategy: size() method"
short-title: size()
slug: Web/API/CountQueuingStrategy/size
page-type: web-api-instance-method
browser-compat: api.CountQueuingStrategy.size
---

{{APIRef("Streams")}}

The **`size()`** method of the
{{domxref("CountQueuingStrategy")}} interface always returns `1`, so that the
total queue size is a count of the number of chunks in the queue.

## Syntax

```js-nolint
size()
```

### Parameters

None.

### Return value

`1`.

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

- {{domxref("CountQueuingStrategy.CountQueuingStrategy", "CountQueuingStrategy()")}} constructor
