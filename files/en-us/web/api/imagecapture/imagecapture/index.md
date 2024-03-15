---
title: "ImageCapture: ImageCapture() constructor"
short-title: ImageCapture()
slug: Web/API/ImageCapture/ImageCapture
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.ImageCapture.ImageCapture
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

The **`ImageCapture()`** constructor
creates a new {{domxref("ImageCapture")}} object.

## Syntax

```js-nolint
new ImageCapture(videoTrack)
```

### Parameters

- `videoTrack`
  - : A {{domxref("MediaStreamTrack")}} from which the still images will be taken. This
    can be any source, such as an incoming stream of a video conference, a playing movie,
    or the stream from a webcam.

### Return value

A new `ImageCapture` object which can be used to capture still frames from
the specified video track.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the `videoTrack` parameter's `kind` property is not `video`.

## Examples

The following example shows how to use a call to
{{domxref("MediaDevices.getUserMedia()")}} to retrieve the
{{domxref("MediaStreamTrack")}} needed by the `ImageCapture()` constructor.

```js
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((mediaStream) => {
    document.querySelector("video").srcObject = mediaStream;
    const track = mediaStream.getVideoTracks()[0];
    imageCapture = new ImageCapture(track);
  })
  .catch((error) => console.error(error));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
