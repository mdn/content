---
title: "SVGFEBlendElement: in1 property"
short-title: in1
slug: Web/API/SVGFEBlendElement/in1
page-type: web-api-instance-property
browser-compat: api.SVGFEBlendElement.in1
---

{{APIRef("SVG")}}

The **`in1`** read-only property of the {{domxref("SVGFEBlendElement")}} interface reflects the {{SVGAttr("in")}} attribute of the given element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Examples

In this example, two {{SVGElement("feBlend")}} elements are defined in a filter, each with a different `in` attribute.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="blend-filter">
    <feBlend in="SourceGraphic" operator="over" />
    <feBlend in="BackgroundImage" operator="in" />
  </filter>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:red;"
    filter="url(#blend-filter)" />
  <circle
    cx="100"
    cy="100"
    r="50"
    style="fill:blue;"
    filter="url(#blend-filter)" />
</svg>
```

We can access the `in` attribute:

```js
const feBlends = document.querySelectorAll("feBlend");

console.log(feBlends[0].in1.baseVal); // Output: "SourceGraphic"
console.log(feBlends[1].in1.baseVal); // Output: "BackgroundImage"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedString")}}
