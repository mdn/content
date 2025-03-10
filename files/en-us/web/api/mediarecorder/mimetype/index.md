---
title: "MediaRecorder: mimeType property"
short-title: mimeType
slug: Web/API/MediaRecorder/mimeType
page-type: web-api-instance-property
browser-compat: api.MediaRecorder.mimeType
---

{{APIRef("MediaStream Recording")}}

The **`mimeType`** read-only property of the {{domxref("MediaRecorder")}} interface returns the {{Glossary("MIME")}} media type that was specified when creating the {{domxref("MediaRecorder")}} object, or, if none was specified, which was chosen by the browser.
This is the file format of the file that would result from writing all of the recorded data to disk.

Keep in mind that not all codecs are supported by a given container; if you write media using a codec that is not supported by a given media container, the resulting file may not work reliably if at all when you try to play it back.
See our [media type and format guide](/en-US/docs/Web/Media/Guides/Formats) for information about container and codec support across browsers.

> [!NOTE]
> The term "MIME type" is officially considered to be historical; these strings are now officially known as **media types**.
> MDN Web Docs content uses the terms interchangeably.

## Value

The MIME media type which describes the format of the recorded media, as a string.
This string _may_ include the [`codecs` parameter,](/en-US/docs/Web/Media/Guides/Formats/codecs_parameter) giving details about the codecs and the codec configurations used by the media recorder.

The media type strings are standardized by the Internet Assigned Numbers Authority (IANA).
For their official list of defined media type strings, see the article [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml) on the IANA site.
See also [media types](/en-US/docs/Web/HTTP/MIME_types) to learn more about media types and how they're used in web content and by web browsers.

## Examples

```js
if (navigator.mediaDevices) {
  console.log("getUserMedia supported.");

  const constraints = { audio: true, video: true };
  const chunks = [];

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      const options = {
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 2500000,
        mimeType: "video/mp4",
      };
      const mediaRecorder = new MediaRecorder(stream, options);
      m = mediaRecorder;

      m.mimeType; // would return 'video/mp4'
      // …
    })
    .catch((error) => {
      console.error(error.message);
    });
}
```

Changing the `mimeType` in `options` to `'video/mp4; codecs="avc1.424028, mp4a.40.2"'` causes `MediaRecorder` to try to use AVC Constrained Baseline Profile Level 4 for video and AAC-LC (Low Complexity) for audio, which is good for mobile and other possible resource-constrained situations.

Assuming this configuration is acceptable to the user agent, the value returned later
by `m.mimeType` would then be
`video/mp4; codecs="avc1.424028, mp4a.40.2"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Codecs in common media types](/en-US/docs/Web/Media/Guides/Formats/codecs_parameter)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API visualization demo, by [Chris Mills](https://github.com/chrisdavidmills) ([source on GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording demo](https://simpl.info/mediarecorder/), by [Sam Dutton](https://github.com/samdutton).
- {{domxref("MediaDevices.getUserMedia()")}}
