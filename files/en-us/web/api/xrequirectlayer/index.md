---
title: XREquirectLayer
slug: Web/API/XREquirectLayer
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
  - XREquirectLayer
browser-compat: api.XREquirectLayer
---
{{securecontext_header}}{{APIRef("WebXR Device API")}}

The **`XREquirectLayer`** interface of the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) is a layer that maps [equirectangular](https://en.wikipedia.org/wiki/Equirectangular_projection) coded data onto the inside of a sphere.

`XREquirectLayer` requires the `layers` feature to be enabled for the {{domxref("XRSession")}}. You can request it in {{domxref("XRSystem.requestSession()")}}.

To create a new `XREquirectLayer`, call either
- {{domxref("XRWebGLBinding.createEquirectLayer()")}} for a WebGL opaque texture layer, or
- {{domxref("XRMediaBinding.createEquirectLayer()")}} for an HTML {{HTMLElement("video")}} playback layer.

To present layers to the XR device, add them to the `layers` render state using {{domxref("XRSession.updateRenderState()")}}.

## Properties

_Inherits properties from its parent, {{domxref("XRCompositionLayer")}}._

- {{domxref("XREquirectLayer.centralHorizontalAngle")}}
  - : A number indicating the central horizontal angle in radians for the sphere.
- {{domxref("XREquirectLayer.lowerVerticalAngle")}}
  - : A number indicating the lower vertical angle in radians for the sphere.
- {{domxref("XREquirectLayer.radius")}}
  - : A number indicating the radius of the sphere.
- {{domxref("XREquirectLayer.space")}}
  - : An {{domxref("XRSpace")}} representing the layer's spatial relationship with the user’s physical environment.
- {{domxref("XREquirectLayer.transform")}}
  - : An {{domxref("XRRigidTransform")}} representing the offset and orientation relative to `space`.
- {{domxref("XREquirectLayer.upperVerticalAngle")}}
  - : A number indicating the upper vertical angle in radians for the sphere.

## Methods

*Inherits methods from its parents, {{domxref("XRCompositionLayer")}} and {{domxref("EventTarget")}}*.

## Events

- {{domxref("XREquirectLayer.redraw_event", "redraw")}}
  - : Sent to the `XREquirectLayer` object when the underlying resources of the layer are lost or when the XR Compositor can no longer reproject the layer. If this event is sent, authors should redraw the content of the layer in the next XR animation frame.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRLayer")}}
- {{domxref("EventTarget")}}
- {{domxref("XRCompositionLayer")}}
- {{domxref("XRCylinderLayer")}}
- {{domxref("XRCubeLayer")}}
- {{domxref("XRQuadLayer")}}
- {{domxref("XRProjectionLayer")}}
