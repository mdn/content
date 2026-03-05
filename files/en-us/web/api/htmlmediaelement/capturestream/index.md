---
title: "HTMLMediaElement: captureStream() method"
short-title: captureStream()
slug: Web/API/HTMLMediaElement/captureStream
page-type: web-api-instance-method
browser-compat: api.HTMLMediaElement.captureStream
---

{{APIRef("Media Capture and Streams")}}

The **`captureStream()`** method of the {{domxref("HTMLMediaElement")}} interface returns a {{domxref('MediaStream')}} object that streams a real-time capture of the content being rendered in the media element.

This can be used, for example, as a source for a [WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}}.

## Syntax

```js-nolint
captureStream()
```

### Parameters

None.

### Return value

A {{domxref('MediaStream')}} object which can be used as a source for audio and/or video data by other media processing code, or as a source for [WebRTC](/en-US/docs/Glossary/WebRTC).

## Examples

### Basic usage

In this example, an event handler is established so that clicking a button starts capturing the contents of a media element with the ID `"playback"` into a {{domxref("MediaStream")}}.
The stream can then be used for other purposes, such as a WebRTC stream to share prerecorded videos with another person during a video call.

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

## See also

- [Recording a media element](/en-US/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)
- [MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API)
- {{domxref("HTMLCanvasElement.captureStream()")}}
- {{domxref("MediaStream")}}
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
