---
title: "VTTRegion: width property"
short-title: width
slug: Web/API/VTTRegion/width
page-type: web-api-instance-property
browser-compat: api.VTTRegion.width
---

{{APIRef("WebVTT")}}

The **`width`** property of the {{domxref("VTTRegion")}} interface represents the width of the region, as a percentage of the video's width.

## Value

A number in the range `0` to `100` inclusive, representing the width of the region as a percentage of the video's width. The default is `100`.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown when set to a value that is negative or greater than `100`.

## Examples

In the following example, a new {{domxref("VTTRegion")}} is created, then the value of `width` is set to `50`. The value is then printed to the console.

```js
const region = new VTTRegion();
region.width = 50; // Set the region to 50% of the video's width
console.log(region.width);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
