---
title: WebGLRenderingContext.drawElements()
slug: Web/API/WebGLRenderingContext/drawElements
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.drawElements
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.drawElements()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) renders primitives from array data.

## Syntax

```js
drawElements(mode, count, type, offset)
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

- `count`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the number of elements of the bound element array
    buffer to be rendered. For example, to draw a wireframe triangle with `gl.LINES`
    the count should be 2 endpoints per line × 3 lines = 6 elements. However to draw the
    same wireframe triangle with `gl.LINE_STRIP` the element array buffer does not
    repeat the indices for the end of the first line/start of the second line, and end of the
    second line/start of the third line, so `count` will be four. To draw the same
    triangle with `gl.LINE_LOOP` the element array buffer does not repeat the
    first/last vertex either so `count` will be three.
- `type`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the type of the values in the element array
    buffer. Possible values are:

    - `gl.UNSIGNED_BYTE`
    - `gl.UNSIGNED_SHORT`
    When using the {{domxref("OES_element_index_uint")}} extension:

      - `gl.UNSIGNED_INT`

- `offset`
  - : A {{domxref("WebGL_API/Types", "GLintptr")}} specifying a byte offset in the element array buffer. Must
    be a valid multiple of the size of the given `type`.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- If `mode` is not one of the accepted values, a
  `gl.INVALID_ENUM` error is thrown.
- If `offset` is not a valid multiple of the size of the given type, a
  `gl.INVALID_OPERATION` error is thrown.
- If `count` is negative, a `gl.INVALID_VALUE` error is thrown.

## Examples

```js
gl.drawElements(gl.POINTS, 8, gl.UNSIGNED_BYTE, 0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.drawArrays()")}}
- {{domxref("OES_element_index_uint")}}
- {{domxref("WEBGL_multi_draw.multiDrawElementsWEBGL()")}}
