---
title: Video processing concepts
slug: Web/API/WebCodecs_API/Video_processing_concepts
page-type: guide
---

{{DefaultAPISidebar("WebCodecs API")}}

Before working with the WebCodecs API, it is helpful to understand some foundational concepts around how video works, how it is compressed, and how video files are structured.
This guide covers the key concepts: video frames, codecs, encoding and decoding, containers, and muxing and demuxing.

## Video frames

A video is a sequence of images displayed in rapid succession.
Each image in the sequence is called a **video frame**, and each frame has an associated timestamp indicating when it should be displayed.

Each frame is composed of pixels, and each pixel is represented by red, green, and blue (RGB) color component values.
Uncompressed, a single 4K frame (~8 million pixels at 3 bytes per pixel) is approximately 25 MB.
At 30 frames per second, one hour of uncompressed 4K video would be around 750 GB.
Practical video files are orders of magnitude smaller due to compression.

## Codecs

A **codec** (short for encode/decode) is an algorithm for compressing and decompressing video data.
Codecs reduce file size dramatically — typically by a factor of 100 or more — by exploiting redundancy within and between frames.

Common techniques include:

- **Spatial compression**: Reducing detail within a single frame using transforms such as the Discrete Cosine Transform (DCT).
- **Temporal compression**: Encoding only the differences between successive frames rather than each frame in full.

This leads to two frame types:

- **Key frames** (also called I-frames): Fully encoded frames that do not depend on any other frame.
- **Delta frames** (also called P-frames or B-frames): Frames that encode only the changes relative to a reference frame.

Widely used video codecs include H.264 (AVC), VP9, AV1, and H.265 (HEVC).

## Encoding and decoding

**Encoding** is the process of compressing raw video frames into a compact binary representation.
**Decoding** is the reverse: reconstructing raw video frames from that compressed representation.

Encoding is significantly more computationally expensive than decoding.
Most modern devices include dedicated hardware for accelerated encoding and decoding.
The WebCodecs API exposes this hardware acceleration to web applications.

## Containers

A video file is not just encoded video data.
It also contains encoded audio, metadata (such as duration and dimensions), and timing information.
A **container format** (such as MP4 or WebM) defines how all of this data is organized within a file.

Common container formats include:

- **MP4** (.mp4): Widely supported; typically contains H.264 or H.265 video and AAC audio.
- **WebM** (.webm): An open format; typically contains VP9 or AV1 video and Opus audio.

## Muxing and demuxing

**Muxing** (multiplexing) is the process of combining encoded video, encoded audio, and metadata into a container file.
**Demuxing** (demultiplexing) is the reverse: parsing a container file to extract the encoded video chunks, audio chunks, and metadata.

The WebCodecs API handles encoding and decoding only.
Muxing and demuxing are outside the scope of the API and require a separate library.
See the [Demuxing](/en-US/docs/Web/API/WebCodecs_API#demuxing) section on the WebCodecs API overview page for library options.

## See also

- [WebCodecs API](/en-US/docs/Web/API/WebCodecs_API)
- [Using the WebCodecs API](/en-US/docs/Web/API/WebCodecs_API/Using_the_WebCodecs_API)
- [Codec selection](/en-US/docs/Web/API/WebCodecs_API/Codec_selection)
