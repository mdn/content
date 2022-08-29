---
title: XRCubeLayer
slug: Web/API/XRCubeLayer
page-type: web-api-interface
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
  - XRCubeLayer
browser-compat: api.XRCubeLayer
---
{{securecontext_header}}{{APIRef("WebXR Device API")}}

The **`XRCubeLayer`** interface of the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) is a layer that renders directly from a [cubemap](https://en.wikipedia.org/wiki/Cube_mapping) and projects it onto the inside faces of a cube.

`XRCubeLayer` requires the `layers` feature to be enabled for the {{domxref("XRSession")}}. You can request it in {{domxref("XRSystem.requestSession()")}}.

To create a new `XRCubeLayer`, call {{domxref("XRWebGLBinding.createCubeLayer()")}}.

To present layers to the XR device, add them to the `layers` render state using {{domxref("XRSession.updateRenderState()")}}.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("XRCompositionLayer")}}._

- {{domxref("XRCubeLayer.space")}}
  - : An {{domxref("XRSpace")}} representing the layer's spatial relationship with the user's physical environment.
- {{domxref("XRCubeLayer.orientation")}}
  - : A {{domxref("DOMPointReadOnly")}} representing the orientation relative to the `space` property.

## Methods

_Inherits methods from its parents, {{domxref("XRCompositionLayer")}} and {{domxref("EventTarget")}}_.

## Events

- {{domxref("XRCubeLayer.redraw_event", "redraw")}}
  - : Sent to the `XRCubeLayer` object when the underlying resources of the layer are lost or when the XR Compositor can no longer reproject the layer. If this event is sent, authors should redraw the content of the layer in the next XR animation frame.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRLayer")}}
- {{domxref("EventTarget")}}
- {{domxref("XRCompositionLayer")}}
- {{domxref("XREquirectLayer")}}
- {{domxref("XRQuadLayer")}}
- {{domxref("XRCylinderLayer")}}
- {{domxref("XRProjectionLayer")}}
