---
title: "SVGAnimatedAngle: baseVal property"
short-title: baseVal
slug: Web/API/SVGAnimatedAngle/baseVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedAngle.baseVal
---

{{APIRef("SVG")}}

The **`baseVal`** read-only property of the {{domxref("SVGAnimatedAngle")}} interface represents the base (non-animated) value of the associated [`<angle>`](/en-US/docs/Web/SVG/Content_type#angle) on an SVG element. This property is used to retrieve the static value of the `<angle>`, unaffected by any ongoing animations.

This property reflects the `<angle>` value of the {{SVGattr("orient")}} attribute of the SVG {{SVGElement("marker")}} element, which is the same as the {{domxref("SVGMarkerElement.orientAngle")}} property.

## Value

An {{domxref("SVGAngle")}} object representing the base value of the [`<angle>`](/en-US/docs/Web/SVG/Content_type#angle) content type.

- The value is unaffected by animations, representing the initial state of the angle.
- The unit type of the angle can be retrieved from {{domxref("SVGAngle.unitType")}}.

## Examples

```js
const marker = document.querySelector("[orient]");

// Set the orient attribute with an angle
marker.setAttribute("orient", "90");
const baseAngle = marker.orientAngle.baseVal; // an SVGAngle object

console.log(baseAngle.value); // Output: 90
console.log(baseAngle.unitType); // Output: 1 (constant for SVG_ANGLETYPE_UNSPECIFIED)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedAngle.animVal")}}
- {{domxref("SVGAngle")}} and [angle `value` constants](/en-US/docs/Web/API/SVGAngle#constants)
