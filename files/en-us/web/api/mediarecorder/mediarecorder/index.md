---
title: "MediaRecorder: MediaRecorder() constructor"
short-title: MediaRecorder()
slug: Web/API/MediaRecorder/MediaRecorder
page-type: web-api-constructor
browser-compat: api.MediaRecorder.MediaRecorder
---

{{APIRef("MediaStream Recording")}}

The **`MediaRecorder()`** constructor
creates a new {{domxref("MediaRecorder")}} object that will record a specified
{{domxref("MediaStream")}}.

The object can optionally be configured to record
using a specific media container (file type), and, further, can specify the exact codec
and codec configuration(s) to use by specifying [the `codecs` parameter](/en-US/docs/Web/Media/Guides/Formats/codecs_parameter).

## Syntax

```js-nolint
new MediaRecorder(stream)
new MediaRecorder(stream, options)
```

### Parameters

- `stream`
  - : The {{domxref("MediaStream")}} that will be recorded. This source media can come
    from a stream created using {{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia()")}} or from an {{HTMLElement("audio")}},
    {{HTMLElement("video")}} or {{HTMLElement("canvas")}} element.
- `options` {{optional_inline}}

  - : A dictionary object that can contain the following properties:

    - `mimeType` {{optional_inline}}
      - : A MIME type specifying the format for the resulting
        media; you may specify the container format (the browser will select its preferred
        codecs for audio and/or video), or you may [use the `codecs` parameter](/en-US/docs/Web/Media/Guides/Formats/codecs_parameter) and/or the `profiles` parameter to
        provide detailed information about which codecs to use and how to configure them.
        Applications can check in advance if a `mimeType` is supported by the
        {{Glossary("user agent")}} by calling
        {{domxref("MediaRecorder.isTypeSupported_static", "MediaRecorder.isTypeSupported()")}}.
        Defaults to an empty string.
    - `audioBitsPerSecond` {{optional_inline}}
      - : The chosen bitrate for the audio component of
        the media.
    - `videoBitsPerSecond` {{optional_inline}}
      - : The chosen bitrate for the video component of
        the media.
    - `bitsPerSecond` {{optional_inline}}
      - : The chosen bitrate for the audio and video
        components of the media. This can be specified instead of the above two
        properties. If this is specified along with one or the other of the above
        properties, this will be used for the one that isn't specified.
    - `audioBitrateMode` {{optional_inline}}
      - : The bitrate mode that should be used to encode the audio.
        Can be `constant`, which indicates that the recorder should encode at a constant bitrate,
        or `variable`, which indicates that the recorder should encode using a variable bitrate,
        thus allowing more space to be used for complex signals and less space for less-complex signals.
        Defaults to `variable`.
    - `videoKeyFrameIntervalDuration` {{optional_inline}}
      - : The nominal interval in time between key frames in the encoded video stream. The {{glossary("user agent")}} controls key-frame generation based on this option and the `videoKeyFrameIntervalCount` option.
    - `videoKeyFrameIntervalCount` {{optional_inline}}
      - : The interval in number of frames between key frames in the encoded video stream. The {{glossary("user agent")}} controls key-frame generation considering this option as well as `videoKeyFrameIntervalDuration` option.

    > [!NOTE]
    > If bits per second values are not specified for video and/or audio, the default
    > adopted for video is 2.5Mbps, while the audio default is adaptive, depending upon
    > the sample rate and the number of channels.

    > [!NOTE]
    > Video resolution, frame rate and similar settings are specified as constraints
    > when calling {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}},
    > not here in the MediaStream Recording API.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the specified MIME type is not supported by the user agent.

## Examples

This example shows how to create a media recorder for a specified stream, whose audio
bit rate is set to 128 Kbit/sec and whose video bit rate is set to 2.5 Mbit/sec. The
recorded media data will be stored in an MP4 wrapper (so if you gather the chunks of
media data and save them to disk, they will be in an MP4 file).

```js
if (navigator.mediaDevices.getUserMedia) {
  const constraints = { audio: true, video: true };
  const chunks = [];

  const onSuccess = (stream) => {
    const options = {
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 2500000,
      mimeType: "video/mp4",
    };
    const mediaRecorder = new MediaRecorder(stream, options);
    m = mediaRecorder;

    // …
  };
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder +
  getUserMedia + Web Audio API visualization demo, by [Chris Mills](https://github.com/chrisdavidmills) ([source on GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording demo](https://simpl.info/mediarecorder/), by [Sam Dutton](https://github.com/samdutton).
- {{domxref("MediaDevices.getUserMedia")}}
