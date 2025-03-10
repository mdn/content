---
title: "MediaStream: getVideoTracks() method"
short-title: getVideoTracks()
slug: Web/API/MediaStream/getVideoTracks
page-type: web-api-instance-method
browser-compat: api.MediaStream.getVideoTracks
---

{{APIRef("Media Capture and Streams")}}

The **`getVideoTracks()`** method of the
{{domxref("MediaStream")}} interface returns a sequence of
{{domxref("MediaStreamTrack")}} objects representing the video tracks in this stream.

## Syntax

```js-nolint
getVideoTracks()
```

### Parameters

None.

### Return value

An array of {{domxref("MediaStreamTrack")}} objects, one for each video track contained
in the media stream. Video tracks are those tracks whose
{{domxref("MediaStreamTrack.kind", "kind")}} property is `video`. The array
is empty if the stream contains no video tracks.

> [!NOTE]
> The order of the tracks is not defined by the specification,
> and may not be the same from one call to `getVideoTracks()` to another.

## Examples

The following example, extracted from [Chrome's
Image Capture / Photo Resolution Sample](https://googlechrome.github.io/samples/image-capture/photo-resolution.html), uses `getVideoTracks()` to
retrieve a track for passing to the {{domxref("ImageCapture.ImageCapture", "ImageCapture()")}} constructor.

```js
let imageCapture;

navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
  document.querySelector("video").srcObject = mediaStream;

  const track = mediaStream.getVideoTracks()[0];
  imageCapture = new ImageCapture(track);

  return imageCapture.getPhotoCapabilities();
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
