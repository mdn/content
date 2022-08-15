---
title: WEBGL_compressed_texture_s3tc_srgb
slug: Web/API/WEBGL_compressed_texture_s3tc_srgb
page-type: webgl-extension
tags:
  - API
  - Reference
  - WebGL
  - WebGL extension
browser-compat: api.WEBGL_compressed_texture_s3tc_srgb
---
{{APIRef("WebGL")}}

The **`WEBGL_compressed_texture_s3tc_srgb`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and exposes four [S3TC compressed texture formats](https://en.wikipedia.org/wiki/S3_Texture_Compression) for the sRGB colorspace.

Compressed textures reduce the amount of memory needed to store a texture on the GPU, allowing for higher resolution textures or more of the same resolution textures.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> **Note:** This extension is available to both {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} and {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} contexts.

## Constants

The compressed texture formats are exposed by four constants and can be used in two functions: {{domxref("WebGLRenderingContext.compressedTexImage2D", "compressedTexImage2D()")}} and {{domxref("WebGLRenderingContext.compressedTexSubImage2D", "compressedTexSubImage2D()")}}.

- `ext.COMPRESSED_SRGB_S3TC_DXT1_EXT`
  - : A DXT1-compressed image in an sRGB image format.
- `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT`
  - : A DXT1-compressed image in an sRGB image format with a simple on/off alpha value.
- `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT`
  - : A DXT3-compressed image in an sRGBA image format.
- `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT`
  - : A DXT5-compressed image in an sRGBA image format.

## Examples

```js
const ext = gl.getExtension('WEBGL_compressed_texture_s3tc_srgb');

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.compressedTexImage2D(gl.TEXTURE_2D, 0, ext.COMPRESSED_SRGB_S3TC_DXT1_EXT, 512, 512, 0, textureData);

gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [S3 Texture Compression – OpenGL wiki](https://www.khronos.org/opengl/wiki/S3_Texture_Compression#sRGB_and_S3TC)
- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
