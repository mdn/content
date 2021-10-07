---
title: EncodedAudioChunk.duration
slug: Web/API/EncodedAudioChunk/duration
tags:
  - API
  - Property
  - Reference
  - duration
  - EncodedAudioChunk
browser-compat: api.EncodedAudioChunk.duration
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`duration`** read-only property of the {{domxref("EncodedAudioChunk")}} interface returns an integer indicating the duration of the audio in microseconds.

### Value

An integer.

## Examples

In the following example the `duration` is printed to the console.

```js
const init = {
  type: 'key',
  data: audioBuffer,
  timestamp: 23000000,
  duration: 2000000
};
chunk = EncodedAudioChunk(init);

console.log(chunk.duration); //2000000
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}


