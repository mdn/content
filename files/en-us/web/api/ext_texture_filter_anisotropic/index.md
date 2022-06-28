---
title: EXT_texture_filter_anisotropic
slug: Web/API/EXT_texture_filter_anisotropic
page-type: webgl-extension
tags:
  - API
  - Reference
  - WebGL
  - WebGL extension
browser-compat: api.EXT_texture_filter_anisotropic
---
{{APIRef("WebGL")}}

The **`EXT_texture_filter_anisotropic`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and exposes two constants for [anisotropic filtering (AF)](https://en.wikipedia.org/wiki/Anisotropic_filtering).

AF improves the quality of mipmapped texture access when viewing a textured primitive at an oblique angle. Using just mipmapping, these lookups have a tendency to average to grey.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> **Note:** This extension is available to both, {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} and {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} contexts.

## Constants

- `ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT`
  - : This is the `pname` argument to the {{domxref("WebGLRenderingContext.getParameter", "gl.getParameter()")}} call, and it returns the maximum available anisotropy.
- `ext.TEXTURE_MAX_ANISOTROPY_EXT`
  - : This is the `pname` argument to the {{domxref("WebGLRenderingContext.getTexParameter", "gl.getTexParameter()")}} and {{domxref("WebGLRenderingContext.texParameter", "gl.texParameterf()")}} / {{domxref("WebGLRenderingContext.texParameter", "gl.texParameteri()")}} calls and sets the desired maximum anisotropy for a texture.

## Examples

```js
const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);
const ext = (
  gl.getExtension('EXT_texture_filter_anisotropic') ||
  gl.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
  gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic')
);
if (ext){
  const max = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
  gl.texParameterf(gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, max);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
