---
title: MediaStream Image Capture API
slug: Web/API/MediaStream_Image_Capture_API
page-type: web-api-overview
tags:
  - API
  - Image
  - MediaStream
  - MediaStream Image Capture API
  - Overview
  - Reference
  - Video
  - Experimental
browser-compat: api.ImageCapture
---
{{DefaultAPISidebar("Image Capture API")}}{{SeeCompatTable}}

The **MediaStream Image Capture API** is an API for capturing images or videos from a photographic device. In addition to capturing data, it also allows you to retrieve information about device capabilities such as image size, red-eye reduction and whether or not there is a flash and what they are currently set to. Conversely, the API allows the capabilities to be configured within the constraints what the device allows.

## MediaStream image capture concepts and usage

The process of retrieving an image or video stream happens as described below. The example code is adapted from [Chrome's Image Capture examples](https://googlechrome.github.io/samples/image-capture/).

First, get a reference to a device by calling {{domxref("MediaDevices.getUserMedia()")}}. The example below says give me whatever video device is available, though the `getUserMedia()` method allows more specific capabilities to be requested. This method returns a {{jsxref("Promise")}} that resolves with a {{domxref("MediaStream")}} object.

```js
navigator.mediaDevices.getUserMedia({ video: true })
  .then((mediaStream) => {
    // Do something with the stream.
  })
```

Next, isolate the visual part of the media stream. Do this by calling {{domxref("MediaStream.getVideoTracks()")}}. This returns an array of {{domxref("MediaStreamTrack")}} objects. The code below assumes that the first item in the `MediaStreamTrack` array is the one to use. You can use the properties of the `MediaStreamTrack` objects to select the one you need.

```js
const track = mediaStream.getVideoTracks()[0];
```

At this point, you might want to configure the device capabilities before capturing an image. You can do this by calling {{domxref("MediaStreamTrack.applyConstraints","applyConstraints()")}} on the track object before doing anything else.

```js
let zoom = document.querySelector('#zoom');
const capabilities = track.getCapabilities();
// Check whether zoom is supported or not.
if (!capabilities.zoom) {
  return;
}
track.applyConstraints({ advanced : [{ zoom: zoom.value }] });
```

Finally, pass the `MediaStreamTrack` object to the {{domxref("ImageCapture.ImageCapture()", "ImageCapture()")}} constructor. Though a `MediaStream` holds several types of tracks and provides multiple methods for retrieving them, the ImageCapture constructor will throw a {{domxref("DOMException")}} of type `NotSupportedError` if {{domxref("MediaStreamTrack.kind")}} is not `"video"`.

```js
let imageCapture = new ImageCapture(track);
```

## Interfaces

- {{domxref("ImageCapture")}} {{Experimental_Inline}}
  - : An interface for capturing images from a photographic device referenced through a valid {{domxref("MediaStreamTrack")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaStream")}}
- {{domxref("MediaStreamTrack")}}
