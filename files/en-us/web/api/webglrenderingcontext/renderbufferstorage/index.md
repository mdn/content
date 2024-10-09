---
title: "WebGLRenderingContext: renderbufferStorage() method"
short-title: renderbufferStorage()
slug: Web/API/WebGLRenderingContext/renderbufferStorage
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.renderbufferStorage
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.renderbufferStorage()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) creates and initializes a
renderbuffer object's data store.

## Syntax

```js-nolint
renderbufferStorage(target, internalFormat, width, height)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the target renderbuffer object. Possible values:

    - `gl.RENDERBUFFER`
      - : Buffer data storage for single images in a renderable internal format.

- `internalFormat`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the internal format of the renderbuffer. Possible
    values:

    - `gl.RGBA4`: 4 red bits, 4 green bits, 4 blue bits 4 alpha bits.
    - `gl.RGB565`: 5 red bits, 6 green bits, 5 blue bits.
    - `gl.RGB5_A1`: 5 red bits, 5 green bits, 5 blue bits, 1 alpha bit.
    - `gl.DEPTH_COMPONENT16`: 16 depth bits.
    - `gl.STENCIL_INDEX8`: 8 stencil bits.
    - `gl.DEPTH_STENCIL`

    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
    the following values are available additionally:

    - `gl.R8`
    - `gl.R8UI`
    - `gl.R8I`
    - `gl.R16UI`
    - `gl.R16I`
    - `gl.R32UI`
    - `gl.R32I`
    - `gl.RG8`
    - `gl.RG8UI`
    - `gl.RG8I`
    - `gl.RG16UI`
    - `gl.RG16I`
    - `gl.RG32UI`
    - `gl.RG32I`
    - `gl.RGB8`
    - `gl.RGBA8`
    - `gl.SRGB8_ALPHA8` (also available as an extension for WebGL 1, see below)
    - `gl.RGB10_A2`
    - `gl.RGBA8UI`
    - `gl.RGBA8I`
    - `gl.RGB10_A2UI`
    - `gl.RGBA16UI`
    - `gl.RGBA16I`
    - `gl.RGBA32I`
    - `gl.RGBA32UI`
    - `gl.DEPTH_COMPONENT24`
    - `gl.DEPTH_COMPONENT32F`
    - `gl.DEPTH24_STENCIL8`
    - `gl.DEPTH32F_STENCIL8`

    When using the {{domxref("WEBGL_color_buffer_float")}} extension:

    - `ext.RGBA32F_EXT`: RGBA 32-bit floating-point type.
    - `ext.RGB32F_EXT`: RGB 32-bit floating-point type.

    When using the {{domxref("EXT_sRGB")}} extension:

    - `ext.SRGB8_ALPHA8_EXT`: 8-bit sRGB and alpha.

    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} and
    the {{domxref("EXT_color_buffer_float")}} extension:

    - `gl.R16F`
    - `gl.RG16F`
    - `gl.RGBA16F`
    - `gl.R32F`
    - `gl.RG32F`
    - `gl.RGBA32F`
    - `gl.R11F_G11F_B10F`

- `width`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the width of the renderbuffer in pixels.
- `height`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the height of the renderbuffer in pixels.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.renderbufferStorage(gl.RENDERBUFFER, gl.RGBA4, 256, 256);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.getRenderbufferParameter()")}}
- {{domxref("WEBGL_color_buffer_float")}}
- {{domxref("EXT_sRGB")}}
- {{domxref("EXT_color_buffer_float")}}
- {{domxref("EXT_texture_norm16")}}
