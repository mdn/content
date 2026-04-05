---
title: Using the WebCodecs API
slug: Web/API/WebCodecs_API/Using_the_WebCodecs_API
page-type: guide
---

{{DefaultAPISidebar("WebCodecs API")}}

This guide covers the core interfaces of the WebCodecs API: {{domxref("VideoFrame")}}, {{domxref("EncodedVideoChunk")}}, {{domxref("VideoEncoder")}}, and {{domxref("VideoDecoder")}}.

## VideoFrame

A {{domxref("VideoFrame")}} represents a single uncompressed video frame, including its pixel data and metadata such as its timestamp.

A `VideoFrame` can be constructed from any image source:

```js
const frame = new VideoFrame(canvas, { timestamp: 0 });
```

A `VideoFrame` can also be drawn to a canvas:

```js
ctx.drawImage(frame, 0, 0);
```

Because `VideoFrame` objects can consume significant GPU memory, they must be explicitly released when no longer needed:

```js
frame.close();
```

## EncodedVideoChunk

An {{domxref("EncodedVideoChunk")}} represents a compressed video frame — the binary output of a `VideoEncoder` or the input to a `VideoDecoder`.
It contains the encoded bytes and the same timing metadata as the source frame.

## VideoEncoder

A {{domxref("VideoEncoder")}} accepts `VideoFrame` objects and produces `EncodedVideoChunk` objects.

Encoding is asynchronous and output is delivered via a callback:

```js
const encoder = new VideoEncoder({
  output(chunk, metadata) {
    // handle encoded chunk
  },
  error(e) {
    console.error(e);
  },
});
```

Before encoding, the encoder must be configured with a codec, dimensions, bitrate, and frame rate:

```js
encoder.configure({
  codec: "vp09.00.10.08",
  width: 1280,
  height: 720,
  bitrate: 4_000_000,
  framerate: 30,
});
```

Frames are then submitted for encoding individually.
Key frames should be inserted at regular intervals (typically every 1–2 seconds):

```js
let frameIndex = 0;
encoder.encode(frame, { keyFrame: frameIndex % 60 === 0 });
frame.close();
frameIndex++;
```

After all frames have been submitted, call `flush()` to ensure all pending output has been emitted:

```js
await encoder.flush();
```

## VideoDecoder

A {{domxref("VideoDecoder")}} accepts `EncodedVideoChunk` objects and produces `VideoFrame` objects.

Like `VideoEncoder`, it is configured before use and delivers output via a callback:

```js
const decoder = new VideoDecoder({
  output(frame) {
    ctx.drawImage(frame, 0, 0);
    frame.close();
  },
  error(e) {
    console.error(e);
  },
});

decoder.configure(config);
```

When decoding a file, the configuration (codec string, dimensions, and so on) is determined by the container and provided by the demuxer library, not chosen by the developer.

Chunks are then submitted for decoding:

```js
for (const chunk of chunks) {
  decoder.decode(chunk);
}
await decoder.flush();
```

## See also

- [Video processing concepts](/en-US/docs/Web/API/WebCodecs_API/Video_processing_concepts)
- [Codec selection](/en-US/docs/Web/API/WebCodecs_API/Codec_selection)
- {{domxref("AudioEncoder")}}
- {{domxref("AudioDecoder")}}
