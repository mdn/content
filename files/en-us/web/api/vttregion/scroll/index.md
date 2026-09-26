---
title: "VTTRegion: scroll property"
short-title: scroll
slug: Web/API/VTTRegion/scroll
page-type: web-api-instance-property
browser-compat: api.VTTRegion.scroll
---

{{APIRef("WebVTT")}}

The **`scroll`** property of the {{domxref("VTTRegion")}} interface is an enumerated value indicating how existing cues in the region move when a new cue is added.

## Value

A string. Possible values are:

- `""` (the empty string)
  - : Existing cues in the region don't scroll; instead, they are displayed at the same time as new cues. This is the default.
- `"up"`
  - : New cues are added at the bottom of the region, and existing cues scroll upwards to make space for them.

## Examples

In the following example, a new {{domxref("VTTRegion")}} is created, then the value of `scroll` is set to `"up"`. The value is then printed to the console.

```js
const region = new VTTRegion();
region.scroll = "up";
console.log(region.scroll);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
