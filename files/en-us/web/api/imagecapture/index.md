---
title: ImageCapture
slug: Web/API/ImageCapture
page-type: web-api-interface
tags:
  - API
  - Experimental
  - Image
  - Image Capture
  - ImageCapture
  - Interface
  - Media
  - MediaStream Image Capture API
  - Reference
browser-compat: api.ImageCapture
---
{{APIRef("MediaStream Image")}}{{SeeCompatTable}}

The **`ImageCapture`** interface of the [MediaStream Image Capture API](/en-US/docs/Web/API/MediaStream_Image_Capture_API) provides methods to enable the capture of images or photos from a camera or other photographic device. It provides an interface for capturing images from a photographic device referenced through a valid {{domxref("MediaStreamTrack")}}.

## Constructor

- {{domxref("ImageCapture.ImageCapture()", "ImageCapture()")}} {{Experimental_Inline}}
  - : Creates a new `ImageCapture` object which can be used to capture still frames (photos) from a given {{domxref("MediaStreamTrack")}} which represents a video stream.

## Properties

- {{domxref("ImageCapture.track")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a reference to the {{domxref("MediaStreamTrack")}} passed to the constructor.

## Methods

The `ImageCapture` interface is based on {{domxref("EventTarget")}}, so it includes the methods defined by that interface as well as the ones listed below.

- {{domxref("ImageCapture.takePhoto()")}} {{Experimental_Inline}}
  - : Takes a single exposure using the video capture device sourcing a {{domxref("MediaStreamTrack")}} and returns a {{jsxref("Promise")}} that resolves with a {{domxref("Blob")}} containing the data.
- {{domxref("ImageCapture.getPhotoCapabilities()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves with a {{domxref("PhotoCapabilities")}} object containing the ranges of available configuration options.
- {{domxref("ImageCapture.getPhotoSettings()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves with a {{domxref("PhotoSettings")}} object containing the current photo configuration settings.
- {{domxref("ImageCapture.grabFrame()")}} {{Experimental_Inline}}
  - : Takes a snapshot of the live video in a {{domxref("MediaStreamTrack")}}, returning an {{domxref("ImageBitmap")}}, if successful.

## Example

The following code is taken from [Chrome's Grab Frame - Take Photo Sample](https://googlechrome.github.io/samples/image-capture/grab-frame-take-photo.html). Since `ImageCapture` requires some place to capture an image from, the example below starts with a device's media device (in other words a camera).

This example shows, roughly, a {{domxref("MediaStreamTrack")}} extracted from a device's {{domxref("MediaStream")}}. The track is then used to create an `ImageCapture` object so that `takePhoto()` and `grabFrame()` can be called. Finally, it shows how to apply the results of these calls to a canvas object.

```js
let imageCapture;

function onGetUserMediaButtonClick() {
  navigator.mediaDevices.getUserMedia({video: true})
  .then((mediaStream) => {
    document.querySelector('video').srcObject = mediaStream;

    const track = mediaStream.getVideoTracks()[0];
    imageCapture = new ImageCapture(track);
  })
  .catch((error) => console.error(error));
}

function onGrabFrameButtonClick() {
  imageCapture.grabFrame()
  .then((imageBitmap) => {
    const canvas = document.querySelector('#grabFrameCanvas');
    drawCanvas(canvas, imageBitmap);
  })
  .catch((error) => console.error(error));
}

function onTakePhotoButtonClick() {
  imageCapture.takePhoto()
  .then((blob) => createImageBitmap(blob))
  .then((imageBitmap) => {
    const canvas = document.querySelector('#takePhotoCanvas');
    drawCanvas(canvas, imageBitmap);
  })
  .catch((error) => console.error(error));
}

/* Utils */

function drawCanvas(canvas, img) {
  canvas.width = getComputedStyle(canvas).width.split('px')[0];
  canvas.height = getComputedStyle(canvas).height.split('px')[0];
  let ratio  = Math.min(canvas.width / img.width, canvas.height / img.height);
  let x = (canvas.width - img.width * ratio) / 2;
  let y = (canvas.height - img.height * ratio) / 2;
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height,
      x, y, img.width * ratio, img.height * ratio);
}

document.querySelector('video').addEventListener('play', () => {
  document.querySelector('#grabFrameButton').disabled = false;
  document.querySelector('#takePhotoButton').disabled = false;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
