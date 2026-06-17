---
title: "VTTRegion: viewportAnchorX property"
short-title: viewportAnchorX
slug: Web/API/VTTRegion/viewportAnchorX
page-type: web-api-instance-property
browser-compat: api.VTTRegion.viewportAnchorX
---

{{APIRef("WebVTT")}}

The **`viewportAnchorX`** property of the {{domxref("VTTRegion")}} interface represents the x-coordinate of the viewport anchor, as a percentage of the video.

## Value

A number, in the range `0` to `100`, giving the x-coordinate of the viewport anchor as a percentage of the video. The default is `0`.

## Examples

In the following example a new {{domxref("VTTRegion")}} is created, then the value of `viewportAnchorX` is set to `25`. The value is then printed to the console.

```js
const region = new VTTRegion();
region.viewportAnchorX = 25; // Have the region start at 25% from the left.
console.log(region.viewportAnchorX);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
