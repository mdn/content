---
title: "DOMPointReadOnly: z property"
short-title: z
slug: Web/API/DOMPointReadOnly/z
page-type: web-api-instance-property
browser-compat: api.DOMPointReadOnly.z
---

{{APIRef("DOM")}}

The **`DOMPointReadOnly`** interface's
**`z`** property holds the depth coordinate, z, for a
read-only point in space.

If your script needs to be able to change the value
of this property, you should instead use the {{domxref("DOMPoint")}} object.

In general, positive values of `z` mean toward the user (out from the
screen), and negative values of `z` mean away from the user (into the
screen), assuming no transforms have resulted in a reversal.

## Value

A double-precision floating-point value indicating the z coordinate's value for the
point. This value is **unrestricted**, meaning that it is allowed to be
infinite or invalid (that is, its value may be {{jsxref("NaN")}} or {{jsxref("Infinity", "±Infinity")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The other coordinate properties: {{domxref("DOMPointReadOnly.x", "x")}},
  {{domxref("DOMPointReadOnly.y", "y")}}, and the perspective value,
  {{domxref("DOMPointReadOnly.w", "w")}}.
