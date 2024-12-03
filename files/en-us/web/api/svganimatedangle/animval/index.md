---
title: "SVGAnimatedAngle: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedAngle/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedAngle.animVal
---

{{APIRef("SVG")}}

The **`SVGAnimatedAngle.animVal`** read-only property of the {{domxref("SVGAnimatedAngle")}} interface represents the current animated value of the associated `<angle>` attribute on an SVG element. If the attribute is not currently being animated, `animVal` will be the same as the `baseVal`.

This property reflects the animated state of the angle, providing access to the value of the angle during animations.

## Value

An {{domxref("SVGAngle")}} object representing the animated value of the `<angle>` attribute.

- If the angle is being animated, `animVal` will reflect the current animation state.
- If the angle is not animated, `animVal` will be identical to {{domxref("SVGAnimatedAngle.baseVal")}}.

## Examples

```js
// Create an SVG marker element
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
svg.appendChild(marker);
document.body.appendChild(svg);

// Set the orient attribute with an angle and start an animation
marker.setAttribute("orient", "45");
const animAngle = marker.orientAngle.animVal;

console.log(animAngle.value); // Outputs the current animated value of the angle
console.log(animAngle.unitType); // Outputs the unit type (e.g., SVG_ANGLETYPE_DEG)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedAngle.baseVal")}}
- {{domxref("SVGAngle")}}
