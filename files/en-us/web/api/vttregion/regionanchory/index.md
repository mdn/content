---
title: "VTTRegion: regionAnchorY property"
short-title: regionAnchorY
slug: Web/API/VTTRegion/regionAnchorY
page-type: web-api-instance-property
browser-compat: api.VTTRegion.regionAnchorY
---

{{APIRef("WebVTT")}}

The **`regionAnchorY`** property of the {{domxref("VTTRegion")}} interface represents the y-coordinate of the region anchor, as a percentage of the region's height.

## Value

A number, in the range `0` to `100` inclusive, representing the y-coordinate of the region anchor as a percentage of the region's height. The default is `100`.

## Examples

In the following example, a new {{domxref("VTTRegion")}} is created, then the value of `regionAnchorY` is set to `70`. The value is then printed to the console.

```js
const region = new VTTRegion();
region.regionAnchorY = 70;
console.log(region.regionAnchorY);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
