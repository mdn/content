---
title: WEBGL_depth_texture extension
short-title: WEBGL_depth_texture
slug: Web/API/WEBGL_depth_texture
page-type: webgl-extension
browser-compat: api.WEBGL_depth_texture
---

{{APIRef("WebGL")}}

The **`WEBGL_depth_texture`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and defines 2D depth and depth-stencil textures.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> **Note:** This extension is only available to {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} contexts. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}, the functionality of this extension is available on the WebGL2 context by default. The constant in WebGL2 is `gl.UNSIGNED_INT_24_8`.

## Constants

This extension adds a new constant:

- `ext.UNSIGNED_INT_24_8_WEBGL`
  - : Unsigned integer type for 24-bit depth texture data.

## Extended methods

This extension extends {{domxref("WebGLRenderingContext.texImage2D()")}}:

- The `format` and `internalformat` parameters now accept `gl.DEPTH_COMPONENT` and `gl.DEPTH_STENCIL`.
- The `type` parameter now accepts `gl.UNSIGNED_SHORT`, `gl.UNSIGNED_INT`, and `ext.UNSIGNED_INT_24_8_WEBGL`.
- The `pixels` parameter now accepts a {{jsxref("Uint16Array")}} or a {{jsxref("Uint32Array")}} object.

This extension extends {{domxref("WebGLRenderingContext.framebufferTexture2D()")}}:

- The `attachment` parameter now accepts `gl.DEPTH_STENCIL_ATTACHMENT`.

> **Note:** Incorrectly stated as the `target` parameter in the specification, see <https://www.khronos.org/bugzilla/show_bug.cgi?id=674>.

## Examples

```js
const ext = gl.getExtension("WEBGL_depth_texture");

gl.texImage2D(
  gl.TEXTURE_2D,
  0,
  gl.DEPTH_COMPONENT,
  512,
  512,
  0,
  gl.DEPTH_COMPONENT,
  gl.UNSIGNED_SHORT,
  null,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.framebufferTexture2D()")}}
