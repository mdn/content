---
title: WEBGL_compressed_texture_etc
slug: Web/API/WEBGL_compressed_texture_etc
page-type: webgl-extension
tags:
  - API
  - Reference
  - WebGL
  - WebGL extension
browser-compat: api.WEBGL_compressed_texture_etc
---
{{APIRef("WebGL")}}

The **`WEBGL_compressed_texture_etc`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and exposes 10 [ETC/EAC compressed texture formats](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression).

Compressed textures reduce the amount of memory needed to store a texture on the GPU, allowing for higher resolution textures or more of the same resolution textures.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> **Note:** This extension is available to both, {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} and {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} contexts.

## Constants

The compressed texture formats are exposed by 10 constants and can be used in two functions: {{domxref("WebGLRenderingContext.compressedTexImage2D", "compressedTexImage2D()")}} and {{domxref("WebGLRenderingContext.compressedTexSubImage2D", "compressedTexSubImage2D()")}}.

- `ext.COMPRESSED_R11_EAC`
  - : One-channel (red) unsigned format compression.
- `ext.COMPRESSED_SIGNED_R11_EAC`
  - : One-channel (red) signed format compression.
- `ext.COMPRESSED_RG11_EAC`
  - : Two-channel (red and green) unsigned format compression.
- `ext.COMPRESSED_SIGNED_RG11_EAC`
  - : Two-channel (red and green) signed format compression.
- `ext.COMPRESSED_RGB8_ETC2`
  - : Compresses RGB8 data with no alpha channel.
- `ext.COMPRESSED_RGBA8_ETC2_EAC`
  - : Compresses RGBA8 data. The RGB part is encoded the same as `RGB_ETC2`, but the alpha part is encoded separately.
- `ext.COMPRESSED_SRGB8_ETC2`
  - : Compresses sRGB8 data with no alpha channel.
- `ext.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`
  - : Compresses sRGBA8 data. The sRGB part is encoded the same as `SRGB_ETC2`, but the alpha part is encoded separately.
- `ext.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`
  - : Similar to `RGB8_ETC`, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.
- `ext.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`
  - : Similar to `SRGB8_ETC`, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.

## Examples

```js
const ext = gl.getExtension('WEBGL_compressed_texture_etc');

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.compressedTexImage2D(gl.TEXTURE_2D, 0, ext.COMPRESSED_RGBA8_ETC2_EAC, 512, 512, 0, textureData);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Compatibility notes

- This extension was named `WEBGL_compressed_texture_es3` from Firefox 46 to Firefox 51 and used to be available on the WebGL 2 context by default – this is not the case anymore. You have to enable it on both, WebGL 1 and WebGL 2 contexts, in order to use it.

## See also

- [Ericsson Texture Compression – Wikipedia](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression)
- {{domxref("WEBGL_compressed_texture_etc1")}} (ETC1)
- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
