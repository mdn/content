---
title: "DOMPoint: z property"
short-title: z
slug: Web/API/DOMPoint/z
page-type: web-api-instance-property
browser-compat: api.DOMPoint.z
---

{{APIRef("DOM")}}

The **`DOMPoint`** interface's
**`z`** property specifies the depth coordinate of a point in
space.

Unless transforms have changed the orientation, a `z` of 0 is
the plane of the screen, with positive values extending outward toward the user from the
screen, and negative values receding into the distance behind the screen.

## Value

A double-precision floating-point value indicating the _z_ coordinate's value
for the point. This value is **unrestricted**, meaning that it is allowed
to be infinite or invalid (that is, its value may be {{jsxref("NaN")}} or
{{jsxref("Infinity", "±Infinity")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The other coordinate properties: {{domxref("DOMPoint.x", "x")}},
  {{domxref("DOMPoint.y", "y")}}, and the perspective value, {{domxref("DOMPoint.w",
    "w")}}.
