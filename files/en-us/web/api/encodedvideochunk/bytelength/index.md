---
title: EncodedVideoChunk.byteLength
slug: Web/API/EncodedVideoChunk/byteLength
tags:
  - API
  - Property
  - Reference
  - byteLength
  - EncodedVideoChunk
browser-compat: api.EncodedVideoChunk.byteLength
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`byteLength`** read-only property of the {{domxref("EncodedVideoChunk")}} interface returns the length in bytes of the encoded video data.

## Value

An integer.

## Examples

In the following example the `byteLength` is printed to the console.

```js
const init = {
  type: 'key',
  data: videoBuffer,
  timestamp: 23000000,
  duration: 2000000
};
chunk = EncodedVideoChunk(init);

console.log(chunk.byteLength); //352800
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
