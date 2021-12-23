---
title: EncodedAudioChunk.EncodedAudioChunk()
slug: Web/API/EncodedAudioChunk/EncodedAudioChunk
tags:
  - API
  - Constructor
  - Reference
  - EncodedAudioChunk
browser-compat: api.EncodedAudioChunk.EncodedAudioChunk
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`EncodedAudioChunk()`** constructor creates a new {{domxref("EncodedAudioChunk")}} object representing a chunk of encoded audio.

## Syntax

```js
new EncodedAudioChunk(init);
```

### Parameters

- `init`
  - : An object containing the following members:
    - `type`
      - : Indicates if the chunk is a key chunk that does not rely on other frames for encoding. One of:
        - `"key"`
          - : The data is a key chunk.
        - `"delta"`
          - : The data is not a key chunk.
    - `timestamp`
      - : An integer representing the timestamp of the audio in microseconds.
    - `duration`
      - : An integer representing the length of the audio in microseconds.
    - `data`
      - : A {{domxref("BufferSource")}} containing the audio data.


## Examples

In the following example a new `EncodedAudioChunk` is created.

```js
const init = {
  type: 'key',
  data: audioBuffer,
  timestamp: 23000000,
  duration: 2000000
};
chunk = EncodedAudioChunk(init);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

