---
title: WEBGL_multi_draw.multiDrawElementsInstancedWEBGL()
slug: Web/API/WEBGL_multi_draw/multiDrawElementsInstancedWEBGL
page-type: webgl-extension-method
tags:
  - Method
  - Reference
  - WebGL
  - WebGL extension
browser-compat: api.WEBGL_multi_draw.multiDrawElementsInstancedWEBGL
---
{{APIRef("WebGL")}}

The **`WEBGL_multi_draw.multiDrawElementsWEBGL()`** method of
the
[WebGL API](/en-US/docs/Web/API/WebGL_API) renders multiple primitives from
array data. It is
identical to multiple calls to the
[`gl.drawElementsInstanced()`](/en-US/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced)
method.

## Syntax

```js
void ext.multiDrawElementsInstancedWEBGL(mode,
    countsList, countsOffset,
    type,
    firstsList, firstsOffset,
    instanceCountsList, instanceCountsOffset,
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

- `countsList`
  - : An [`Int32Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
    or [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
    (of [`GLint`](/en-US/docs/Web/API/WebGL_API/Types))
    specifying a list of numbers of indices to be rendered.
- `countsOffset`
  - : A [`GLUint`](/en-US/docs/Web/API/WebGL_API/Types)
    defining the starting point into the `countsList` array.
- type

  - : A [`GLenum`](/en-US/docs/Web/API/WebGL_API/Types) specifying
    the type of the values in the element array buffer. Possible values are:

    - `gl.UNSIGNED_BYTE`
    - `gl.UNSIGNED_SHORT`
    - When using the [`OES_element_index_uint`](/en-US/docs/Web/API/OES_element_index_uint)
      extension:

      - `gl.UNSIGNED_INT`

- `offsetsList`
  - : An [`Int32Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
    or [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
    (of [`GLsizei`](/en-US/docs/Web/API/WebGL_API/Types))
    specifying a list of starting indices for the arrays of vector points.
- `offsetsOffset`
  - : A [`GLuint`](/en-US/docs/Web/API/WebGL_API/Types)
    defining the starting point into the `offsetsList` array.
- `instanceCountsList`
  - : An [`Int32Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
    or [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
    (of [`GLsizei`](/en-US/docs/Web/API/WebGL_API/Types))
    specifying a list of number sof instances of the range of elements to execute.
- `instanceCountsOffset`
  - : A [`GLuint`](/en-US/docs/Web/API/WebGL_API/Types)
    defining the starting point into the `instanceCountsList` array.
- `drawCount`
  - : A [`GLsizei`](/en-US/docs/Web/API/WebGL_API/Types)
    specifying the number of instances of the range of elements to execute.

### Return value

None.

### Exceptions

- If `mode` is not one of the accepted values, a
  `gl.INVALID_ENUM` error is thrown.
- If `drawCount` or items in `countsList`,
  `offsetsList`, or `instanceCountsList` are negative,
  a `gl.INVALID_VALUE` error is thrown.

## Examples

```js
const counts = new Int32Array(/* … */);
const offsets = new Int32Array(/* … */);
const instanceCounts = new Int32Array(/* … */);
ext.multiDrawElementsInstancedWEBGL(gl.TRIANGLES, counts, 0, gl.UNSIGNED_SHORT, offsets, 0, instanceCounts, 0, counts.length);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`WebGLRenderingContext.drawElements()`](/en-US/docs/Web/API/WebGLRenderingContext/drawElements)
- [`WebGL2RenderingContext.drawElementsInstanced()`](/en-US/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced)
