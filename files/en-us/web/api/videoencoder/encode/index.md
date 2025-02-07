---
title: "VideoEncoder: encode() method"
short-title: encode()
slug: Web/API/VideoEncoder/encode
page-type: web-api-instance-method
browser-compat: api.VideoEncoder.encode
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

The **`encode()`** method of the {{domxref("VideoEncoder")}} interface asynchronously encodes a {{domxref("VideoFrame")}}.
Encoded data ({{domxref("EncodedVideoChunk")}}) or an error will eventually be returned via the callbacks provided to the {{domxref("VideoEncoder")}} constructor.

## Syntax

```js-nolint
encode(frame)
encode(frame, options)
```

### Parameters

- `frame`
  - : A {{domxref("VideoFrame")}} object.
- `options` {{optional_inline}}
  - : An object containing the following members:
    - `keyFrame` {{optional_inline}}
      - : A {{jsxref("boolean")}}, defaulting to `false` giving the user agent flexibility to decide if this frame should be encoded as a key frame. If `true` this indicates that the given frame must be encoded as a key frame.
    - `vp9` {{optional_inline}}
      - : Encode options for the [VP9](/en-US/docs/Web/Media/Guides/Formats/Video_codecs#vp9) codec.
        - `quantizer`
          - : Frame quantizer value 0 to 63. Only effective if {{domxref("VideoEncoder")}} was configured with `quantizer` bitrate mode.
    - `av1` {{optional_inline}}
      - : Encode options for the [AV1](/en-US/docs/Web/Media/Guides/Formats/Video_codecs#av1) codec.
        - `quantizer`
          - : Frame quantizer value 0 to 63. Only effective if {{domxref("VideoEncoder")}} was configured with `quantizer` bitrate mode.
    - `avc` {{optional_inline}}
      - : Encode options for the [AVC (H.264)](/en-US/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) codec.
        - `quantizer`
          - : Frame quantizer value 0 to 51. Only effective if {{domxref("VideoEncoder")}} was configured with `quantizer` bitrate mode.
    - `hevc` {{optional_inline}}
      - : Encode options for the [HEVC (H.265)](/en-US/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265) codec.
        - `quantizer`
          - : Frame quantizer value 0 to 51. Only effective if {{domxref("VideoEncoder")}} was configured with `quantizer` bitrate mode.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("VideoEncoder.state","state")}} is not `"configured"`.
- `DataError` {{domxref("DOMException")}}
  - : Thrown if the `chunk` cannot be decoded due to relying on other frames for decoding.

## Examples

In the following example `encode` is passed a `VideoFrame`, and the options parameter indicating that this frame should be considered a keyframe.

```js
encoder.encode(frame, { keyFrame: true });
```

Setting per-frame QP value for encoding individual frames.

```js
const encoder = new VideoEncoder(init);
const encoderConfig = {
  codec: "vp09.00.10.08",
  width: 800,
  height: 600,
  bitrateMode: "quantizer",
  framerate: 30,
  latencyMode: "realtime",
};
encoder.configure(encoderConfig);

const encodeOptions = { keyFrame: false };
const qp = calculateQp(codec, frame);

if (codec.includes("vp09")) {
  encodeOptions.vp9 = { quantizer: qp };
} else if (codec.includes("av01")) {
  encodeOptions.av1 = { quantizer: qp };
} else if (codec.includes("avc")) {
  encodeOptions.avc = { quantizer: qp };
} else if (codec.includes("hvc1" || codec.includes("hev1"))) {
  encodeOptions.hevc = { quantizer: qp };
}

encoder.encode(frame, encodeOptions);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
