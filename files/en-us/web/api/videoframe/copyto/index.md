---
title: VideoFrame.copyTo()
slug: Web/API/VideoFrame/copyTo
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - copyTo
  - VideoFrame
browser-compat: api.VideoFrame.copyTo
---
{{DefaultAPISidebar("Web Codecs API")}}

The **`copyTo()`** method of the {{domxref("VideoFrame")}} interface copies the contents of the `VideoFrame` to an `ArrayBuffer`.

## Syntax

```js
copyTo(destination)
copyTo(destination, options)
```

### Parameters

- `destination`
  - : An `ArrayBuffer`, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}} to copy to.
- `options` {{optional_inline}}
  - : An object containing the following:
    - `rect` {{optional_inline}}
      - : The rectangle of pixels to copy from the `VideoFrame`. If unspecified, the {{domxref("VideoFrame.visibleRect","visibleRect")}} will be used. This is in the format of a dictionary object containing:
        - `x`: The x-coordinate.
        - `y`: The y-coordinate.
        - `width`: The width of the frame.
        - `height`: The height of the frame.
    - `layout` {{optional_inline}}
      - : A list containing the following values for each plane in the `VideoFrame`:
        - `offset`
          - : An integer representing the offset in bytes where the given plane begins.
        - `stride`
          - : An integer representing the number of bytes, including padding, used by each row of the plane.
        Planes may not overlap. If no `layout` is specified, the planes will be tightly packed.

### Return value

A `Promise` that resolves to the layout of the copy when the copy has completed.

## Examples

The following example copies the entire contents of `videoFrame`.

```js
let buffer = new Uint8Array(videoFrame.allocationSize());
let layout = await videoFrame.copyTo(buffer);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
