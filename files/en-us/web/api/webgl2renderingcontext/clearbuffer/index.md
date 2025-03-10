---
title: "WebGL2RenderingContext: clearBuffer[fiuv]() method"
short-title: clearBuffer[fiuv]()
slug: Web/API/WebGL2RenderingContext/clearBuffer
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.clearBufferiv
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGL2RenderingContext.clearBuffer[fiuv]()`** methods of
the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) clear buffers from the
currently bound framebuffer.

## Syntax

```js-nolint
clearBufferfv(buffer, drawbuffer, values)
clearBufferfv(buffer, drawbuffer, values, srcOffset)

clearBufferiv(buffer, drawbuffer, values)
clearBufferiv(buffer, drawbuffer, values, srcOffset)

clearBufferuiv(buffer, drawbuffer, values)
clearBufferuiv(buffer, drawbuffer, values, srcOffset)

clearBufferfi(buffer, drawbuffer, depth, stencil)
```

### Parameters

- `buffer`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the buffer to clear. Possible values are:

    - `gl.COLOR`: Color buffer.
    - `gl.DEPTH`: Depth buffer.
    - `gl.STENCIL`: Stencil buffer.
    - `gl.DEPTH_STENCIL`: clears depth and stencil buffers (used with
      `clearBufferfi`).

- `drawBuffer`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the draw buffer to clear.
- `values`
  - : An {{jsxref("Array")}} of {{domxref("WebGL_API/Types", "GLint")}}, {{domxref("WebGL_API/Types", "GLuint")}}
    or {{domxref("WebGL_API/Types", "GLfloat")}} values or
    an {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}} or {{jsxref("Float32Array")}}
    specifying the values to clear to.
- `depth`
  - : A {{domxref("WebGL_API/Types", "GLfloat")}} specifying the value to clear a depth render buffer to.
- `stencil`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the value to clear the stencil render buffer to.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.clearBufferiv(gl.COLOR, 0, new Int32Array([r, g, b, a]));
gl.clearBufferuiv(gl.COLOR, 0, new Uint32Array([r, g, b, a]));
gl.clearBufferfv(gl.COLOR, 0, new Float32Array([r, g, b, a]));
gl.clearBufferfv(gl.COLOR, 0, [0.0, 0.0, 0.0, 0.0]);
gl.clearBufferfi(gl.DEPTH_STENCIL, 0, 1.0, 0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGL2RenderingContext.drawBuffers()")}}
