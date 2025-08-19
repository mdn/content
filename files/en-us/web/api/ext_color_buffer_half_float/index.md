---
title: EXT_color_buffer_half_float extension
short-title: EXT_color_buffer_half_float
slug: Web/API/EXT_color_buffer_half_float
page-type: webgl-extension
browser-compat: api.EXT_color_buffer_half_float
---

{{APIRef("WebGL")}}

The **`EXT_color_buffer_half_float`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and adds the ability to render to 16-bit floating-point color buffers.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> This extension is available to both, {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} and {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} contexts. On WebGL 2, it's an alternative to using the {{domxref("EXT_color_buffer_float")}} extension on platforms that support 16-bit floating point render targets but not 32-bit floating point render targets.
>
> The {{domxref("OES_texture_half_float")}} extension implicitly enables this extension.

## Constants

- `ext.RGBA16F_EXT`
  - : RGBA 16-bit floating-point color-renderable format.
- `ext.RGB16F_EXT`
  - : RGB 16-bit floating-point format. In WebGL 1.0, this may be color-renderable (implementation-dependent). In WebGL 2.0, this format is not color-renderable.
- `ext.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT`
  - : Passed to {{domxref("WebGLRenderingContext.getFramebufferAttachmentParameter()")}} to get the framebuffer type.
- `ext.UNSIGNED_NORMALIZED_EXT`
  - : The framebuffer contains unsigned fixed-point components.

## Extended methods

This extension extends {{domxref("WebGLRenderingContext.renderbufferStorage()")}}:

- In WebGL 1.0 contexts, the `internalFormat` parameter now accepts `ext.RGBA16F_EXT` and `ext.RGB16F_EXT`. However, `ext.RGB16F_EXT` support is optional and applications must check framebuffer completeness to determine if it's supported.
- In WebGL 2.0 contexts, the `internalFormat` parameter now accepts `ext.RGBA16F_EXT`. The `RGB16F` format is not color-renderable in WebGL 2.0.

It extends {{domxref("WebGLRenderingContext.getFramebufferAttachmentParameter()")}}:

- In WebGL 1.0 contexts, the `pname` parameter now accepts `ext.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT`. An `INVALID_OPERATION` error is generated if `attachment` is `DEPTH_STENCIL_ATTACHMENT` and `pname` is `FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT`. When `pname` is `ext.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT`, `getFramebufferAttachmentParameter()` returns either `gl.FLOAT` or `gl.UNSIGNED_NORMALIZED_EXT` for floating-point or unsigned fixed-point components respectively.

## Examples

```js
const ext = gl.getExtension("EXT_color_buffer_half_float");

gl.renderbufferStorage(gl.RENDERBUFFER, ext.RGBA16F_EXT, 256, 256);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.renderbufferStorage()")}}
- {{domxref("OES_texture_half_float")}}
