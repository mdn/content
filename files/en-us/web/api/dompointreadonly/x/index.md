---
title: "DOMPointReadOnly: x property"
short-title: x
slug: Web/API/DOMPointReadOnly/x
page-type: web-api-instance-property
browser-compat: api.DOMPointReadOnly.x
---

{{APIRef("DOM")}}

The **`DOMPointReadOnly`** interface's
**`x`** property holds the horizontal coordinate, x, for a
read-only point in space. This property cannot be changed by JavaScript code in this
read-only version of the `DOMPoint` object.

In general, positive values `x` mean to the right, and negative values of
`x` means to the left, assuming no transforms have resulted in a reversal.

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

- The other coordinate properties: {{domxref("DOMPointReadOnly.y", "y")}},
  {{domxref("DOMPointReadOnly.z", "z")}}, and the perspective value,
  {{domxref("DOMPointReadOnly.w", "w")}}.
