---
title: "XRVisibilityMaskChangeEvent: indices property"
short-title: indices
slug: Web/API/XRVisibilityMaskChangeEvent/indices
page-type: web-api-instance-property
browser-compat: api.XRVisibilityMaskChangeEvent.indices
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

The **`indices`** read-only property of the {{domxref("XRVisibilityMaskChangeEvent")}} interface specifies the index position of each coordinate pair (not individual array index) inside the {{domxref("XRVisibilityMaskChangeEvent.vertices", "vertices")}} array that define the triangles used to draw the currently visible part of the scene displayed in the {{domxref("XRView")}}. If this array is empty, the whole region of the `XRView` will be drawn.

The number of contained values should therefore be a multiple of three. See {{domxref("XRVisibilityMaskChangeEvent.vertices", "vertices")}} for more explanation.

## Value

A {{domxref("Uint32Array")}}.

## Examples

See the main [`XRVisibilityMaskChangeEvent`](/en-US/docs/Web/API/XRVisibilityMaskChangeEvent) page for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRVisibilityMaskChangeEvent.vertices")}}
