---
title: XRWebGLBinding
slug: Web/API/XRWebGLBinding
tags:
  - API
  - Interface
  - Reference
  - WebXR
  - XR
  - AR
  - VR
browser-compat: api.XRWebGLBinding
---
{{APIRef("WebXR Device API")}} {{secureContext_header}}

The **`XRWebGLBinding`** interface is used to create layers that have a GPU backend.

## Constructor

- {{domxref("XRWebGLBinding.XRWebGLBinding", "XRWebGLBinding()")}}
  - : Creates a new `XRWebGLBinding` object for the specified XR session and WebGL rendering context.

## Properties

- {{domxref("XRWebGLBinding.nativeProjectionScaleFactor")}} {{ReadOnlyInline}}
  - : The `scaleFactor` that was passed in during the construction of the projection layer. The native buffer size is scaled by this number.

## Methods

- {{domxref("XRWebGLBinding.createEquirectLayer()")}}
  - : Returns an {{domxref("XREquirectLayer")}} object which is a layer that maps [equirectangular](https://en.wikipedia.org/wiki/Equirectangular_projection) coded data onto the inside of a sphere.
- {{domxref("XRWebGLBinding.createProjectionLayer()")}}
  - : Returns an {{domxref("XRProjectionLayer")}} object which is a layer that fills the entire view of the observer and is refreshed close to the device's native frame rate.
- {{domxref("XRWebGLBinding.getDepthInformation()")}}
  - : Returns an {{domxref("XRWebGLDepthInformation")}} object containing WebGL depth information.
- {{domxref("XRWebGLBinding.getReflectionCubeMap()")}}
  - : Returns a {{domxref("WebGLTexture")}} object containing a reflection cube map texture.
- {{domxref("XRWebGLBinding.getSubImage()")}}
  - : Returns an {{domxref("XRWebGLSubImage")}} object representing the WebGL texture to render.
- {{domxref("XRWebGLBinding.getViewSubImage()")}}
  - : Returns an {{domxref("XRWebGLSubImage")}} object representing the WebGL texture to render for an {{domxref("XRView")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRWebGLLayer")}}
- {{domxref('WebGLRenderingContext')}} and {{domxref("WebGL2RenderingContext")}}
