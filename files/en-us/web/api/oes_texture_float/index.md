---
title: OES_texture_float extension
short-title: OES_texture_float
slug: Web/API/OES_texture_float
page-type: webgl-extension
browser-compat: api.OES_texture_float
---

{{APIRef("WebGL")}}

The **`OES_texture_float`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and exposes floating-point pixel types for textures.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> This extension is only available to {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} contexts. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}, the functionality of this extension is available on the WebGL2 context by default.

## Extended methods

This extension extends {{domxref("WebGLRenderingContext.texImage2D()")}} and {{domxref("WebGLRenderingContext.texSubImage2D()")}}:

- The `type` parameter now accepts `gl.FLOAT`.
- The `pixels` parameter now accepts a {{jsxref("Float32Array")}}.

## Limitation: Linear filtering

Linear filtering on floating-point textures is not allowed with this extension. If you set the magnification or minification filter in the {{domxref("WebGLRenderingContext.texParameter()")}} method to one of `gl.LINEAR`, `gl.LINEAR_MIPMAP_NEAREST`, `gl.NEAREST_MIPMAP_LINEAR`, or `gl.LINEAR_MIPMAP_LINEAR`, and use floating-point textures, the texture will be marked as incomplete.

To use linear filtering on floating-point textures, enable the {{domxref("OES_texture_float_linear")}} extension in addition to this extension.

## Floating-point color buffers

This extension implicitly enables the {{domxref("WEBGL_color_buffer_float")}} extension (if supported), which allows rendering to 32-bit floating-point color buffers.

## Examples

```js
const ext = gl.getExtension("OES_texture_float");

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.FLOAT, image);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("OES_texture_float_linear")}}
- {{domxref("OES_texture_half_float")}}
- {{domxref("OES_texture_half_float_linear")}}
