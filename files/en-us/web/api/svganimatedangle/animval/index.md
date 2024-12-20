---
title: "SVGAnimatedAngle: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedAngle/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedAngle.animVal
---

{{APIRef("SVG")}}

The **`animVal`** read-only property of the {{domxref("SVGAnimatedAngle")}} interface represents the current animated value of the associated [`<angle>`](/en-US/docs/Web/SVG/Content_type#angle) on an SVG element. If the attribute is not currently being animated, `animVal` will be the same as the `baseVal`.

This property reflects the animated state of the angle of the animating {{SVGattr("orient")}} attribute of the SVG {{SVGElement("marker")}} element, providing access to the value of the angle during animations.

## Value

An {{domxref("SVGAngle")}} object representing the animated value of the [`<angle>`](/en-US/docs/Web/SVG/Content_type#angle) content type.

- If the angle is being animated, `animVal` will reflect the current animation state.
- If the angle is not animated, `animVal` will be identical to {{domxref("SVGAnimatedAngle.baseVal")}}.

## Examples

```js
const marker = document.querySelector("[orient]");

// Set an initial angle for the orient attribute
marker.setAttribute("orient", "45");

// Access the animated value of the angle
const animAngle = marker.orientAngle.animVal; // an SVGAngle object

console.log(animAngle.value); // Output: 45 (current animated value of the angle)
console.log(animAngle.unitType); // Output: 2 (constant for SVG_ANGLETYPE_DEG)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedAngle.baseVal")}}
- {{domxref("SVGAngle")}} and [angle `value` constants](/en-US/docs/Web/API/SVGAngle#constants)
