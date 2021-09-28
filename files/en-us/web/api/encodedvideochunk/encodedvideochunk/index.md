---
title: EncodedVideoChunk.EncodedVideoChunk()
slug: Web/API/EncodedVideoChunk/EncodedVideoChunk
tags:
  - API
  - Constructor
  - Reference
  - EncodedVideoChunk
browser-compat: api.EncodedVideoChunk.EncodedVideoChunk
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`EncodedVideoChunk()`** constructor creates a new {{domxref("EncodedVideoChunk")}} object representing a chunk of encoded video.

## Syntax

```js
new EncodedVideoChunk(init);
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
      - : An integer representing the timestamp of the video in microseconds.
    - `duration`
      - : An integer representing the length of the video in microseconds.
    - `data`
      - : A {{domxref("BufferSource")}} containing the video data.


## Examples

In the following example a new `EncodedVideoChunk` is created.

```js
const init = {
  type: 'key',
  data: videoBuffer,
  timestamp: 23000000,
  duration: 2000000
};
chunk = EncodedVideoChunk(init);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
