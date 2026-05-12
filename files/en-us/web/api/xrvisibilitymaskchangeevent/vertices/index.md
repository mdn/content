---
title: "XRVisibilityMaskChangeEvent: vertices property"
short-title: vertices
slug: Web/API/XRVisibilityMaskChangeEvent/vertices
page-type: web-api-instance-property
browser-compat: api.XRVisibilityMaskChangeEvent.vertices
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

The read-only **`vertices`** property of the {{domxref("XRVisibilityMaskChangeEvent")}} interface is an array of coordinate values representing a visibility mask. If this array is empty, the whole region of the `XRView` will be drawn.

The {{domxref("XRVisibilityMaskChangeEvent.indices", "indices")}} array specifies the array positions of the vertices inside the `vertices` array that define the currently visible part of the scene displayed in the `XRView`.

The coordinate values available in the `vertices` array are x and y value pairs representing points on a flat mask in clip space. They define the boundary of the visibility mask — the region of the display that is actually visible to the user. Anything outside the mask is not visible to the user, and does not need to be drawn. It can be skipped to improve performance.

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
