---
title: "VTTRegion: viewportAnchorY property"
short-title: viewportAnchorY
slug: Web/API/VTTRegion/viewportAnchorY
page-type: web-api-instance-property
browser-compat: api.VTTRegion.viewportAnchorY
---

{{APIRef("WebVTT")}}

The **`viewportAnchorY`** property of the {{domxref("VTTRegion")}} interface represents the y-coordinate of the viewport anchor, as a percentage of the video's height.

## Value

A number, in the range `0` to `100` inclusive, representing the y-coordinate of the viewport anchor as a percentage of the video's height. The default is `100`.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown when set to a value that is negative or greater than `100`.

## Examples

In the following example, a new {{domxref("VTTRegion")}} is created, then the value of `viewportAnchorY` is set to `75`. The value is then printed to the console.

```js
const region = new VTTRegion();
region.viewportAnchorY = 75; // Place the region 75% from the top edge of the video
console.log(region.viewportAnchorY);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
