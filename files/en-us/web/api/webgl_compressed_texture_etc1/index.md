---
title: WEBGL_compressed_texture_etc1
slug: Web/API/WEBGL_compressed_texture_etc1
page-type: webgl-extension
tags:
  - API
  - Reference
  - WebGL
  - WebGL extension
browser-compat: api.WEBGL_compressed_texture_etc1
---
{{APIRef("WebGL")}}

The **`WEBGL_compressed_texture_etc1`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and exposes the [ETC1 compressed texture format](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression).

Compressed textures reduce the amount of memory needed to store a texture on the GPU, allowing for higher resolution textures or more of the same resolution textures.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> **Note:** This extension is available to both, {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} and {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} contexts.

## Constants

The compressed texture format is exposed by a constant and can be used with the {{domxref("WebGLRenderingContext.compressedTexImage2D", "compressedTexImage2D()")}} method (note that ETC1 is **not** supported with the {{domxref("WebGLRenderingContext.compressedTexSubImage2D", "compressedTexSubImage2D()")}} method).

- `ext.COMPRESSED_RGB_ETC1_WEBGL`
  - : Compresses 24-bit RGB data with no alpha channel.

## Examples

```js
const ext = gl.getExtension('WEBGL_compressed_texture_etc1');

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.compressedTexImage2D(gl.TEXTURE_2D, 0, ext.COMPRESSED_RGB_ETC1_WEBGL, 512, 512, 0, textureData);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Ericsson Texture Compression – Wikipedia](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression)
- {{domxref("WEBGL_compressed_texture_etc")}} (ETC2 and EAC)
- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
