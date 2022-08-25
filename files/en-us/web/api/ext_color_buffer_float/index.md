---
title: EXT_color_buffer_float
slug: Web/API/EXT_color_buffer_float
page-type: webgl-extension
tags:
  - API
  - Reference
  - WebGL
  - WebGL extension
  - WebGL2
browser-compat: api.EXT_color_buffer_float
---
{{APIRef("WebGL")}}

The **`EXT_color_buffer_float`** extension is part of [WebGL](/en-US/docs/Web/API/WebGL_API) and adds the ability to render a variety of floating point formats.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> **Note:** This extension is available to {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}} contexts only.
>
> For {{domxref("WebGLRenderingContext", "WebGL 1", "", 1)}}, see the {{domxref("EXT_color_buffer_half_float")}} and {{domxref("WEBGL_color_buffer_float")}} extensions.

## Extended methods

The following sized formats become **color-renderable**:

- `gl.R16F`,
- `gl.RG16F`,
- `gl.RGBA16F`,
- `gl.R32F`,
- `gl.RG32F`,
- `gl.RGBA32F`,
- `gl.R11F_G11F_B10F`.

**Color-renderable** means:

- The {{domxref("WebGLRenderingContext.renderbufferStorage()")}} method now accepts these formats.
- Framebuffers with attached textures of these formats may now be **FRAMEBUFFER_COMPLETE**.

## Examples

`gl` must be a {{domxref("WebGL2RenderingContext")}}. This extension does not work in WebGL 1 contexts.

```js
const ext = gl.getExtension('EXT_color_buffer_float');

gl.renderbufferStorage(gl.RENDERBUFFER, gl.RGBA16F, 256, 256);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.renderbufferStorage()")}}
- {{domxref("EXT_color_buffer_half_float")}}
- {{domxref("WEBGL_color_buffer_float")}}
