---
title: ByteLengthQueuingStrategy.size()
slug: Web/API/ByteLengthQueuingStrategy/size
tags:
  - API
  - ByteLengthQueuingStrategy
  - Experimental
  - Property
  - Reference
  - Streams
  - size
browser-compat: api.ByteLengthQueuingStrategy.size
---
{{draft}}{{SeeCompatTable}}{{APIRef("Streams")}}

The **`size`** property of the {{domxref("ByteLengthQueuingStrategy")}} interface a reference to the `size` function passed in the{{domxref("ByteLengthQueuingStrategy.ByteLengthQueuingStrategy", "ByteLengthQueuingStrategy()")}} constructor.

## Syntax

```js
var size = byteLengthQueuingStrategy.size(chunk);
```

### Parameters

- chunk
  - : A chunk of data being passed through the stream.

### Return value

An integer representing the byte length of the given chunk.

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

var size = queueingStrategy.size(chunk);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
