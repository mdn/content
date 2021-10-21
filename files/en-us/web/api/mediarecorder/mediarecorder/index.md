---
title: MediaRecorder()
slug: Web/API/MediaRecorder/MediaRecorder
tags:
  - API
  - Audio
  - Constructor
  - Media
  - Media Capture
  - Media Recorder API
  - MediaRecorder
  - Reference
  - Video
browser-compat: api.MediaRecorder.MediaRecorder
---
{{APIRef("MediaStream Recording")}}

The **`MediaRecorder()`** constructor
creates a new {{domxref("MediaRecorder")}} object that will record a specified
{{domxref("MediaStream")}}.

The object can optionally be configured to record
using a specific media container (file type), and, further, can specify the exact codec
and codec configuration(s) to use by specifying [the `codecs` parameter](/en-US/docs/Web/Media/Formats/codecs_parameter).

## Syntax

```js
var mediaRecorder = new MediaRecorder(stream[, options]);
```

### Parameters

- `stream`
  - : The {{domxref("MediaStream")}} that will be recorded. This source media can come
    from a stream created using {{domxref("MediaDevices.getUserMedia",
    "navigator.mediaDevices.getUserMedia()")}} or from an {{HTMLElement("audio")}},
    {{HTMLElement("video")}} or {{HTMLElement("canvas")}} element.
- `options` {{optional_inline}}

  - : A dictionary object that can contain the following properties:

    - `mimeType`: A MIME type specifying the format for the resulting
      media; you may specify the container format (the browser will select its preferred
      codecs for audio and/or video), or you may [use the `codecs` parameter](/en-US/docs/Web/Media/Formats/codecs_parameter) and/or the `profiles` parameter to
      provide detailed information about which codecs to use and how to configure them.
      Applications can check in advance if a `mimeType` is supported by the
      {{Glossary("user agent")}} by calling
      {{domxref("MediaRecorder.isTypeSupported()")}}.
    - `audioBitsPerSecond`: The chosen bitrate for the audio component of
      the media.
    - `videoBitsPerSecond`: The chosen bitrate for the video component of
      the media.
    - `bitsPerSecond`: The chosen bitrate for the audio and video
      components of the media. This can be specified instead of the above two
      properties. If this is specified along with one or the other of the above
      properties, this will be used for the one that isn't specified.

    > **Note:** If bits per second values are not specified for video and/or audio, the default
    > adopted for video is 2.5Mbps, while the audio default is adaptive, depending upon
    > the sample rate and the number of channels.

    > **Note:** Video resolution, frame rate and similar settings are specified as constraints
    > when calling {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}},
    > not here in the MediaRecorder API.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the specified MIME type is not supported by the user agent.

## Example

This example shows how to create a media recorder for a specified stream, whose audio
bit rate is set to 128 Kbit/sec and whose video bit rate is set to 2.5 Mbit/sec. The
recorded media data will be stored in an MP4 wrapper (so if you gather the chunks of
media data and save them to disk, they will be in an MP4 file).

```js
...
if (navigator.mediaDevices.getUserMedia) {
  var constraints = { audio: true, video: true };
  var chunks = [];

  var onSuccess = function(stream) {
    var options = {
      audioBitsPerSecond : 128000,
      videoBitsPerSecond : 2500000,
      mimeType : 'video/mp4'
    }
    var mediaRecorder = new MediaRecorder(stream,options);
    m = mediaRecorder;

...
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the MediaRecorder API](/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/web-dictaphone/): MediaRecorder +
  getUserMedia + Web Audio API visualization demo, by [Chris Mills](https://twitter.com/chrisdavidmills) ([source on Github](https://github.com/mdn/web-dictaphone/).)
- [simpl.info MediaStream Recording demo](http://simpl.info/mediarecorder/), by [Sam Dutton](https://twitter.com/sw12).
- {{domxref("MediaDevices.getUserMedia")}}
