---
title: "HTMLMapElement: areas property"
short-title: areas
slug: Web/API/HTMLMapElement/areas
page-type: web-api-instance-property
browser-compat: api.HTMLMapElement.areas
---

{{ApiRef("HTML DOM")}}

The **`areas`** property of the {{domxref("HTMLMapElement")}} return {{domxref("HTMLCollection")}} object of {{HTMLElement("area")}} elements present in the {{HTMLElement("map")}} element. This property only apply filter for `area` elements.  The `areas` is readonly property so we can not assign a new collection to 'areas' property, we can only access or iterate over existing areas collections.

## Value

An array-like object ({{domxref("HTMLCollection")}}) of elements.


<!-- ## Results

{{EmbedLiveSample("Example",100,100)}} -->

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLAreaElement")}} 
- {{domxref("HTMLImageElement.useMap")}}