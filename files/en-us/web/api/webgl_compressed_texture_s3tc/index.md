---
title: WEBGL_compressed_texture_s3tc
slug: Web/API/WEBGL_compressed_texture_s3tc
tags:
  - API
  - Reference
  - WebGL
  - WebGL extension
browser-compat: api.WEBGL_compressed_texture_s3tc
---
{{APIRef("WebGL")}}

The **`WEBGL_compressed_texture_s3tc`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and exposes four [S3TC compressed texture formats](https://en.wikipedia.org/wiki/S3_Texture_Compression).

Compressed textures reduce the amount of memory needed to store a texture on the GPU, allowing for higher resolution textures or more of the same resolution textures.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> **Note:** This extension is available to both, {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} and {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} contexts.

## Constants

The compressed texture formats are exposed by four constants and can be used in two functions: {{domxref("WebGLRenderingContext.compressedTexImage2D", "compressedTexImage2D()")}} and {{domxref("WebGLRenderingContext.compressedTexSubImage2D", "compressedTexSubImage2D()")}}.

- `ext.COMPRESSED_RGB_S3TC_DXT1_EXT`
  - : A DXT1-compressed image in an RGB image format.
- `ext.COMPRESSED_RGBA_S3TC_DXT1_EXT`
  - : A DXT1-compressed image in an RGB image format with a simple on/off alpha value.
- `ext.COMPRESSED_RGBA_S3TC_DXT3_EXT`
  - : A DXT3-compressed image in an RGBA image format. Compared to a 32-bit RGBA texture, it offers 4:1 compression.
- `ext.COMPRESSED_RGBA_S3TC_DXT5_EXT`
  - : A DXT5-compressed image in an RGBA image format. It also provides a 4:1 compression, but differs to the DXT3 compression in how the alpha compression is done.

## Examples

```js
var ext = (
  gl.getExtension('WEBGL_compressed_texture_s3tc') ||
  gl.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
  gl.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc')
);

var texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.compressedTexImage2D(gl.TEXTURE_2D, 0, ext.COMPRESSED_RGBA_S3TC_DXT5_EXT, 512, 512, 0, textureData);

gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [S3 Texture Compression – OpenGL wiki](https://www.opengl.org/wiki/S3_Texture_Compression)
- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
