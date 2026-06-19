---
title: "VTTRegion: regionAnchorX property"
short-title: regionAnchorX
slug: Web/API/VTTRegion/regionAnchorX
page-type: web-api-instance-property
browser-compat: api.VTTRegion.regionAnchorX
---

{{APIRef("WebVTT")}}

The **`regionAnchorX`** property of the {{domxref("VTTRegion")}} interface represents the x-coordinate of the region anchor, as a percentage of the region's width.

## Value

A number, in the range `0` to `100` inclusive, representing the x-coordinate of the region anchor as a percentage of the region's width. The default is `0`.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown when set to a value that is negative or greater than `100`.

## Examples

In the following example, a new {{domxref("VTTRegion")}} is created, then the value of `regionAnchorX` is set to `30`. The value is then printed to the console.

```js
const region = new VTTRegion();
region.regionAnchorX = 30;
console.log(region.regionAnchorX);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
