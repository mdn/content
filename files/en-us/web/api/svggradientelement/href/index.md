---
title: "SVGGradientElement: href property"
short-title: href
slug: Web/API/SVGGradientElement/href
page-type: web-api-instance-property
browser-compat: api.SVGGradientElement.href
---

{{APIRef("SVG")}}

The **`href`** read-only property of the {{domxref("SVGGradientElement")}} interface reflects the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} {{deprecated_inline}} attribute of the given element.

## Value

An {{domxref("SVGAnimatedString")}}.

## Examples

### Accessing the `href` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <linearGradient id="gradient1">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
    <linearGradient id="gradient2" href="#gradient1" />
  </defs>
  <rect x="10" y="10" width="180" height="180" fill="url(#gradient2)" />
</svg>
```

```js
const gradient = document.getElementById("gradient2");
console.log(gradient.href.baseVal); // Output: "#gradient1"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
