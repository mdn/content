---
title: EXT_texture_compression_bptc
slug: Web/API/EXT_texture_compression_bptc
tags:
  - API
  - Reference
  - WebGL
  - WebGL extensions
browser-compat: api.EXT_texture_compression_bptc
---
{{APIRef("WebGL")}}

The `EXT_texture_compression_bptc` extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and exposes 4 BPTC compressed texture formats. These compression formats are called [BC7](https://docs.microsoft.com/en-us/windows/desktop/direct3d11/bc7-format) and [BC6H](https://docs.microsoft.com/en-us/windows/desktop/direct3d11/bc6h-format) in [Microsoft's DirectX API](https://docs.microsoft.com/en-us/windows/desktop/direct3d11/texture-block-compression-in-direct3d-11).

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> **Note:** Support depends on the system's graphics driver. There is no support on Windows.
>
> This extension is available to both, {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} and {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} contexts.

## Constants

The compressed texture formats are exposed by 4 constants and can be used in two functions: {{domxref("WebGLRenderingContext.compressedTexImage2D", "compressedTexImage2D()")}} and {{domxref("WebGLRenderingContext.compressedTexSubImage2D", "compressedTexSubImage2D()")}}.

- `ext.COMPRESSED_RGBA_BPTC_UNORM_EXT`
  - : Compresses 8-bit fixed-point data. Each 4x4 block of texels consists of 128 bits of RGBA or image data. See also [BC7 format](https://docs.microsoft.com/en-us/windows/desktop/direct3d11/bc7-format).
- `ext.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT`
  - : Compresses 8-bit fixed-point data. Each 4x4 block of texels consists of 128 bits of SRGB_ALPHA or image data. See also [BC7 format](https://docs.microsoft.com/en-us/windows/desktop/direct3d11/bc7-format).
- `ext.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT`
  - : Compresses high dynamic range signed floating point values. Each 4x4 block of texels consists of 128 bits of RGB data. It only contains RGB data, so the returned alpha value is 1.0. See also [BC6H format](https://docs.microsoft.com/en-us/windows/desktop/direct3d11/bc6h-format).
- `ext.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT`
  - : Compresses high dynamic range unsigned floating point values. Each 4x4 block of texels consists of 128 bits of RGB data. It only contains RGB data, so the returned alpha value is 1.0. See also [BC6H format](https://docs.microsoft.com/en-us/windows/desktop/direct3d11/bc6h-format).

## Examples

```js
var ext = gl.getExtension('EXT_texture_compression_bptc');

var texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.compressedTexImage2D(gl.TEXTURE_2D, 0, ext.COMPRESSED_RGBA_BPTC_UNORM_EXT, 128, 128, 0, textureData);
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
