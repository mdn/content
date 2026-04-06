---
title: Codec selection
slug: Web/API/WebCodecs_API/Codec_selection
page-type: guide
---

{{DefaultAPISidebar("WebCodecs API")}}

The WebCodecs API requires working not just with codecs such as `vp9` or `h264` but specific codec strings such as `vp09.00.40.08.00`— precise identifiers that specify not just the codec family but also the profile, level, and other parameters.
This guide explains how codec strings work and how to choose the right codec for common use cases.

## Decoding vs encoding

When **decoding** a video file, the codec is determined by how the file was originally encoded — you do not choose it. Demuxing libraries such as [MediaBunny](https://mediabunny.dev/) and [eb-demuxer](https://github.com/bilibili/web-demuxer) will extract the correct codec string for a given file, which you can supply directly to {{domxref("VideoDecoder")}} during configuration.

## Choosing a codec family

Before choosing a codec string, like `vp09.00.40.08.00` or `avc1.4d0034`, it is worth reviewing the codec families.

### H.264 (AVC)

H.264 is one of the most widely supported codecs across browsers, operating systems, and consumer devices. It is the most common codec used in MP4 files, and applications which encode videos intended for playback in 3rd party software typically choose H.264 as a pragmatic choice for maximum compatibility.

While popular, it is worth noting that H.264 is a patented codec. While browser vendors hold licenses covering the H.264 encoder implementations used by WebCodecs, the codec is subject to royalties in certain circumstances, and developers should be aware of the [Via Licensing Alliance AVC license](https://via-la.com/licensing-programs/avc-h-264/).

### VP9

VP9 is an open source codec developed by Google, and offers better compression than H.264 at equivalent quality. VP9 within WebM containers is widely supported across modern browsers, with coverage comparable to or exceeding H.264 †.

VP9 within WebM containers is also supported by native video players on Windows (Windows Media Player) and third-party players such as VLC, but lacks native playback support on macOS and iOS.

VP9 is sometimes, but not always supported as a codec within MP4 files, as support for this configuration depends on playback software.

VP9 is often chosen for internal use cases for its better compression, or when open source licensing matters.

### AV1

However, hardware encoder support remains limited and encoding is significantly slower than VP9. AV1 is not recommended as a general encoding target; it is best suited for decode-only (playback) use cases.

### HEVC (H.265)

HEVC offers better compression than H.264 but has significant gaps in browser encoding support outside of Apple platforms †.
It is not recommended as a general-purpose encoding target.

† [WebCodecs Support Dataset](https://zenodo.org/records/19187467)

## Codec-container compatibility

Not all codecs are supported by all containers.
The following table covers the two most common web video containers:

| Codec | MP4     | WebM |
| ----- | ------- | ---- |
| H.264 | Yes     | No   |
| VP9   | Partial | Yes  |
| AV1   | Partial | Yes  |

H.264 is the standard codec for MP4. VP9 and AV1 are the standard codecs for WebM.
While VP9 and AV1 have partial MP4 support in some environments, pairing them with WebM is more reliable.

## Choosing a codec string

For each codec family, there are hundreds of possible codec strings. The following tables provide a practical starting point for H.264 and VP9 codec strings that maximize encoding compatibility.

| Codec string  | Profile  | Max resolution | Support                                                            |
| ------------- | -------- | -------------- | ------------------------------------------------------------------ |
| `avc1.42001f` | Baseline | 720p           | [99.6%](https://webcodecsfundamentals.org/codecs/avc1.42001f.html) |
| `avc1.4d0034` | Main     | 4K             | [98.9%](https://webcodecsfundamentals.org/codecs/avc1.4d0034.html) |
| `avc1.42003e` | Baseline | 8K             | [86.8%](https://webcodecsfundamentals.org/codecs/avc1.42003e.html) |
| `avc1.64003e` | High     | 8K             | [85.9%](https://webcodecsfundamentals.org/codecs/avc1.64003e.html) |

### VP9

| Codec string       | Level | Max resolution | Support                                                                  |
| ------------------ | ----- | -------------- | ------------------------------------------------------------------------ |
| `vp09.00.10.08.00` | 1     | 720p           | [99.98%](https://webcodecsfundamentals.org/codecs/vp09.00.10.08.00.html) |
| `vp09.00.40.08.00` | 4     | 2K             | [99.96%](https://webcodecsfundamentals.org/codecs/vp09.00.40.08.00.html) |
| `vp09.00.50.08.00` | 5     | 4K             | [99.97%](https://webcodecsfundamentals.org/codecs/vp09.00.50.08.00.html) |
| `vp09.00.61.08.00` | 6.1   | 8K             | [99.97%](https://webcodecsfundamentals.org/codecs/vp09.00.61.08.00.html) |

See the [Codec Support Table](https://webcodecsfundamentals.org/datasets/codec-support-table/) for an exhaustive list of potential codec strings, and support across browsers & devices.

## Codec string format

The WebCodecs API requires a fully qualified codec string rather than a general codec name. The string encodes the codec family, profile, level, and other parameters that affect which hardware can encode or decode the stream and at what resolution and quality.

### H.264

`avc1.4d0034`

- `avc1` — H.264/AVC codec identifier
- `4d` — Profile IDC in hexadecimal (`4d` = Main profile)
- `00` — Constraint flags
- `34` — Level IDC in hexadecimal (`34` = level 5.2, supports up to 4K)

### VP9

`vp09.00.40.08.00`

- `vp09` — VP9 codec identifier
- `00` — Profile
- `40` — Level (`40` = level 4.0, supports up to 2K)
- `08` — Bit depth (8-bit)
- `00` — Chroma subsampling

### AV1

`av01.0.05M.08`

- `av01` — AV1 codec identifier
- `0` — Profile (Main)
- `05M` — Level and tier (`05` = level 3.1, `M` = Main tier)
- `08` — Bit depth (8-bit)

## Choosing an audio codec

### Opus

Opus is an open source codec with broad encoding support across browsers and platforms. It is the standard audio codec for WebM files, and the recommended choice for most WebCodecs audio encoding use cases.

### AAC

AAC is the standard audio codec for MP4 files and is required when targeting MP4 output. However, AAC encoding support in WebCodecs has notable gaps: it is not supported in Firefox on any platform, or in any browser on desktop Linux.

AAC encoding is universally supported on Safari versions which support {{domxref("AudioEncoder")}} (Safari 26+), but previous versions of Safari do not support audio encoding in general.

### MP3 and PCM

MP3 and PCM are not supported as encoding targets in WebCodecs. PCM (uncompressed audio) is available as a {{domxref("AudioData")}} format for raw audio processing, but cannot be encoded via `AudioEncoder`.

## Audio codec string reference

Audio codec strings are simpler than video codec strings. Opus requirt {o additional parameters; AAC uses a short parameter string.

| Codec | Codec string | Container | Support                                                          |
| ----- | ------------ | --------- | ---------------------------------------------------------------- |
| Opus  | `opus`       | WebM      | [94.4%](https://webcodecsfundamentals.org/codecs/opus.html)      |
| AAC   | `mp4a.40.2`  | MP4       | [87.8%](https://webcodecsfundamentals.org/codecs/mp4a.40.2.html) |

The lower AAC encoding support figure reflects the platform gaps described above — Firefox (all platforms), desktop Linux (all browsers), and partial support for `AudioEncoder` on Apple devices.

Use {{domxref("AudioEncoder/isConfigSupported_static", "AudioEncoder.isConfigSupported()")}} to check support at runtime before configuring an `AudioEncoder`. Note that `AudioEncoder` itself is not available in all browsers — check for its existence with `typeof AudioEncoder !== "undefined"` before calling `isConfigSupported()`.

## Checking support at runtime

Before encoding, use {{domxref("VideoEncoder/isConfigSupported_static", "VideoEncoder.isConfigSupported()")}} to verify that a given configuration is supported on the current device:

````js
const { supported } = await VideoEncoder.isConfigSupported({
  width: 1920,
  height: 1080,

Since hardware support varies by device, a common pattern is to test codec strings from highest to lowest quality and use the first one supported:

```js
const candidates = ["avc1.64003e", "avc1.4d0034", "avc1.42003e", "avc1.42001f"];
let codecString;

for (const codec of candidates) {
  const { supported } = await VideoEncoder.isConfigSupported({
    codec,
    width: 1920,
    height: 1080,
    bitrate: 5_000_000,
    framerate: 30,
  });
  if (supported) {
    codecString = codec;
    break;
  }
}
````

The same pattern applies to audio. Since {{domxref("AudioEncoder")}} is not available in all browsers, check for its existence before calling `isConfigSupported()`:

```js
if (typeof AudioEncoder !== "undefined") {
  const { supported } = await AudioEncoder.isConfigSupported({
    codec: "opus",
    sampleRate: 48000,
    numberOfChannels: 2,
  });
}
```

## See also

- [Video processing concepts](/en-US/docs/Web/API/WebCodecs_API/Video_processing_concepts)
- [Using the WebCodecs API](/en-US/docs/Web/API/WebCodecs_API/Using_the_WebCodecs_API)
- [Codec Support Table](https://webcodecsfundamentals.org/datasets/codec-support-table/) on WebCodecs Fundamentals
- {{domxref("VideoEncoder/isConfigSupported_static", "VideoEncoder.isConfigSupported()")}}
- {{domxref("VideoDecoder/isConfigSupported_static", "VideoDecoder.isConfigSupported()")}}
- {{domxref("AudioEncoder/isConfigSupported_static", "AudioEncoder.isConfigSupported()")}}
- {{domxref("AudioDecoder/isConfigSupported_static", "AudioDecoder.isConfigSupported()")}}
