---
title: Compressed texture formats
slug: Web/API/WebGL_API/Compressed_texture_formats
page-type: guide
---

{{DefaultAPISidebar("WebGL")}}

The WebGL API provides methods to use compressed texture formats. These are useful to increase texture detail while limiting the additional video memory necessary. By default, no compressed formats are available: a corresponding compressed texture format extension must first be enabled.

## Usage

Unless otherwise specified, this article applies to both WebGL 1 and 2 contexts.

If supported, textures can be stored in a compressed format in video memory. This allows for additional detail while limiting the added video memory necessary. Textures are uncompressed on the fly when being accessed by a shader. Note that this advantage doesn't translate to network bandwidth: while the formats are better than uncompressed data, they are in general far worse than standard image formats such as PNG and JPG.

As compressed textures require hardware support, therefore no specific formats are required by WebGL; instead, a context can make different formats available, depending on hardware support. [This site](https://toji.github.io/texture-tester/) shows which formats are supported in the used browser.

Usage of compressed formats first requires activating the respective extension with {{domxref("WebGLRenderingContext.getExtension()")}}. If supported, it will return an extension object with constants for the added formats and the formats will also be returned by calls to `gl.getParameter(gl.COMPRESSED_TEXTURE_FORMATS)`. (E.g. `ext.COMPRESSED_RGBA_S3TC_DXT1_EXT` for the {{domxref("WEBGL_compressed_texture_s3tc")}} extension.) These can then be used with {{domxref("WebGLRenderingContext.compressedTexImage2D()", "compressedTexImage[23]D")}} or {{domxref("WebGLRenderingContext.compressedTexSubImage2D()", "compressedTexSubImage[23]D")}} instead of `texImage2D` calls.

Note that WebGL makes no functionality available to compress or decompress textures: they must already be in a compressed format and can then be directly uploaded to video memory.

All formats support 2D textures. Which formats support `TEXTURE_2D_ARRAY` and `TEXTURE_3D` targets (in combination with `compressedTexImage3D`) are noted in the following table.

| Extension                          | Notes                                                      | TEXTURE_2D_ARRAY | TEXTURE_3D |
| ---------------------------------- | ---------------------------------------------------------- | ---------------- | ---------- |
| WEBGL_compressed_texture_astc      |                                                            | Yes              | Yes        |
| WEBGL_compressed_texture_etc       |                                                            | Yes              | No         |
| WEBGL_compressed_texture_etc1\*    | Not usable with compressedTexSubImage2D/copyTexSubImage2D. | No               | No         |
| WEBGL_compressed_texture_pvrtc     | Width and height must be powers of 2.                      | No               | No         |
| WEBGL_compressed_texture_s3tc      | Width and height must be multiples of 4.                   | Yes              | No         |
| WEBGL_compressed_texture_s3tc_srgb | Width and height must be multiples of 4.                   | ?                | No         |

## Examples

```js
async function getCompressedTextureIfAvailable(gl) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture); // create texture object on GPU
  const ext = gl.getExtension("WEBGL_compressed_texture_s3tc"); // will be null if not supported
  if (ext) {
    // the file is already in the correct compressed format
    const dataArrayBuffer = await fetch(
      "/textures/foobar512x512.RGBA_S3TC_DXT1",
    ).then((response) => response.arrayBuffer());
    gl.compressedTexImage2D(
      gl.TEXTURE_2D,
      0, // set the base image level
      ext.COMPRESSED_RGBA_S3TC_DXT1_EXT, // the compressed format we are using
      512,
      512, // width, height of the image
      0, // border, always 0
      new DataView(dataArrayBuffer),
    );
    gl.generateMipMap(); // create mipmap levels, like we would for a standard image
    return texture;
  }
}
```
