---
title: "SVGPreserveAspectRatio: meetOrSlice property"
short-title: meetOrSlice
slug: Web/API/SVGPreserveAspectRatio/meetOrSlice
page-type: web-api-instance-property
browser-compat: api.SVGPreserveAspectRatio.meetOrSlice
---

{{APIRef("SVG")}}

The **`meetOrSlice`** read-only property of the {{domxref("SVGPreserveAspectRatio")}} interface reflects the type of the meet-or-slice value as specified by one of the `SVG_MEETORSLICE_*` constants defined on this interface.

## Value

One of the following:

- `SVGPreserveAspectRatio.SVG_MEETORSLICE_UNKNOWN` (0)
- `SVGPreserveAspectRatio.SVG_MEETORSLICE_MEET` (1)
- `SVGPreserveAspectRatio.SVG_MEETORSLICE_SLICE` (2)

## Examples

### Accessing the `meetOrSlice` property

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="400"
  height="200"
  preserveAspectRatio="xMidYMid slice">
  <circle cx="100" cy="100" r="50" fill="blue" />
</svg>
```

```js
const svgElement = document.querySelector("svg");

// Access the meetOrSlice property
console.log(svgElement.preserveAspectRatio.baseVal.meetOrSlice); // Output: 2 (SVG_MEETORSLICE_SLICE)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
