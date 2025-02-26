---
title: "SVGPatternElement: y property"
short-title: y
slug: Web/API/SVGPatternElement/y
page-type: web-api-instance-property
browser-compat: api.SVGPatternElement.y
---

{{APIRef("SVG")}}

The **`y`** read-only property of the {{domxref("SVGPatternElement")}} interface describes the y-axis coordinate of the start point of the pattern as an {{domxref("SVGAnimatedLength")}}. It reflects the computed value of the {{SVGAttr("y")}} attribute on the {{SVGElement("pattern")}} element.

The attribute value can be a [`<length>`](/en-US/docs/Web/SVG/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The numeric value of the {{domxref("SVGAnimatedLength.baseVal")}} is the y-coordinate of the pattern's starting point in the user coordinate system.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

Given the following SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- First pattern -->
    <pattern
      id="pattern1"
      y="50"
      width="20"
      height="20"
      patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="10" fill="blue" />
    </pattern>
    <!-- Second pattern -->
    <pattern
      id="pattern2"
      y="100"
      width="20"
      height="20"
      patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="10" fill="red" />
    </pattern>
  </defs>
  <!-- Using the patterns -->
  <rect x="0" y="0" width="100" height="100" fill="url(#pattern1)" />
  <rect x="100" y="0" width="100" height="100" fill="url(#pattern2)" />
</svg>
```

We can access the computed values of the `y` attributes:

```js
const patterns = document.querySelectorAll("pattern");

console.log(patterns[0].y.baseVal.value); // output: 50
console.log(patterns[1].y.baseVal.value); // output: 100
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGPatternElement.x")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
