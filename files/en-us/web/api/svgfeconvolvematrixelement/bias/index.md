---
title: "SVGFEConvolveMatrixElement: bias property"
short-title: bias
slug: Web/API/SVGFEConvolveMatrixElement/bias
page-type: web-api-instance-property
browser-compat: api.SVGFEConvolveMatrixElement.bias
---

{{APIRef("SVG")}}

The **`bias`** read-only property of the {{domxref("SVGFEConvolveMatrixElement")}} interface reflects the {{SVGAttr("bias")}} attribute of the given {{SVGElement("feConvolveMatrix")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

### Access the `bias` property

The `bias` property is used to adjust the brightness of the output.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="convolveFilterWithBias">
      <feConvolveMatrix
        in="SourceGraphic"
        order="3"
        kernelMatrix="0 -1 0 -1 5 -1 0 -1 0"
        bias="0.25" />
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:lightblue;"
    filter="url(#convolveFilterWithBias)" />
</svg>
```

```js
const convolveMatrix = document.querySelector("feConvolveMatrix");

console.log(convolveMatrix.bias.baseVal); // Output: 0.25
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
