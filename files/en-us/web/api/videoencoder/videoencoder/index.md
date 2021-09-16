---
title: VideoEncoder.VideoEncoder()
slug: Web/API/VideoEncoder/VideoEncoder
tags:
  - API
  - Constructor
  - Reference
  - VideoEncoder
browser-compat: api.VideoEncoder.VideoEncoder
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`VideoEncoder()`** constructor creates a new {{domxref("VideoEncoder")}} object with the provided `init.output` callback assigned as the output callback, the provided `init.error` callback as the error callback, and the {{domxref("VideoEncoder.state")}} set to `"unconfigured"`.

## Syntax

```js
new VideoEncoder(init);
```

### Parameters

- `init`
  - : A dictionary object containing two required callbacks.
    - `output`
      - : A callback which is passed a single argument of an {{domxref("VideoFrame")}} object.
    - `error`
      - : A callback which is passed a single argument of the error that has been thrown.

## Examples

In the following example an `VideoEncoder` is created with the two required callback functions, one to deal with the decoded frame and the other to handle errors.

```js
const videoEncoder = new VideoEncoder({
  output: processVideo,
  error: onEncoderError,
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

