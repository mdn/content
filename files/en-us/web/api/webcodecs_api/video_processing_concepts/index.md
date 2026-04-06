---
title: Video processing concepts
slug: Web/API/WebCodecs_API/Video_processing_concepts
page-type: guide
---

{{DefaultAPISidebar("WebCodecs API")}}

Before working with the WebCodecs API, it is helpful to understand some foundational concepts around how video works, how it is compressed, and how video files are structured.
This guide covers the key concepts: video frames, codecs, encoding and decoding, containers, and muxing and demuxing.

## Video frames

A video is a sequence of images displayed in rapid succession. Each image in the sequence is called a **video frame**, and each frame has an associated timestamp indicating when it should be displayed.

![Video Frames](video-frames.png)

Each pixel in the video frame is composed of 3 components, a Red, Green and Blue value (also called an RGB value). Each color channel is represented by 1 byte (a uint8 representing an integer from 0-255, indicating the intensity of the color channel for that pixel), meaning that each pixel is represented by at least 3 bytes of information.

![A video frame decomposed into RGB channels](rgb.svg)

Uncompressed, a single 4K frame (~8 million pixels at 3 bytes per pixel) is approximately 25 MB. At 30 frames per second, one hour of uncompressed 4K video would be around 750 GB, which is impractically large for storage or streaming.

Codecs were developed in order to compress video, typically by 1-2 orders of magnitude, to be able to practically store and stream video content given typical device network and storage constraints.

## Codecs

A **codec** (short for encode/decode) is an algorithm for compressing and decompressing video data. Codecs reduce file size dramatically — typically by a factor of 100 or more through a variety of different techniques. While there are a number of video codecs used within the browser, such as `vp9`, `av1` and `h264`, they all apply some form of the following techniques:

### Color space transformations

Codecs will transform the original RGB color values into the YUV colorspace, with the Y channel capturing changes in brightness, and UV channels capturing the other color information. The codecs will then subsample the UV color channels, reducing data use by ~50% for minimal perceived quality loss.

![YUV subsampling](yuv.svg)

This colorspace transformation shows up within the `format` property of the `VideoFrame` object. The `format` can take the following values:

- `I420` - Normal YUV subsampling, with a Y channel and sub-sampled U and V channels.
- `NV12` - Similar to YUV, but instead of storing data in 3 planes, it interleaves the UV data together into one plane
- `RGBA` - Standard RGB but with an alpha channel
- `BGRA` - Same as RGB, but in reverse order (Blue, Green, Red)

### Spatial Compression

All the major codecs use a technique called the Discrete Cosine Transform, which transforms a standard image into the frequency domain. Codecs then remove high frequency details before transforming back into the original colorspace. The effect looks like this:

![Throwing away high detail information](dct.png)

The amount of detail removed is determined dynamically by the encoding algorithm. This can be adjusted by configuring

- The codec string, such as `av01.0.12H.08`, which specificies the codec (AV1), as well as the profile and level, which determine the logic used by the codec to determine how much quality to remove given a specified bitrate.
- The bitrate, which is a parameter determining how much data the output filestream will use. Larger bitrates result in larger file sizes, while also removing less detail, resulting in higher quality

The following shows the tradeoff between quality and bitrate, using baseline `vp9` on a 1080p video:

![Bitrate ladder](bitrate-ladder.png)

### Temporal Compression

Successive frames in a video are typically visually similar to one another. Instead of encoding each video frame as an independent image, video codecs calculate the difference between frames, and encode just the frame differences in a compact binary representation. Codecs typically use a number of techniques such as motion compensation to reduce the amount of data required to encode frame differences.

![Frame differences](frame-diff.png)
Codecs will then store the first video frame in a sequence as a key frame, and then storing subsequent frames as just frame differences (called delta frames).

![Key frames vs delta frames](key-frames.png)

Videos are typically encoded with key frames at regular intervals. To reconstruct a given delta frame, it is necessary to decode the previous key frame, and then all the previous delta frames, in order, up until the current delta frame, in order to properly add up all the frame differences and construct the full current frame for display.
In WebCodecs, the `EncodedVideoChunk` interface has a `type` property which can take the value `"key"` or `"delta"` denoting whether or not the chunk represents a key frame or a delta frame.

