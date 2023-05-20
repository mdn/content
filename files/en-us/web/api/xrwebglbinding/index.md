---
title: XRWebGLBinding
slug: Web/API/XRWebGLBinding
page-type: web-api-interface
status:
  - experimental
browser-compat: api.XRWebGLBinding
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

The **`XRWebGLBinding`** interface is used to create layers that have a GPU backend.

## Constructor

- {{domxref("XRWebGLBinding.XRWebGLBinding", "XRWebGLBinding()")}} {{Experimental_Inline}}
  - : Creates a new `XRWebGLBinding` object for the specified XR session and WebGL rendering context.

## Instance properties

- {{domxref("XRWebGLBinding.nativeProjectionScaleFactor")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The `scaleFactor` that was passed in during the construction of the projection layer. The native buffer size is scaled by this number.

## Instance methods

- {{domxref("XRWebGLBinding.createCubeLayer()")}} {{Experimental_Inline}}
  - : Returns an {{domxref("XRCubeLayer")}} object, which is a layer that renders directly from a [cubemap](https://en.wikipedia.org/wiki/Cube_mapping), and projects it onto the inside faces of a cube.
- {{domxref("XRWebGLBinding.createCylinderLayer()")}} {{Experimental_Inline}}
  - : Returns an {{domxref("XRCylinderLayer")}} object which is a layer that takes up a curved rectangular space in the virtual environment.
- {{domxref("XRWebGLBinding.createEquirectLayer()")}} {{Experimental_Inline}}
  - : Returns an {{domxref("XREquirectLayer")}} object which is a layer that maps [equirectangular](https://en.wikipedia.org/wiki/Equirectangular_projection) coded data onto the inside of a sphere.
- {{domxref("XRWebGLBinding.createProjectionLayer()")}} {{Experimental_Inline}}
  - : Returns an {{domxref("XRProjectionLayer")}} object which is a layer that fills the entire view of the observer and is refreshed close to the device's native frame rate.
- {{domxref("XRWebGLBinding.createQuadLayer()")}} {{Experimental_Inline}}
  - : Returns an {{domxref("XRQuadLayer")}} object which is a two-dimensional object positioned and oriented in 3D space.
- {{domxref("XRWebGLBinding.getDepthInformation()")}} {{Experimental_Inline}}
  - : Returns an {{domxref("XRWebGLDepthInformation")}} object containing WebGL depth information.
- {{domxref("XRWebGLBinding.getReflectionCubeMap()")}} {{Experimental_Inline}}
  - : Returns a {{domxref("WebGLTexture")}} object containing a reflection cube map texture.
- {{domxref("XRWebGLBinding.getSubImage()")}} {{Experimental_Inline}}
  - : Returns an {{domxref("XRWebGLSubImage")}} object representing the WebGL texture to render.
- {{domxref("XRWebGLBinding.getViewSubImage()")}} {{Experimental_Inline}}
  - : Returns an {{domxref("XRWebGLSubImage")}} object representing the WebGL texture to render for an {{domxref("XRView")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRWebGLLayer")}}
- {{domxref('WebGLRenderingContext')}} and {{domxref("WebGL2RenderingContext")}}
