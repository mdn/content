---
title: "DOMPoint: w property"
short-title: w
slug: Web/API/DOMPoint/w
page-type: web-api-instance-property
browser-compat: api.DOMPoint.w
---

{{APIRef("DOM")}}

The **`DOMPoint`** interface's
**`w`** property holds the point's perspective value, w, for a
point in space.

## Value

A double-precision floating-point value indicating the _w_ perspective value for
the point. This value is **unrestricted**, meaning that it is allowed to be
infinite or invalid (that is, its value may be {{jsxref("NaN")}} or {{jsxref("Infinity",
  "±Infinity")}}). The default is 1.0.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The other coordinate properties: {{domxref("DOMPoint.x", "x")}},
  {{domxref("DOMPoint.y", "y")}}, and {{domxref("DOMPoint.z", "z")}}.
