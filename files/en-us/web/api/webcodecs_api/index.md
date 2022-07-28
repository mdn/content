---
title: WebCodecs API
slug: Web/API/WebCodecs_API
page-type: web-api-overview
tags:
  - API
  - WebCodecs
  - Overview
  - Reference
---
{{DefaultAPISidebar("WebCodecs API")}}

The **WebCodecs API** gives web developers low-level access to the individual frames of a video stream and chunks of audio.
It is useful for web applications that require full control over the way media is processed.
For example, video or audio editors, and video conferencing.

## Concepts and Usage

Many Web APIs use media codecs internally.
For example, the {{domxref("Web Audio API")}}, and the {{domxref("WebRTC API")}}.
However these APIs do not allow developers to work with individual frames of a video stream and unmuxed chunks of encoded audio or video.

Web developers have typically used WebAssembly in order to get around this limitation,
and to work with media codecs in the browser.
However, this requires additional bandwidth to download codecs that already exist in the browser,
reducing performance and power efficiency, and adding additional development overhead.

The WebCodecs API provides access to codecs that are already in the browser.
It gives access to raw video frames, chunks of audio data, image decoders, audio and video encoders and decoders.

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
See the full example and read more about it in the article [Video processing with WebCodecs](https://web.dev/webcodecs/).

```js
let frame_counter = 0;
const track = stream.getVideoTracks()[0];
const media_processor = new MediaStreamTrackProcessor(track);
const reader = media_processor.readable.getReader();
while (true) {
    const result = await reader.read();
    if (result.done)
      break;
    let frame = result.value;
    if (encoder.encodeQueueSize > 2) {
      // Too many frames in flight, encoder is overwhelmed
      // let's drop this frame.
      frame.close();
    } else {
      frame_counter++;
      const insert_keyframe = frame_counter % 150 === 0;
      encoder.encode(frame, { keyFrame: insert_keyframe });
      frame.close();
    }
}
```

## See also

- [Video processing with WebCodecs](https://web.dev/webcodecs/)
