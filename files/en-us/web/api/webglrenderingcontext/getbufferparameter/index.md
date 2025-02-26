---
title: "WebGLRenderingContext: getBufferParameter() method"
short-title: getBufferParameter()
slug: Web/API/WebGLRenderingContext/getBufferParameter
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.getBufferParameter
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.getBufferParameter()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) returns information about the
buffer.

## Syntax

```js-nolint
getBufferParameter(target, pname)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the target buffer object. Possible values:

    - `gl.ARRAY_BUFFER`
      - : Buffer containing vertex attributes, such as
        vertex coordinates, texture coordinate data, or vertex color data.
    - `gl.ELEMENT_ARRAY_BUFFER`

      - : Buffer used for element indices.

    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
    the following values are available additionally:

    - `gl.COPY_READ_BUFFER`
      - : Buffer for copying from one buffer object to another.
    - `gl.COPY_WRITE_BUFFER`
      - : Buffer for copying from one buffer object to another.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Buffer for transform feedback operations.
    - `gl.UNIFORM_BUFFER`
      - : Buffer used for storing uniform blocks.
    - `gl.PIXEL_PACK_BUFFER`
      - : Buffer used for pixel transfer operations.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Buffer used for pixel transfer operations.

- `pname`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying information to query. Possible values:

    - `gl.BUFFER_SIZE`
      - : Returns a {{domxref("WebGL_API/Types", "GLint")}} indicating the size
        of the buffer in bytes.
    - `gl.BUFFER_USAGE`

      - : Returns a {{domxref("WebGL_API/Types", "GLenum")}} indicating the
        usage pattern of the buffer. One of the following:

        - `gl.STATIC_DRAW`
        - `gl.DYNAMIC_DRAW`
        - `gl.STREAM_DRAW`

        When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
        the following values are available additionally:

        - `gl.STATIC_READ`
        - `gl.DYNAMIC_READ`
        - `gl.STREAM_READ`
        - `gl.STATIC_COPY`
        - `gl.DYNAMIC_COPY`
        - `gl.STREAM_COPY`

### Return value

Depends on the requested information (as specified with `pname`). Either a
{{domxref("WebGL_API/Types", "GLint")}} or a {{domxref("WebGL_API/Types", "GLenum")}}.

## Examples

```js
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.bufferData()")}}
- Other buffers: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
