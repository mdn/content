---
title: "DOMQuad: p1 property"
short-title: p1
slug: Web/API/DOMQuad/p1
page-type: web-api-instance-property
browser-compat: api.DOMQuad.p1
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`DOMQuad`** interface's **`p1`** property holds the {{domxref("DOMPoint")}} object that represents one of the four corners of the `DOMQuad`. This point includes the {{domxref("DOMPoint.x")}} (horizontal), {{domxref("DOMPoint.y")}} (vertical), {{domxref("DOMPoint.z")}} (depth), and {{domxref("DOMPoint.w")}} (perspective) coordinates for a point in space.

## Value

The {{domxref("DOMPoint")}} object includes the following double-precision floating-point values:

- {{domxref("DOMPoint.x")}}: The horizontal coordinate.
- {{domxref("DOMPoint.y")}}: The vertical coordinate.
- {{domxref("DOMPoint.z")}}: The depth coordinate.
- {{domxref("DOMPoint.w")}}: The perspective value. The default value is 1.0.

Each of these values is **unrestricted**, meaning that it is allowed to be infinite or invalid (that is, its value may be {{jsxref("NaN")}} or {{jsxref("Infinity", "±Infinity")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The other `DOMPoint` properties: {{domxref("DOMQuad.p2", "p2")}},
  {{domxref("DOMQuad.p3", "p3")}}, and {{domxref("DOMQuad.p4", "p4")}}.
