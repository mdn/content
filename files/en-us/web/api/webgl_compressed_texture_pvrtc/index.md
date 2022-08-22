---
title: WEBGL_compressed_texture_pvrtc
slug: Web/API/WEBGL_compressed_texture_pvrtc
page-type: webgl-extension
tags:
  - API
  - Reference
  - WebGL
  - WebGL extension
browser-compat: api.WEBGL_compressed_texture_pvrtc
---
{{APIRef("WebGL")}}

The **`WEBGL_compressed_texture_pvrtc`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and exposes four [PVRTC compressed texture formats](https://en.wikipedia.org/wiki/PVRTC).

Compressed textures reduce the amount of memory needed to store a texture on the GPU, allowing for higher resolution textures or more of the same resolution textures.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> **Note:** PVRTC is typically only available on mobile devices with PowerVR chipsets.
> It is used in all generations of the iPhone, iPod Touch and iPad and supported on certain Android devices that use a PowerVR GPU.
>
> This extension is available to both, {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} and {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} contexts.

> **Note:** On iOS devices, this extension is named `WEBKIT_WEBGL_compressed_texture_pvrtc`.

## Constants

The compressed texture formats are exposed by four constants and can be used in two functions: {{domxref("WebGLRenderingContext.compressedTexImage2D", "compressedTexImage2D()")}} (where the `height` and `width` parameters must be powers of 2) and {{domxref("WebGLRenderingContext.compressedTexSubImage2D", "compressedTexSubImage2D()")}} (where the height and width parameters must equal the current values of the existing texture and the `xoffset` and `yoffset` parameters must be 0).

- `ext.COMPRESSED_RGB_PVRTC_4BPPV1_IMG`
  - : RGB compression in 4-bit mode. One block for each 4×4 pixels.
- `ext.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG`
  - : RGBA compression in 4-bit mode. One block for each 4×4 pixels.
- `ext.COMPRESSED_RGB_PVRTC_2BPPV1_IMG`
  - : RGB compression in 2-bit mode. One block for each 8×4 pixels.
- `ext.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG`
  - : RGBA compression in 2-bit mode. One block for each 8×4 pixels.

## Examples

```js
const ext = gl.getExtension('WEBGL_compressed_texture_pvrtc');

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.compressedTexImage2D(gl.TEXTURE_2D, 0, ext.COMPRESSED_RGB_PVRTC_4BPPV1_IMG, 512, 512, 0, textureData);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [PVRTC Texture Compression – Wikipedia](https://en.wikipedia.org/wiki/PVRTC)
- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
