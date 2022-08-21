---
title: WebGLRenderingContext.bindBuffer()
slug: Web/API/WebGLRenderingContext/bindBuffer
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.bindBuffer
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.bindBuffer()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) binds a given
{{domxref("WebGLBuffer")}} to a target.

## Syntax

```js
bindBuffer(target, buffer)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target). Possible values:

    - `gl.ARRAY_BUFFER`
      - : Buffer containing vertex attributes, such as
        vertex coordinates, texture coordinate data, or vertex color data.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Buffer used for element indices.
    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
      the following values are available additionally:

      - `gl.COPY_READ_BUFFER`: Buffer for copying from one buffer object
        to another.
      - `gl.COPY_WRITE_BUFFER`: Buffer for copying from one buffer object
        to another.
      - `gl.TRANSFORM_FEEDBACK_BUFFER`: Buffer for transform feedback
        operations.
      - `gl.UNIFORM_BUFFER`: Buffer used for storing uniform blocks.
      - `gl.PIXEL_PACK_BUFFER`: Buffer used for pixel transfer
        operations.
      - `gl.PIXEL_UNPACK_BUFFER`: Buffer used for pixel transfer
        operations.

- `buffer`
  - : A {{domxref("WebGLBuffer")}} to bind.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

Only one target can be bound to a given {{domxref("WebGLBuffer")}}. An attempt to bind
the buffer to another target will throw an `INVALID_OPERATION` error and the
current buffer binding will remain the same.

A {{domxref("WebGLBuffer")}} which has been marked for deletion with
{{domxref("WebGLRenderingContext.deleteBuffer()", "deleteBuffer")}} cannot be
(re-)bound. An attempt to do so will generate an `INVALID_OPERATION` error,
and the current binding will remain untouched.

## Examples

### Binding a buffer to a target

```js
const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');
const buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

### Getting current bindings

To check the current buffer bindings, query the `ARRAY_BUFFER_BINDING`
and `ELEMENT_ARRAY_BUFFER_BINDING` constants.

```js
gl.getParameter(gl.ARRAY_BUFFER_BINDING);
gl.getParameter(gl.ELEMENT_ARRAY_BUFFER_BINDING);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- Other buffers: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
