---
title: File Format Conversion
slug: Plugins/Flash_to_HTML5/Video/File_format_conversion
tags:
  - Flash
  - HTML
  - adaptive streaming
  - formats
  - transcoding
---
{{PreviousMenuNext("Plugins/Flash_to_HTML5/Video/Planning", "Plugins/Flash_to_HTML5/Video/DRM_and_authentication", "Plugins/Flash_to_HTML5/Video")}}

Once you've planned out what you want to do, the first step is to convert your video (or audio) files into formats compatible with HTML embedding.

## What files have you got?

How to proceed depends on what format you've got your video files in:

- If you've already got your files in web-compatible formats (such as MP4 and WebM), then great. You may need to do some optimization to get the file size down as low as you can without resulting in unacceptable quality, but for now you're in good shape.
- If not, ideally you should transcode your original high-quality versions to web formats. This isn't too much of a problem.
- If you only have Flash video files (FLV or F4V), then this is more problematic. See if you can find the original versions from before they were converted to FLV. Only convert from FLV as a last resort — your quality will likely suffer as a result.

## Transcoding your video

There are many good quality, free, transcoding applications and utilities available, such as [FFmpeg](https://ffmpeg.org/) and [Handbrake](https://handbrake.fr/). You probably already have your favorite; consult the documentation for your particular transcoder for transcoding options.

If you need to transcode from Flash video files, be wary — not all transcoders support this (although FFmpeg and Handbrake both do.)

If your Flash video files use a web-compatible video compression format, and they have same bitrate you want for the web, you may be able to swap the container format without having to do any transcoding. This would give you the same quality, and save you some time too. Many transcoders have an option to do this, for example FFmpeg has the `-c copy` option:

```bash
ffmpeg -i mymovie.flv -c copy mymovie.mp4
```

## Formats for adaptive streaming

If you want your video playback to be able to react to changing network conditions (e.g. start to serve a lower bitrate video if the network becomes slow), then you'll want to package your video with an adaptive bitrate.

- To do this, first you'll have to use a transcoder like FFmpeg to create fragmented MP4s suitable for adaptive streaming. This is achieved in FFmpeg using the `-movflags frag_keyframe+empty_moov` flag.
- You'll need encodings in multiple resolutions, so the process will need to be repeated.
- The next step is to use a utility like [Bento4](https://github.com/axiomatic-systems/Bento4)'s `mp4-dash.py` Python script to generate the corresponding MPD manifest file needed by clients to access the different resolution fragmented MP4s.

## See also

For more information about transcoding:

- [Transcoding assets for Media Source Extensions](/en-US/docs/Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE)
- [From Raw Video to Web Ready](https://web.dev/media/#prepare-media-files-for-the-web)
