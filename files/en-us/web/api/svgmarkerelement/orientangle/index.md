---
title: SVGMarkerElement.orientAngle
slug: Web/API/SVGMarkerElement/orientAngle
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - orientAngle
  - SVGMarkerElement
browser-compat: api.SVGMarkerElement.orientAngle
---
{{APIRef("SVG")}}

The **`orientAngle`** read-only property of the {{domxref("SVGMarkerElement")}} interface returns an {{domxref("SVGAnimatedAngle")}} object containing the angle of the {{SVGattr("orient")}} attribute.

## Value

An {{domxref("SVGAnimatedAngle")}} object. The `baseVal` property of this object returns an {{domxref("SVGAngle")}}, the value of which returns the `angle`.

## Examples

The `orientAngle` property returns an {{domxref("SVGAnimatedAngle")}} which contains an {{domxref("SVGAngle")}} with the angle set by the {{SVGattr("orient")}} attribute as a number representing the number of degrees the marker is turned.

```html
<svg id="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="6" markerHeight="6"
        orient=".5turn">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
</svg>
```

```js
let marker = document.getElementById("arrow");
console.log(marker.orientAngle.baseVal.value); // 180 as .5turn is 180deg.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
