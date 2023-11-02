---
title: "EncodedVideoChunk: EncodedVideoChunk() constructor"
short-title: EncodedVideoChunk()
slug: Web/API/EncodedVideoChunk/EncodedVideoChunk
page-type: web-api-constructor
browser-compat: api.EncodedVideoChunk.EncodedVideoChunk
---

{{APIRef("WebCodecs API")}}

The **`EncodedVideoChunk()`** constructor creates a new {{domxref("EncodedVideoChunk")}} object representing a chunk of encoded video.

## Syntax

```js-nolint
new EncodedVideoChunk(options)
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
      - : An integer representing the timestamp of the video in microseconds.
    - `duration`
      - : An integer representing the length of the video in microseconds.
    - `data`
      - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}} containing the video data.

## Examples

In the following example a new `EncodedVideoChunk` is created.

```js
const init = {
  type: "key",
  data: videoBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
chunk = new EncodedVideoChunk(init);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
