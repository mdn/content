---
title: "WebGL2RenderingContext: bindBufferRange() method"
short-title: bindBufferRange()
slug: Web/API/WebGL2RenderingContext/bindBufferRange
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.bindBufferRange
---

{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.bindBufferRange()`** method of
the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) binds a range of a given
{{domxref("WebGLBuffer")}} to a given binding point (`target`) at a given
`index`.

## Syntax

```js-nolint
bindBufferRange(target, index, buffer, offset, size)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the target for the bind operation. Possible
    values:

    - `gl.TRANSFORM_FEEDBACK_BUFFER`
    - `gl.UNIFORM_BUFFER`

- `index`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the index of the `target`.
- `buffer`
  - : A {{domxref("WebGLBuffer")}} which to bind to the binding point
    (`target`).
- `offset`
  - : A {{domxref("WebGL_API/Types", "GLintptr")}} specifying the starting offset.
- `size`
  - : A {{domxref("WebGL_API/Types", "GLsizeiptr")}} specifying the amount of data that can be read from the
    buffer.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.bindBufferRange(gl.TRANSFORM_FEEDBACK_BUFFER, 1, buffer, 0, 4);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGL2RenderingContext.bindBufferBase()")}}
