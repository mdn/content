---
title: MediaStream.getVideoTracks()
slug: Web/API/MediaStream/getVideoTracks
page-type: web-api-instance-method
tags:
  - API
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaStream
  - Method
  - Reference
  - Video
  - getVideoTracks
  - stream
  - track
browser-compat: api.MediaStream.getVideoTracks
---
{{APIRef("Media Capture and Streams")}}

The **`getVideoTracks()`** method of the
{{domxref("MediaStream")}} interface returns a sequence of
{{domxref("MediaStreamTrack")}} objects representing the video tracks in this stream.

## Syntax

```js
getVideoTracks()
```

### Parameters

None.

### Return value

An array of {{domxref("MediaStreamTrack")}} objects, one for each video track contained
in the media stream. Video tracks are those tracks whose
{{domxref("MediaStreamTrack.kind", "kind")}} property is `video`. The array
is empty if the stream contains no video tracks.

> **Note:** The order of the tracks is not defined by the specification,
> and may not be the same from one call to `getVideoTracks()` to another.

Early versions of this API included a special `VideoStreamTrack` interface
which was used as the type for each entry in the list of video streams; however, this
has since been merged into the main {{domxref("MediaStreamTrack")}} interface.

## Examples

The following example, extracted from [Chrome's
Image Capture / Photo Resolution Sample](https://googlechrome.github.io/samples/image-capture/photo-resolution.html), uses `getVideoTracks()` to
retrieve a track for passing to the {{domxref("ImageCapture.ImageCapture",
  "ImageCapture()")}} constructor.

```js
let imageCapture;

navigator.mediaDevices.getUserMedia({video: true})
.then((mediaStream) => {
  document.querySelector('video').srcObject = mediaStream;

  const track = mediaStream.getVideoTracks()[0];
  imageCapture = new ImageCapture(track);

  return imageCapture.getPhotoCapabilities();
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
