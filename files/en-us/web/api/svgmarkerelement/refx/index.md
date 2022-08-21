---
title: SVGMarkerElement.refX
slug: Web/API/SVGMarkerElement/refX
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - refX
  - SVGMarkerElement
browser-compat: api.SVGMarkerElement.refX
---
{{APIRef("SVG")}}

The **`refX`** read-only property of the {{domxref("SVGMarkerElement")}} interface returns an {{domxref("SVGAnimatedLength")}} object containing the value of the {{SVGattr("refX")}} attribute of the {{SVGElement("marker")}}.

## Value

An {{domxref("SVGAnimatedLength")}} object. The `baseVal` property of this object returns an {{domxref("SVGLength")}}, the value of which returns the `refX`.

## Examples

The `markerWidth` property returns an {{domxref("SVGAnimatedLength")}} which contains an {{domxref("SVGLength")}} with the value of the {{SVGattr("refX")}} attribute.

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
console.log(marker.refX.baseVal.value); // 5
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
