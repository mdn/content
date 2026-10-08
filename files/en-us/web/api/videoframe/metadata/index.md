---
title: "VideoFrame: metadata() method"
short-title: metadata()
slug: Web/API/VideoFrame/metadata
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.VideoFrame.metadata
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}{{SeeCompatTable}}

The **`metadata()`** method of the {{domxref("VideoFrame")}} interface returns the metadata associated with the frame.

## Syntax

```js-nolint
metadata()
```

### Parameters

None.

### Return value

An object containing metadata describing the video frame, as specified by the [WebCodecs VideoFrame Metadata Registry](https://w3c.github.io/webcodecs/video_frame_metadata_registry.html).
This can contain the following properties:

- `rtpTimestamp` {{optional_inline}}
  - : The RTP timestamp of the corresponding encoded frame. Video frames originating from [WebRTC](/en-US/docs/Web/API/WebRTC_API) sources will have `rtpTimestamp` metadata. This allows applications using a {{domxref("MediaStreamTrackProcessor")}} (for example, to render decoded WebRTC frames to a `<canvas>`) to correlate each exposed frame with its original RTP transport timestamp. This is useful for example when aligning video with audio segments or debugging latency issues.

If the video frame doesn't have any of the listed metadata items associated with it, `metadata()` will return an empty object.

## Examples

### Basic usage

```js
const metadata = frame.metadata();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
