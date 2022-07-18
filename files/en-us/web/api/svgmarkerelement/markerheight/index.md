---
title: SVGMarkerElement.markerHeight
slug: Web/API/SVGMarkerElement/markerHeight
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - markerHeight
  - SVGMarkerElement
browser-compat: api.SVGMarkerElement.markerHeight
---
{{APIRef("SVG")}}

The **`markerHeight`** read-only property of the {{domxref("SVGMarkerElement")}} interface returns an {{domxref("SVGAnimatedLength")}} object containing the height of the {{SVGElement("marker")}} viewport as defined by the {{SVGattr("markerHeight")}} attribute.

## Value

An {{domxref("SVGAnimatedLength")}} object. The `baseVal` property of this object returns an {{domxref("SVGLength")}}, the value of which returns the `height`.

## Examples

The `markerHeight` property returns an {{domxref("SVGAnimatedLength")}} which contains an {{domxref("SVGLength")}} with the value of the {{SVGattr("markerHeight")}} attribute.

```html
<svg id="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="6" markerHeight="6"
        orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
</svg>
```

```js
let marker = document.getElementById("arrow");
console.log(marker.markerHeight.baseVal.value); // 6
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
