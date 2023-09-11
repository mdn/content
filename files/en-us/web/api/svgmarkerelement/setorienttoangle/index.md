---
title: "SVGMarkerElement: setOrientToAngle() method"
short-title: setOrientToAngle()
slug: Web/API/SVGMarkerElement/setOrientToAngle
page-type: web-api-instance-method
browser-compat: api.SVGMarkerElement.setOrientToAngle
---

{{APIRef("SVG")}}

The **`setOrientToAngle()`** method of the {{domxref("SVGMarkerElement")}} interface sets the value of the `orient` attribute to the value in the {{domxref("SVGAngle")}} passed in.

## Syntax

```js-nolint
setOrientToAngle(angle)
```

### Parameters

- `angle`
  - : An {{domxref("SVGAngle")}}.

### Return value

None ({{jsxref("undefined")}}).

## Examples

In the following example the value of the `orient` attribute is updated using `setOrientToAngle()` using an {{domxref("SVGAngle")}} created using {{domxref("SVGSVGElement.createSVGAngle()")}}.

```html
<svg id="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="90">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
</svg>
```

```js
let svg = document.getElementById("svg");
let marker = document.getElementById("arrow");
console.log(marker.orientAngle.baseVal.value); // value in SVG above - 90
let angle = svg.createSVGAngle();
angle.value = "110";
marker.setOrientToAngle(angle);
console.log(marker.orientAngle.baseVal.value); // new value - 110
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
