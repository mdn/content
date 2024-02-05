---
title: XRQuadLayer
slug: Web/API/XRQuadLayer
page-type: web-api-interface
status:
  - experimental
browser-compat: api.XRQuadLayer
---

{{securecontext_header}}{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`XRQuadLayer`** interface of the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) is a layer that takes up a flat rectangular space in the virtual environment. An `XRQuadLayer` has no thickness. It is a two-dimensional object positioned and oriented in 3D space. The position of a quad refers to the center of the quad. Only the front of the layer is visible.

`XRQuadLayer` requires the `layers` feature to be enabled for the {{domxref("XRSession")}}. You can request it in {{domxref("XRSystem.requestSession()")}}.

To create a new `XRQuadLayer`, call either:

- {{domxref("XRWebGLBinding.createQuadLayer()")}} for a WebGL opaque texture quad layer, or
- {{domxref("XRMediaBinding.createQuadLayer()")}} for an HTML {{HTMLElement("video")}} playback quad layer.

To present layers to the XR device, add them to the `layers` render state using {{domxref("XRSession.updateRenderState()")}}.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("XRCompositionLayer")}}._

- {{domxref("XRQuadLayer.height")}} {{Experimental_Inline}}
  - : Represents the height of the layer in meters.
- {{domxref("XRQuadLayer.space")}} {{Experimental_Inline}}
  - : An {{domxref("XRSpace")}} representing the layer's spatial relationship with the user's physical environment.
- {{domxref("XRQuadLayer.transform")}} {{Experimental_Inline}}
  - : An {{domxref("XRRigidTransform")}} representing the offset and orientation relative to `space`.
- {{domxref("XRQuadLayer.width")}} {{Experimental_Inline}}
  - : Represents the width of the layer in meters.

## Instance methods

_Inherits methods from its parents, {{domxref("XRCompositionLayer")}} and {{domxref("EventTarget")}}_.

## Events

- {{domxref("XRQuadLayer.redraw_event", "redraw")}} {{Experimental_Inline}}
  - : Sent to the `XRQuadLayer` object when the underlying resources of the layer are lost or when the XR Compositor can no longer reproject the layer. If this event is sent, authors should redraw the content of the layer in the next XR animation frame.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRLayer")}}
- {{domxref("EventTarget")}}
- {{domxref("XRCompositionLayer")}}
- {{domxref("XREquirectLayer")}}
- {{domxref("XRCubeLayer")}}
- {{domxref("XRCylinderLayer")}}
- {{domxref("XRProjectionLayer")}}
