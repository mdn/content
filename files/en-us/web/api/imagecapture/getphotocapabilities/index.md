---
title: ImageCapture.getPhotoCapabilities()
slug: Web/API/ImageCapture/getPhotoCapabilities
page-type: web-api-instance-method
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
{{APIRef("MediaStream Image")}}{{SeeCompatTable}}

The **`getPhotoCapabilities()`**
method of the {{domxref("ImageCapture")}} interface returns a {{jsxref("Promise")}}
that resolves with a {{domxref("PhotoCapabilities")}} object containing the ranges of
available configuration options.

## Syntax

```js
getPhotoCapabilities()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with an object containing the following properties:

- `redEyeReduction`
  - : Returns one of `"never"`, `"always"`, or `"controllable"`. The `"controllable"` value means the device's red-eye reduction is controllable by the user.
- `imageHeight`
  - : Returns an object indicating the image height range supported by the user agent.
- `imageWidth`
  - : Returns an object indicating the image width range supported by the user agent.
- `fillLightMode`
  - : Returns an array of available fill light options. Options include `auto`, `off`, or `flash`.

## Examples

The following example, extracted from [Chrome's Image Capture / Photo Resolution Sample](https://googlechrome.github.io/samples/image-capture/photo-resolution.html), uses the results from
`getPhotoCapabilities()` to modify the size of an input range. This example
also shows how the {{domxref("ImageCapture")}} object is created using a
{{domxref("MediaStreamTrack")}} retrieved from a device's {{domxref("MediaStream")}}.

```js
const input = document.querySelector('input[type="range"]');

let imageCapture;

navigator.mediaDevices.getUserMedia({video: true})
.then((mediaStream) => {
  document.querySelector('video').srcObject = mediaStream;

  const track = mediaStream.getVideoTracks()[0];
  imageCapture = new ImageCapture(track);

  return imageCapture.getPhotoCapabilities();
})
.then((photoCapabilities) => {
  const settings = imageCapture.track.getSettings();

  input.min = photoCapabilities.imageWidth.min;
  input.max = photoCapabilities.imageWidth.max;
  input.step = photoCapabilities.imageWidth.step;

  return imageCapture.getPhotoSettings();
})
.then((photoSettings) => {
  input.value = photoSettings.imageWidth;
})
.catch((error) => console.error('Argh!', error.name || error));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
