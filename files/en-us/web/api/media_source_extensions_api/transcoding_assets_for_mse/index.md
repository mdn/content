---
title: Transcoding assets for Media Source Extensions
slug: Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE
page-type: guide
---

{{DefaultAPISidebar("Media Source Extensions")}}

When working with Media Source Extensions, it is likely that you need to condition your assets before you can stream them. This article takes you through the requirements and shows you a toolchain you can use to encode your assets appropriately.

## Getting started

1. The first and most important step is to ensure that your files are comprised of a container and codec that users' browsers support.
2. Depending on the codec, you might need to fragment the file to comply with the [ISO BMFF spec](https://www.w3.org/TR/mse-byte-stream-format-isobmff/).
3. (Optional) If you decide to use Dynamic Adaptive Streaming over HTTP (DASH) for adaptive bitrate streaming, you need to transcode your assets into multiple resolutions. Most DASH clients expect a corresponding Media Presentation Description (MPD) manifest file, which is typically generated while generating the multiple resolution asset files.

Below we'll cover all of these steps, but first let's look at a toolchain we can use to do this fairly easily.

### Sample Media

If you're looking to follow the steps listed here, but don't have any media to experiment with, you can grab the [trailer to Big Buck Bunny](https://web.archive.org/web/20161102172252id_/http://video.blendertestbuilds.de/download.php?file=download.blender.org/peach/trailer_1080p.mov). Big Buck Bunny copyrighted by the Blender Foundation and is licensed under the [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/) license. Throughout this tutorial, you'll see the filename trailer_1080p.mov, which is the download.

### Tools required

When working with MSE, the following tools are a must have:

1. [ffmpeg](https://ffmpeg.org/) — A command-line utility for transcoding your media into the required formats. You can download a version for your system at the [Download FFmpeg page](https://ffmpeg.org/download.html). Extract the executable from the archive file and add it's location to your PATH statement. OSX users can also use [homebrew](https://brew.sh/) to install ffmpeg.
2. [Bento4](https://github.com/axiomatic-systems/Bento4) — A set of command-line utilities for getting asset metadata and creating content for DASH. To install, you'll need to build/compile the application yourself from the provided project files/source files, depending on your OS and preferences. See the [Building instructions](https://github.com/axiomatic-systems/Bento4#building) for more details. The prebuilt file is [here](https://www.bento4.com/downloads/). Put the contents of the `bin` directory in the same place as ffmpeg.
3. python2 — Bento4 uses it.

Get these installed successfully before moving to the next step.

Sample media should be placed in the Bento4 `utils` directory and worked here.

> **Note:** The prebuilt ffmpeg does not include libfdk_aac due to licensing reasons. Bento4 uses this by default, so you need to compile ffmpeg if necessary. If you don't need it, add `--audio-codec=aac` to the `mp4-dash-encode.py` command line.

### Container and Codec Support

As specified in [section 1.1 of the MSE spec: Goals](https://www.w3.org/TR/media-source/#goals), MSE is designed not to require support for any particular media format or codec. While this is true on paper, browser support varies for specific container/codec combinations.

To check if the browser supports a particular container, you can pass a string of the MIME type to the {{domxref("MediaSource.isTypeSupported")}} method:

```js
MediaSource.isTypeSupported("audio/mp3"); // false
MediaSource.isTypeSupported("video/mp4"); // true
MediaSource.isTypeSupported('video/mp4; codecs="avc1.4D4028, mp4a.40.2"'); // true
```

The string is the MIME type of the container, optionally followed by a list of codecs. While the MIME type is fairly simple to figure out, we can get the codec string using the [mp4info](https://nickdesaulniers.github.io/mp4info/) utility.

Currently, MP4 containers with H.264 video and AAC audio codecs have support across all modern browsers, while others don't.

To convert our sample media from a QuickTime MOV container to an MP4 container, we can use ffmpeg. Because the audio codec in the MOV container is already AAC and the video codec is h.264, we can instruct ffmpeg not to perform transcoding. Instead, it will just copy the audio and video tracks over without performing any transcoding, which is relatively faster than having to transcode.

```bash
ffmpeg -i trailer_1080p.mov -c:v copy -c:a copy bunny.mp4
```

### Checking Fragmentation

In order to properly stream MP4, we need the asset to be an [ISO BMF](https://www.w3.org/TR/mse-byte-stream-format-isobmff/) format MP4. Without proper fragmentation, any given MP4 file is not guaranteed to work with MSE. This means that metadata within the container is spread out and not lumped together.

To check whether an MP4 file is a proper MP4 stream, you can again use the [mp4info](https://nickdesaulniers.github.io/mp4info/) utility to list the atoms of an MP4.

> **Note:** The fragmented version is slightly larger than the original, due to additional metadata spread throughout the file. This is usually a file size increase of 1 percent or less.

### Fragmenting

If you have an asset that is not already an MP4, ffmpeg can handle emitting a properly fragmented MP4 during the transcode process, with the `-movflags frag_keyframe+empty_moov` command line flag:

```bash
ffmpeg -i trailer_1080p.mov -c:v copy -c:a copy -movflags frag_keyframe+empty_moov bunny_fragmented.mp4
```

If you already have an MP4, but it's not properly fragmented, you can again use ffmpeg:

```bash
ffmpeg -i non_fragmented.mp4 -movflags frag_keyframe+empty_moov fragmented.mp4
```

In both cases, Chrome may require an extra movie flag to be set:

```bash
-movflags frag_keyframe+empty_moov+default_base_moof
```

Having a properly fragmented MP4 file is all you need to get started. If you wish to employ adaptive bitrate streaming, you'll have to create encodings at multiple resolutions. While MSE is flexible enough to allow you to make your implementation, it's highly recommended to use an existing DASH client as DASH is a well-specified application protocol.

### Creating Content for DASH

Given that you have ffmpeg and Bento4's utilities accessible through your $PATH, you can run Bento4's `mp4-dash-encode.py` Python script to generate multiple encodings of your content at various resolutions. Bento4's `mp4-dash.py` Python script can then be used to generate the corresponding MPD file needed by clients.

Run the following commands:

```bash
python mp4-dash-encode.py -b 5 -v bunny_fragmented.mp4
python mp4-dash.py video_0*
```

This should output the following files:

```plain
output
├── audio
│   └── und
├── stream.mpd
└── video
    ├── 1
    ├── 2
    ├── 3
    ├── 4
    └── 5
```

> **Note:** `mp4-dash-encode.py` does not display ffmpeg error messages. You can see it by specifying the `-d` option.

> **Note:** If `"Invalid duration specification for force_key_frames: 'expr:eq(mod(n"` is displayed as an error message, modify `mp4-dash-encode.py` and remove two `"'"` from `"-force_key_frames 'expr:eq(mod(n,%d),0)'"`.

## Summary

With your video properly encoded and adaptive bitrate media generated, you're now ready to begin adaptive bitrate streaming on the web using DASH and MSE.
