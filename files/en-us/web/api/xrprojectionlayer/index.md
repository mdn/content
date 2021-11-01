---
title: XRProjectionLayer
slug: Web/API/XRProjectionLayer
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
  - XRProjectionLayer
browser-compat: api.XRProjectionLayer
---
{{securecontext_header}}{{APIRef("WebXR Device API")}}

The **`XRProjectionLayer`** interface of the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) is a layer that fills the entire view of the observer and is refreshed close to the device's native frame rate.

`XRProjectionLayer` is supported by all {{domxref("XRSession")}} objects (no `layers` feature descriptor is needed).

To create a new `XRProjectionLayer`, call {{domxref("XRWebGLBinding.createProjectionLayer()")}}.
To present layers to the XR device, add them to the `layers` render state using {{domxref("XRSession.updateRenderState()")}}.

`XRProjectionLayer` objects don’t have an associated {{domxref("XRSpace")}}, because they render to the full frame.

## Properties

_Inherits properties from its parent, {{domxref("XRCompositionLayer")}}._

- {{domxref("XRCompositionLayer.blendTextureSourceAlpha")}}
  - : A boolean enabling the layer's texture alpha channel.
- {{domxref("XRCompositionLayer.chromaticAberrationCorrection")}}
  - : A boolean enabling optical chromatic aberration correction for the layer if the device supports it, {{jsxref("null")}} otherwise.
- {{domxref("XRProjectionLayer.fixedFoveation")}}
   - : A number indicating the amount of foveation used by the XR compositor for the layer. Fixed Foveated Rendering (FFR) renders the edges of the eye textures at a lower resolution than the center and reduces the GPU load.
- {{domxref("XRProjectionLayer.ignoreDepthValues")}} {{ReadOnlyInline}}
   - : A boolean indicating that the XR compositor is not making use of depth buffer values when rendering the layer.
- {{domxref("XRCompositionLayer.layout")}} {{ReadOnlyInline}}
  - : The layout type of the layer.
- {{domxref("XRCompositionLayer.mipLevels")}} {{ReadOnlyInline}}
  - : The actual number of mip levels in the color and texture data for the layer.
- {{domxref("XRCompositionLayer.needsRedraw")}} {{ReadOnlyInline}}
  - : A boolean signaling that the layer should be rerendered in the next frame.
- {{domxref("XRProjectionLayer.textureArrayLength")}} {{ReadOnlyInline}}
  - : The layer's layer count for array textures when using `texture-array` as the `textureType`.
- {{domxref("XRProjectionLayer.textureHeight")}} {{ReadOnlyInline}}
  - : The height in pixels of the color textures of this layer.
- {{domxref("XRProjectionLayer.textureWidth")}} {{ReadOnlyInline}}
  - : The width in pixels of the color textures of this layer.

## Methods

*Inherits methods from its parents, {{domxref("XRCompositionLayer")}} and {{domxref("EventTarget")}}*.

- {{domxref("EventTarget.addEventListener()")}}
  - : Registers an event handler of a specific event type on the `EventTarget`.
- {{domxref("XRCompositionLayer.destroy()")}}
  - : Deletes the underlying layer attachments.
- {{domxref("EventTarget.dispatchEvent()")}}
  - : Dispatches an event to this `EventTarget`.
- {{domxref("EventTarget.removeEventListener()")}}
  - : Removes an event listener from the `EventTarget`.

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
