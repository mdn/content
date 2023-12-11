---
title: EXT_texture_compression_rgtc extension
short-title: EXT_texture_compression_rgtc
slug: Web/API/EXT_texture_compression_rgtc
page-type: webgl-extension
browser-compat: api.EXT_texture_compression_rgtc
---

{{APIRef("WebGL")}}

The `EXT_texture_compression_rgtc` extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and exposes 4 RGTC compressed texture formats. RGTC is a block-based texture compression format suited for unsigned and signed red and red-green textures (**R**ed-**G**reen **T**exture **C**ompression).

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> **Note:** Support depends on the system's graphics driver. There is no support on Windows.
>
> This extension is available to both, {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} and {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} contexts.

## Constants

The compressed texture formats are exposed by 4 constants and can be used in two functions: {{domxref("WebGLRenderingContext.compressedTexImage2D", "compressedTexImage2D()")}} and {{domxref("WebGLRenderingContext.compressedTexSubImage2D", "compressedTexSubImage2D()")}}.

- `ext.COMPRESSED_RED_RGTC1_EXT`
  - : Each 4x4 block of texels consists of 64 bits of unsigned red image data. See also [BC4 unsigned](https://docs.microsoft.com/windows/win32/direct3d10/d3d10-graphics-programming-guide-resources-block-compression#bc4).
- `ext.COMPRESSED_SIGNED_RED_RGTC1_EXT`
  - : Each 4x4 block of texels consists of 64 bits of signed red image data. See also [BC4 signed](https://docs.microsoft.com/windows/win32/direct3d10/d3d10-graphics-programming-guide-resources-block-compression#bc4).
- `ext.COMPRESSED_RED_GREEN_RGTC2_EXT`
  - : Each 4x4 block of texels consists of 64 bits of compressed unsigned red image data followed by 64 bits of compressed unsigned green image data. See also [BC5 unsigned](https://docs.microsoft.com/windows/win32/direct3d10/d3d10-graphics-programming-guide-resources-block-compression#bc5).
- `ext.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT`
  - : Each 4x4 block of texels consists of 64 bits of compressed signed red image data followed by 64 bits of compressed signed green image data. See also [BC5 signed](https://docs.microsoft.com/windows/win32/direct3d10/d3d10-graphics-programming-guide-resources-block-compression#bc5).

## Examples

```js
const ext = gl.getExtension("EXT_texture_compression_rgtc");

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.compressedTexImage2D(
  gl.TEXTURE_2D,
  0,
  ext.COMPRESSED_RED_RGTC1_EXT,
  128,
  128,
  0,
  textureData,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
