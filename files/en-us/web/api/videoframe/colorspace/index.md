---
title: VideoFrame.colorSpace
slug: Web/API/VideoFrame/colorSpace
page-type: web-api-instance-property
browser-compat: api.VideoFrame.colorSpace
---

{{APIRef("Web Codecs API")}}

The **`colorSpace`** property of the {{domxref("VideoFrame")}} interface returns a {{domxref("VideoColorSpace")}} object representing the color space of the video.

## Value

A {{domxref("VideoColorSpace")}} object.

## Examples

The following example prints the `colorSpace` to the console.

```js
const cnv = document.createElement("canvas");
// draw something on the canvas
// ...
const videoFrame = new VideoFrame(cnv, { timestamp: 0 });
console.log(videoFrame.colorSpace);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
