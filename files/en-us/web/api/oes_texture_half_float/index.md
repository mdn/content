---
title: OES_texture_half_float extension
short-title: OES_texture_half_float
slug: Web/API/OES_texture_half_float
page-type: webgl-extension
browser-compat: api.OES_texture_half_float
---

{{APIRef("WebGL")}}

The **`OES_texture_half_float`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and adds texture formats with 16- (aka half float) and 32-bit floating-point components.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> This extension is only available to {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} contexts. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}, the functionality of this extension is available on the WebGL2 context by default. The constant in WebGL2 is `gl.HALF_FLOAT`.

## Constants

- `ext.HALF_FLOAT_OES`
  - : Half floating-point type (16-bit).

## Extended methods

This extension extends {{domxref("WebGLRenderingContext.texImage2D()")}} and {{domxref("WebGLRenderingContext.texSubImage2D()")}}:

- The `type` parameter now accepts `ext.HALF_FLOAT_OES`.

## Limitation: Linear filtering

Linear filtering on half floating-point textures is not allowed with this extension. If you set the magnification or minification filter in the {{domxref("WebGLRenderingContext.texParameter()")}} method to one of `gl.LINEAR`, `gl.LINEAR_MIPMAP_NEAREST`, `gl.NEAREST_MIPMAP_LINEAR`, or `gl.LINEAR_MIPMAP_LINEAR`, and use half floating-point textures, the texture will be marked as incomplete.

To use linear filtering on half floating-point textures, enable the {{domxref("OES_texture_half_float_linear")}} extension in addition to this extension.

## Half floating-point color buffers

This extension implicitly enables the {{domxref("EXT_color_buffer_half_float")}} extension (if supported), which allows rendering to 16-bit floating point formats.

## Examples

```js
const ext = gl.getExtension("OES_texture_half_float");

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, ext.HALF_FLOAT_OES, image);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("OES_texture_float")}}
- {{domxref("OES_texture_float_linear")}}
- {{domxref("OES_texture_half_float_linear")}}
