---
title: ImageCapture.takePhoto()
slug: Web/API/ImageCapture/takePhoto
page-type: web-api-instance-method
tags:
  - API
  - Experimental
  - Image
  - ImageCapture
  - Media
  - MediaStream Image Capture
  - Method
  - Reference
  - takePhoto
browser-compat: api.ImageCapture.takePhoto
---
{{APIRef("MediaStream Image")}}{{SeeCompatTable}}

The **`takePhoto()`** method of the
{{domxref("ImageCapture")}} interface takes a single exposure using the video capture
device sourcing a {{domxref("MediaStreamTrack")}} and returns a {{jsxref("Promise")}}
that resolves with a {{domxref("Blob")}} containing the data.

## Syntax

```js
takePhoto()
takePhoto(photoSettings)
```

### Parameters

- `photoSettings` {{optional_inline}}

  - : An object that sets options for the photo to be taken. The available options are:

    - `fillLightMode`
      - : The flash setting of the capture device, one of
        `"auto"`, `"off"`, or `"flash"`.
    - `imageHeight`
      - : The desired image height as an integer. The user agent
        selects the closest height value to this setting if it only supports discrete
        heights.
    - `imageWidth`
      - : The desired image width as an integer. The user agent
        selects the closest width value to this setting if it only supports discrete
        widths.
    - `redEyeReduction`
      - : A boolean indicating whether the red-eye reduction
        should be used if it is available.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("Blob")}}.

## Examples

This example is extracted from this [Simple Image Capture demo](https://simpl.info/imagecapture/). It shows how to use the {{jsxref("Promise")}} returned by
`takePhoto()` to copy the returned {{domxref("Blob")}} to an
{{htmlelement("img")}} element. For simplicity it does not show how to instantiate the
{{domxref("ImageCapture")}} object.

```js
let takePhotoButton = document.querySelector('button#takePhoto');
let canvas = document.querySelector('canvas');

takePhotoButton.onclick = takePhoto;

function takePhoto() {
  imageCapture.takePhoto().then((blob) => {
    console.log('Took photo:', blob);
    img.classList.remove('hidden');
    img.src = URL.createObjectURL(blob);
  }).catch((error) => {
    console.error('takePhoto() error: ', error);
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
