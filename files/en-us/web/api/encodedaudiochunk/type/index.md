---
title: EncodedAudioChunk.type
slug: Web/API/EncodedAudioChunk/type
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - type
  - EncodedAudioChunk
  - Experimental
browser-compat: api.EncodedAudioChunk.type
---
{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`type`** read-only property of the {{domxref("EncodedAudioChunk")}} interface returns a value indicating whether the audio chunk is a key chunk, which does not relying on other frames for decoding.

## Value

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
  data: audioBuffer,
  timestamp: 23000000,
  duration: 2000000
};
chunk = EncodedAudioChunk(init);

console.log(chunk.type); //"key"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
