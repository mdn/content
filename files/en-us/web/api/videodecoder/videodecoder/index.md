---
title: "VideoDecoder: VideoDecoder() constructor"
short-title: VideoDecoder()
slug: Web/API/VideoDecoder/VideoDecoder
page-type: web-api-constructor
browser-compat: api.VideoDecoder.VideoDecoder
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}

The **`VideoDecoder()`** constructor creates a new {{domxref("VideoDecoder")}} object with the provided `init.output` callback assigned as the output callback, the provided `init.error` callback as the error callback, and the {{domxref("VideoDecoder.state")}} set to `"unconfigured"`.

## Syntax

```js-nolint
new VideoDecoder(options)
```

### Parameters

- `options`
  - : An object containing two callbacks.
    - `output`
      - : A callback which takes a {{domxref("VideoFrame")}} object as its only argument.
    - `error`
      - : A callback which takes an {{jsxref("Error")}} object as its only argument.

## Examples

In the following example a `VideoDecoder` is created with the two required callback functions, one to deal with the decoded frame and the other to handle errors.

```js
const videoDecoder = new VideoDecoder({
  output: processVideo,
  error: onEncoderError,
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
