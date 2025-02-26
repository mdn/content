---
title: "HTMLMediaElement: captureStream() method"
short-title: captureStream()
slug: Web/API/HTMLMediaElement/captureStream
page-type: web-api-instance-method
browser-compat: api.HTMLMediaElement.captureStream
---

{{APIRef("Media Capture and Streams")}}

The **`captureStream()`** method of the {{domxref("HTMLMediaElement")}} interface returns a {{domxref('MediaStream')}} object which is streaming a real-time capture of the content being rendered in the media element.

This can be used, for example, as a source for a [WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}}.

## Syntax

```js-nolint
captureStream()
```

### Parameters

None.

### Return value

A {{domxref('MediaStream')}} object which can be used as a source for audio and/or
video data by other media processing code, or as a source for [WebRTC](/en-US/docs/Glossary/WebRTC).

## Examples

In this example, an event handler is established so that clicking a button starts
capturing the contents of a media element with the ID `"playback"` into a
{{domxref("MediaStream")}}. The stream can then be used for other purposes—like a source
for streaming over WebRTC, to allow sharing prerecorded videos with another person
during a video call.

```js
document.querySelector(".playAndRecord").addEventListener("click", () => {
  const playbackElement = document.getElementById("playback");
  const captureStream = playbackElement.captureStream();
  playbackElement.play();
});
```

See [Recording a media element](/en-US/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element) for a longer and more intricate example and explanation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Firefox-specific notes

Prior to Firefox 51, you couldn't use `captureStream()` on a media element
whose source is, itself, a {{domxref("MediaStream")}} (like a {{HTMLElement("video")}}
element which is presenting a stream being received over a
{{domxref("RTCPeerConnection")}}). Beginning in Firefox 51, this works. This means you
can capture a stream from the video element and use {{domxref("MediaRecorder")}} to
record it. See [Firefox bug 1259788](https://bugzil.la/1259788) for details.

However, `captureStream()` is still prefixed as
`mozCaptureStream()` on Firefox for good reason: there are some quirks in the
present implementation which are worth noting:

- The Firefox implementation currently only works as described in the specification
  when the media element's source is, itself, a {{domxref("MediaStream")}}.
- If the media element's source isn't a `MediaStream`, the output from this
  method isn't compatible with the spec, and if you change the source after starting
  capture, the output capture stream can't accept the new source data due to that
  incompatibility, so no {{domxref("MediaStreamTrack")}}s from the new source
  `MediaStream` are added to the captured stream, resulting in output that
  doesn't capture the updated source.
- Switching the source back to a `MediaStream` adds tracks back to the
  stream and it works again as expected.
- Calling `mozCaptureMediaStream()` on an element with a
  `MediaStream` source returns a stream that only contains tracks while the
  element is playing a `MediaStream`.
- If you call `mozCaptureMediaStream()` on a media element with no source
  media, its compatibility mode will be based on the first source that's added; for
  example, if it's a `MediaStream`, then the capture stream will only work
  with MediaStream sources from then on.
- This special behavior will be removed once the non-`MediaStream` source
  support is brought up to specification and the method is unprefixed. See
  [Firefox bug 1259788](https://bugzil.la/1259788) for details.

## See also

- [Recording a media element](/en-US/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)
- [MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API)
- {{domxref("HTMLCanvasElement.captureStream()")}}
- {{domxref("MediaStream")}}
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
