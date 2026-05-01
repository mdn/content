---
title: "XRVisibilityMaskChangeEvent: vertices property"
short-title: vertices
slug: Web/API/XRVisibilityMaskChangeEvent/vertices
page-type: web-api-instance-property
browser-compat: api.XRVisibilityMaskChangeEvent.vertices
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

The read-only **`vertices`** property of the {{domxref("XRVisibilityMaskChangeEvent")}} interface is an array of coordinates representing the vertices required to draw the entire scene displayed in the {{domxref("XRView")}}. If this array is empty, the whole region of the `XRView` will be drawn.

The {{domxref("XRVisibilityMaskChangeEvent.indices", "indices")}} array specifies the indices of the `vertices` array that should be drawn to display the currently visible part of the scene displayed in the `XRView`.

## Value

A {{domxref("Float32Array")}}.

## Examples

See the main [`XRVisibilityMaskChangeEvent`](/en-US/docs/Web/API/XRVisibilityMaskChangeEvent) page for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRVisibilityMaskChangeEvent.indices")}}
