---
title: VideoColorSpace.transfer
slug: Web/API/VideoColorSpace/transfer
tags:
  - API
  - Property
  - Reference
  - transfer
  - VideoColorSpace
browser-compat: api.VideoColorSpace.transfer
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`transfer`** read-only property of the {{domxref("VideoColorSpace")}} interface returns the opto-electronic transfer characteristics of the video.

### Value

A string containing one of the following values:

- `"bt709"`
  - : Transfer characteristics used by BT.709.
- `"smpte170m"`
  - : Transfer characteristics used by BT.601 NTSC.
- `"iec61966-2-1"`
  - : Transfer characteristics used by sRGBA.

## Examples

In the following example, `colorSpace` is a `VideoColorSpace` object returned from {{domxref("VideoFrame")}}. The value of `transfer` is printed to the console.

```js
let colorSpace = VideoFrame.colorSpace
console.log(colorSpace.transfer);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}


