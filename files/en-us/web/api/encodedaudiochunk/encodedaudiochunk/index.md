---
title: "EncodedAudioChunk: EncodedAudioChunk() constructor"
short-title: EncodedAudioChunk()
slug: Web/API/EncodedAudioChunk/EncodedAudioChunk
page-type: web-api-constructor
browser-compat: api.EncodedAudioChunk.EncodedAudioChunk
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`EncodedAudioChunk()`** constructor creates a new {{domxref("EncodedAudioChunk")}} object representing a chunk of encoded audio.

## Syntax

```js-nolint
new EncodedAudioChunk(options)
```

### Parameters

- `options`
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
      - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}} containing the audio data.
    - `transfer`
      - : An array of {{jsxref("ArrayBuffer")}}s that `EncodedAudioChunk` will detach and take ownership of. If the array contains the {{jsxref("ArrayBuffer")}} backing `data`, `EncodedAudioChunk` will use that buffer directly instead of copying from it.

## Examples

In the following example a new `EncodedAudioChunk` is created.

```js
const init = {
  type: "key",
  data: audioBuffer,
  timestamp: 23000000,
  duration: 2000000,
  transfer: [audioBuffer],
};
chunk = new EncodedAudioChunk(init);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
