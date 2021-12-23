---
title: EncodedAudioChunk.timestamp
slug: Web/API/EncodedAudioChunk/timestamp
tags:
  - API
  - Property
  - Reference
  - timestamp
  - EncodedAudioChunk
browser-compat: api.EncodedAudioChunk.timestamp
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`timestamp`** read-only property of the {{domxref("EncodedAudioChunk")}} interface returns an integer indicating the timestamp of the audio in microseconds.

### Value

An integer.

## Examples

In the following example the `timestamp` is printed to the console.

```js
const init = {
  type: 'key',
  data: audioBuffer,
  timestamp: 23000000,
  duration: 2000000
};
chunk = EncodedAudioChunk(init);

console.log(chunk.timestamp); //23000000
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}


