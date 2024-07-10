---
title: "DOMPoint: y property"
short-title: "y"
slug: Web/API/DOMPoint/y
page-type: web-api-instance-property
browser-compat: api.DOMPoint.y
---

{{APIRef("DOM")}}

The **`DOMPoint`** interface's
**`y`** property holds the vertical coordinate, _y_,
for a point in space.

Unless transforms have been applied to alter the
orientation, the value of `y` increases downward and decreases upward.

## Value

A double-precision floating-point value indicating the _y_ coordinate's value
for the point. This value is **unrestricted**, meaning that it is allowed
to be infinite or invalid (that is, its value may be {{jsxref("NaN")}} or
{{jsxref("Infinity", "±Infinity")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The other coordinate properties: {{domxref("DOMPoint.x", "x")}},
  {{domxref("DOMPoint.z", "z")}}, and the perspective value, {{domxref("DOMPoint.w", "w")}}.
