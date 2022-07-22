---
title: WEBGL_multi_draw.multiDrawArraysWEBGL()
slug: Web/API/WEBGL_multi_draw/multiDrawArraysWEBGL
page-type: webgl-extension-method
tags:
  - Method
  - Reference
  - WebGL
  - WebGL extension
browser-compat: api.WEBGL_multi_draw.multiDrawArraysWEBGL
---
{{APIRef("WebGL")}}

The **`WEBGL_multi_draw.multiDrawArraysWEBGL()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) renders multiple primitives from
array data. It is
identical to multiple calls to the
[`gl.drawArrays()`](/en-US/docs/Web/API/WebGLRenderingContext/drawArrays)
method.

## Syntax

```js
void ext.multiDrawArraysWEBGL(mode,
    firstsList, firstsOffset,
    countsList, countsOffset,
    drawCount);
```

### Parameters

- `mode`

  - : A [`GLenum`](/en-US/docs/Web/API/WebGL_API/Types)
    specifying the type primitive to render. Possible values are:

    - `gl.POINTS`: Draws a single dot.
    - `gl.LINE_STRIP`: Draws a straight line to the next vertex.
    - `gl.LINE_LOOP`: Draws a straight line to the next vertex, and
      connects the
      last vertex back to the first.
    - `gl.LINES`: Draws a line between a pair of vertices.
    - [`gl.TRIANGLE_STRIP`](https://en.wikipedia.org/wiki/Triangle_strip)
    - [`gl.TRIANGLE_FAN`](https://en.wikipedia.org/wiki/Triangle_fan)
    - `gl.TRIANGLES`: Draws a triangle for a group of three vertices.

- `firstsList`
  - : An [`Int32Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
    or [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
    (of [`GLint`](/en-US/docs/Web/API/WebGL_API/Types))
    specifying a list of starting indices for the arrays of vector points.
- `firstsOffset`
  - : A [`GLuint`](/en-US/docs/Web/API/WebGL_API/Types)
    defining the starting point into the `firstsLists` array.
- `countsList`
  - : An [`Int32Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
    or [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
    (of [`GLsizei`](/en-US/docs/Web/API/WebGL_API/Types))
    specifying a list of numbers of indices to be rendered.
- `countsOffset`
  - : A [`GLuint`](/en-US/docs/Web/API/WebGL_API/Types)
    defining the starting point into the `countsList` array.
- `drawCount`
  - : A [`GLsizei`](/en-US/docs/Web/API/WebGL_API/Types)
    specifying the number of instances of the range of elements to execute.

### Return value

None.

### Exceptions

- If `mode` is not one of the accepted values, a
  `gl.INVALID_ENUM` error is thrown.
- If `drawCount` or items in `firstsList` and
  `countsList` are negative,
  a `gl.INVALID_VALUE` error is thrown.
- if `gl.CURRENT_PROGRAM` is
  [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null),
  a `gl.INVALID_OPERATION` error is thrown.

## Examples

```js
const firsts = new Int32Array(/* … */);
const counts = new Int32Array(/* … */);
ext.multiDrawArraysWEBGL(gl.TRIANGLES, firsts, 0, counts, 0, firsts.length);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`WebGLRenderingContext.drawArrays()`](/en-US/docs/Web/API/WebGLRenderingContext/drawArrays)
- [`WebGL2RenderingContext.drawArraysInstanced()`](/en-US/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced)
