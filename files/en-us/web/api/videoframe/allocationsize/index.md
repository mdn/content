---
title: VideoFrame.allocationSize()
slug: Web/API/VideoFrame/allocationSize
tags:
  - API
  - Method
  - Reference
  - allocationSize
  - VideoFrame
browser-compat: api.VideoFrame.allocationSize
---
{{DefaultAPISidebar("Web Codecs API")}}

The **`allocationSize()`** method of the {{domxref("VideoFrame")}} interface returns the number of bytes required to hold the video as filtered by options passed into the method.

## Syntax

```js
VideoFrame.allocationSize();
VideoFrame.allocationSize(options);
```

### Parameters

- `options`{{Optional_Inline}}
  - : An object containing the following:
    - `rect`{{Optional_Inline}}
      - : The rectangle of pixels to copy from the `VideoFrame`. If unspecified the {{domxref("VideoFrame.visibleRect","visibleRect")}} will be used. This is in the format of a dictionary object containing:
          - `x`: The x-coordinate.
          - `y`: The y-coordinate.
          - `width`: The width of the frame.
          - `height`: The height of the frame.
    - `layout`{{Optional_Inline}}
      - : A list containing the following values for each plane in the `VideoFrame`. Planes may not overlap. If unspecified the planes will be tightly packed:
          - `offset`: An integer representing the offset in bytes where the given plane begins.
          - `stride`: An integer representing the number of bytes, including padding, used by each row of the plane.

### Return Value

An integer containing the number of bytes needed to hold the frame as specified by `options`.

## Examples

In the following example the `allocationSize` is returned for the rectangle at top left with dimensions of 800 by 600.

```js
const videoRect = {
  x:0,
  y:0,
  width:800,
  height:600
}
let size = VideoFrame.allocationSize({rect: videoRect})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

