---
title: VideoColorSpace.matrix
slug: Web/API/VideoColorSpace/matrix
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - matrix
  - VideoColorSpace
browser-compat: api.VideoColorSpace.matrix
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`matrix`** read-only property of the {{domxref("VideoColorSpace")}} interface returns the matrix coefficient of the video. Matrix coefficients describe the relationship between sample component values and color coordinates.

## Value

A string containing one of the following values:

- `"rbg"`
  - : Matrix coefficients used by sRBG.
- `"bt709"`
  - : Matrix coefficients used by BT.709.
- `"bt470bg"`
  - : Matrix coefficients used by BT.601 PAL.
- `"smpte170m"`
  - : Matrix coefficients used by BT.601 NTSC.

## Examples

In the following example, `colorSpace` is a `VideoColorSpace` object returned from {{domxref("VideoFrame")}}. The value of `matrix` is printed to the console.

```js
let colorSpace = VideoFrame.colorSpace
console.log(colorSpace.matrix);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
