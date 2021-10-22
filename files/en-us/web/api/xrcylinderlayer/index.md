---
title: XRCylinderLayer
slug: Web/API/XRCylinderLayer
tags:
  - API
  - AR
  - Augmented Reality
  - Interface
  - Reference
  - VR
  - Virtual Reality
  - WebXR
  - WebXR Device API
  - XR
  - XRCylinderLayer
browser-compat: api.XRCylinderLayer
---
{{securecontext_header}}{{APIRef("WebXR Device API")}}

The **`XRCylinderLayer`** interface of the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) is a layer that takes up a curved rectangular space in the virtual environment. Only the front of the layer is visible.

`XRCylinderLayer` requires the `layers` feature to be enabled for the {{domxref("XRSession")}}. You can request it in {{domxref("XRSystem.requestSession()")}}.

To create a new `XRCylinderLayer`, call either
- {{domxref("XRWebGLBinding.createCylinderLayer()")}} for a WebGL opaque texture layer, or
- {{domxref("XRMediaBinding.createCylinderLayer()")}} for an HTML {{HTMLElement("video")}} playback layer.

To present layers to the XR device, add them to the `layers` render state using {{domxref("XRSession.updateRenderState()")}}.

## Properties

_Inherits properties from its parent, {{domxref("XRCompositionLayer")}}._

- {{domxref("XRCylinderLayer.aspectRatio")}}
   - : A number indicating the ratio of the visible cylinder section. It is the ratio of the width of the visible section of the cylinder divided by its height. The width is calculated by multiplying the `radius` with the `centralAngle`.
- {{domxref("XRCylinderLayer.centralAngle")}}
   - : A number indicating the angle in radians of the visible section of the cylinder.
- {{domxref("XRCylinderLayer.radius")}}
   - : A number indicating the radius of the cylinder.
- {{domxref("XRCylinderLayer.space")}}
   - : An {{domxref("XRSpace")}} representing the layer's spatial relationship with the user’s physical environment.
- {{domxref("XRCylinderLayer.transform")}}
   - : An {{domxref("XRRigidTransform")}} representing the offset and orientation relative to `space`.

## Methods

*Inherits methods from its parents, {{domxref("XRCompositionLayer")}} and {{domxref("EventTarget")}}*.

## Events

- {{domxref("XRCylinderLayer.redraw_event", "redraw")}}
  - : Sent to the `XRCylinderLayer` object when the underlying resources of the layer are lost or when the XR Compositor can no longer reproject the layer. If this event is sent, authors should redraw the content of the layer in the next XR animation frame.

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
- {{domxref("XRQuadLayer")}}
- {{domxref("XRProjectionLayer")}}
