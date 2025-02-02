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

One of the following:

- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_UNKNOWN` (0)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_NONE` (1)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMINYMIN` (2)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMIN` (3)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMAXYMIN` (4)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMINYMID` (5)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMID` (6)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMAXYMID` (7)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMINYMAX` (8)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMAX` (9)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMAXYMAX` (10)

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
