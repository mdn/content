---
title: "WebGLRenderingContext: getRenderbufferParameter() method"
short-title: getRenderbufferParameter()
slug: Web/API/WebGLRenderingContext/getRenderbufferParameter
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.getRenderbufferParameter
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.getRenderbufferParameter()`**
method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) returns information
about the renderbuffer.

## Syntax

```js-nolint
getRenderbufferParameter(target, pname)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the target renderbuffer object. Possible values:

    - `gl.RENDERBUFFER`
      - : Buffer data storage for single images in a
        renderable internal format.

- `pname`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the information to query. Possible values:

    - `gl.RENDERBUFFER_WIDTH`
      - : Returns a {{domxref("WebGL_API/Types", "GLint")}} indicating
        the width of the image of the currently bound renderbuffer.
    - `gl.RENDERBUFFER_HEIGHT`
      - : Returns a {{domxref("WebGL_API/Types", "GLint")}} indicating
        the height of the image of the currently bound renderbuffer.
    - `gl.RENDERBUFFER_INTERNAL_FORMAT`

      - : Returns a {{domxref("WebGL_API/Types", "GLenum")}}
        indicating the internal format of the currently bound renderbuffer. The default is
        `gl.RGBA4`. Possible return values:

        - `gl.RGBA4`: 4 red bits, 4 green bits, 4 blue bits 4 alpha bits.
        - `gl.RGB565`: 5 red bits, 6 green bits, 5 blue bits.
        - `gl.RGB5_A1`: 5 red bits, 5 green bits, 5 blue bits, 1 alpha bit.
        - `gl.DEPTH_COMPONENT16`: 16 depth bits.
        - `gl.STENCIL_INDEX8`: 8 stencil bits.

    - `gl.RENDERBUFFER_GREEN_SIZE`
      - : Returns a {{domxref("WebGL_API/Types", "GLint")}} that is
        the resolution size (in bits) for the green color.
    - `gl.RENDERBUFFER_BLUE_SIZE`
      - : Returns a {{domxref("WebGL_API/Types", "GLint")}} that is
        the resolution size (in bits) for the blue color.
    - `gl.RENDERBUFFER_RED_SIZE`
      - : Returns a {{domxref("WebGL_API/Types", "GLint")}} that is
        the resolution size (in bits) for the red color.
    - `gl.RENDERBUFFER_ALPHA_SIZE`
      - : Returns a {{domxref("WebGL_API/Types", "GLint")}} that is
        the resolution size (in bits) for the alpha component.
    - `gl.RENDERBUFFER_DEPTH_SIZE`
      - : Returns a {{domxref("WebGL_API/Types", "GLint")}} that is
        the resolution size (in bits) for the depth component.
    - `gl.RENDERBUFFER_STENCIL_SIZE`

      - : Returns a {{domxref("WebGL_API/Types", "GLint")}} that
        is the resolution size (in bits) for the stencil component.

    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
    the following value is available additionally:

    - `gl.RENDERBUFFER_SAMPLES`
      - : Returns a {{domxref("WebGL_API/Types", "GLint")}}
        indicating the number of samples of the image of the currently bound
        renderbuffer.

### Return value

Depends on the requested information (as specified with `pname`). Either a
{{domxref("WebGL_API/Types", "GLint")}} or a {{domxref("WebGL_API/Types", "GLenum")}}.

## Examples

```js
gl.getRenderbufferParameter(gl.RENDERBUFFER, gl.RENDERBUFFER_WIDTH);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.renderbufferStorage()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLFramebuffer")}}
