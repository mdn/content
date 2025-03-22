---
title: "EncodedVideoChunk: byteLength property"
short-title: byteLength
slug: Web/API/EncodedVideoChunk/byteLength
page-type: web-api-instance-property
browser-compat: api.EncodedVideoChunk.byteLength
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`byteLength`** read-only property of the {{domxref("EncodedVideoChunk")}} interface returns the length in bytes of the encoded video data.

## Value

An integer.

## Examples

In the following example the `byteLength` is printed to the console.

```js
const init = {
  type: "key",
  data: videoBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
chunk = EncodedVideoChunk(init);

console.log(chunk.byteLength); //352800
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
