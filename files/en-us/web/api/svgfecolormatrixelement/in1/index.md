---
title: "SVGFEColorMatrixElement: in1 property"
short-title: in1
slug: Web/API/SVGFEColorMatrixElement/in1
page-type: web-api-instance-property
browser-compat: api.SVGFEColorMatrixElement.in1
---

{{APIRef("SVG")}}

The **`in1`** read-only property of the {{domxref("SVGFEColorMatrixElement")}} interface reflects the {{SVGAttr("in")}} attribute of the given element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Examples

In this example, two {{SVGElement("feColorMatrix")}} elements are defined in a filter, each with a different `in` attribute.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="color-matrix-filter">
    <feColorMatrix
      in="SourceGraphic"
      type="matrix"
      values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
    <feColorMatrix
      in="BackgroundImage"
      type="matrix"
      values="0.5 0 0 0 0 0 0.5 0 0 0 0 0 0.5 0 0 0 0 0 1 0" />
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

We can access the `in` attribute:

```js
const colorMatrices = document.querySelectorAll("feColorMatrix");

console.log(colorMatrices[0].in1.baseVal); // Output: "SourceGraphic"
console.log(colorMatrices[1].in1.baseVal); // Output: "BackgroundImage"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedString")}}
