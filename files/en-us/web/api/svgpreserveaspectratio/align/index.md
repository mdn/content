---
title: "SVGPreserveAspectRatio: align property"
short-title: align
slug: Web/API/SVGPreserveAspectRatio/align
page-type: web-api-instance-property
browser-compat: api.SVGPreserveAspectRatio.align
---

{{APIRef("SVG")}}

The **`align`** read-only property of the {{domxref("SVGPreserveAspectRatio")}} interface reflects the type of the alignment value as specified by one of the `SVG_PRESERVEASPECTRATIO_*` constants defined on this interface.

## Value

An `integer`; the alignment type as an unsigned short.

## Examples

### Accessing the `align` property

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="400"
  height="200"
  preserveAspectRatio="xMidYMid meet">
  <circle cx="100" cy="100" r="50" fill="blue" />
</svg>
```

```js
const svgElement = document.querySelector("svg");

// Access the align property
console.log(svgElement.preserveAspectRatio.baseVal.align); // Output: 6 (SVG_PRESERVEASPECTRATIO_XMIDYMID)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
