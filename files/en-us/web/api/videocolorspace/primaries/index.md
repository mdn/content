---
title: VideoColorSpace.primaries
slug: Web/API/VideoColorSpace/primaries
tags:
  - API
  - Property
  - Reference
  - primaries
  - VideoColorSpace
browser-compat: api.VideoColorSpace.primaries
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`primaries`** read-only property of the {{domxref("VideoColorSpace")}} interface returns the color gamut of the video.

## Value

A string containing one of the following values:

- `"bt709"`
  - : Color primaries used by BT.709 and sRGB.
- `"bt470bg"`
  - : Color primaries used by BT.601 PAL.
- `"smpte170m"`
  - : Color primaries used by BT.601 NTSC.

## Examples

In the following example, `colorSpace` is a `VideoColorSpace` object returned from {{domxref("VideoFrame")}}. The value of `primaries` is printed to the console.

```js
let colorSpace = VideoFrame.colorSpace
console.log(colorSpace.primaries);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}


