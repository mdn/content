---
title: "WebGL2RenderingContext: drawRangeElements() method"
short-title: drawRangeElements()
slug: Web/API/WebGL2RenderingContext/drawRangeElements
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.drawRangeElements
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGL2RenderingContext.drawRangeElements()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) renders primitives from array
data in a given range.

## Syntax

```js-nolint
drawRangeElements(mode, start, end, count, type, offset)
```

### Parameters

- `mode`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the type primitive to render. Possible values
    are:

    - `gl.POINTS`: Draws a single dot.
    - `gl.LINE_STRIP`: Draws a straight line to the next vertex.
    - `gl.LINE_LOOP`: Draws a straight line to the next vertex, and
      connects the last vertex back to the first.
    - `gl.LINES`: Draws a line between a pair of vertices.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Draws a triangle for a group of three vertices.

- `start`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the minimum array index contained in
    `offset`.
- `end`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the maximum array index contained in
    `offset`.
- `count`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the number of elements to be rendered.
- `type`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the type of the values in the element array
    buffer. Possible values are:

    - `gl.UNSIGNED_BYTE`
    - `gl.UNSIGNED_SHORT`
    - `gl.UNSIGNED_INT`

- `offset`
  - : A {{domxref("WebGL_API/Types", "GLintptr")}} specifying an offset in the element array buffer. Must be
    a valid multiple of the size of the given `type`.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- If `mode` is not one of the accepted values, a
  `gl.INVALID_ENUM` error is thrown.
- If `offset` is a valid multiple of the size of the given type, a
  `gl.INVALID_OPERATION` error is thrown.
- If `count` is negative, a `gl.INVALID_VALUE` error is thrown.

## Examples

```js
gl.drawRangeElements(gl.POINTS, 0, 7, 8, gl.UNSIGNED_BYTE, 0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.drawElements()")}}
