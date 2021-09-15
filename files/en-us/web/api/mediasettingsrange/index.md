---
title: MediaSettingsRange
slug: Web/API/MediaSettingsRange
tags:
  - API
  - Image
  - ImageCapture
  - Interface
  - MediaSettingsRange
  - MediaStream
  - MediaStream Image Capture API
  - Refernce
browser-compat: api.MediaSettingsRange
---
{{SeeCompatTable}}{{APIRef("MediaStream Image")}}

The **`MediaSettingsRange`** interface of the [MediaStream Image Capture API](/en-US/docs/Web/API/MediaStream_Image_Capture_API) provides the possible range and value size of {{domxref("PhotoCapabilities.imageHeight")}} and {{domxref("PhotoCapabilities.imageWidth")}}. A {{domxref("PhotoCapabilities")}} object can be retrieved by calling {{domxref("ImageCapture.PhotoCapabilities","ImageCapture.PhotoCapabilities()")}}.

## Properties

- {{domxref("MediaSettingsRange.max")}}
  - : Returns the maximum value of this settings.
- {{domxref("MediaSettingsRange.min")}}
  - : Returns the minimum value of this setting.
- {{domxref("MediaSettingsRange.step")}}
  - : Returns the minimum difference between consecutive values of this setting.

## Example

The following example, extracted from [Chrome's Image Capture / Photo Resolution Sample](https://googlechrome.github.io/samples/image-capture/photo-resolution.html), uses the results from `getPhotoCapabilities().imageWidth` to modify the size of an input range.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
