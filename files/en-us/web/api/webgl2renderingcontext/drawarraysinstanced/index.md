---
title: "WebGL2RenderingContext: drawArraysInstanced() method"
short-title: drawArraysInstanced()
slug: Web/API/WebGL2RenderingContext/drawArraysInstanced
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.drawArraysInstanced
---

{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.drawArraysInstanced()`** method
of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) renders primitives from
array data like the {{domxref("WebGLRenderingContext.drawArrays()", "gl.drawArrays()")}}
method. In addition, it can execute multiple instances of the range of elements.

> **Note:** When using {{domxref("WebGLRenderingContext", "WebGL 1", "", 1)}},
> the {{domxref("ANGLE_instanced_arrays")}} extension can provide this method,
> too.

## Syntax

```js-nolint
drawArraysInstanced(mode, first, count, instanceCount)
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

- `first`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the starting index in the array of vector points.
- `count`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the number of indices to be rendered.
- `instanceCount`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the number of instances of the range of elements
    to execute.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.drawArraysInstanced(gl.POINTS, 0, 8, 4);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()")}}
- {{domxref("WEBGL_multi_draw.multiDrawArraysInstancedWEBGL()")}}
