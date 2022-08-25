---
title: ANGLE_instanced_arrays.drawArraysInstancedANGLE()
slug: Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE
page-type: web-api-instance-method
tags:
  - ANGLE_instanced_arrays
  - API
  - Method
  - Reference
  - WebGL
  - WebGL extension
browser-compat: api.ANGLE_instanced_arrays.drawArraysInstancedANGLE
---
{{APIRef("WebGL")}}

The **`ANGLE_instanced_arrays.drawArraysInstancedANGLE()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) renders primitives from array data like the {{domxref("WebGLRenderingContext.drawArrays()", "gl.drawArrays()")}} method. In addition, it can execute multiple instances of the range of elements.

> **Note:** When using {{domxref("WebGL2RenderingContext", "WebGL2")}}, this method is available as {{domxref("WebGL2RenderingContext.drawArraysInstanced()", "gl.drawArraysInstanced()")}} by default.

## Syntax

```js
drawArraysInstancedANGLE(mode, first, count, primcount)
```

### Parameters

- `mode`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the type primitive to render. Possible values are:

    - `gl.POINTS`: Draws a single dot.
    - `gl.LINE_STRIP`: Draws a straight line to the next vertex.
    - `gl.LINE_LOOP`: Draws a straight line to the next vertex, and connects the last vertex back to the first.
    - `gl.LINES`: Draws a line between a pair of vertices.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Draws a triangle for a group of three vertices.

- `first`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the starting index in the array of vector points.
- `count`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the number of indices to be rendered.
- `primcount`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the number of instances of the range of elements to execute.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- If `mode` is not one of the accepted values, a `gl.INVALID_ENUM` error is thrown.
- If `first`, `count` or `primcount` are negative, a `gl.INVALID_VALUE` error is thrown.
- if `gl.CURRENT_PROGRAM` is [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null), a `gl.INVALID_OPERATION` error is thrown.

## Examples

```js
const ext = gl.getExtension('ANGLE_instanced_arrays');
ext.drawArraysInstancedANGLE(gl.POINTS, 0, 8, 4);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()", "ext.drawElementsInstancedANGLE()")}}
- {{domxref("ANGLE_instanced_arrays.vertexAttribDivisorANGLE()", "ext.vertexAttribDivisorANGLE()")}}
- {{domxref("WebGLRenderingContext.drawArrays()")}}
- {{domxref("WebGLRenderingContext.drawElements()")}}
- {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
- {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
- {{domxref("WebGL2RenderingContext.vertexAttribDivisor()")}}
- {{domxref("WEBGL_multi_draw.multiDrawArraysInstancedWEBGL()")}}
