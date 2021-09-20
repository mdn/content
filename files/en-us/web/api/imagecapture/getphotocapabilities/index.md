---
title: ImageCapture.getPhotoCapabilities()
slug: Web/API/ImageCapture/getPhotoCapabilities
tags:
  - API
  - Experimental
  - Image
  - Image Capture
  - ImageCapture
  - Media
  - MediaStream Image Capture API
  - Method
  - Reference
  - getPhotoCapabilities
browser-compat: api.ImageCapture.getPhotoCapabilities
---
{{APIRef("MediaStream Image")}}

The **`getPhotoCapabilities()`**
method of the {{domxref("ImageCapture")}} interface returns a {{jsxref("Promise")}}
that resolves with a {{domxref("PhotoCapabilities")}} object containing the ranges of
available configuration options.

## Syntax

```js
const capabilitiesPromise = imageCaptureObj.getPhotoCapabilities()
```

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("PhotoCapabilities")}} object.

## Example

The following example, extracted from [Chrome's
Image Capture / Photo Resolution Sample](https://googlechrome.github.io/samples/image-capture/photo-resolution.html), uses the results from
`getPhotoCapabilities()` to modify the size of an input range. This example
also shows how the {{domxref("ImageCapture")}} object is created using a
{{domxref("MediaStreamTrack")}} retrieved from a device's {{domxref("MediaStream")}}.

```js
const input = document.querySelector('input[type="range"]');

var imageCapture;

navigator.mediaDevices.getUserMedia({video: true})
.then(mediaStream => {
  document.querySelector('video').srcObject = mediaStream;

  const track = mediaStream.getVideoTracks()[0];
  imageCapture = new ImageCapture(track);

  return imageCapture.getPhotoCapabilities();
})
.then(photoCapabilities => {
  const settings = imageCapture.track.getSettings();

  input.min = photoCapabilities.imageWidth.min;
  input.max = photoCapabilities.imageWidth.max;
  input.step = photoCapabilities.imageWidth.step;

  return imageCapture.getPhotoSettings();
})
.then(photoSettings => {
  input.value = photoSettings.imageWidth;
})
.catch(error => console.log('Argh!', error.name || error));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
