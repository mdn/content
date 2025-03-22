---
title: "VideoFrame: copyTo() method"
short-title: copyTo()
slug: Web/API/VideoFrame/copyTo
page-type: web-api-instance-method
browser-compat: api.VideoFrame.copyTo
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`copyTo()`** method of the {{domxref("VideoFrame")}} interface copies the contents of the `VideoFrame` to an `ArrayBuffer`.

## Syntax

```js-nolint
copyTo(destination)
copyTo(destination, options)
```

### Parameters

- `destination`
  - : An `ArrayBuffer`, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}} to copy to.
- `options` {{Optional_Inline}}
  - : An object containing the following:
    - `rect` {{Optional_Inline}}
      - : The rectangle of pixels to copy from the `VideoFrame`. If unspecified, the {{domxref("VideoFrame.visibleRect","visibleRect")}} will be used. This is in the format of a dictionary object containing:
        - `x`: The x-coordinate.
        - `y`: The y-coordinate.
        - `width`: The width of the frame.
        - `height`: The height of the frame.
    - `layout` {{Optional_Inline}}
      - : A list containing the following values for each plane in the `VideoFrame`:
        - `offset`
          - : An integer representing the offset in bytes where the given plane begins.
        - `stride`
          - : An integer representing the number of bytes, including padding, used by each row of the plane.
            Planes may not overlap. If no `layout` is specified, the planes will be tightly packed.
    - `format` {{Optional_Inline}}
      - : A pixel format for the pixel data in the `destination`. Can be set to `"RGBA"`, `"RGBX"`, `"BGRA"`, `"BGRX"`. If unspecified, the {{domxref("VideoFrame.format","format")}} will be used.
    - `colorSpace` {{Optional_Inline}}
      - : Specifies the color space of the pixel data in the `destination`. Can be set to `"srgb"` for the [sRGB color space](https://en.wikipedia.org/wiki/SRGB) or `"display-p3"` for the [display-p3 color space](https://en.wikipedia.org/wiki/DCI-P3). Only applicable for RGB pixel formats. If unspecified, `"srgb` will be used.

### Return value

A `Promise` that resolves to the layout of the copy when the copy has completed.

## Examples

The following example copies the entire contents of `videoFrame`.

```js
let buffer = new Uint8Array(videoFrame.allocationSize());
let layout = await videoFrame.copyTo(buffer);
```

The following example converts a portion of the `videoFrame` to RGB format.

```js
const videoRect = {
  x: 100,
  y: 100,
  width: 80,
  height: 60,
};
const options = {
  rect: videoRect,
  format: "RGBX",
  colorSpace: "display-p3",
};
const size = videoFrame.allocationSize(options);
const buffer = new ArrayBuffer(size);
const layout = await videoFrame.copyTo(buffer, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
