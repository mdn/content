---
title: "VTTRegion: VTTRegion() constructor"
short-title: VTTRegion()
slug: Web/API/VTTRegion/VTTRegion
page-type: web-api-constructor
browser-compat: api.VTTRegion.VTTRegion
---

{{APIRef("WebVTT")}}

The **`VTTRegion()`** constructor creates a new {{domxref("VTTRegion")}} object instance.

## Syntax

```js-nolint
new VTTRegion()
```

### Parameters

None.

### Return value

A new {{domxref("VTTRegion")}} object.

The properties of the returned object are initialized to the following values:

- {{domxref("VTTRegion.id", "id")}}: `""` (the empty string)
- {{domxref("VTTRegion.width", "width")}}: `100`
- {{domxref("VTTRegion.lines", "lines")}}: `3`
- {{domxref("VTTRegion.regionAnchorX", "regionAnchorX")}}: `0`
- {{domxref("VTTRegion.regionAnchorY", "regionAnchorY")}}: `100`
- {{domxref("VTTRegion.viewportAnchorX", "viewportAnchorX")}}: `0`
- {{domxref("VTTRegion.viewportAnchorY", "viewportAnchorY")}}: `100`
- {{domxref("VTTRegion.scroll", "scroll")}}: `""` (the empty string)

## Examples

```js
const region = new VTTRegion();
region.width = 50; // Use 50% of the video width
region.lines = 4; // Use 4 lines of height.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
