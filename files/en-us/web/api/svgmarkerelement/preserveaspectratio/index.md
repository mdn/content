---
title: "SVGMarkerElement: preserveAspectRatio property"
short-title: preserveAspectRatio
slug: Web/API/SVGMarkerElement/preserveAspectRatio
page-type: web-api-instance-property
browser-compat: api.SVGMarkerElement.preserveAspectRatio
---

{{APIRef("SVG")}}

The **`preserveAspectRatio`** read-only property of the {{domxref("SVGMarkerElement")}} interface returns an {{domxref("SVGAnimatedPreserveAspectRatio")}} object containing the value of the {{SVGattr("preserveAspectRatio")}} attribute of the {{SVGElement("marker")}}.

## Value

An {{domxref("SVGAnimatedPreserveAspectRatio")}} object. The `baseVal` property of this object returns an {{domxref("SVGPreserveAspectRatio")}} object, with the following properties:

- `align`

  - : One of the following numeric constants:

    - `0`
      - : `SVG_PRESERVEASPECTRATIO_UNKNOWN`
    - `1`
      - : `SVG_PRESERVEASPECTRATIO_NONE`
    - `2`
      - : `SVG_PRESERVEASPECTRATIO_XMINYMIN`
    - `3`
      - : `SVG_PRESERVEASPECTRATIO_XMIDYMIN`
    - `4`
      - : `SVG_PRESERVEASPECTRATIO_XMAXYMIN`
    - `5`
      - : `SVG_PRESERVEASPECTRATIO_XMINYMID`
    - `6`
      - : `SVG_PRESERVEASPECTRATIO_XMIDYMID`
    - `7`
      - : `SVG_PRESERVEASPECTRATIO_XMAXYMID`
    - `8`
      - : `SVG_PRESERVEASPECTRATIO_XMINYMAX`
    - `9`
      - : `SVG_PRESERVEASPECTRATIO_XMIDYMAX`
    - `10`
      - : `SVG_PRESERVEASPECTRATIO_XMAXYMAX`

- `meetOrSlice`

  - : One of the following numeric constants:

    - `0`
      - : `SVG_MEETORSLICE_UNKNOWN`
    - `1`
      - : `SVG_MEETORSLICE_MEET`
    - `2`
      - : `SVG_MEETORSLICE_SLICE`

## Examples

This example demonstrates how to return the numeric constants for `align` and `meetOrSlice` which relate to the values set for the {{SVGattr("preserveAspectRatio")}} attribute of {{SVGElement("marker")}}.

```html
<svg id="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      preserveAspectRatio="xMidYMid meet"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
</svg>
```

```js
let marker = document.getElementById("arrow");
console.log(marker.preserveAspectRatio.baseVal.align); // 6
console.log(marker.preserveAspectRatio.baseVal.meetOrSlice); // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
