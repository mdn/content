---
title: XRProjectionLayer
slug: Web/API/XRProjectionLayer
page-type: web-api-interface
status:
  - experimental
browser-compat: api.XRProjectionLayer
---

{{securecontext_header}}{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`XRProjectionLayer`** interface of the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) is a layer that fills the entire view of the observer and is refreshed close to the device's native frame rate.

`XRProjectionLayer` is supported by all {{domxref("XRSession")}} objects (no `layers` feature descriptor is needed).

To create a new `XRProjectionLayer`, call {{domxref("XRWebGLBinding.createProjectionLayer()")}}.
To present layers to the XR device, add them to the `layers` render state using {{domxref("XRSession.updateRenderState()")}}.

`XRProjectionLayer` objects don't have an associated {{domxref("XRSpace")}}, because they render to the full frame.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("XRCompositionLayer")}} and {{domxref("EventTarget")}}._

- {{domxref("XRProjectionLayer.fixedFoveation")}} {{Experimental_Inline}}
  - : A number indicating the amount of foveation used by the XR compositor for the layer. Fixed Foveated Rendering (FFR) renders the edges of the eye textures at a lower resolution than the center and reduces the GPU load.
- {{domxref("XRProjectionLayer.ignoreDepthValues")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A boolean indicating that the XR compositor is not making use of depth buffer values when rendering the layer.
- {{domxref("XRProjectionLayer.textureArrayLength")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The layer's layer count for array textures when using `texture-array` as the `textureType`.
- {{domxref("XRProjectionLayer.textureHeight")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The height in pixels of the color textures of this layer.
- {{domxref("XRProjectionLayer.textureWidth")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The width in pixels of the color textures of this layer.

## Instance methods

_Inherits methods from its parents, {{domxref("XRCompositionLayer")}} and {{domxref("EventTarget")}}_.

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
- {{domxref("XRQuadLayer")}}
