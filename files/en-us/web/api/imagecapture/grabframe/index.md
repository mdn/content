---
title: ImageCapture.grabFrame()
slug: Web/API/ImageCapture/grabFrame
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
  - grabFrame
browser-compat: api.ImageCapture.grabFrame
---
{{APIRef("MediaStream Image")}}{{SeeCompatTable}}

The **`grabFrame()`** method of the
{{domxref("ImageCapture")}} interface takes a snapshot of the live video in a
{{domxref("MediaStreamTrack")}} and returns a {{jsxref("Promise")}} that resolves with
a {{domxref("ImageBitmap")}} containing the snapshot.

## Syntax

```js
grabFrame()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to an {{domxref("ImageBitmap")}} object.

## Examples

This example is extracted from this [Simple Image Capture demo](https://simpl.info/imagecapture/). It shows how to use the {{jsxref("Promise")}} returned by
`grabFrame()` to copy the returned frame to a {{htmlelement("canvas")}}
element. For simplicity it does not show how to instantiate the
{{domxref("ImageCapture")}} object.

```js
let grabFrameButton = document.querySelector('button#grabFrame');
let canvas = document.querySelector('canvas');

grabFrameButton.onclick = grabFrame;

function grabFrame() {
  imageCapture.grabFrame()
    .then((imageBitmap) => {
      console.log('Grabbed frame:', imageBitmap);
      canvas.width = imageBitmap.width;
      canvas.height = imageBitmap.height;
      canvas.getContext('2d').drawImage(imageBitmap, 0, 0);
      canvas.classList.remove('hidden');
    })
    .catch((error) => {
      console.error('grabFrame() error: ', error);
    });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
