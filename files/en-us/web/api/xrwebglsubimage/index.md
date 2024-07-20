---
title: XRWebGLSubImage
slug: Web/API/XRWebGLSubImage
page-type: web-api-interface
status:
  - experimental
browser-compat: api.XRWebGLSubImage
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

The **`XRWebGLSubImage`** interface is used during rendering of WebGL layers.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("XRSubImage")}}._

- {{domxref("XRWebGLSubImage.colorTexture")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A color {{domxref("WebGLTexture")}} object for the {{domxref("XRCompositionLayer")}} to render.
- {{domxref("XRWebGLSubImage.depthStencilTexture")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A depth/stencil {{domxref("WebGLTexture")}} object for the {{domxref("XRCompositionLayer")}} to render.
- {{domxref("XRWebGLSubImage.imageIndex")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A number representing the offset into the texture array if the layer was requested with `texture-array`; [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) otherwise.
- {{domxref("XRWebGLSubImage.colorTextureWidth")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A number representing the width in pixels of the GL attachment.
- {{domxref("XRWebGLSubImage.colorTextureHeight")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A number representing the height in pixels of the GL attachment.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRLayer")}}
- {{domxref("XRWebGLBinding.getSubImage()")}}
- {{domxref("XRWebGLBinding.getViewSubImage()")}}
