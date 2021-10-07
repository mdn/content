---
title: EncodedVideoChunk.type
slug: Web/API/EncodedVideoChunk/type
tags:
  - API
  - Property
  - Reference
  - type
  - EncodedVideoChunk
browser-compat: api.EncodedVideoChunk.type
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`type`** read-only property of the {{domxref("EncodedVideoChunk")}} interface returns a value indicating whether the video chunk is a key chunk, which does not rely on other frames for decoding.

### Value

A string, one of:

- `"key"`
  - : The data is a key chunk.
- `"delta"`
  - : The data is not a key chunk.

## Examples

In the following example the `type` is printed to the console.

```js
const init = {
  type: 'key',
  data: videoBuffer,
  timestamp: 23000000,
  duration: 2000000
};
chunk = EncodedVideoChunk(init);

console.log(chunk.type); //"key"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
