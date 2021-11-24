---
title: ImageDecoder.decode()
slug: Web/API/ImageDecoder/decode
tags:
  - API
  - Method
  - Reference
  - decode
  - ImageDecoder
browser-compat: api.ImageDecoder.decode
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`decode()`** method of the {{domxref("ImageDecoder")}} interface enqueues a control message to decode the frame of an image.

## Syntax

```js
ImageDecoder.decode(options)
```

### Parameters

- `options`{{Optional_Inline}}
  - : An object containing the following members:
    - `frameIndex`{{Optional_Inline}}
      - : An integer representing the index of the frame to decode. Defaults to `0` (the first frame).
    - `completeFramesOnly`{{Optional_Inline}}
      - : A {{jsxref("boolean")}} defaulting to `true`. When `false` indicates that for progressive images the decoder may output an image with reduced detail.

### Return Value

A {{jsxref("promise")}} that resolves with an object containing the following members:

- `image`
  - : A {{domxref("VideoFrame")}} containing the decoded image.
- `complete`
  - : A {{jsxref("boolean")}}, if `true` indicates that `image` contains the final full-detail output.

### Exceptions

If an error occurs, the promise will resolve with following exception:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if any of the following conditions apply:
    - `close` is true, meaning {{domxref("ImageDecoder.close()","close()")}} has already been called.
    - The requested frame does not exist.

## Examples

The following example decodes the second frame (at index `1`) and prints the resulting {{domxref("VideoFrame")}} to the console.

```js
console.log(imageDecoder.decode({frameIndex: 1}));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
