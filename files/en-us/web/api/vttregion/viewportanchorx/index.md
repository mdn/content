---
title: "VTTRegion: viewportAnchorX property"
short-title: viewportAnchorX
slug: Web/API/VTTRegion/viewportAnchorX
page-type: web-api-instance-property
browser-compat: api.VTTRegion.viewportAnchorX
---

{{APIRef("WebVTT")}}

The **`viewportAnchorX`** property of the {{domxref("VTTRegion")}} interface represents the x-coordinate of the viewport anchor, as a percentage of the video's width.

## Value

A number, in the range `0` to `100` inclusive, representing the x-coordinate of the viewport anchor as a percentage of the video's width. The default is `0`.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown when set to a value that is negative or greater than `100`.

## Examples

In the following example, a new {{domxref("VTTRegion")}} is created, then the value of `viewportAnchorX` is set to `25`. The value is then printed to the console.

```js
const region = new VTTRegion();
region.viewportAnchorX = 25; // Place the region 25% from the left edge of the video
console.log(region.viewportAnchorX);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
