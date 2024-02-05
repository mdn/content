---
title: "ImageCapture: getPhotoSettings() method"
short-title: getPhotoSettings()
slug: Web/API/ImageCapture/getPhotoSettings
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.ImageCapture.getPhotoSettings
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

The **`getPhotoSettings()`** method of
the {{domxref("ImageCapture")}} interface returns a {{jsxref("Promise")}} that
resolves with an object containing the current photo
configuration settings.

## Syntax

```js-nolint
getPhotoSettings()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with an object containing the following properties:

- `fillLightMode`
  - : The flash setting of the capture device, one of `"auto"`, `"off"`, or `"flash"`.
- `imageHeight`
  - : The desired image height as an integer. The browser selects the closest width value to this setting if it only supports discrete heights.
- `imageWidth`
  - : The desired image width as an integer. The browser selects the closest width value to this setting if it only supports discrete widths.
- `redEyeReduction`
  - : A boolean indicating whether the red-eye reduction should be used if it is available.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if `readyState` property of the `MediaStreamTrack` passing in the constructor is not `live`.
- `OperationError` {{domxref("DOMException")}}
  - : Thrown if the operation can't complete for any reason.

## Examples

The following example, extracted from [Chrome's Image Capture / Photo Resolution Sample](https://googlechrome.github.io/samples/image-capture/photo-resolution.html), uses the results from
`getPhotoSettings()` to modify the size of an input range. This example also
shows how the {{domxref("ImageCapture")}} object is created using a
{{domxref("MediaStreamTrack")}} retrieved from a device's {{domxref("MediaStream")}}.

```js
const input = document.querySelector('input[type="range"]');

let imageCapture;

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((mediaStream) => {
    document.querySelector("video").srcObject = mediaStream;

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
  .catch((error) => console.error("Argh!", error.name || error));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
