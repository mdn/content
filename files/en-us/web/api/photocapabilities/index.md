---
title: PhotoCapabilities
slug: Web/API/PhotoCapabilities
tags:
  - API
  - Experimental
  - Image
  - Image Capture
  - Interface
  - Media
  - MediaStream Image Capture API
  - PhotoCapabilities
  - Reference
browser-compat: api.PhotoCapabilities
---
{{APIRef("MediaStream Image")}}

The **`PhotoCapabilities`** interface of the [MediaStream Image Capture API](/en-US/docs/Web/API/MediaStream_Image_Capture_API) provides available configuration options for an attached photographic device. A `PhotoCapabilities` object is retrieved by calling {{domxref("ImageCapture.getPhotoCapabilities()")}}.

## Properties

- {{domxref("PhotoCapabilities.redEyeReduction")}} {{readonlyinline}}
  - : Returns one of `"never"`, `"always"`, or `"controllable"`. The `"controllable"` value means the device's red-eye reduction is controllable by the user.
- {{domxref("PhotoCapabilities.imageHeight")}} {{readonlyinline}}
  - : Returns an object indicating the image height range supported by the user agent.
- {{domxref("PhotoCapabilities.imageWidth")}} {{readonlyinline}}
  - : Returns an object indicating the image width range supported by the user agent.
- {{domxref("PhotoCapabilities.fillLightMode")}} {{readonlyinline}}
  - : Returns an array of available fill light options. Options may include `auto`, `off`, or `flash`.

## Example

The following example, extracted from [Chrome's Image Capture / Photo Resolution Sample](https://googlechrome.github.io/samples/image-capture/photo-resolution.html), uses the results from {{domxref("ImageCapture.getPhotoCapabilities()", "getPhotoCapabilities()")}} to modify the size of an input range. This example also shows how the {{domxref("ImageCapture")}} object is created using a {{domxref("MediaStreamTrack")}} retrieved from a device's {{domxref("MediaStream")}}.

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
