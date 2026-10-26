---
title: EXT_texture_norm16 extension
short-title: EXT_texture_norm16
slug: Web/API/EXT_texture_norm16
page-type: webgl-extension
browser-compat: api.EXT_texture_norm16
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`EXT_texture_norm16`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and provides a set of 16-bit signed normalized and unsigned normalized formats for textures and renderbuffers.

> [!NOTE]
> This extension is only available to {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}} contexts.

## Constants

- `ext.R16_EXT`
  - : Red 16-bit unsigned normalized format. Color-renderable.
- `ext.RG16_EXT`
  - : RG 16-bit unsigned normalized format. Color-renderable.
- `ext.RGB16_EXT`
  - : RGB 16-bit unsigned normalized format.
- `ext.RGBA16_EXT`
  - : RGBA 16-bit unsigned normalized format. Color-renderable.
- `ext.R16_SNORM_EXT`
  - : Red 16-bit signed normalized format.
- `ext.RG16_SNORM_EXT`
  - : RG 16-bit signed normalized format.
- `ext.RGB16_SNORM_EXT`
  - : RGB 16-bit signed normalized format.
- `ext.RGBA16_SNORM_EXT`
  - : RGBA 16-bit signed normalized format.

## Description

The formats provided by this extension store each color component as a 16-bit integer, which shaders read as a floating-point value.
Components in the unsigned normalized formats represent values from 0.0 to 1.0, and components in the signed normalized (`SNORM`) formats represent values from -1.0 to 1.0.
All of these formats are texture-filterable, so they support linear filtering.

When this extension is enabled:

- The {{domxref("WebGLRenderingContext.texImage2D()")}}, {{domxref("WebGL2RenderingContext.texImage3D()")}}, {{domxref("WebGL2RenderingContext.texStorage2D()")}}, and {{domxref("WebGL2RenderingContext.texStorage3D()")}} methods accept the formats provided by this extension as internal formats.
  The {{domxref("WebGLRenderingContext.texSubImage2D()")}} and {{domxref("WebGL2RenderingContext.texSubImage3D()")}} methods can update textures in these formats.
- The `ext.R16_EXT`, `ext.RG16_EXT`, and `ext.RGBA16_EXT` formats are color-renderable, so textures in these formats can be attached to framebuffers and rendered to.
  The {{domxref("WebGLRenderingContext.renderbufferStorage()")}} and {{domxref("WebGL2RenderingContext.renderbufferStorageMultisample()")}} methods also accept these three formats, so that renderbuffers can be created in them.

Texture data in these formats can be uploaded from typed arrays: a {{jsxref("Uint16Array")}} with the type `gl.UNSIGNED_SHORT` for the unsigned normalized formats and an {{jsxref("Int16Array")}} with the type `gl.SHORT` for the signed normalized formats.
Uploading data from an image, a canvas, a video, an {{domxref("ImageBitmap")}}, or a similar source generates an error.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method.
For more information, see [Using WebGL extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions).

## Examples

### Enabling the extension

```js
let ext = gl.getExtension("EXT_texture_norm16");
```

### Texture formats

The {{domxref("WebGLRenderingContext.texImage2D()")}} method accepts new formats when `EXT_texture_norm16` is enabled. Example calls:

```js-nolint
// imageData = Uint16Array
gl.texImage2D(gl.TEXTURE_2D, 0, ext.R16_EXT, 1, 1, 0, gl.RED, gl.UNSIGNED_SHORT, imageData);
gl.texImage2D(gl.TEXTURE_2D, 0, ext.RG16_EXT, 1, 1, 0, gl.RG, gl.UNSIGNED_SHORT, imageData);
gl.texImage2D(gl.TEXTURE_2D, 0, ext.RGB16_EXT, 1, 1, 0, gl.RGB, gl.UNSIGNED_SHORT, imageData);
gl.texImage2D(gl.TEXTURE_2D, 0, ext.RGBA16_EXT, 1, 1, 0, gl.RGBA, gl.UNSIGNED_SHORT, imageData);

// imageData = Int16Array
gl.texImage2D(gl.TEXTURE_2D, 0, ext.R16_SNORM_EXT, 1, 1, 0, gl.RED, gl.SHORT, imageData);
gl.texImage2D(gl.TEXTURE_2D, 0, ext.RG16_SNORM_EXT, 1, 1, 0, gl.RG, gl.SHORT, imageData);
gl.texImage2D(gl.TEXTURE_2D, 0, ext.RGB16_SNORM_EXT, 1, 1, 0, gl.RGB, gl.SHORT, imageData);
gl.texImage2D(gl.TEXTURE_2D, 0, ext.RGBA16_SNORM_EXT, 1, 1, 0, gl.RGBA, gl.SHORT, imageData);
```

### Renderbuffer formats

The {{domxref("WebGLRenderingContext.renderbufferStorage()")}} method accepts `ext.R16_EXT`,
`ext.RG16_EXT` and `ext.RGBA16_EXT` as internal formats to create renderbuffers in these formats. Example calls:

```js
gl.renderbufferStorage(gl.RENDERBUFFER, ext.R16_EXT, 1, 1);
gl.renderbufferStorage(gl.RENDERBUFFER, ext.RG16_EXT, 1, 1);
gl.renderbufferStorage(gl.RENDERBUFFER, ext.RGBA16_EXT, 1, 1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGL2RenderingContext.texStorage2D()")}}
- {{domxref("WebGLRenderingContext.renderbufferStorage()")}}
