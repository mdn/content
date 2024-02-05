---
title: "ImageCapture: grabFrame() method"
short-title: grabFrame()
slug: Web/API/ImageCapture/grabFrame
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.ImageCapture.grabFrame
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

The **`grabFrame()`** method of the
{{domxref("ImageCapture")}} interface takes a snapshot of the live video in a
{{domxref("MediaStreamTrack")}} and returns a {{jsxref("Promise")}} that resolves with
a {{domxref("ImageBitmap")}} containing the snapshot.

## Syntax

```js-nolint
grabFrame()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to an {{domxref("ImageBitmap")}} object.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if `readyState` property of the `MediaStreamTrack` passing in the constructor is not `live`.
- `UnknownError` {{domxref("DOMException")}}
  - : Thrown if the operation can't complete for any reason.

## Examples

This example is extracted from this [Simple Image Capture demo](https://simpl.info/imagecapture/). It shows how to use the {{jsxref("Promise")}} returned by
`grabFrame()` to copy the returned frame to a {{htmlelement("canvas")}}
element. For simplicity it does not show how to instantiate the
{{domxref("ImageCapture")}} object.

```js
let grabFrameButton = document.querySelector("button#grabFrame");
let canvas = document.querySelector("canvas");

grabFrameButton.onclick = grabFrame;

function grabFrame() {
  imageCapture
    .grabFrame()
    .then((imageBitmap) => {
      console.log("Grabbed frame:", imageBitmap);
      canvas.width = imageBitmap.width;
      canvas.height = imageBitmap.height;
      canvas.getContext("2d").drawImage(imageBitmap, 0, 0);
      canvas.classList.remove("hidden");
    })
    .catch((error) => {
      console.error("grabFrame() error: ", error);
    });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
