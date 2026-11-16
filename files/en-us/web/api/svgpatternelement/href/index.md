---
title: "SVGPatternElement: href property"
short-title: href
slug: Web/API/SVGPatternElement/href
page-type: web-api-instance-property
browser-compat: api.SVGPatternElement.href
---

{{APIRef("SVG")}}

The **`href`** read-only property of the {{domxref("SVGPatternElement")}} interface reflects the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} {{deprecated_inline}} attribute of the given element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Examples

The example demonstrates how the href attribute in the {{SVGElement("pattern")}} element references another pattern (`#basePattern`) to apply its design to a rectangle.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- First pattern definition -->
    <pattern
      id="basePattern"
      width="20"
      height="20"
      patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="10" fill="blue" />
    </pattern>
    <!-- Second pattern referencing the first -->
    <pattern id="pattern1" href="#basePattern" />
  </defs>
  <rect x="50" y="50" width="100" height="100" fill="url(#pattern1)" />
</svg>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
