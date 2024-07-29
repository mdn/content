---
title: WEBGL_color_buffer_float extension
short-title: WEBGL_color_buffer_float
slug: Web/API/WEBGL_color_buffer_float
page-type: webgl-extension
browser-compat: api.WEBGL_color_buffer_float
---

{{APIRef("WebGL")}}

The **`WEBGL_color_buffer_float`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and adds the ability to render to 32-bit floating-point color buffers.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> This extension is available to {{domxref("WebGLRenderingContext", "WebGL 1", "", 1)}} contexts only. For {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}}, use the {{domxref("EXT_color_buffer_float")}} extension.
>
> The {{domxref("OES_texture_float")}} extension implicitly enables this extension.

## Constants

- `ext.RGBA32F_EXT`
  - : RGBA 32-bit floating-point color-renderable format.
- `ext.RGB32F_EXT` ({{deprecated_inline}})
  - : RGB 32-bit floating-point color-renderable format.
- `ext.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT`
  - : ?
- `ext.UNSIGNED_NORMALIZED_EXT`
  - : ?

## Extended methods

This extension extends {{domxref("WebGLRenderingContext.renderbufferStorage()")}}:

- The `internalformat` parameter now accepts `ext.RGBA32F_EXT` and `ext.RGB32F_EXT` ({{deprecated_inline}}).

## Examples

```js
const ext = gl.getExtension("WEBGL_color_buffer_float");

gl.renderbufferStorage(gl.RENDERBUFFER, ext.RGBA32F_EXT, 256, 256);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.renderbufferStorage()")}}
- {{domxref("OES_texture_float")}}
