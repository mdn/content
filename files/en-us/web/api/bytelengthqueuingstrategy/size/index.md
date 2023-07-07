---
title: "ByteLengthQueuingStrategy: size() method"
short-title: size()
slug: Web/API/ByteLengthQueuingStrategy/size
page-type: web-api-instance-method
browser-compat: api.ByteLengthQueuingStrategy.size
---

{{APIRef("Streams")}}

The **`size()`** method of the
{{domxref("ByteLengthQueuingStrategy")}} interface returns the given chunk's
`byteLength` property.

## Syntax

```js-nolint
size(chunk)
```

### Parameters

- `chunk`
  - : A chunk of data being passed through the stream.

### Return value

An integer representing the byte length of the given chunk.

## Examples

```js
const queuingStrategy = new ByteLengthQueuingStrategy({ highWaterMark: 1 });

const readableStream = new ReadableStream(
  {
    start(controller) {
      // …
    },
    pull(controller) {
      // …
    },
    cancel(err) {
      console.log("stream error:", err);
    },
  },
  queuingStrategy,
);

const size = queueingStrategy.size(chunk);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ByteLengthQueuingStrategy.ByteLengthQueuingStrategy", "ByteLengthQueuingStrategy()")}} constructor