When encoding with a `VideoEncoder`, it is possible to determine when to set a video as a key frame or a delta frame by using the `keyFrame` parameter in the encoder method

```js
 encoder.encode(frame, {keyFrame: /* */})
```

## Encoding and decoding

### Codec Compatibility

For codecs to be useful, it is necessary to be able to both encode video (turn raw video into compressed binary data) with a codec, and to be able to decode the same video (turn the compressed binary data back into raw video frames) with the same codec. The video industry has therefore coalesced around a handful of standard codecs such as `vp9`, `h264` and `av1`.

Applications which primarily create video content (e.g., video editing tools), and therefore primarily encode video, typically choose a video codec for encoding in order to maximize compatibility with video player software.

Applications which primarily consume video content (e.g., video player software) and therefore primarily decode video will typically try to support as many possible codecs as possible.

Applications which control both encoding and decoding (e.g., a video streaming website) have much more flexibility on codec choice, and can therefore choose codecs based on factors such as cost and encoding speed.

### Encoding is Expensive

Encoding is significantly more computationally expensive than decoding, typically by 1-2 orders of magnitude. Video conferencing applications will often use older codecs such as `vp8` because, although it results in lower quality video for the same bitrate, it is also less computationally expensive than newer codecs like `vp9`.

### Hardware Acceleration

Most consumer devices include specialized hardware specifically designed to encode and decode video. Leveraging these specialized chips for encoding and decoding is called hardware acceleration, and can speed up encoding tasks by 2 orders of magnitude compared to standard CPU based encoding.

One of the key advantages of the WebCodecs API is the ability to use hardware accelerated encoding, making applications like video editing and high performance streaming practical on consumer devices.

## Containers

Codecs only deal with encoding raw media data into a binary compressed form and vice-versa. A video file, such as a WebM, MP4 or MKV file, contains both metadata such as track information, duration etc.., as well as encoded media data.

![Containers](containers.png)

Each type of video file has its own container spec, such the [WebM spec](https://www.w3.org/TR/mse-byte-stream-format-webm/) and the [MP4 Spec](https://github.com/alfg/quick-dive-into-mp4), which specifies how metadata and encoded media should be formatted and stored within the file stream.

A given container format can actually support a variety of different codecs. Here are the most common containers and the codecs they support:

| Container     | Video codecs           | Audio codecs         |
| ------------- | ---------------------- | -------------------- |
| MP4 (.mp4)    | H.264, H.265, AV1      | AAC, MP3, Opus       |
| WebM (.webm)  | VP8, VP9, AV1          | Vorbis, Opus         |
| MKV (.mkv)    | H.264, H.265, VP9, AV1 | AAC, MP3, Opus, FLAC |
| AVI (.avi)    | H.264, VP8             | MP3, AAC             |
| MPEG-TS (.ts) | H.264, H.265           | AAC, MP3             |
| OGG (.ogg)    | Theora                 | Vorbis, Opus         |

A video player needs to both follow the container spec to extract metadata and encoded chunks (called demuxing), as well as to decode the encoded video/audio in order to play the video file.

While the {{domxref("HTMLVideoElement")}} handles both demuxing and decoding, and primarily supports MP4 and WebM formats, the WebCodecs API does not deal with container formats.

To play a video with WebCodecs, it is necessary to both demux the file (typically using a demuxing library) and then decode the encoded chunks.

![Demuxing](decoder-demuxer.png)

e.g.,
Likewise, to write a video file with WebCodecs it is necessary to also follow the container spec, writing metadata and placing the encoded chunks at the correct position in the output file stream. This is called muxing, and is not handled natively by the WebCodecs API, instead requiring a 3rd party library like [MediaBunny](https://github.com/Vanilagy/mediabunny)

See the [Muxing and Demuxing](/en-US/docs/Web/API/WebCodecs_API#muxing_and_demuxing) section on the WebCodecs API overview page for library options for demuxing and muxing.

## See also

- [Video Codec Guide](/en-US/docs/Web/Media/Guides/Formats/Video_codecs)
- [WebCodecs API](/en-US/docs/Web/API/WebCodecs_API)
- [Using the WebCodecs API](/en-US/docs/Web/API/WebCodecs_API/Using_the_WebCodecs_API)
- [Codec selection](/en-US/docs/Web/API/WebCodecs_API/Codec_selection)
