---
title: VideoDecoder.VideoDecoder()
slug: Web/API/VideoDecoder/VideoDecoder
tags:
  - API
  - Constructor
  - Reference
  - VideoDecoder
browser-compat: api.VideoDecoder.VideoDecoder
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`VideoDecoder()`** constructor creates a new {{domxref("VideoDecoder")}} object with the provided `init.output` callback assigned as the output callback, the provided `init.error` callback as the error callback, and the {{domxref("VideoDecoder.state")}} set to `"unconfigured"`.

## Syntax

```js
new VideoDecoder();
```

### Parameters

- `init`
  - : A dictionary object containing two required callbacks.
    - `output`
      - : A callback which is passed a single argument of an {{domxref("VideoFrame")}} object.
    - `error`
      - : A callback which is passed a single argument of the error that has been thrown.

## Examples

In the following example an `VideoDecoder` is created with the two required callback functions, one to deal with the decoded frame and the other to handle errors.

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

