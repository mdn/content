---
title: WebCodecs API
slug: Web/API/WebCodecs_API
page-type: web-api-overview
---

{{DefaultAPISidebar("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **WebCodecs API** enables web developers to encode and decode video and audio in the browser efficiently (using hardware acceleration) and with very low-level control (processing on a per-frame basis).

It is useful for web applications that do heavy media processing, or which require low-level control over the way media is encoded, such as browser-based video and audio editing, as well as live-streaming and video conferencing.

## Why WebCodecs exists

There are other APIs which use media codecs internally, such as the [MediaRecorder API](/en-US/docs/Web/API/MediaRecorder) and the [WebRTC API](/en-US/docs/Web/API/WebRTC_API), but these lack the low-level (per-frame) control required by some applications.

Previously, developers used WebAssembly ports of ffmpeg such as [ffmpeg.js](https://github.com/Kagami/ffmpeg.js/), but these lack true hardware acceleration capabilities, and are difficult to integrate with other key APIs like the File API for working with large Files efficiently.

WebCodecs was designed to enable low-level, hardware-accelerated media processing, for applications such as high-performance streaming and video editing, which were not well served by the existing APIs.

## Concepts

The WebCodecs API provides browser-native interfaces to represent raw video frames, encoded video frames, as well as raw and encoded audio.

|             | Video                            | Audio                            |
| ----------- | -------------------------------- | -------------------------------- |
| **Raw**     | {{domxref("VideoFrame")}}        | {{domxref("AudioData")}}         |
| **Encoded** | {{domxref("EncodedVideoChunk")}} | {{domxref("EncodedAudioChunk")}} |

The WebCodecs API also introduces the {{domxref("VideoDecoder")}} and {{domxref("VideoEncoder")}} interfaces, which transform `EncodedVideoChunk` objects into `VideoFrame` objects and vice-versa.

![VideoEncoder and VideoDecoder](video-encoder-decoder.png)

Likewise, the WebCodecs API also introduces the {{domxref("AudioDecoder")}} and {{domxref("AudioEncoder")}} interfaces, which transform `EncodedAudioChunk` objects into `AudioData` objects and vice-versa.

![AudioEncoder and AudioDecoder](audio-encoder-decoder.png)

There is a 1:1 correspondence between the raw and encoded versions of each media type. Decoding n `EncodedVideoChunk` objects will yield exactly n `VideoFrame` objects (same with audio)

### Video

A `VideoFrame` represents a video frame, and is tied both to actual pixel data on the device's graphics memory, as well as metadata such as the timestamp and duration (in microseconds), format and resolution. A `VideoFrame` can be constructed from any image source, and can also be rendered to a {{domxref("Canvas")}} using any of the canvas rendering methods.

`EncodedVideoChunk` represents the encoded version of the same frame, tied to binary data in regular memory and the same metadata, with one key additional field: `type`, which can be "key" or "delta", representing whether it corresponds to a [key frame](https://webcodecsfundamentals.org/basics/encoded-video-chunk/#key-frames).

![VideoFrame and EncodedVideoChunk](video-frame.png)

### Audio

An `AudioData` object represents a number of individual audio samples (1024 is a typical number). Audio sample data can be extracted as a {{domxref("Float32Array")}} via the `copyTo` method. There is no direct integration to the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API).

![AudioData and EncodedAudioChunk](audio-data.png)

### Muxing and Demuxing

The WebCodecs API only deals with encoding and decoding, with encoded chunks just representing binary data. I does not provide a built-in way to read `EncodedVideoChunk` objects from a video file, or write them to a playable video file.

Reading encoded chunks from a video file is a complete different process called demuxing, and to fetch `EncodedVideoChunk` objects from a video file, you will need to use a demuxing library such as [MediaBunny](https://mediabunny.dev/) or [web-demuxer](https://github.com/bilibili/web-demuxer).

![Demuxer](decoder-demuxer.png)

These libraries will follow the video container specifications (e.g., webm, mp4) to extract the track data and byte offsets for each encoded chunk, and provide methods for extracting the actual chunks from the raw file.

Likewise, to write to a playable video file, you will need a muxing library, with [MediaBunny](https://mediabunny.dev/) being the primary option for muxing. Muxing libraries will handle formatting the binary encoded data, and placing it in the correct byte position in the output file stream according to the container specification, so that the output video is playable.

You can find more information on muxing and demuxing in the [Muxing and Demuxing guide](https://webcodecsfundamentals.org/basics/muxing/) on WebCodecs Fundamentals.

## Guides

{{SubpagesWithSummaries}}

## Interfaces

- {{domxref("AudioDecoder")}}
  - : Decodes {{domxref("EncodedAudioChunk")}} objects.
- {{domxref("VideoDecoder")}}
  - : Decodes {{domxref("EncodedVideoChunk")}} objects.
- {{domxref("AudioEncoder")}}
  - : Encodes {{domxref("AudioData")}} objects.
- {{domxref("VideoEncoder")}}
  - : Encodes {{domxref("VideoFrame")}} objects.
- {{domxref("EncodedAudioChunk")}}
  - : Represents codec-specific encoded audio bytes.
- {{domxref("EncodedVideoChunk")}}
  - : Represents codec-specific encoded video bytes.
- {{domxref("AudioData")}}
  - : Represents unencoded audio data.
- {{domxref("VideoFrame")}}
  - : Represents a frame of unencoded video data.
- {{domxref("VideoColorSpace")}}
  - : Represents the color space of a video frame.
- {{domxref("ImageDecoder")}}
  - : Unpacks and decodes image data, giving access to the sequence of frames in an animated image.
- {{domxref("ImageTrackList")}}
  - : Represents the list of tracks available in the image.
- {{domxref("ImageTrack")}}
  - : Represents an individual image track.

## Examples

The basic instantion of a `VideoEncoder` looks like this, where you define the output callback where `EncodedVideoChunk` objects will be returned.

```js
const encoder = new VideoEncoder({
  output(chunk, meta) {
    // Do something with chunk, typically send to muxing library
  },
  error(e) {
    console.warn(e);
  },
});
```

You then need to configure the encoder with the codec parameter and various other fields.

```js
encoder.configure({
    'codec': 'vp9.00.10.08.00', // See codec selection guide
     width: 1280,
     height: 720,
     bitrate: 1000000 //1 MBPS,
     framerate: 25
});
```

You can then start encoding frames to the encoder. You can construct a `VideoFrame` from a `Canvas`

```js
for (let i = 0; i < 60; i++) {
  const frame = new VideoFrame(canvas, { timestamp: (i * 1e6) / 30 }); //30 fps, in microseconds
  encoder.encode(frame, { keyFrame: i % 60 == 0 });
}
```

See [Using the WebCodecs API](/en-US/docs/Web/API/WebCodecs_API/Using_the_WebCodecs_API) for more examples.

## See also

- [Video processing with WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
- [WebCodecs API Samples](https://w3c.github.io/webcodecs/samples/)
- [WebCodecsFundamentals](https://webcodecsfundamentals.org/)
- [Real-Time Video Processing with WebCodecs and Streams: Processing Pipelines](https://webrtchacks.com/real-time-video-processing-with-webcodecs-and-streams-processing-pipelines-part-1/)
- [Video Frame Processing on the Web – WebAssembly, WebGPU, WebGL, WebCodecs, WebNN, and WebTransport](https://webrtchacks.com/video-frame-processing-on-the-web-webassembly-webgpu-webgl-webcodecs-webnn-and-webtransport/)
