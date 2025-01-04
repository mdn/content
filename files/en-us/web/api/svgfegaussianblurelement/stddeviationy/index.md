---
title: "SVGFEGaussianBlurElement: stdDeviationY property"
short-title: stdDeviationY
slug: Web/API/SVGFEGaussianBlurElement/stdDeviationY
page-type: web-api-instance-property
browser-compat: api.SVGFEGaussianBlurElement.stdDeviationY
---

{{APIRef("SVG")}}

The **`stdDeviationY`** read-only property of the {{domxref("SVGFEGaussianBlurElement")}} interface reflects the (possibly automatically computed) Y component of the {{SVGAttr("stdDeviation")}} attribute of the given {{SVGElement("feGaussianBlur")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

### Accessing the `stdDeviationY` attribute

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="gaussian-blur-filter">
      <!-- Apply Gaussian Blur with stdDeviationY set to 5 and stdDeviationY set to 10 -->
      <feGaussianBlur
        in="SourceGraphic"
        stdDeviation="5 10"
        result="blurred-graphic" />
    </filter>
  </defs>

  <!-- Rectangle with a Gaussian blur effect -->
  <rect
    x="50"
    y="50"
    width="100"
    height="100"
    style="fill:hotpink;"
    filter="url(#gaussian-blur-filter)" />
</svg>
```

```js
// Select the feGaussianBlur element
const gaussianBlur = document.querySelector("feGaussianBlur");

// Access the stdDeviationY value
console.log(gaussianBlur.stdDeviationY.baseVal); // Output: 10
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
