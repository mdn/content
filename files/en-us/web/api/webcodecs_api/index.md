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

## Usage

### Decoding

### Encoding

### Rendering

### Muxing and Demuxing

The WebCodecs API uses an asynchronous [processing model](https://w3c.github.io/webcodecs/#codec-processing-model-section). Each instance
of an encoder or decoder maintains an internal, independent processing queue. When queueing a substantial amount of work, it's important to
keep this model in mind.

Methods named `configure()`, `encode()`, `decode()`, and `flush()` operate asynchronously by appending control messages
to the end the queue, while methods named `reset()` and `close()` synchronously abort all pending work and purge the
processing queue. After `reset()`, more work may be queued following a call to `configure()`, but `close()` is a permanent operation.

Methods named `flush()` can be used to wait for the completion of all work that was pending at the time `flush()` was called. However, it
should generally only be called once all desired work is queued. It is not intended to force progress at regular intervals. Calling it
unnecessarily will affect encoder quality and cause decoders to require the next input to be a key frame.

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

In the following example, frames are returned from a {{domxref("MediaStreamTrackProcessor")}}, then encoded.
See the full example and read more about it in the article [Video processing with WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs).

```js
let frameCounter = 0;
const track = stream.getVideoTracks()[0];
const mediaProcessor = new MediaStreamTrackProcessor(track);
const reader = mediaProcessor.readable.getReader();
while (true) {
  const result = await reader.read();
  if (result.done) break;
  let frame = result.value;
  if (encoder.encodeQueueSize > 2) {
    // Too many frames in flight, encoder is overwhelmed
    // let's drop this frame.
    frame.close();
  } else {
    frameCounter++;
    const insertKeyframe = frameCounter % 150 === 0;
    encoder.encode(frame, { keyFrame: insertKeyframe });
    frame.close();
  }
}
```

## See also

- [Video processing with WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
- [WebCodecs API Samples](https://w3c.github.io/webcodecs/samples/)
- [Real-Time Video Processing with WebCodecs and Streams: Processing Pipelines](https://webrtchacks.com/real-time-video-processing-with-webcodecs-and-streams-processing-pipelines-part-1/)
- [Video Frame Processing on the Web – WebAssembly, WebGPU, WebGL, WebCodecs, WebNN, and WebTransport](https://webrtchacks.com/video-frame-processing-on-the-web-webassembly-webgpu-webgl-webcodecs-webnn-and-webtransport/)
