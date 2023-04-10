---
title: "ImageDecoder: decode() method"
short-title: decode()
slug: Web/API/ImageDecoder/decode
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.ImageDecoder.decode
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`decode()`** method of the {{domxref("ImageDecoder")}} interface enqueues a control message to decode the frame of an image.

## Syntax

```js-nolint
decode()
decode(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An object containing the following members:
    - `frameIndex` {{optional_inline}}
      - : An integer representing the index of the frame to decode. Defaults to `0` (the first frame).
    - `completeFramesOnly` {{optional_inline}}
      - : A {{jsxref("boolean")}} defaulting to `true`. When `false` indicates that for progressive images the decoder may output an image with reduced detail. When `false`, the promise returned by `decode()` will resolve exactly once for each new level of detail.

### Return value

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

### Synchronous decoding of a completed image frame

The following example decodes the second frame (at index `1`) and prints the resulting {{domxref("VideoFrame")}} to the console.

```js
let result = await imageDecoder.decode({ frameIndex: 1 });
console.log(result.image);
```

### Partial decoding of a progressive image frame

The following example decodes the first frame repeatedly until its complete:

```js
let complete = false;
while (!complete) {
  // The promise returned by `decode()` will only resolve when a new
  // level of detail is available or the frame is complete. I.e.,
  // calling `decode()` in a loop like this is won't needlessly spin.
  let result = await imageDecode.decode({ completeFramesOnly: false });

  // Do something with `result.image`.

  complete = result.complete;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
