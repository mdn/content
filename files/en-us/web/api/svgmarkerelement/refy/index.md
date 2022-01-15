---
title: SVGMarkerElement.refY
slug: Web/API/SVGMarkerElement/refY
tags:
  - API
  - Property
  - Reference
  - refY
  - SVGMarkerElement
browser-compat: api.SVGMarkerElement.refY
---
{{APIRef("SVG")}}

The **`refY`** read-only property of the {{domxref("SVGMarkerElement")}} interface returns an {{domxref("SVGAnimatedLength")}} object containing the value of the {{SVGattr("refY")}} attribute of the {{SVGElement("marker")}}.

## Syntax

```js
let refY = SVGMarkerElement.refY;
```

### Value

An {{domxref("SVGAnimatedLength")}} object. The `baseVal` property of this object returns an {{domxref("SVGLength")}}, the value of which returns the `refY`.

## Examples

The `markerWidth` property returns an {{domxref("SVGAnimatedLength")}} which contains an {{domxref("SVGLength")}} with the value of the {{SVGattr("refY")}} attribute.

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
console.log(marker.refY.baseVal.value); // 5
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
