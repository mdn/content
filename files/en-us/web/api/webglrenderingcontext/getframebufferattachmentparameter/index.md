---
title: WebGLRenderingContext.getFramebufferAttachmentParameter()
slug: Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.getFramebufferAttachmentParameter
---
{{APIRef("WebGL")}}

The
**`WebGLRenderingContext.getFramebufferAttachmentParameter()`**
method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) returns information
about a framebuffer's attachment.

## Syntax

```js
getFramebufferAttachmentParameter(target, attachment, pname)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target). Possible values:

    - `gl.FRAMEBUFFER`
      - : Collection buffer data storage of color, alpha,
        depth and stencil buffers used to render an image.
    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
      the following values are available additionally:

      - `gl.DRAW_FRAMEBUFFER`
        - : Equivalent to `gl.FRAMEBUFFER`.
          Used as a destination for drawing, rendering, clearing, and writing
          operations.
      - `gl.READ_FRAMEBUFFER`
        - : Used as a source for reading operations.

- `attachment`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the attachment point for the
    `texture`. Possible values:

    - `gl.COLOR_ATTACHMENT0`: Texture attachment for the framebuffer's
      color buffer.
    - `gl.DEPTH_ATTACHMENT`: Texture attachment for the framebuffer's depth
      buffer.
    - `gl.STENCIL_ATTACHMENT`: Texture attachment for the framebuffer's
      stencil buffer.
    - `gl.DEPTH_STENCIL_ATTACHMENT`: Texture attachment for both, the depth
      and stencil buffer.
    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
      the following values are available additionally:

      - `gl.COLOR_ATTACHMENT1 gl.COLOR_ATTACHMENT2 gl.COLOR_ATTACHMENT3 gl.COLOR_ATTACHMENT4 gl.COLOR_ATTACHMENT5 gl.COLOR_ATTACHMENT6 gl.COLOR_ATTACHMENT7 gl.COLOR_ATTACHMENT8 gl.COLOR_ATTACHMENT9 gl.COLOR_ATTACHMENT10 gl.COLOR_ATTACHMENT11 gl.COLOR_ATTACHMENT12 gl.COLOR_ATTACHMENT13 gl.COLOR_ATTACHMENT14 gl.COLOR_ATTACHMENT15`

    When using the {{domxref("WEBGL_draw_buffers")}} extension:

    - `ext.COLOR_ATTACHMENT0_WEBGL` (same as
        `gl.COLOR_ATTACHMENT0`)
        `ext.COLOR_ATTACHMENT1_WEBGL ext.COLOR_ATTACHMENT2_WEBGL ext.COLOR_ATTACHMENT3_WEBGL ext.COLOR_ATTACHMENT4_WEBGL ext.COLOR_ATTACHMENT5_WEBGL ext.COLOR_ATTACHMENT6_WEBGL ext.COLOR_ATTACHMENT7_WEBGL ext.COLOR_ATTACHMENT8_WEBGL ext.COLOR_ATTACHMENT9_WEBGL ext.COLOR_ATTACHMENT10_WEBGL ext.COLOR_ATTACHMENT11_WEBGL ext.COLOR_ATTACHMENT12_WEBGL ext.COLOR_ATTACHMENT13_WEBGL ext.COLOR_ATTACHMENT14_WEBGL ext.COLOR_ATTACHMENT15_WEBGL`

- `pname`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying information to query. Possible values:

    - `gl.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE`: The type which contains the
      attached image.
    - `gl.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME`: The texture or renderbuffer
      of the attached image ({{domxref("WebGLRenderbuffer")}} or
      {{domxref("WebGLTexture")}}).
    - `gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL`: Mipmap level. Default
      value: 0.
    - `gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE`: The name of
      cube-map face of the texture.
    When using the {{domxref("EXT_sRGB")}} extension:

      - `ext.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT`: The framebuffer
        color encoding.

    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
      the following values are available additionally:

    - `gl.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE`
    - `gl.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE`
    - `gl.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING`
    - `gl.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE`
    - `gl.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE`
    - `gl.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE`
    - `gl.FRAMEBUFFER_ATTACHMENT_RED_SIZE`
    - `gl.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE`
    - `gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER`

    When using the {{domxref("OVR_multiview2")}} extension:

    - `ext.FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR`: the number of views of the framebuffer object attachment.
    - `ext.FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR`:  the base view index of the framebuffer object attachment.

### Return value

Depends on the requested information (as specified with `pname`). Either a
{{domxref("WebGL_API/Types", "GLint")}}, a {{domxref("WebGL_API/Types", "GLenum")}}, a {{domxref("WebGLRenderbuffer")}}, or a
{{domxref("WebGLTexture")}}.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><code>pname</code> parameter</th>
      <th scope="col">Return value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE</code></td>
      <td>
        A {{domxref("WebGL_API/Types", "GLenum")}} indicating the
        type of the texture. Either <code>gl.RENDERBUFFER</code>,
        <code>gl.TEXTURE</code>, or if no image is attached,
        <code>gl.NONE</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME</code></td>
      <td>
        The texture ({{domxref("WebGLTexture")}}) or renderbuffer
        ({{domxref("WebGLRenderbuffer")}}) of the attached image.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL</code></td>
      <td>
        A {{domxref("WebGL_API/Types", "GLint")}} indicating the
        mipmap level. Default value: 0.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE</code></td>
      <td>
        A {{domxref("WebGL_API/Types", "GLenum")}} indicating the
        name of cube-map face of the texture. Possible values:
        <ul>
          <li>
            <code>gl.TEXTURE_CUBE_MAP_POSITIVE_X</code>: Image for the positive
            X face of the cube.
          </li>
          <li>
            <code>gl.TEXTURE_CUBE_MAP_NEGATIVE_X</code>: Image for the negative
            X face of the cube.
          </li>
          <li>
            <code>gl.TEXTURE_CUBE_MAP_POSITIVE_Y</code>: Image for the positive
            Y face of the cube.
          </li>
          <li>
            <code>gl.TEXTURE_CUBE_MAP_NEGATIVE_Y</code>: Image for the negative
            Y face of the cube.
          </li>
          <li>
            <code>gl.TEXTURE_CUBE_MAP_POSITIVE_Z</code>: Image for the positive
            Z face of the cube.
          </li>
          <li>
            <code>gl.TEXTURE_CUBE_MAP_NEGATIVE_Z</code>: Image for the negative
            Z face of the cube.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE</code></td>
      <td>
        A {{domxref("WebGL_API/Types", "GLint")}} indicating the
        number of bits in the alpha component of the attachment.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE</code></td>
      <td>
        A {{domxref("WebGL_API/Types", "GLint")}} indicating the
        number of bits in the blue component of the attachment.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING</code></td>
      <td>
        A {{domxref("WebGL_API/Types", "GLenum")}} indicating the
        encoding of components of the specified attachment. Either
        <code>gl.LINEAR</code> or <code>gl.SRGB</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE</code></td>
      <td>
        A {{domxref("WebGL_API/Types", "GLenum")}} indicating the
        format of the components of the specified attachment. Either
        <code>gl.FLOAT</code>, <code>gl.INT</code>,
        <code>gl.UNSIGNED_INT</code>, <code>gl.SIGNED_NORMALIZED</code>, or
        <code>gl.UNSIGNED_NORMALIZED</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE</code></td>
      <td>
        A {{domxref("WebGL_API/Types", "GLint")}} indicating the
        number of bits in the depth component of the attachment.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE</code></td>
      <td>
        A {{domxref("WebGL_API/Types", "GLint")}} indicating the
        number of bits in the green component of the attachment.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_RED_SIZE</code></td>
      <td>
        A {{domxref("WebGL_API/Types", "GLint")}} indicating the
        number of bits in the red component of the attachment.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE</code></td>
      <td>
        A {{domxref("WebGL_API/Types", "GLint")}} indicating the
        number of bits in the stencil component of the attachment.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER</code></td>
      <td>
        A {{domxref("WebGL_API/Types", "GLint")}} indicating the
        number of the texture layer which contains the attached image.
      </td>
    </tr>
    <tr>
      <td><code>ext.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT</code></td>
      <td>
        A {{domxref("WebGL_API/Types", "GLenum")}} indicating the
        framebuffer color encoding. Either <code>gl.LINEAR</code> or
        <code>ext.SRGB_EXT</code>.
      </td>
    </tr>
    <tr>
      <td><code>ext.FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR</code></td>
      <td>
        A {{domxref("WebGL_API/Types", "GLsizei")}} indicating
        the number of views of the framebuffer object attachment.
      </td>
    </tr>
    <tr>
      <td>
        <code>ext.FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR</code>
      </td>
      <td>
        A {{domxref("WebGL_API/Types", "GLint")}} indicating the
        base view index of the framebuffer object attachment.
      </td>
    </tr>
  </tbody>
</table>

### Exceptions

- A `gl.INVALID_ENUM` error is thrown if `target` is not
  `gl.FRAMEBUFFER`, `gl.DRAW_FRAMEBUFFER`,
  `gl.READ_FRAMEBUFFER` or if `attachment` is not one of the
  accepted attachment points.

## Examples

```js
gl.getFramebufferAttachmentParameter(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0,
                                     gl.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
- {{domxref("EXT_sRGB")}}
- {{domxref("WEBGL_draw_buffers")}}
