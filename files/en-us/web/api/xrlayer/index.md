---
title: XRLayer
slug: Web/API/XRLayer
tags:
  - API
  - Interface
  - Reference
  - WebXR
  - XR
  - AR
  - VR
browser-compat: api.XRLayer
---
{{APIRef("WebXR Device API")}} {{secureContext_header}}

The **`XRLayer`** interface of the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) is the base class for WebXR layer types. It inherits methods from {{domxref("EventTarget")}}.
## Interfaces based on `XRLayer`

Below is a list of interfaces based on the <code>XRLayer</code> interface.

- {{domxref("XRCompositionLayer")}}
- {{domxref("XRWebGLLayer")}}
## Methods

*Inherits methods from its parent, {{domxref("EventTarget")}}*.

## Classes extending `XRLayer`

- {{domxref("XRCompositionLayer")}}
  - {{domxref("XRCubeLayer")}}
  - {{domxref("XRCylinderLayer")}}
  - {{domxref("XREquirectLayer")}}
  - {{domxref("XRProjectionLayer")}}
  - {{domxref("XRQuadLayer")}}
- {{domxref("XRWebGLLayer")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRCompositionLayer")}}
- {{domxref("XRWebGLLayer")}}
- {{domxref("EventTarget")}}
