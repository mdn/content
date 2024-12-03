---
title: "SVGAnimatedAngle: baseVal property"
short-title: baseVal
slug: Web/API/SVGAnimatedAngle/baseVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedAngle.baseVal
---

{{APIRef("SVG")}}

The **`SVGAnimatedAngle.baseVal`** read-only property of the {{domxref("SVGAnimatedAngle")}} interface represents the base (non-animated) value of the associated `<angle>` attribute on an SVG element.

This property is used to retrieve the static value of the `<angle>` attribute, unaffected by any ongoing animations.

## Value

An {{domxref("SVGAngle")}} object representing the base value of the `<angle>` attribute.

- The value is unaffected by animations, representing the initial state of the angle.
- The unit type of the angle can be retrieved from {{domxref("SVGAngle.unitType")}}.

## Examples

```js
// Create an SVG marker element
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
svg.appendChild(marker);
document.body.appendChild(svg);

// Set the orient attribute with an angle
marker.setAttribute("orient", "90");
const baseAngle = marker.orientAngle.baseVal;

console.log(baseAngle.value); // Outputs 90
console.log(baseAngle.unitType); // Outputs the unit type (e.g., SVG_ANGLETYPE_DEG)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedAngle.animVal")}}
- {{domxref("SVGAngle")}}
