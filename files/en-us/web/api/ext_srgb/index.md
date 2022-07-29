---
title: EXT_sRGB
slug: Web/API/EXT_sRGB
page-type: webgl-extension
tags:
  - API
  - Reference
  - WebGL
  - WebGL extension
browser-compat: api.EXT_sRGB
---
{{APIRef("WebGL")}}

The **`EXT_sRGB`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and adds sRGB support to textures and framebuffer objects.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> **Note:** This extension is only available to {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} contexts. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}, the functionality of this extension is available on the WebGL2 context by default. The constants in WebGL2 are: `gl.SRGB`, `gl.SRGB8`, `gl.SRGB8_ALPHA8` and `gl.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING`.

## Constants

This extension exposes the following constants, which can be used in the {{domxref("WebGLRenderingContext.texImage2D()", "texImage2D()")}}, {{domxref("WebGLRenderingContext.texSubImage2D()", "texSubImage2D()")}}, {{domxref("WebGLRenderingContext.renderbufferStorage()", "renderbufferStorage()")}} and {{domxref("WebGLRenderingContext.getFramebufferAttachmentParameter()", "getFramebufferAttachmentParameter()")}} methods.

- `ext.SRGB_EXT`
  - : Unsized sRGB format that leaves the precision up to the driver.
- `ext.SRGB_ALPHA_EXT`
  - : Unsized sRGB format with unsized alpha component.
- `ext.SRGB8_ALPHA8_EXT`
  - : Sized (8-bit) sRGB and alpha formats.
- `ext.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT`
  - : Returns the framebuffer color encoding (`gl.LINEAR` or `ext.SRGB_EXT`).

## Examples

```js
const ext = gl.getExtension('EXT_sRGB');

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.texImage2D(gl.TEXTURE_2D, 0, ext.SRGB_EXT, 512, 512, 0,
              ext.SRGB_EXT, gl.UNSIGNED_BYTE, image);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("WebGLRenderingContext.renderbufferStorage()")}}
- {{domxref("WebGLRenderingContext.getFramebufferAttachmentParameter()")}}
