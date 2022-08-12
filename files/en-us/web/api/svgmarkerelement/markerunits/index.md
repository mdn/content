---
title: SVGMarkerElement.markerUnits
slug: Web/API/SVGMarkerElement/markerUnits
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - markerUnits
  - SVGMarkerElement
browser-compat: api.SVGMarkerElement.markerUnits
---
{{APIRef("SVG")}}

The **`markerUnits`** read-only property of the {{domxref("SVGMarkerElement")}} interface returns an {{domxref("SVGAnimatedEnumeration")}} object. This object returns an integer which represents the keyword values that the {{SVGattr("markerUnits")}} attribute accepts.

## Value

An {{domxref("SVGAnimatedEnumeration")}} object. The `baseVal` property of this object contains one of the following values:

- `0`
  - : `SVG_MARKERUNITS_UNKNOWN` which means that the {{SVGattr("markerUnits")}} attribute has a value other than the two predefined keywords.
- `1`
  - : `SVG_MARKERUNITS_USERSPACEONUSE` which means that the {{SVGattr("markerUnits")}} attribute has the keyword value `userSpaceOnUse`.
- `2`
  - : `SVG_MARKERUNITS_STROKEWIDTH` which means that the {{SVGattr("markerUnits")}} attribute has the keyword value `strokeWidth`.

## Examples

The `markerUnits` property returns an {{domxref("SVGAnimatedEnumeration")}} object that contains the value of the {{SVGattr("markerUnits")}} attribute.

```html
<svg id="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="6" markerHeight="6"
        orient="auto-start-reverse"
        markerUnits="strokeWidth">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
</svg>
```

```js
let marker = document.getElementById("arrow");
console.log(marker.markerUnits.baseVal); // 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
