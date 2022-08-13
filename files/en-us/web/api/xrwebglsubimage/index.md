---
title: XRWebGLSubImage
slug: Web/API/XRWebGLSubImage
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - WebXR
  - XR
  - AR
  - VR
browser-compat: api.XRWebGLSubImage
---
{{APIRef("WebXR Device API")}} {{secureContext_header}}

The **`XRWebGLSubImage`** interface is used during rendering of WebGL layers.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("XRSubImage")}}._

- {{domxref("XRWebGLSubImage.colorTexture")}} {{ReadOnlyInline}}
  - : A color {{domxref("WebGLTexture")}} object for the {{domxref("XRCompositionLayer")}} to render.
- {{domxref("XRWebGLSubImage.depthStencilTexture")}} {{ReadOnlyInline}}
  - : A depth/stencil {{domxref("WebGLTexture")}} object for the {{domxref("XRCompositionLayer")}} to render.
- {{domxref("XRWebGLSubImage.imageIndex")}} {{ReadOnlyInline}}
  - : A number representing the offset into the texture array if the layer was requested with `texture-array`; [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) otherwise.
- {{domxref("XRWebGLSubImage.textureWidth")}} {{ReadOnlyInline}}
  - : A number representing the width in pixels of the GL attachment.
- {{domxref("XRWebGLSubImage.textureHeight")}} {{ReadOnlyInline}}
  - : A number representing the height in pixels of the GL attachment.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRLayer")}}
- {{domxref("XRWebGLBinding.getSubImage()")}}
- {{domxref("XRWebGLBinding.getViewSubImage()")}}
