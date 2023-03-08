---
title: VideoFrame.allocationSize()
slug: Web/API/VideoFrame/allocationSize
page-type: web-api-instance-method
browser-compat: api.VideoFrame.allocationSize
---

{{APIRef("Web Codecs API")}}

The **`allocationSize()`** method of the {{domxref("VideoFrame")}} interface returns the number of bytes required to hold the video as filtered by options passed into the method.

## Syntax

```js-nolint
allocationSize()
allocationSize(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An object containing the following:
    - `rect` {{optional_inline}}
      - : The rectangle of pixels to copy from the `VideoFrame`. If unspecified the {{domxref("VideoFrame.visibleRect","visibleRect")}} will be used. This is in the format of a dictionary object containing:
        - `x`: The x-coordinate.
        - `y`: The y-coordinate.
        - `width`: The width of the frame.
        - `height`: The height of the frame.
    - `layout` {{optional_inline}}
      - : A list containing the following values for each plane in the `VideoFrame`. Planes may not overlap. If unspecified the planes will be tightly packed:
        - `offset`
          - : An integer representing the offset in bytes where the given plane begins.
        - `stride`
          - : An integer representing the number of bytes, including padding, used by each row of the plane.

### Return value

An integer containing the number of bytes needed to hold the frame as specified by `options`.

## Examples

In the following example the `allocationSize` is returned for the rectangle at top left with dimensions of 800 by 600.

```js
const videoRect = {
  x: 0,
  y: 0,
  width: 800,
  height: 600,
};
let size = VideoFrame.allocationSize({ rect: videoRect });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
