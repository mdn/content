---
title: WebGLRenderingContext.texImage2D()
slug: Web/API/WebGLRenderingContext/texImage2D
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Textures
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.texImage2D
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.texImage2D()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specifies a two-dimensional texture
image.

## Syntax

```js
// WebGL1
texImage2D(target, level, internalformat, width, height, border, format, type)
texImage2D(target, level, internalformat, width, height, border, format, type, pixels) // pixels a TypedArray or a DataView
texImage2D(target, level, internalformat, format, type)
texImage2D(target, level, internalformat, format, type, pixels)


// WebGL2
texImage2D(target, level, internalformat, width, height, border, format, type, offset)
texImage2D(target, level, internalformat, width, height, border, format, type, source)
texImage2D(target, level, internalformat, width, height, border, format, type, srcData, srcOffset)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target) of the active texture.
    Possible values:

    - `gl.TEXTURE_2D`: A two-dimensional texture.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Positive X face for a cube-mapped
      texture.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Negative X face for a cube-mapped
      texture.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Positive Y face for a cube-mapped
      texture.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Negative Y face for a cube-mapped
      texture.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Positive Z face for a cube-mapped
      texture.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Negative Z face for a cube-mapped
      texture.

- `level`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the level of detail. Level 0 is the base image
    level and level _n_ is the *n*th mipmap reduction level.
- `internalformat`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the color components in the texture.

    Possible values in both WebGL1 and WebGL2

    | Format | Type | Channels | Bytes per pixel |
    | --- | --- | --- | --- |
    | RGBA | UNSIGNED_BYTE | 4   | 4   |
    | RGB | UNSIGNED_BYTE | 3   | 3   |
    | RGBA | UNSIGNED\_SHORT\_4\_4\_4_4 | 4   | 2   |
    | RGBA | UNSIGNED\_SHORT\_5\_5\_5_1 | 4   | 2   |
    | RGB | UNSIGNED\_SHORT\_5\_6\_5 | 3   | 2   |
    | LUMINANCE_ALPHA | UNSIGNED_BYTE | 2   | 2   |
    | LUMINANCE | UNSIGNED_BYTE | 1   | 1   |
    | ALPHA | UNSIGNED_BYTE | 1   | 1   |

    Other possible values in WebGL2 for the versions of `texImage2D` that
    take a {{jsxref("TypedArray")}} or a {{jsxref("DataView")}}, or a `GLintptr offset`

    | Sized Format | Base Format | R bits | G bits | B bits | A bits | Shared bits | Color renderable | Texture filterable |
    | --- | --- | --- | --- | --- | --- | --- | --- | --- |
    | R8  | RED | 8   |     |     |     |     | ●   | ●   |
    | R8_SNORM | RED | s8  |     |     |     |     |     | ●   |
    | RG8 | RG  | 8   | 8   |     |     |     | ●   | ●   |
    | RG8_SNORM | RG  | s8  | s8  |     |     |     |     | ●   |
    | RGB8 | RGB | 8   | 8   | 8   |     |     | ●   | ●   |
    | RGB8_SNORM | RGB | s8  | s8  | s8  |     |     |     | ●   |
    | RGB565 | RGB | 5   | 6   | 5   |     |     | ●   | ●   |
    | RGBA4 | RGBA | 4   | 4   | 4   | 4   |     | ●   | ●   |
    | RGB5_A1 | RGBA | 5   | 5   | 5   | 1   |     | ●   | ●   |
    | RGBA8 | RGBA | 8   | 8   | 8   | 8   |     | ●   | ●   |
    | RGBA8_SNORM | RGBA | s8  | s8  | s8  | s8  |     |     | ●   |
    | RGB10_A2 | RGBA | 10  | 10  | 10  | 2   |     | ●   | ●   |
    | RGB10_A2UI | RGBA | ui10 | ui10 | ui10 | ui2 |     | ●   |     |
    | SRGB8 | RGB | 8   | 8   | 8   |     |     |     | ●   |
    | SRGB8_ALPHA8 | RGBA | 8   | 8   | 8   | 8   |     | ●   | ●   |
    | R16F | RED | f16 |     |     |     |     |     | ●   |
    | RG16F | RG  | f16 | f16 |     |     |     |     | ●   |
    | RGB16F | RGB | f16 | f16 | f16 |     |     |     | ●   |
    | RGBA16F | RGBA | f16 | f16 | f16 | f16 |     |     | ●   |
    | R32F | RED | f32 |     |     |     |     |     |     |
    | RG32F | RG  | f32 | f32 |     |     |     |     |     |
    | RGB32F | RGB | f32 | f32 | f32 |     |     |     |     |
    | RGBA32F | RGBA | f32 | f32 | f32 | f32 |     |     |     |
    | R11F\_G11F\_B10F | RGB | f11 | f11 | f10 |     |     |     | ●   |
    | RGB9_E5 | RGB | 9   | 9   | 9   |     | 5   |     | ●   |
    | R8I | RED | i8  |     |     |     |     | ●   |     |
    | R8UI | RED | ui8 |     |     |     |     | ●   |     |
    | R16I | RED | i16 |     |     |     |     | ●   |     |
    | R16UI | RED | ui16 |     |     |     |     | ●   |     |
    | R32I | RED | i32 |     |     |     |     | ●   |     |
    | R32UI | RED | ui32 |     |     |     |     | ●   |     |
    | RG8I | RG  | i8  | i8  |     |     |     | ●   |     |
    | RG8UI | RG  | ui8 | ui8 |     |     |     | ●   |     |
    | RG16I | RG  | i16 | i16 |     |     |     | ●   |     |
    | RG16UI | RG  | ui16 | ui16 |     |     |     | ●   |     |
    | RG32I | RG  | i32 | i32 |     |     |     | ●   |     |
    | RG32UI | RG  | ui32 | ui32 |     |     |     | ●   |     |
    | RGB8I | RGB | i8  | i8  | i8  |     |     |     |     |
    | RGB8UI | RGB | ui8 | ui8 | ui8 |     |     |     |     |
    | RGB16I | RGB | i16 | i16 | i16 |     |     |     |     |
    | RGB16UI | RGB | ui16 | ui16 | ui16 |     |     |     |     |
    | RGB32I | RGB | i32 | i32 | i32 |     |     |     |     |
    | RGB32UI | RGB | ui32 | ui32 | ui32 |     |     |     |     |
    | RGBA8I | RGBA | i8  | i8  | i8  | i8  |     | ●   |     |
    | RGBA8UI | RGBA | ui8 | ui8 | ui8 | ui8 |     | ●   |     |
    | RGBA16I | RGBA | i16 | i16 | i16 | i16 |     | ●   |     |
    | RGBA16UI | RGBA | ui16 | ui16 | ui16 | ui16 |     | ●   |     |
    | RGBA32I | RGBA | i32 | i32 | i32 | i32 |     | ●   |     |
    | RGBA32UI | RGBA | ui32 | ui32 | ui32 | ui32 |     | ●   |     |

    Possible values in WebGL2 for the versions of `texImage2D` that take a
    texture an `HTMLImageElement`, `HTMLCanvasElement`,
    `HTMLVideoElement`, `ImageBitmap`, or `ImageData`

    - `gl.ALPHA`: Discards the red, green and blue components and reads the
      alpha component.
    - `gl.RGB`: Discards the alpha components and reads the red, green and blue
      components.
    - `gl.RGBA`: Red, green, blue and alpha components are read from the color
      buffer.
    - `gl.LUMINANCE`: Each color component is a luminance component, alpha is
      1.0.
    - `gl.LUMINANCE_ALPHA`: Each component is a luminance/alpha component.
    When using the {{domxref("WEBGL_depth_texture")}} extension:

      - `gl.DEPTH_COMPONENT`
      - `gl.DEPTH_STENCIL`

    When using the {{domxref("EXT_sRGB")}} extension:

    - `ext.SRGB_EXT`
    - `ext.SRGB_ALPHA_EXT`

    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, the
      following values are available additionally:

    - `gl.R8`
    - `gl.R16F`
    - `gl.R32F`
    - `gl.R8UI`
    - `gl.RG8`
    - `gl.RG16F`
    - `gl.RG32F`
    - `gl.RG8UI`
    - `gl.RG16UI`
    - `gl.RG32UI`
    - `gl.RGB8`
    - `gl.SRGB8`
    - `gl.RGB565`
    - `gl.R11F_G11F_B10F`
    - `gl.RGB9_E5`
    - `gl.RGB16F`
    - `gl.RGB32F`
    - `gl.RGB8UI`
    - `gl.RGBA8`
    - `gl.SRGB8_ALPHA8`
    - `gl.RGB5_A1`
    - `gl.RGB10_A2`
    - `gl.RGBA4`
    - `gl.RGBA16F`
    - `gl.RGBA32F`
    - `gl.RGBA8UI`

- `width`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the width of the texture.
- `height`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the height of the texture.
- `border`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the width of the border. Must be 0.
- `format`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the format of the texel data. In WebGL 1, this
    must be the same as `internalformat` (see above). in WebGL 2, the
    combinations are listed in [this table](https://www.khronos.org/registry/webgl/specs/latest/2.0/#TEXTURE_TYPES_FORMATS_FROM_DOM_ELEMENTS_TABLE).
- `type`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the data type of the texel data. Possible values:

    - `gl.UNSIGNED_BYTE`: 8 bits per channel for `gl.RGBA`
    - `gl.UNSIGNED_SHORT_5_6_5`: 5 red bits, 6 green bits, 5 blue bits.
    - `gl.UNSIGNED_SHORT_4_4_4_4`: 4 red bits, 4 green bits, 4 blue bits, 4
      alpha bits.
    - `gl.UNSIGNED_SHORT_5_5_5_1`: 5 red bits, 5 green bits, 5 blue bits, 1
      alpha bit.
    When using the {{domxref("WEBGL_depth_texture")}} extension:

      - `gl.UNSIGNED_SHORT`
      - `gl.UNSIGNED_INT`
      - `ext.UNSIGNED_INT_24_8_WEBGL` (constant provided by the
        extension)

    - When using the {{domxref("OES_texture_float")}} extension:

      - `gl.FLOAT`

    When using the {{domxref("OES_texture_half_float")}} extension:

    - `ext.HALF_FLOAT_OES` (constant provided by the extension)

    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
      the following values are available additionally:

    - `gl.BYTE`
    - `gl.UNSIGNED_SHORT`
    - `gl.SHORT`
    - `gl.UNSIGNED_INT`
    - `gl.INT`
    - `gl.HALF_FLOAT`
    - `gl.FLOAT`
    - `gl.UNSIGNED_INT_2_10_10_10_REV`
    - `gl.UNSIGNED_INT_10F_11F_11F_REV`
    - `gl.UNSIGNED_INT_5_9_9_9_REV`
    - `gl.UNSIGNED_INT_24_8`
    - `gl.FLOAT_32_UNSIGNED_INT_24_8_REV` (pixels must be
        [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null))

- `pixels`

  - : One of the following objects can be used as a pixel source for the texture:

    - {{jsxref("Uint8Array")}} (must be used if `type` is `gl.UNSIGNED_BYTE`)
    - {{jsxref("Uint16Array")}} (must be used if `type` is either
      `gl.UNSIGNED_SHORT_5_6_5`, `gl.UNSIGNED_SHORT_4_4_4_4`,
      `gl.UNSIGNED_SHORT_5_5_5_1`, `gl.UNSIGNED_SHORT` or
      `ext.HALF_FLOAT_OES`)
    - {{jsxref("Uint32Array")}} (must be used if `type` is `gl.UNSIGNED_INT` or `ext.UNSIGNED_INT_24_8_WEBGL`)
    - {{jsxref("Float32Array")}} (must be used if `type` is `gl.FLOAT`)
    - {{domxref("ImageData")}},
    - {{domxref("HTMLImageElement")}},
    - {{domxref("HTMLCanvasElement")}},
    - {{domxref("HTMLVideoElement")}},
    - {{domxref("ImageBitmap")}}.

- `offset`
  - : (WebGL 2 only) A {{domxref("WebGL_API/Types", "GLintptr")}} byte offset into the
    {{domxref("WebGLBuffer")}}'s data store. Used to upload data to the currently bound
    {{domxref("WebGLTexture")}} from the `WebGLBuffer` bound to the
    `PIXEL_UNPACK_BUFFER` target.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
- {{domxref("WEBGL_depth_texture")}}
- {{domxref("OES_texture_float")}}
- {{domxref("OES_texture_half_float")}}
- {{domxref("EXT_texture_norm16")}}
- {{domxref("EXT_sRGB")}}
