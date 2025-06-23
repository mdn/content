---
title: "SVGFEConvolveMatrixElement: in1 property"
short-title: in1
slug: Web/API/SVGFEConvolveMatrixElement/in1
page-type: web-api-instance-property
browser-compat: api.SVGFEConvolveMatrixElement.in1
---

{{APIRef("SVG")}}

The **`in1`** read-only property of the {{domxref("SVGFEConvolveMatrixElement")}} interface reflects the {{SVGAttr("in")}} attribute of the given {{SVGElement("feConvolveMatrix")}} element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Examples

In this example, the `<feConvolveMatrix>` element applies a convolution filter to an input graphic specified by the `in` attribute.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="convolveFilter">
      <feConvolveMatrix
        in="SourceGraphic"
        order="3"
        kernelMatrix="0 -1 0 -1 4 -1 0 -1 0" />
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:lightblue;"
    filter="url(#convolveFilter)" />
</svg>
```

We can access the `in` attribute of the `<feConvolveMatrix>` element.

```js
const convolveMatrix = document.querySelector("feConvolveMatrix");

console.log(convolveMatrix.in1.baseVal); // Output: "SourceGraphic"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedString")}}
