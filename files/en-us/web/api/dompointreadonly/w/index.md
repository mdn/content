---
title: DOMPointReadOnly.w
slug: Web/API/DOMPointReadOnly/w
page-type: web-api-instance-property
tags:
  - API
  - Coordinates
  - DOM
  - DOMPointReadOnly
  - Geometry
  - Geometry Interfaces
  - Point
  - Position
  - Property
  - Read-only
  - Reference
  - W
  - perspective
browser-compat: api.DOMPointReadOnly.w
---
{{APIRef("DOM")}}

The **`DOMPointReadOnly`** interface's
**`w`** property holds the point's perspective value,
`w`, for a read-only point in space.

If your script needs to be able
to change the value of this property, you should instead use the {{domxref("DOMPoint")}}
object.

## Value

A double-precision floating-point value indicating the `w` perspective value
for the point. This value is **unrestricted**, meaning that it is allowed
to be infinite or invalid (that is, its value may be {{jsxref("NaN")}} or
{{jsxref("Infinity", "±Infinity")}}). The default is `1.0`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The other coordinate properties: {{domxref("DOMPointReadOnly.x", "x")}},
  {{domxref("DOMPointReadOnly.y", "y")}}, and {{domxref("DOMPointReadOnly.z", "z")}}.
