---
title: ANGLE_instanced_arrays.drawElementsInstancedANGLE()
slug: Web/API/ANGLE_instanced_arrays/drawElementsInstancedANGLE
page-type: web-api-instance-method
tags:
  - ANGLE_instanced_arrays
  - API
  - Method
  - Reference
  - WebGL
  - WebGL extension
browser-compat: api.ANGLE_instanced_arrays.drawElementsInstancedANGLE
---
{{APIRef("WebGL")}}

The **`ANGLE_instanced_arrays.drawElementsInstancedANGLE()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) renders primitives from array data like the {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}} method. In addition, it can execute multiple instances of a set of elements.

> **Note:** When using {{domxref("WebGL2RenderingContext", "WebGL2")}}, this method is available as {{domxref("WebGL2RenderingContext.drawElementsInstanced()", "gl.drawElementsInstanced()")}} by default.

## Syntax

```js
drawElementsInstancedANGLE(mode, count, type, offset, primcount)
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

- `count`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the number of elements to be rendered.
- `type`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the type of the values in the element array buffer. Possible values are:

    - `gl.UNSIGNED_BYTE`
    - `gl.UNSIGNED_SHORT`
    - `gl.UNSIGNED_INT` when using the {{domxref("OES_element_index_uint")}} extension.

- `offset`
  - : A {{domxref("WebGL_API/Types", "GLintptr")}} specifying an offset in the element array buffer. Must be a valid multiple of the size of the given `type`.
- `primcount`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the number of instances of the set of elements to execute.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- If `mode` is not one of the accepted values, a `gl.INVALID_ENUM` error is thrown.
- If `offset` is a invalid multiple of the size of the given type, a `gl.INVALID_OPERATION` error is thrown.
- If `count` or `primcount` are negative, a `gl.INVALID_VALUE` error is thrown.

## Examples

```js
const ext = gl.getExtension('ANGLE_instanced_arrays');
ext.drawElementsInstancedANGLE(gl.POINTS, 2, gl.UNSIGNED_SHORT, 0, 4);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()", "ext.drawArraysInstancedANGLE()")}}
- {{domxref("ANGLE_instanced_arrays.vertexAttribDivisorANGLE()", "ext.vertexAttribDivisorANGLE()")}}
- {{domxref("WebGLRenderingContext.drawArrays()")}}
- {{domxref("WebGLRenderingContext.drawElements()")}}
- {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
- {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
- {{domxref("WebGL2RenderingContext.vertexAttribDivisor()")}}
- {{domxref("WEBGL_multi_draw.multiDrawElementsInstancedWEBGL()")}}
