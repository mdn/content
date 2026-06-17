---
title: "VTTRegion: scroll property"
short-title: scroll
slug: Web/API/VTTRegion/scroll
page-type: web-api-instance-property
browser-compat: api.VTTRegion.scroll
---

{{APIRef("WebVTT")}}

The **`scroll`** property of the {{domxref("VTTRegion")}} interface is an enumerated value representing how adding a new cue will move existing cues in the region.

## Value

A string. Possible values are:

- `""` (the empty string)
  - : The cues in the region are not to scroll, and are instead displayed simultaneously. This is the default.
- `"up"`
  - : The cues in the region are added at the bottom of the region and scroll any already-displayed cues upwards.

## Examples

In the following example a new {{domxref("VTTRegion")}} is created, then the value of `scroll` is set to `"up"`. The value is then printed to the console.

```js
const region = new VTTRegion();
region.scroll = "up";
console.log(region.scroll);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
