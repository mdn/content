---
title: "SVGImageElement: href property"
short-title: href
slug: Web/API/SVGImageElement/href
page-type: web-api-instance-property
browser-compat: api.SVGImageElement.href
---

{{APIRef("SVG")}}

The **`href`** read-only property of the {{domxref("SVGImageElement")}} interface reflects the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} {{deprecated_inline}} attribute of the given {{SVGElement("image")}} element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Examples

### Accessing the `href` property

```js
// Get the SVG image element
const imageElement = document.querySelector("image");

// Access the href property
const href = imageElement.href.baseVal;

console.log(href); // Output: The href value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
