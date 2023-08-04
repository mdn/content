---
title: "WebGLRenderingContext: getVertexAttrib() method"
short-title: getVertexAttrib()
slug: Web/API/WebGLRenderingContext/getVertexAttrib
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.getVertexAttrib
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.getVertexAttrib()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) returns information about a vertex
attribute at a given position.

## Syntax

```js-nolint
getVertexAttrib(index, pname)
```

### Parameters

- `index`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the index of the vertex attribute.
- `pname`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the information to query. Possible values:

    - `gl.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING`
      - : Returns the currently bound {{domxref("WebGLBuffer")}}.
    - `gl.VERTEX_ATTRIB_ARRAY_ENABLED`
      - : Returns a {{domxref("WebGL_API/Types", "GLboolean")}} that is `true` if the vertex attribute is enabled at this `index`. Otherwise `false`.
    - `gl.VERTEX_ATTRIB_ARRAY_SIZE`
      - : Returns a {{domxref("WebGL_API/Types", "GLint")}}
        indicating the size of an element of the vertex array.
    - `gl.VERTEX_ATTRIB_ARRAY_STRIDE`
      - : Returns a {{domxref("WebGL_API/Types", "GLint")}}
        indicating the number of bytes between successive elements in the array. 0 means
        that the elements are sequential.
    - `gl.VERTEX_ATTRIB_ARRAY_TYPE`

      - : Returns a {{domxref("WebGL_API/Types", "GLenum")}}
        representing the array type. One of

        - `gl.BYTE`
        - `gl.UNSIGNED_BYTE`
        - `gl.SHORT`,
        - `gl.UNSIGNED_SHORT`
        - `gl.FLOAT`

    - `gl.VERTEX_ATTRIB_ARRAY_NORMALIZED`
      - : Returns a
        {{domxref("WebGL_API/Types", "GLboolean")}} that is true if fixed-point data types are normalized for
        the vertex attribute array at the given `index`.
    - `gl.CURRENT_VERTEX_ATTRIB`

      - : Returns a {{jsxref("Float32Array")}}
        (with 4 elements) representing the current value of the vertex attribute at the
        given `index`.

    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
    the following values are available additionally:

    - `gl.VERTEX_ATTRIB_ARRAY_INTEGER`
      - : Returns a
        {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether an integer data type is in
        the vertex attribute array at the given `index`.
    - `gl.VERTEX_ATTRIB_ARRAY_DIVISOR`
      - : Returns a {{domxref("WebGL_API/Types", "GLint")}}
        describing the frequency divisor used for instanced rendering.

    When using the {{domxref("ANGLE_instanced_arrays")}} extension:

    - `ext.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE`
      - : Returns a
        {{domxref("WebGL_API/Types", "GLint")}} describing the frequency divisor used for instanced
        rendering.

### Return value

Returns the requested vertex attribute information (as specified with
`pname`).

## Examples

```js
gl.getVertexAttrib(0, gl.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getVertexAttribOffset()")}}
- {{domxref("ANGLE_instanced_arrays")}}
