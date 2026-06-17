---
title: "VTTRegion: lines property"
short-title: lines
slug: Web/API/VTTRegion/lines
page-type: web-api-instance-property
browser-compat: api.VTTRegion.lines
---

{{APIRef("WebVTT")}}

The **`lines`** property of the {{domxref("VTTRegion")}} interface represents the height of the region, in number of lines.

## Value

A number giving the number of lines of the region within which the text of the contained cues is rendered. The default is `3`.

## Examples

In the following example a new {{domxref("VTTRegion")}} is created, then the value of `lines` is set to `4`. The value is then printed to the console.

```js
const region = new VTTRegion();
region.lines = 4; // Use 4 lines of height.
console.log(region.lines);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
