---
title: WebGLRenderingContext.getParameter()
slug: Web/API/WebGLRenderingContext/getParameter
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.getParameter
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.getParameter()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) returns a value for the passed
parameter name.

## Syntax

```js
getParameter(pname)
```

### Parameters

- `pname`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying which parameter value to return. See below for
    possible values.

### Return value

Depends on the parameter.

## Parameter names

### WebGL 1

You can query the following `pname` parameters when using a
{{domxref("WebGLRenderingContext")}}.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant</th>
      <th scope="col">Returned type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>gl.ACTIVE_TEXTURE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.ALIASED_LINE_WIDTH_RANGE</code></td>
      <td>{{jsxref("Float32Array")}} (with 2 elements)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.ALIASED_POINT_SIZE_RANGE</code></td>
      <td>{{jsxref("Float32Array")}} (with 2 elements)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.ALPHA_BITS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.ARRAY_BUFFER_BINDING</code></td>
      <td>{{domxref("WebGLBuffer")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_COLOR</code></td>
      <td>{{jsxref("Float32Array")}} (with 4 values)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_DST_ALPHA</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_DST_RGB</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_EQUATION</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_EQUATION_ALPHA</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_EQUATION_RGB</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_SRC_ALPHA</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_SRC_RGB</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLUE_BITS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.COLOR_CLEAR_VALUE</code></td>
      <td>{{jsxref("Float32Array")}} (with 4 values)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.COLOR_WRITEMASK</code></td>
      <td>
        sequence&#x3C;{{domxref("WebGL_API/Types", "GLboolean")}}>
        (with 4 values)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.COMPRESSED_TEXTURE_FORMATS</code></td>
      <td>{{jsxref("Uint32Array")}}</td>
      <td>
        Returns the compressed texture formats.<br /><br />When using the
        {{domxref("WEBGL_compressed_texture_s3tc")}} extension:
        <ul>
          <li><code>ext.COMPRESSED_RGB_S3TC_DXT1_EXT</code></li>
          <li><code>ext.COMPRESSED_RGBA_S3TC_DXT1_EXT</code></li>
          <li><code>ext.COMPRESSED_RGBA_S3TC_DXT3_EXT</code></li>
          <li><code>ext.COMPRESSED_RGBA_S3TC_DXT5_EXT</code></li>
        </ul>
        <p>
          When using the
          {{domxref("WEBGL_compressed_texture_s3tc_srgb")}}
          extension:
        </p>
        <ul>
          <li><code>ext.COMPRESSED_SRGB_S3TC_DXT1_EXT</code></li>
          <li><code>ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT</code></li>
          <li><code>ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT</code></li>
          <li><code>ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT</code></li>
        </ul>
        When using the {{domxref("WEBGL_compressed_texture_etc")}}
        extension:
        <ul>
          <li><code>ext.COMPRESSED_R11_EAC</code></li>
          <li><code>ext.COMPRESSED_SIGNED_R11_EAC</code></li>
          <li><code>ext.COMPRESSED_RG11_EAC</code></li>
          <li><code>ext.COMPRESSED_SIGNED_RG11_EAC</code></li>
          <li><code>ext.COMPRESSED_RGB8_ETC2</code></li>
          <li><code>ext.COMPRESSED_RGBA8_ETC2_EAC</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ETC2</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC</code></li>
          <li><code>ext.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2</code></li>
          <li><code>ext.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2</code></li>
        </ul>
        When using the
        {{domxref("WEBGL_compressed_texture_pvrtc")}} extension:
        <ul>
          <li><code>ext.COMPRESSED_RGB_PVRTC_4BPPV1_IMG</code></li>
          <li><code>ext.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG</code></li>
          <li><code>ext.COMPRESSED_RGB_PVRTC_2BPPV1_IMG</code></li>
          <li><code>ext.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG</code></li>
        </ul>
        When using the
        {{domxref("WEBGL_compressed_texture_etc1")}} extension:
        <ul>
          <li><code>ext.COMPRESSED_RGB_ETC1_WEBGL</code></li>
        </ul>
        When using the
        {{domxref("WEBGL_compressed_texture_astc")}} extension:
        <ul>
          <li><code>ext.COMPRESSED_RGBA_ASTC_4x4_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_5x4_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_5x5_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_6x5_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_6x6_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_8x5_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_8x6_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_8x8_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_10x5_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_10x6_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_10x6_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_10x10_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_12x10_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_12x12_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>gl.CULL_FACE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.CULL_FACE_MODE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td>
        <code>gl.FRONT</code>, <code>gl.BACK</code> or
        <code>gl.FRONT_AND_BACK</code>. See also
        {{domxref("WebGLRenderingContext/cullFace", "cullFace")}}
      </td>
    </tr>
    <tr>
      <td><code>gl.CURRENT_PROGRAM</code></td>
      <td>{{domxref("WebGLProgram")}} or <code>null</code></td>
      <td>
        See
        {{domxref("WebGLRenderingContext/useProgram", "useProgram")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_BITS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_CLEAR_VALUE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLfloat")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_FUNC</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_RANGE</code></td>
      <td>{{jsxref("Float32Array")}} (with 2 elements)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_TEST</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_WRITEMASK</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DITHER</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.ELEMENT_ARRAY_BUFFER_BINDING</code></td>
      <td>{{domxref("WebGLBuffer")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_BINDING</code></td>
      <td>{{domxref("WebGLFramebuffer")}} or <code>null</code></td>
      <td>
        <code>null</code> corresponds to a binding to the default framebuffer.
        See also
        {{domxref("WebGLRenderingContext/bindFramebuffer", "bindFramebuffer")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRONT_FACE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td>
        <code>gl.CW</code> or <code>gl.CCW</code>. See also
        {{domxref("WebGLRenderingContext/frontFace", "frontFace")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.GENERATE_MIPMAP_HINT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td>
        <code>gl.FASTEST</code>, <code>gl.NICEST</code> or
        <code>gl.DONT_CARE</code>. See also
        {{domxref("WebGLRenderingContext/hint", "hint")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.GREEN_BITS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.IMPLEMENTATION_COLOR_READ_FORMAT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.IMPLEMENTATION_COLOR_READ_TYPE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.LINE_WIDTH</code></td>
      <td>{{domxref("WebGL_API/Types", "GLfloat")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_CUBE_MAP_TEXTURE_SIZE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_FRAGMENT_UNIFORM_VECTORS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_RENDERBUFFER_SIZE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_TEXTURE_IMAGE_UNITS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_TEXTURE_SIZE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VARYING_VECTORS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VERTEX_ATTRIBS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VERTEX_UNIFORM_VECTORS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VIEWPORT_DIMS</code></td>
      <td>{{jsxref("Int32Array")}} (with 2 elements)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.PACK_ALIGNMENT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.POLYGON_OFFSET_FACTOR</code></td>
      <td>{{domxref("WebGL_API/Types", "GLfloat")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.POLYGON_OFFSET_FILL</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.POLYGON_OFFSET_UNITS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLfloat")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.RED_BITS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.RENDERBUFFER_BINDING</code></td>
      <td>{{domxref("WebGLRenderbuffer")}} or <code>null</code></td>
      <td>
        See
        {{domxref("WebGLRenderingContext/bindRenderbuffer", "bindRenderbuffer")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.RENDERER</code></td>
      <td>string</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SAMPLE_BUFFERS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SAMPLE_COVERAGE_INVERT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SAMPLE_COVERAGE_VALUE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLfloat")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SAMPLES</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SCISSOR_BOX</code></td>
      <td>{{jsxref("Int32Array")}} (with 4 elements)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SCISSOR_TEST</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SHADING_LANGUAGE_VERSION</code></td>
      <td>string</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_FAIL</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_FUNC</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_PASS_DEPTH_FAIL</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_PASS_DEPTH_PASS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_REF</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_VALUE_MASK</code></td>
      <td>{{domxref("WebGL_API/Types", "GLuint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_WRITEMASK</code></td>
      <td>{{domxref("WebGL_API/Types", "GLuint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BITS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_CLEAR_VALUE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_FAIL</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_FUNC</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_PASS_DEPTH_FAIL</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_PASS_DEPTH_PASS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_REF</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_TEST</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_VALUE_MASK</code></td>
      <td>{{domxref("WebGL_API/Types", "GLuint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_WRITEMASK</code></td>
      <td>{{domxref("WebGL_API/Types", "GLuint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SUBPIXEL_BITS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_BINDING_2D</code></td>
      <td>{{domxref("WebGLTexture")}} or <code>null</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_BINDING_CUBE_MAP</code></td>
      <td>{{domxref("WebGLTexture")}} or <code>null</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_ALIGNMENT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_COLORSPACE_CONVERSION_WEBGL</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_FLIP_Y_WEBGL</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.VENDOR</code></td>
      <td>string</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.VERSION</code></td>
      <td>string</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.VIEWPORT</code></td>
      <td>{{jsxref("Int32Array")}} (with 4 elements)</td>
      <td></td>
    </tr>
  </tbody>
</table>

### WebGL 2

You can query the following `pname` parameters when using a
{{domxref("WebGL2RenderingContext")}}.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant</th>
      <th scope="col">Returned type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>gl.COPY_READ_BUFFER_BINDING</code></td>
      <td>{{domxref("WebGLBuffer")}} or <code>null</code></td>
      <td>
        See
        {{domxref("WebGLRenderingContext/bindBuffer", "bindBuffer")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.COPY_WRITE_BUFFER_BINDING</code></td>
      <td>{{domxref("WebGLBuffer")}} or <code>null</code></td>
      <td>
        See
        {{domxref("WebGLRenderingContext/bindBuffer", "bindBuffer")}}.
      </td>
    </tr>
    <tr>
      <td>
        <code>gl.DRAW_BUFFER<em>i</em></code>
      </td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td>
        <code>gl.BACK</code>, <code>gl.NONE</code> or
        <code>gl.COLOR_ATTACHMENT{0-15}</code>. See also
        {{domxref("WebGL2RenderingContext/drawBuffers", "drawBuffers")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.DRAW_FRAMEBUFFER_BINDING</code></td>
      <td>{{domxref("WebGLFramebuffer")}} or <code>null</code></td>
      <td>
        <code>null</code> corresponds to a binding to the default framebuffer.
        See also
        {{domxref("WebGLRenderingContext/bindFramebuffer", "bindFramebuffer")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAGMENT_SHADER_DERIVATIVE_HINT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td>
        <code>gl.FASTEST</code>, <code>gl.NICEST</code> or
        <code>gl.DONT_CARE</code>. See also
        {{domxref("WebGLRenderingContext/hint", "hint")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.MAX_3D_TEXTURE_SIZE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_ARRAY_TEXTURE_LAYERS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_CLIENT_WAIT_TIMEOUT_WEBGL</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint64")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_COLOR_ATTACHMENTS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint64")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_COMBINED_UNIFORM_BLOCKS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint64")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_DRAW_BUFFERS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_ELEMENT_INDEX</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint64")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_ELEMENTS_INDICES</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_ELEMENTS_VERTICES</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_FRAGMENT_INPUT_COMPONENTS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_FRAGMENT_UNIFORM_BLOCKS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_FRAGMENT_UNIFORM_COMPONENTS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_PROGRAM_TEXEL_OFFSET</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_SAMPLES</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_SERVER_WAIT_TIMEOUT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint64")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_TEXTURE_LOD_BIAS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLfloat")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_UNIFORM_BLOCK_SIZE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint64")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_UNIFORM_BUFFER_BINDINGS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VARYING_COMPONENTS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VERTEX_OUTPUT_COMPONENTS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VERTEX_UNIFORM_BLOCKS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VERTEX_UNIFORM_COMPONENTS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MIN_PROGRAM_TEXEL_OFFSET</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.PACK_ROW_LENGTH</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>
        See
        {{domxref("WebGLRenderingContext/pixelStorei", "pixelStorei")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.PACK_SKIP_PIXELS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>
        See
        {{domxref("WebGLRenderingContext/pixelStorei", "pixelStorei")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.PACK_SKIP_ROWS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>
        See
        {{domxref("WebGLRenderingContext/pixelStorei", "pixelStorei")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.PIXEL_PACK_BUFFER_BINDING</code></td>
      <td>{{domxref("WebGLBuffer")}} or <code>null</code></td>
      <td>
        See
        {{domxref("WebGLRenderingContext/bindBuffer", "bindBuffer")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.PIXEL_UNPACK_BUFFER_BINDING</code></td>
      <td>{{domxref("WebGLBuffer")}} or <code>null</code></td>
      <td>
        See
        {{domxref("WebGLRenderingContext/bindBuffer", "bindBuffer")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.RASTERIZER_DISCARD</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.READ_BUFFER</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.READ_FRAMEBUFFER_BINDING</code></td>
      <td>{{domxref("WebGLFramebuffer")}} or <code>null</code></td>
      <td>
        <code>null</code> corresponds to a binding to the default framebuffer.
        See also
        {{domxref("WebGLRenderingContext/bindFramebuffer", "bindFramebuffer")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.SAMPLE_ALPHA_TO_COVERAGE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SAMPLE_COVERAGE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SAMPLER_BINDING</code></td>
      <td>{{domxref("WebGLSampler")}} or <code>null</code></td>
      <td>
        See
        {{domxref("WebGL2RenderingContext/bindSampler", "bindSampler")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_BINDING_2D_ARRAY</code></td>
      <td>{{domxref("WebGLTexture")}} or <code>null</code></td>
      <td>
        See
        {{domxref("WebGLRenderingContext/bindTexture", "bindTexture")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_BINDING_3D</code></td>
      <td>{{domxref("WebGLTexture")}} or <code>null</code></td>
      <td>
        See
        {{domxref("WebGLRenderingContext/bindTexture", "bindTexture")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.TRANSFORM_FEEDBACK_ACTIVE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.TRANSFORM_FEEDBACK_BINDING</code></td>
      <td>
        {{domxref("WebGLTransformFeedback")}} or <code>null</code>
      </td>
      <td>
        See
        {{domxref("WebGL2RenderingContext/bindTransformFeedback",
        "bindTransformFeedback")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.TRANSFORM_FEEDBACK_BUFFER_BINDING</code></td>
      <td>{{domxref("WebGLBuffer")}} or <code>null</code></td>
      <td>
        See
        {{domxref("WebGLRenderingContext/bindBuffer", "bindBuffer")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.TRANSFORM_FEEDBACK_PAUSED</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.UNIFORM_BUFFER_BINDING</code></td>
      <td>{{domxref("WebGLBuffer")}} or <code>null</code></td>
      <td>
        See
        {{domxref("WebGLRenderingContext/bindBuffer", "bindBuffer")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.UNIFORM_BUFFER_OFFSET_ALIGNMENT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>
        See
        {{domxref("WebGLRenderingContext/pixelStorei", "pixelStorei")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_IMAGE_HEIGHT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>
        See
        {{domxref("WebGLRenderingContext/pixelStorei", "pixelStorei")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_ROW_LENGTH</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>
        See
        {{domxref("WebGLRenderingContext/pixelStorei", "pixelStorei")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_SKIP_IMAGES</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>
        See
        {{domxref("WebGLRenderingContext/pixelStorei", "pixelStorei")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_SKIP_PIXELS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>
        See
        {{domxref("WebGLRenderingContext/pixelStorei", "pixelStorei")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_SKIP_ROWS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>
        See
        {{domxref("WebGLRenderingContext/pixelStorei", "pixelStorei")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.VERTEX_ARRAY_BINDING</code></td>
      <td>
        {{domxref("WebGLVertexArrayObject")}} or <code>null</code>
      </td>
      <td>
        See
        {{domxref("WebGL2RenderingContext/bindVertexArray", "bindVertexArray")}}.
      </td>
    </tr>
  </tbody>
</table>

### WebGL extensions

You can query the following `pname` parameters when using [WebGL extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions):

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant</th>
      <th scope="col">Returned type</th>
      <th scope="col">Extension</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLfloat")}}</td>
      <td>{{domxref("EXT_texture_filter_anisotropic")}}</td>
      <td>Maximum available anisotropy.</td>
    </tr>
    <tr>
      <td><code>ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td>{{domxref("OES_standard_derivatives")}}</td>
      <td>
        Accuracy of the derivative calculation for the GLSL built-in functions:
        <code>dFdx</code>, <code>dFdy</code>, and <code>fwidth</code>.
      </td>
    </tr>
    <tr>
      <td><code>ext.MAX_COLOR_ATTACHMENTS_WEBGL</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>{{domxref("WEBGL_draw_buffers")}}</td>
      <td>The maximum number of framebuffer color attachment points.</td>
    </tr>
    <tr>
      <td><code>ext.MAX_DRAW_BUFFERS_WEBGL</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>{{domxref("WEBGL_draw_buffers")}}</td>
      <td>The maximum number of draw buffers.</td>
    </tr>
    <tr>
      <td>
        <code
          >ext.DRAW_BUFFER0_WEBGL<br />ext.DRAW_BUFFER1_WEBGL<br />ext.DRAW_BUFFER2_WEBGL<br />ext.DRAW_BUFFER3_WEBGL<br />ext.DRAW_BUFFER4_WEBGL<br />ext.DRAW_BUFFER5_WEBGL<br />ext.DRAW_BUFFER6_WEBGL<br />ext.DRAW_BUFFER7_WEBGL<br />ext.DRAW_BUFFER8_WEBGL<br />ext.DRAW_BUFFER9_WEBGL<br />ext.DRAW_BUFFER10_WEBGL<br />ext.DRAW_BUFFER11_WEBGL<br />ext.DRAW_BUFFER12_WEBGL<br />ext.DRAW_BUFFER13_WEBGL<br />ext.DRAW_BUFFER14_WEBGL<br />ext.DRAW_BUFFER15_WEBGL</code
        >
      </td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td>{{domxref("WEBGL_draw_buffers")}}</td>
      <td>Drawing buffers.</td>
    </tr>
    <tr>
      <td><code>ext.VERTEX_ARRAY_BINDING_OES</code></td>
      <td>
        {{domxref("WebGLVertexArrayObject", "WebGLVertexArrayObjectOES")}}
      </td>
      <td>{{domxref("OES_vertex_array_object")}}</td>
      <td>Bound vertex array object (VAO).</td>
    </tr>
    <tr>
      <td><code>ext.TIMESTAMP_EXT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLuint64EXT")}}</td>
      <td><p>{{domxref("EXT_disjoint_timer_query")}}</p></td>
      <td>The current time.</td>
    </tr>
    <tr>
      <td><code>ext.GPU_DISJOINT_EXT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td>{{domxref("EXT_disjoint_timer_query")}}</td>
      <td>
        <p>Returns whether or not the GPU performed any disjoint operation.</p>
      </td>
    </tr>
    <tr>
      <td><code>ext.MAX_VIEWS_OVR</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>{{domxref("OVR_multiview2")}}</td>
      <td>Maximum number of views.</td>
    </tr>
  </tbody>
</table>

## Examples

```js
gl.getParameter(gl.DITHER);
gl.getParameter(gl.VERSION);
gl.getParameter(gl.VIEWPORT);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.enable()")}}
- {{domxref("WebGLRenderingContext.disable()")}}
- {{domxref("EXT_texture_filter_anisotropic")}}
- {{domxref("OES_standard_derivatives")}}
- {{domxref("WEBGL_draw_buffers")}}
- {{domxref("EXT_disjoint_timer_query")}}
