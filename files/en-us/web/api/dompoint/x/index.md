---
title: DOMPoint.x
slug: Web/API/DOMPoint/x
page-type: web-api-instance-property
tags:
  - API
  - Coordinates
  - DOM
  - DOMPoint
  - Geometry
  - Geometry Interfaces
  - Point
  - Property
  - Reference
  - x
browser-compat: api.DOMPoint.x
---
{{APIRef("DOM")}}

The **`DOMPoint`** interface's
**`x`** property holds the horizontal coordinate, x, for a
point in space.

In general, positive values `x` mean to the right,
and negative values of `x` means to the left, barring any transforms that may
have altered the orientation of the axes.

## Value

A double-precision floating-point value indicating the x coordinate's value for the
point. This value is **unrestricted**, meaning that it is allowed to be
infinite or invalid (that is, its value may be {{jsxref("NaN")}} or {{jsxref("Infinity",
  "±Infinity")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The other coordinate properties: {{domxref("DOMPoint.y", "y")}},
  {{domxref("DOMPoint.z", "z")}}, and the perspective value, {{domxref("DOMPoint.w",
    "w")}}.
