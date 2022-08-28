---
title: VideoFrame.format
slug: Web/API/VideoFrame/format
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - format
  - VideoFrame
  - Experimental
browser-compat: api.VideoFrame.format
---
{{APIRef("Web Codecs API")}}{{SeeCompatTable}}

The **`format`** property of the {{domxref("VideoFrame")}} interface returns the pixel format of the `VideoFrame`.

## Value

A string containing a video pixel format, one of:

- `"I420"`
  - : Also known as *Planar YUV 4:2:0*, this format is composed of three distinct planes, one plane of luma and two planes of chroma, denoted Y, U and V, and present in this order. The U an V planes are sub-sampled horizontally and vertically by a factor of 2 compared to the Y plane. Each sample in this format is 8 bits.
- `"I420A"`
  - : Also known as *Planar YUV 4:2:0 with an alpha channel*, this format is composed of four distinct planes, one plane of Luma, two planes of Chroma, denoted Y, U and V, and one place of alpha values, all present in this order. The U an V planes are sub-sampled horizontally and vertically by a factor of 2 compared to the Y and Alpha planes. Each sample in this format is 8 bits.
- `"I422"`
  - : Also known as *Planar YUV 4:2:2*, this format is composed of three distinct planes, one plane of Luma and two planes of Chroma, denoted Y, U and V, and present in this order. The U an V planes are sub-sampled horizontally by a factor of 2 compared to the Y plane, and not sub-sampled vertically. Each sample in this format is 8 bits.
- `"I444"`
  - : Also known as *Planar YUV 4:4:4*, this format is composed of three distinct planes, one plane of Luma and two planes of Chroma, denoted Y, U and V, and present in this order. Each sample in this format is 8 bits. This format does not use sub-sampling.
- `"NV12"`
  - : This format is composed of two distinct planes, one plane of Luma and then another plane for the two Chroma components. The two planes are present in this order, and are referred to as respectively the Y plane and the UV plane. The U an V components are sub-sampled horizontally and vertically by a factor of 2 compared to the components in the Y planes. Each sample in this format is 8 bits.
- `"RGBA"`
  - : This format is composed of a single plane, that encodes four components: red, green, blue, and an alpha value, present in this order. Each sample in this format is 8 bits, and each pixel is therefore 32 bits.
- `"RGBX"`
  - : This format is composed of a single plane, that encodes four components: Red, Green, Blue, and a padding value, present in this order. Each sample in this format is 8 bits. The fourth element in each pixel is to be ignored, the image is always fully opaque.
- `"BGRA"`
  - : This format is composed of a single plane, that encodes four components: Blue, Green, Red, and an alpha value, present in this order. Each sample in this format is 8 bits.
- `"BGRX"`
  - : This format is composed of a single plane, that encodes four components: Blue, Green, Red, and a padding value, present in this order. Each sample in this format is 8 bits. The fourth element in each pixel is to be ignored, the image is always fully opaque.

## Examples

The following example prints the `format` to the console.

```js
console.log(VideoFrame.format);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
