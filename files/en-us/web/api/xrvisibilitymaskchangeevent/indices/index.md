---
title: "XRVisibilityMaskChangeEvent: indices property"
short-title: indices
slug: Web/API/XRVisibilityMaskChangeEvent/indices
page-type: web-api-instance-property
browser-compat: api.XRVisibilityMaskChangeEvent.indices
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

The **`indices`** read-only property of the {{domxref("XRVisibilityMaskChangeEvent")}} interface is an array of indices specifying the vertices in the {{domxref("XRVisibilityMaskChangeEvent.vertices", "vertices")}} array that should be drawn to display the currently visible part of the scene displayed in the `XRView`. If this array is empty, the whole region of the `XRView` will be drawn.

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
