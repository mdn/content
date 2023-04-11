---
title: EXT_blend_minmax extension
short-title: EXT_blend_minmax
slug: Web/API/EXT_blend_minmax
page-type: webgl-extension
browser-compat: api.EXT_blend_minmax
---

{{APIRef("WebGL")}}

The **`EXT_blend_minmax`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and extends blending capabilities by adding two new blend equations: the minimum or maximum color components of the source and destination colors.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> **Note:** This extension is only available to {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} contexts. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}, the functionality of this extension is available on the WebGL2 context by default. The constants in WebGL2 are `gl.MIN` and `gl.MAX`.

## Constants

This extension adds two new constants, which can be used in {{domxref("WebGLRenderingContext.blendEquation()")}} and {{domxref("WebGLRenderingContext.blendEquationSeparate()")}}:

- `ext.MIN_EXT`
  - : Produces the minimum color components of the source and destination colors.
- `ext.MAX_EXT`
  - : Produces the maximum color components of the source and destination colors.

## Examples

```js
const ext = gl.getExtension("EXT_blend_minmax");

gl.blendEquation(ext.MIN_EXT);
gl.blendEquation(ext.MAX_EXT);

gl.blendEquationSeparate(ext.MIN_EXT, ext.MAX_EXT);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.blendEquation()")}}
- {{domxref("WebGLRenderingContext.blendEquationSeparate()")}}
