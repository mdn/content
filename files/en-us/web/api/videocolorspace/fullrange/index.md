---
title: "VideoColorSpace: fullRange property"
short-title: fullRange
slug: Web/API/VideoColorSpace/fullRange
page-type: web-api-instance-property
browser-compat: api.VideoColorSpace.fullRange
---

{{DefaultAPISidebar("WebCodecs API")}}

The **`fullRange`** read-only property of the {{domxref("VideoColorSpace")}} interface returns `true` if full-range color values are used.

## Value

A {{jsxref("Boolean")}}, `true` if full-range color values are used.

## Examples

In the following example, `colorSpace` is a `VideoColorSpace` object returned from {{domxref("VideoFrame")}}. The value of `fullRange` is printed to the console.

```js
let colorSpace = VideoFrame.colorSpace;
console.log(colorSpace.fullRange);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
