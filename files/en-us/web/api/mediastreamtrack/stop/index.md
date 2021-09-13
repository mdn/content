---
title: MediaStreamTrack.stop()
slug: Web/API/MediaStreamTrack/stop
tags:
  - API
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaStreamTrack
  - Method
  - Reference
  - Streams
  - WebRTC
  - stop
browser-compat: api.MediaStreamTrack.stop
---
{{APIRef("Media Capture and Streams")}}

The **`MediaStreamTrack.stop()`** method stops the track.

## Syntax

```js
track.stop()
```

## Description

Calling `stop()` tells the {{glossary("user agent")}} that the track's
source—whatever that source may be, including files, network streams, or a local camera
or microphone—is no longer needed by the {{domxref("MediaStreamTrack")}}. Since multiple
tracks may use the same source (for example, if two tabs are using the device's
microphone), the source itself isn't necessarily immediately stopped. It is instead
disassociated from the track and the track object is stopped. Once no media tracks are
using the source, the source may actually be completely stopped.

Immediately after calling `stop()`, the
{{domxref("MediaStreamTrack.readyState", "readyState")}} property is set to
`ended`.

## Examples

### Stopping a video stream

In this example, we see a function which stops a streamed video by calling
`stop()` on every track on a given {{HTMLElement("video")}}.

```js
function stopStreamedVideo(videoElem) {
  const stream = videoElem.srcObject;
  const tracks = stream.getTracks();

  tracks.forEach(function(track) {
    track.stop();
  });

  videoElem.srcObject = null;
}
```

This works by obtaining the video element's stream from its
{{domxref("HTMLMediaElement.srcObject", "srcObject")}} property. Then the stream's track
list is obtained by calling its {{domxref("MediaStream.getTracks", "getTracks()")}}
method. From there, all that remains to do is to iterate over the track list using
{{jsxref("Array.forEach", "forEach()")}} and calling each track's `stop()`
method.

Finally, `srcObject` is set to `null` to sever the link to the
{{domxref("MediaStream")}} object so it can be released.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaStreamTrack")}}, the interface it belongs to.
- {{domxref("MediaStreamTrack.readyState")}}
- {{event("ended")}}
