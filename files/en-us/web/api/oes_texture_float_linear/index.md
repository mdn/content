---
title: OES_texture_float_linear extension
short-title: OES_texture_float_linear
slug: Web/API/OES_texture_float_linear
page-type: webgl-extension
browser-compat: api.OES_texture_float_linear
---

{{APIRef("WebGL")}}

The **`OES_texture_float_linear`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and allows linear filtering with floating-point pixel types for textures.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> This extension is available to both, {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} and {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} contexts.

## Linear filtering

The {{domxref("OES_texture_float")}} extension alone does not allow linear filtering with floating-point textures. This extension enables this ability.

With the help of this extension, you can now set the magnification or minification filter in the {{domxref("WebGLRenderingContext.texParameter()")}} method to one of `gl.LINEAR`, `gl.LINEAR_MIPMAP_NEAREST`, `gl.NEAREST_MIPMAP_LINEAR`, or `gl.LINEAR_MIPMAP_LINEAR`, and use floating-point textures.

## Examples

```js
gl.getExtension("OES_texture_float");
gl.getExtension("OES_texture_float_linear");

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
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
- {{domxref("OES_texture_float")}}
- {{domxref("OES_texture_half_float")}}
- {{domxref("OES_texture_half_float_linear")}}
