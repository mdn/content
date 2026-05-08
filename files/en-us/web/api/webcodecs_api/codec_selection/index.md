---
title: Codec selection
slug: Web/API/WebCodecs_API/Codec_selection
page-type: guide
---

{{DefaultAPISidebar("WebCodecs API")}}

While developers commonly refer to codecs by their code identifier string, such as `vp9` or `h264`, there are many configuration profiles, levels, and other parameters that control exactly how the data is encoded and decoded.

The [WebCodecs API](/en-US/docs/Web/API/WebCodecs_API) requires working with fully specified codec strings, such as `vp09.00.40.08.00`, instead of ambiguous strings like `vp9` or `h264`. Fully specified codec strings detail not just the codec family but also the profile, level, and other parameters.

Selecting the correct string depends on your use case, but is primarily influenced by compatibility concerns, and the hardware and software on which you want to run. This guide explains how codec strings work, how to choose the right codecs for [common use cases](#common_use_cases), and common approaches for gracefully falling back to alternative codec strings when your preferences are unavailable.

## Decoding vs encoding

When **decoding** a video or audio file, the codec is determined by how the file was originally encoded — you do not choose it. Demuxing libraries such as [Mediabunny](https://mediabunny.dev/) and [web-demuxer](https://github.com/bilibili/web-demuxer) will extract the correct codec string for a given file, which you can supply directly to {{domxref("VideoDecoder")}} or {{domxref("AudioDecoder")}} during configuration.

When **encoding**, you choose the codec. The rest of this guide covers how to choose a codec.

## Video codecs

### Video codec families

Before choosing a codec string, like `vp09.00.40.08.00` or `avc1.4d0034`, it is worth reviewing the codec families.

#### H.264 (AVC)

H.264 is one of the most widely supported codecs across browsers, operating systems, and consumer devices. It is the most common codec used in MP4 files, and applications which encode videos intended for playback in third-party software typically choose H.264 as a pragmatic choice for maximum compatibility.

While popular, it is worth noting that H.264 is a patented codec. While browser vendors hold licenses covering the H.264 encoder implementations used by WebCodecs, the codec is subject to royalties in certain circumstances. Developers should review usage with legal counsel.

#### VP9

VP9 is an open source codec developed by Google, and offers better compression than H.264 at equivalent quality. VP9 within WebM containers is widely supported across modern browsers, with coverage comparable to or exceeding H.264.

VP9 within WebM containers is also supported by native video players on Windows (Windows Media Player) and third-party players such as VLC, but currently lacks native playback support on macOS and iOS.

VP9 is sometimes, but not always, supported as a codec within MP4 files, as support for this configuration depends on playback software.

VP9 is often chosen for internal use cases for its better compression, or when open source licensing matters.

#### AV1

AV1 is a newer open source codec developed by the [Alliance for Open Media](https://aomedia.org/). AV1 has better compression than both H.264 and VP9 for the same quality, and decode support is now over 90% coverage globally across browsers.

AV1 encoding support is strong across desktop browsers but limited on Safari and on Android. AV1 offers better quality-per-bit than VP9, but is more computationally intensive to encode. Consumer devices increasingly have support for AV1 hardware acceleration, which can make AV1 encoding more practical. The decision to use AV1 over VP9 typically comes down to whether the better quality-per-bit justifies the additional encoding overhead for a given use case.

#### HEVC (H.265)

HEVC offers better compression than H.264 but has significant gaps in browser encoding support outside of Apple platforms.
It is not recommended as a general-purpose encoding target.

Like H.264, HEVC is a patented codec. The codec is subject to royalties in certain circumstances. Developers should review usage with legal counsel.

### Codec-container compatibility

Not all codecs are supported by all containers.
The following table covers the two most common web video containers:

| Codec | MP4     | WebM |
| ----- | ------- | ---- |
| H.264 | Yes     | No   |
| VP9   | Partial | Yes  |
| AV1   | Partial | Yes  |
| HEVC  | Yes     | No   |

H.264 is the standard codec for MP4. VP9 and AV1 are the standard codecs for WebM.
While VP9 and AV1 have partial MP4 support in some environments, pairing them with WebM is more reliable.

### Codec string selection

For each codec family, there are hundreds of possible codec strings.

Each codec string encodes a **profile** and **level** that determine the capabilities and compatibility of the encoded stream. The profile controls which encoding features are enabled — lower profiles such as Baseline are simpler and more broadly compatible, while higher profiles such as High enable better compression at the cost of requiring more capable hardware. The level sets the maximum resolution and bitrate the stream can use. In general, prefer lower profiles and levels unless you specifically need the higher resolution or compression efficiency.

The following tables provide a practical starting point for codec strings, with levels and profiles that maximize encoding compatibility.

#### H.264

| Codec string  | Profile  | Max resolution | Support                                                            |
| ------------- | -------- | -------------- | ------------------------------------------------------------------ |
| `avc1.42001f` | Baseline | 720p           | [99.6%](https://webcodecsfundamentals.org/codecs/avc1.42001f.html) |
| `avc1.4d0034` | Main     | 4K             | [98.9%](https://webcodecsfundamentals.org/codecs/avc1.4d0034.html) |
| `avc1.42003e` | Baseline | 8K             | [86.8%](https://webcodecsfundamentals.org/codecs/avc1.42003e.html) |
| `avc1.64003e` | High     | 8K             | [85.9%](https://webcodecsfundamentals.org/codecs/avc1.64003e.html) |

#### VP9

| Codec string       | Level | Max resolution | Support                                                                  |
| ------------------ | ----- | -------------- | ------------------------------------------------------------------------ |
| `vp09.00.30.08.00` | 3     | 720p           | [99.98%](https://webcodecsfundamentals.org/codecs/vp09.00.30.08.00.html) |
| `vp09.00.40.08.00` | 4     | 2K             | [99.96%](https://webcodecsfundamentals.org/codecs/vp09.00.40.08.00.html) |
| `vp09.00.50.08.00` | 5     | 4K             | [99.97%](https://webcodecsfundamentals.org/codecs/vp09.00.50.08.00.html) |
| `vp09.00.61.08.00` | 6.1   | 8K             | [99.97%](https://webcodecsfundamentals.org/codecs/vp09.00.61.08.00.html) |

#### AV1

| Codec string    | Level | Max resolution | Support                                                              |
| --------------- | ----- | -------------- | -------------------------------------------------------------------- |
| `av01.0.05M.08` | 3.1   | 720p           | [87.9%](https://webcodecsfundamentals.org/codecs/av01.0.05M.08.html) |
| `av01.0.08M.08` | 4.0   | 1080p          | [87.8%](https://webcodecsfundamentals.org/codecs/av01.0.08M.08.html) |
| `av01.0.12M.08` | 5.0   | 4K             | [87.8%](https://webcodecsfundamentals.org/codecs/av01.0.12M.08.html) |

#### HEVC

| Codec string       | Level | Max resolution | Support                                                                 |
| ------------------ | ----- | -------------- | ----------------------------------------------------------------------- |
| `hvc1.1.6.L120.B0` | 4.0   | 1080p          | [73.6%](https://webcodecsfundamentals.org/codecs/hev1.1.6.L120.B0.html) |
| `hvc1.1.6.L150.B0` | 5.0   | 4K             | [73.6%](https://webcodecsfundamentals.org/codecs/hvc1.1.6.L150.B0.html) |
| `hvc1.1.6.L180.B0` | 6.0   | 8K             | [73.1%](https://webcodecsfundamentals.org/codecs/hvc1.1.6.L180.B0.html) |

See the [Codec Support Table](https://webcodecsfundamentals.org/datasets/codec-support-table/) for an exhaustive list of potential codec strings, and support across browsers & devices.

### Codec string format

The fully qualified codec string encodes the codec family, profile, level, and other parameters that affect which hardware can encode or decode the stream and at what resolution and quality.

The format for these codec strings is specified in the [W3C codec registry](https://www.w3.org/TR/webcodecs-codec-registry/), and the format is different for each codec family.

#### H.264

`avc1.4d0034`

- `avc1` — H.264/AVC codec identifier
- `4d` — Profile IDC in hexadecimal (`4d` = Main profile)
- `00` — Constraint flags
- `34` — Level IDC in hexadecimal (`34` = level 5.2, supports up to 4K)

#### VP9

`vp09.00.40.08.00`

- `vp09` — VP9 codec identifier
- `00` — Profile
- `40` — Level (`40` = level 4.0, supports up to 2K)
- `08` — Bit depth (8-bit)
- `00` — Chroma subsampling

#### AV1

`av01.0.05M.08`

- `av01` — AV1 codec identifier
- `0` — Profile (Main)
- `05M` — Level and tier (`05` = level 3.1, `M` = Main tier)
- `08` — Bit depth (8-bit)

#### HEVC

`hvc1.1.6.L150.B0`

- `hvc1` — HEVC codec identifier (MP4/QuickTime variant)
- `1` — Profile (`1` = Main profile)
- `6` — Compatibility flags
- `L150` — Level × 30 (`L150` = level 5.0, supports up to 4K)
- `B0` — Tier and constraint flags (`B0` = Main tier)

## Audio codecs

### Opus

Opus is an open source codec with broad encoding support across browsers and platforms. It is the standard audio codec for WebM files, and the recommended choice for most WebCodecs audio encoding use cases.

### AAC

AAC is the standard audio codec for MP4 files and is required when targeting MP4 output. However, AAC encoding support in WebCodecs has notable gaps: it is not supported in Firefox on any platform, or in any browser on desktop Linux.

AAC encoding is universally supported on Safari versions that support {{domxref("AudioEncoder")}} (Safari 26+), but previous versions of Safari do not support audio encoding in general.

### MP3 and PCM

MP3 and PCM are not widely supported as encoding targets, with MP3 encoding not currently supported by any major browser. PCM (uncompressed audio) is available as a {{domxref("AudioData")}} format for raw audio processing, but support for encoding with `AudioEncoder` is limited.

### Audio codec string reference

Audio codec strings are simpler than video codec strings. Opus requires no additional parameters; AAC uses a short parameter string.

| Codec  | Codec string | Container | Encoder support                                                  | Decoder support                                                  |
| ------ | ------------ | --------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| Opus   | `opus`       | WebM      | [96.1%](https://webcodecsfundamentals.org/codecs/opus.html)      | [96.5%](https://webcodecsfundamentals.org/codecs/opus.html)      |
| AAC    | `mp4a.40.2`  | MP4       | [90.1%](https://webcodecsfundamentals.org/codecs/mp4a.40.2.html) | [96.4%](https://webcodecsfundamentals.org/codecs/mp4a.40.2.html) |
| MP3    | `mp3`        | —         | [0%](https://webcodecsfundamentals.org/codecs/mp3.html)          | [96.5%](https://webcodecsfundamentals.org/codecs/mp3.html)       |
| FLAC   | `flac`       | —         | [0%](https://webcodecsfundamentals.org/codecs/flac.html)         | [96.5%](https://webcodecsfundamentals.org/codecs/flac.html)      |
| Vorbis | `vorbis`     | WebM      | [3.8%](https://webcodecsfundamentals.org/codecs/vorbis.html)     | [96.5%](https://webcodecsfundamentals.org/codecs/vorbis.html)    |
| PCM    | `pcm-f32`    | —         | [8.7%](https://webcodecsfundamentals.org/codecs/pcm-f32.html)    | [94.6%](https://webcodecsfundamentals.org/codecs/pcm-f32.html)   |

The lower AAC encoding support figure reflects the platform gaps described above — Firefox (all platforms), desktop Linux (all browsers), and partial support for `AudioEncoder` on Apple devices. AAC has several variants — `mp4a.40.2` (AAC-LC) is the standard choice for encoding. `mp4a.40.5` and `mp4a.40.29` correspond to HE-AAC configurations using Spectral Band Replication (SBR), which causes the decoder to output audio at double the configured sample rate.

PCM is available in several variants: `pcm-f32` (32-bit float), `pcm-s16` (16-bit signed), `pcm-s24` (24-bit signed), `pcm-s32` (32-bit signed), and `pcm-u8` (8-bit unsigned). All variants have equivalent browser support. The `pcm-f32` format matches the `f32-planar` layout used by {{domxref("AudioData")}} and is the most practical choice for raw audio processing.

Use {{domxref("AudioEncoder/isConfigSupported_static", "AudioEncoder.isConfigSupported()")}} to check support at runtime before configuring an `AudioEncoder`. Note that `AudioEncoder` itself is not available in all browsers — check for its existence with `typeof AudioEncoder !== "undefined"` before calling `isConfigSupported()`.

## Common use cases

You need to choose a video codec and an audio codec, along with the container format, together as a package. For practical quickstart guidance, here are some common configurations:

- **Targeting maximum compatibility** (video intended for playback in third-party software or on a wide range of devices): H.264 (e.g., `avc1.4d0034`) + AAC (`mp4a.40.2`) in an MP4 container is the most common choice in practice.
- **Open-source projects or applications controlling both encoding and playback** (e.g., internal tooling, in-app streaming): VP9 (e.g., `vp09.00.40.08.00`) + Opus (`opus`) in a WebM container is a natural fit — both are open-source, and WebM is the standard container for this combination.
- **Maximum compression** (e.g., large-scale streaming): AV1 + Opus in a WebM container, provided your target audience has sufficient hardware support. Use {{domxref("VideoEncoder/isConfigSupported_static", "VideoEncoder.isConfigSupported()")}} to verify before committing to this combination.

## Checking support at runtime

Before encoding, use {{domxref("VideoEncoder/isConfigSupported_static", "VideoEncoder.isConfigSupported()")}} to verify that a given configuration is supported on the current device:

```js
const { supported } = await VideoEncoder.isConfigSupported({
  codec: "avc1.4d0034",
  width: 1920,
  height: 1080,
});
```

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
```

The same pattern applies to VP9:

```js
const candidates = [
  "vp09.00.61.08.00",
  "vp09.00.50.08.00",
  "vp09.00.40.08.00",
  "vp09.00.10.08.00",
];
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
```

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

- [WebCodecs Support Dataset](https://zenodo.org/records/19187467)
- [Video processing concepts](/en-US/docs/Web/API/WebCodecs_API/Video_processing_concepts)
- [Using the WebCodecs API](/en-US/docs/Web/API/WebCodecs_API/Using_the_WebCodecs_API)
- [Codec Support Table](https://webcodecsfundamentals.org/datasets/codec-support-table/) on WebCodecs Fundamentals
- {{domxref("VideoEncoder/isConfigSupported_static", "VideoEncoder.isConfigSupported()")}}
- {{domxref("VideoDecoder/isConfigSupported_static", "VideoDecoder.isConfigSupported()")}}
- {{domxref("AudioEncoder/isConfigSupported_static", "AudioEncoder.isConfigSupported()")}}
- {{domxref("AudioDecoder/isConfigSupported_static", "AudioDecoder.isConfigSupported()")}}
