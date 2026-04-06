---
title: Codec selection
slug: Web/API/WebCodecs_API/Codec_selection
page-type: guide
---

{{DefaultAPISidebar("WebCodecs API")}}

The WebCodecs API requires codec strings — precise identifiers that specify not just the codec family but also the profile, level, and other parameters.
This guide explains how codec strings work and how to choose the right codec for common use cases.

## Codec strings

Unlike some APIs that accept a general codec name such as `"h264"`, the WebCodecs API requires a fully qualified codec string such as `"avc1.4d0034"`.

The additional parameters in the string — profile, level, bit depth, and so on — affect which hardware can encode or decode the stream, and what resolutions and quality levels are achievable.

Before encoding, you can check whether a given configuration is supported:

```js
const { supported } = await VideoEncoder.isConfigSupported({
  codec: "avc1.4d0034",
  width: 1920,
  height: 1080,
});
```

## Choosing a codec

### H.264 (AVC)

The most widely supported codec, with near-universal support across browsers and platforms. Most MP4 files use H.264.
It is the appropriate choice when output files need to be compatible with the broadest range of devices, or when the output format is MP4.

### VP9

Open source, developed by Google, and widely used on platforms such as YouTube. Successor to VP8, with better compression than H.264 at equivalent quality.
VP9 is the natural choice for WebM output and has similarly broad encoding support to H.264.

### AV1

The newest open source codec, with better compression than both H.264 and VP9. Decoder support is broad; hardware encoder support is more limited.
AV1 is well-suited for decoding (playback) use cases, or encoding pipelines where broad device compatibility is not required.

### HEVC (H.265)

Newer than H.264 with better compression, but with notable gaps in browser support — strong on Apple platforms (Safari, macOS, iOS), limited elsewhere.
It is not recommended as a general-purpose encoding target.

## Codec string reference

### H.264 codec strings

| Codec string  | Profile  | Max resolution | Notes                          |
| ------------- | -------- | -------------- | ------------------------------ |
| `avc1.42001f` | Baseline | 720p           | Most compatible                |
| `avc1.4d0034` | Main     | 4K             | Recommended for most use cases |
| `avc1.64003e` | High     | 8K             | Broadest feature set           |

### VP9 codec strings

| Codec string    | Level | Notes           |
| --------------- | ----- | --------------- |
| `vp09.00.10.08` | 1     | Most compatible |
| `vp09.00.40.08` | 4     | Up to 2K        |
| `vp09.00.50.08` | 5     | Up to 4K        |

## See also

- [Video processing concepts](/en-US/docs/Web/API/WebCodecs_API/Video_processing_concepts)
- [Using the WebCodecs API](/en-US/docs/Web/API/WebCodecs_API/Using_the_WebCodecs_API)
- {{domxref("VideoEncoder.isConfigSupported_static", "VideoEncoder.isConfigSupported()")}}
- {{domxref("VideoDecoder.isConfigSupported_static", "VideoDecoder.isConfigSupported()")}}
