---
title: "HTMLAreaElement: shape property"
short-title: shape
slug: Web/API/HTMLAreaElement/shape
page-type: web-api-instance-property
browser-compat: api.HTMLAreaElement.shape
---

{{APIRef("HTML DOM")}}

The **`shape`** property of the {{DOMxRef("HTMLAreaElement")}} interface specifies the shape of an image map area. It reflects the {{htmlelement("area")}} element's [`shape`](/en-US/docs/Web/HTML/Element/area#shape) attribute.

## Value

A string; `rect`, `circle`, or `poly`.

## Examples

```js
const areaElement = document.getElementById("imageMapArea");
console.log(areaElement.shape);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMXref("HTMLAreaElement.coords")}}
- {{DOMXref("HTMLAreaElement.alt")}}
- {{DOMXref("HTMLMapElement")}}
- {{HTMLElement("area")}}
- {{HTMLElement("map")}}
- {{HTMLElement("a")}}
