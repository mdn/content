---
title: "VTTRegion: id property"
short-title: id
slug: Web/API/VTTRegion/id
page-type: web-api-instance-property
browser-compat: api.VTTRegion.id
---

{{APIRef("WebVTT")}}

The **`id`** property of the {{domxref("VTTRegion")}} interface is a string that identifies the region.

## Value

A string that identifies the region. Initialized to an empty string when the `VTTRegion` object is first constructed.

## Examples

In the following example, a new {{domxref("VTTRegion")}} is created, then the value of `id` is set to `"region1"`. The value is then printed to the console.

```js
const region = new VTTRegion();
region.id = "region1";
console.log(region.id);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
