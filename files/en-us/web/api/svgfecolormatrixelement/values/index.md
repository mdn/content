---
title: "SVGFEColorMatrixElement: values property"
short-title: values
slug: Web/API/SVGFEColorMatrixElement/values
page-type: web-api-instance-property
browser-compat: api.SVGFEColorMatrixElement.values
---

{{APIRef("SVG")}}

The **`values`** read-only property of the {{domxref("SVGFEColorMatrixElement")}} interface reflects the {{SVGAttr("values")}} attribute of the given element.

## Value

An {{domxref("SVGAnimatedNumberList")}} object.

## Examples

### Accessing the `values` property

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="color-matrix-filter">
    <feColorMatrix
      type="matrix"
      values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
  </filter>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:red;"
    filter="url(#color-matrix-filter)" />
</svg>
```

```js
const colorMatrix = document.querySelector("feColorMatrix");

console.dir(colorMatrix.values.baseVal); // Output: SVGAnimatedNumberList object
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
