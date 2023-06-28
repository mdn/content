---
title: "EncodedAudioChunk: byteLength property"
short-title: byteLength
slug: Web/API/EncodedAudioChunk/byteLength
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.EncodedAudioChunk.byteLength
---

{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`byteLength`** read-only property of the {{domxref("EncodedAudioChunk")}} interface returns the length in bytes of the encoded audio data.

## Value

An integer.

## Examples

In the following example the `byteLength` is printed to the console.

```js
const init = {
  type: "key",
  data: audioBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
chunk = EncodedAudioChunk(init);

console.log(chunk.byteLength); //352800
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
