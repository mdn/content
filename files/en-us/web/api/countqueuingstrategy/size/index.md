---
title: CountQueuingStrategy.size()
slug: Web/API/CountQueuingStrategy/size
tags:
  - API
  - CountQueuingStrategy
  - Experimental
  - Method
  - Reference
  - Streams
  - size
browser-compat: api.CountQueuingStrategy.size
---
{{draft}}{{SeeCompatTable}}{{APIRef("Streams")}}

The **`size()`** method of the
{{domxref("CountQueuingStrategy")}} interface always returns `1`, so that the
total queue size is a count of the number of chunks in the queue.

## Syntax

```js
var size = countQueuingStrategy.size();
```

### Parameters

None.

### Return value

`1`.

## Examples

```js
const queuingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });

const writableStream = new WritableStream({
  // Implement the sink
  write(chunk) {
    ...
  },
  close() {
    ...
  },
  abort(err) {
    console.log("Sink error:", err);
  }
}, queuingStrategy);

var size = queuingStrategy.size();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
