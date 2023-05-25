---
title: "WebGLRenderingContext: texImage2D() method"
short-title: texImage2D()
slug: Web/API/WebGLRenderingContext/texImage2D
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.texImage2D
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.texImage2D()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specifies a two-dimensional texture
image.

## Syntax

```js-nolint
// WebGL1
texImage2D(target, level, internalformat, width, height, border, format, type, pixels)
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
    level and level _n_ is the n-th mipmap reduction level.
- `internalformat`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the color components in the texture.

    Possible values in both WebGL1 and WebGL2

    <table>
      <thead>
        <tr>
          <td>Format</td>
          <td>Type</td>
          <td>Channels</td>
          <td>Bytes per pixel</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>RGBA</td>
          <td>UNSIGNED_BYTE</td>
          <td>4</td>
          <td>4</td>
        </tr>
        <tr>
          <td>RGB</td>
          <td>UNSIGNED_BYTE</td>
          <td>3</td>
          <td>3</td>
        </tr>
        <tr>
          <td>RGBA</td>
          <td>UNSIGNED_SHORT_4_4_4_4</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <td>RGBA</td>
          <td>UNSIGNED_SHORT_5_5_5_1</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <td>RGB</td>
          <td>UNSIGNED_SHORT_5_6_5</td>
          <td>3</td>
          <td>2</td>
        </tr>
        <tr>
          <td>LUMINANCE_ALPHA</td>
          <td>UNSIGNED_BYTE</td>
          <td>2</td>
          <td>2</td>
        </tr>
        <tr>
          <td>LUMINANCE</td>
          <td>UNSIGNED_BYTE</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>ALPHA</td>
          <td>UNSIGNED_BYTE</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>

    Other possible values in WebGL2 for the versions of `texImage2D` that
    take a {{jsxref("TypedArray")}} or a {{jsxref("DataView")}}, or a `GLintptr offset`

    <table>
      <thead>
        <tr>
          <td>
            <strong>Sized<br />Format</strong>
          </td>
          <td>
            <strong>Base<br />Format</strong>
          </td>
          <td>
            <strong>R<br />bits</strong>
          </td>
          <td>
            <strong>G<br />bits</strong>
          </td>
          <td>
            <strong>B<br />bits</strong>
          </td>
          <td>
            <strong>A<br />bits</strong>
          </td>
          <td>
            <strong>Shared<br />bits</strong>
          </td>
          <td>
            <strong>Color<br />renderable</strong>
          </td>
          <td>
            <strong>Texture<br />filterable</strong>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>R8</td>
          <td>RED</td>
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td>●</td>
        </tr>
        <tr>
          <td>R8_SNORM</td>
          <td>RED</td>
          <td>s8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
        </tr>
        <tr>
          <td>RG8</td>
          <td>RG</td>
          <td>8</td>
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td>●</td>
        </tr>
        <tr>
          <td>RG8_SNORM</td>
          <td>RG</td>
          <td>s8</td>
          <td>s8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGB8</td>
          <td>RGB</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td></td>
          <td></td>
          <td>●</td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGB8_SNORM</td>
          <td>RGB</td>
          <td>s8</td>
          <td>s8</td>
          <td>s8</td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGB565</td>
          <td>RGB</td>
          <td>5</td>
          <td>6</td>
          <td>5</td>
          <td></td>
          <td></td>
          <td>●</td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGBA4</td>
          <td>RGBA</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td></td>
          <td>●</td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGB5_A1</td>
          <td>RGBA</td>
          <td>5</td>
          <td>5</td>
          <td>5</td>
          <td>1</td>
          <td></td>
          <td>●</td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGBA8</td>
          <td>RGBA</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td></td>
          <td>●</td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGBA8_SNORM</td>
          <td>RGBA</td>
          <td>s8</td>
          <td>s8</td>
          <td>s8</td>
          <td>s8</td>
          <td></td>
          <td></td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGB10_A2</td>
          <td>RGBA</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>2</td>
          <td></td>
          <td>●</td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGB10_A2UI</td>
          <td>RGBA</td>
          <td>ui10</td>
          <td>ui10</td>
          <td>ui10</td>
          <td>ui2</td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>SRGB8</td>
          <td>RGB</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
        </tr>
        <tr>
          <td>SRGB8_ALPHA8</td>
          <td>RGBA</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td></td>
          <td>●</td>
          <td>●</td>
        </tr>
        <tr>
          <td>R16F</td>
          <td>RED</td>
          <td>f16</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
        </tr>
        <tr>
          <td>RG16F</td>
          <td>RG</td>
          <td>f16</td>
          <td>f16</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGB16F</td>
          <td>RGB</td>
          <td>f16</td>
          <td>f16</td>
          <td>f16</td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGBA16F</td>
          <td>RGBA</td>
          <td>f16</td>
          <td>f16</td>
          <td>f16</td>
          <td>f16</td>
          <td></td>
          <td></td>
          <td>●</td>
        </tr>
        <tr>
          <td>R32F</td>
          <td>RED</td>
          <td>f32</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>RG32F</td>
          <td>RG</td>
          <td>f32</td>
          <td>f32</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>RGB32F</td>
          <td>RGB</td>
          <td>f32</td>
          <td>f32</td>
          <td>f32</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>RGBA32F</td>
          <td>RGBA</td>
          <td>f32</td>
          <td>f32</td>
          <td>f32</td>
          <td>f32</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>R11F_G11F_B10F</td>
          <td>RGB</td>
          <td>f11</td>
          <td>f11</td>
          <td>f10</td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
        </tr>
        <tr>
          <td>RGB9_E5</td>
          <td>RGB</td>
          <td>9</td>
          <td>9</td>
          <td>9</td>
          <td></td>
          <td>5</td>
          <td></td>
          <td>●</td>
        </tr>
        <tr>
          <td>R8I</td>
          <td>RED</td>
          <td>i8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>R8UI</td>
          <td>RED</td>
          <td>ui8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>R16I</td>
          <td>RED</td>
          <td>i16</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>R16UI</td>
          <td>RED</td>
          <td>ui16</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>R32I</td>
          <td>RED</td>
          <td>i32</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>R32UI</td>
          <td>RED</td>
          <td>ui32</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RG8I</td>
          <td>RG</td>
          <td>i8</td>
          <td>i8</td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RG8UI</td>
          <td>RG</td>
          <td>ui8</td>
          <td>ui8</td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RG16I</td>
          <td>RG</td>
          <td>i16</td>
          <td>i16</td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RG16UI</td>
          <td>RG</td>
          <td>ui16</td>
          <td>ui16</td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RG32I</td>
          <td>RG</td>
          <td>i32</td>
          <td>i32</td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RG32UI</td>
          <td>RG</td>
          <td>ui32</td>
          <td>ui32</td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RGB8I</td>
          <td>RGB</td>
          <td>i8</td>
          <td>i8</td>
          <td>i8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>RGB8UI</td>
          <td>RGB</td>
          <td>ui8</td>
          <td>ui8</td>
          <td>ui8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>RGB16I</td>
          <td>RGB</td>
          <td>i16</td>
          <td>i16</td>
          <td>i16</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>RGB16UI</td>
          <td>RGB</td>
          <td>ui16</td>
          <td>ui16</td>
          <td>ui16</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>RGB32I</td>
          <td>RGB</td>
          <td>i32</td>
          <td>i32</td>
          <td>i32</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>RGB32UI</td>
          <td>RGB</td>
          <td>ui32</td>
          <td>ui32</td>
          <td>ui32</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>RGBA8I</td>
          <td>RGBA</td>
          <td>i8</td>
          <td>i8</td>
          <td>i8</td>
          <td>i8</td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RGBA8UI</td>
          <td>RGBA</td>
          <td>ui8</td>
          <td>ui8</td>
          <td>ui8</td>
          <td>ui8</td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RGBA16I</td>
          <td>RGBA</td>
          <td>i16</td>
          <td>i16</td>
          <td>i16</td>
          <td>i16</td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RGBA16UI</td>
          <td>RGBA</td>
          <td>ui16</td>
          <td>ui16</td>
          <td>ui16</td>
          <td>ui16</td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RGBA32I</td>
          <td>RGBA</td>
          <td>i32</td>
          <td>i32</td>
          <td>i32</td>
          <td>i32</td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td>RGBA32UI</td>
          <td>RGBA</td>
          <td>ui32</td>
          <td>ui32</td>
          <td>ui32</td>
          <td>ui32</td>
          <td></td>
          <td>●</td>
          <td></td>
        </tr>
      </tbody>
    </table>

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
    - `ext.UNSIGNED_INT_24_8_WEBGL` (constant provided by the extension)

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

  - : The following types can always be used as a pixel source for the texture:

    - {{domxref("ImageData")}},
    - {{domxref("HTMLImageElement")}},
    - {{domxref("HTMLCanvasElement")}},
    - {{domxref("HTMLVideoElement")}},
    - {{domxref("ImageBitmap")}}.

    The following types can only be used as a pixel source when `width`, `height`, and `border` are specified:

    - {{jsxref("Uint8Array")}} (must be used if `type` is `gl.UNSIGNED_BYTE`)
    - {{jsxref("Uint16Array")}} (must be used if `type` is either
      `gl.UNSIGNED_SHORT_5_6_5`, `gl.UNSIGNED_SHORT_4_4_4_4`,
      `gl.UNSIGNED_SHORT_5_5_5_1`, `gl.UNSIGNED_SHORT` or
      `ext.HALF_FLOAT_OES`)
    - {{jsxref("Uint32Array")}} (must be used if `type` is `gl.UNSIGNED_INT` or `ext.UNSIGNED_INT_24_8_WEBGL`)
    - {{jsxref("Float32Array")}} (must be used if `type` is `gl.FLOAT`)

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
