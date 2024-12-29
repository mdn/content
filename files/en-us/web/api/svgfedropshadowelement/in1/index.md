---
title: "SVGFEDropShadowElement: in1 property"
short-title: in1
slug: Web/API/SVGFEDropShadowElement/in1
page-type: web-api-instance-property
browser-compat: api.SVGFEDropShadowElement.in1
---

{{APIRef("SVG")}}

The **`in1`** read-only property of the {{domxref("SVGFEDropShadowElement")}} interface reflects the {{SVGAttr("in")}} attribute of the given {{SVGElement("feDropShadow")}} element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Examples

In this example, two {{SVGElement("feDropShadow")}} elements are defined in a filter, each with a different `in` attribute.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="drop-shadow-filter">
      <!-- First Drop Shadow applied to the SourceGraphic -->
      <feDropShadow
        in="SourceGraphic"
        dx="10"
        dy="10"
        stdDeviation="5"
        flood-color="red" />
      <!-- Second Drop Shadow applied to the BackgroundImage -->
      <feDropShadow
        in="BackgroundImage"
        dx="-10"
        dy="-10"
        stdDeviation="5"
        flood-color="blue" />
    </filter>
  </defs>
  <!-- Rectangle with red shadow -->
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:red;"
    filter="url(#drop-shadow-filter)" />
  <!-- Circle with blue shadow -->
  <circle
    cx="100"
    cy="100"
    r="50"
    style="fill:blue;"
    filter="url(#drop-shadow-filter)" />
</svg>
```

We can access the `in` attribute:

```js
const dropShadows = document.querySelectorAll("feDropShadow");

console.log(dropShadows[0].in1.baseVal); // Output: "SourceGraphic"
console.log(dropShadows[1].in1.baseVal); // Output: "BackgroundImage"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedString")}}
