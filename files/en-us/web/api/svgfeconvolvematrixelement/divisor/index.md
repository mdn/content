---
title: "SVGFEConvolveMatrixElement: divisor property"
short-title: divisor
slug: Web/API/SVGFEConvolveMatrixElement/divisor
page-type: web-api-instance-property
browser-compat: api.SVGFEConvolveMatrixElement.divisor
---

{{APIRef("SVG")}}

The **`divisor`** read-only property of the {{domxref("SVGFEConvolveMatrixElement")}} interface reflects the {{SVGAttr("divisor")}} attribute of the given {{SVGElement("feConvolveMatrix")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

### Access the `divisor` property

A convolution filter is applied to a rectangle, and the `divisor` is used to control the brightness.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="convolveFilterWithDivisor">
      <feConvolveMatrix
        in="SourceGraphic"
        order="3"
        kernelMatrix="0 -1 0 -1 4 -1 0 -1 0"
        divisor="1" />
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:lightgreen;"
    filter="url(#convolveFilterWithDivisor)" />
</svg>
```

```js
const convolveMatrix = document.querySelector("feConvolveMatrix");

console.log(convolveMatrix.divisor.baseVal); // Output: 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
