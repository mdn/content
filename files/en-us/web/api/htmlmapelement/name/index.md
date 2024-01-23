---
title: "HTMLMapElement: name property"
short-title: name
slug: Web/API/HTMLMapElement/name
page-type: web-api-instance-property
browser-compat: api.HTMLMapElement.name
---

{{ApiRef("HTML DOM")}}

The **`name`** property of the {{domxref("HTMLMapElement")}} represents the unique name `<map>` element.
Its value can be used with the `useMap` attribute of the {{HTMLElement("img")}} element to reference a `<map>` element.

If an `id` attribute is set on the {{HTMLElement("map")}} element, then this `name` property should be the same as this `id`.

## Value

A non-empty string without whitespaces.

## Example

```html
<map name="image-map">
  <area shape="circle" coords="15,15,5" />
</map>
```

```js
const mapElement = document.getElementsByName("image-map")[0];
console.log(mapElement.name); // output: "image-map"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLImageElement.useMap")}} property
- {{domxref("HTMLAreaElement")}} element
