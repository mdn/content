---
title: "SVGFEColorMatrixElement: type property"
short-title: type
slug: Web/API/SVGFEColorMatrixElement/type
page-type: web-api-instance-property
browser-compat: api.SVGFEColorMatrixElement.type
---

{{APIRef("SVG")}}

The **`type`** read-only property of the {{domxref("SVGFEColorMatrixElement")}} interface reflects the {{SVGAttr("type")}} attribute of the given element. It takes one of the `SVG_FECOLORMATRIX_TYPE_*` constants defined on this interface.

## Value

An {{domxref("SVGAnimatedEnumeration")}} object.

## Examples

### Accessing the `type` property

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="color-matrix-filter">
    <feColorMatrix
      type="matrix"
      values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
    <feColorMatrix type="saturate" values="0.5" />
  </filter>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:red;"
    filter="url(#color-matrix-filter)" />
  <circle
    cx="100"
    cy="100"
    r="50"
    style="fill:blue;"
    filter="url(#color-matrix-filter)" />
</svg>
```

```js
const colorMatrices = document.querySelectorAll("feColorMatrix");

console.log(colorMatrices[0].type.baseVal); // Output: 1 (SVG_FECOLORMATRIX_TYPE_MATRIX)
console.log(colorMatrices[1].type.baseVal); // Output: 2 (SVG_FECOLORMATRIX_TYPE_SATURATE)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
