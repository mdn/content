---
title: "OES_vertex_array_object: createVertexArrayOES() method"
short-title: createVertexArrayOES()
slug: Web/API/OES_vertex_array_object/createVertexArrayOES
page-type: webgl-extension-method
browser-compat: api.OES_vertex_array_object.createVertexArrayOES
---

{{APIRef("WebGL")}}

The **`OES_vertex_array_object.createVertexArrayOES()`** method
of the [WebGL API](/en-US/docs/Web/API/WebGL_API) creates and initializes a
{{domxref("WebGLVertexArrayObject")}} object that represents a vertex array object (VAO)
pointing to vertex array data and which provides names for different sets of vertex
data.

## Syntax

```js-nolint
createVertexArrayOES()
```

### Parameters

None.

### Return value

A {{domxref("WebGLVertexArrayObject")}} representing a vertex array object (VAO) which
points to vertex array data.

## Examples

```js
const ext = gl.getExtension("OES_vertex_array_object");
const vao = ext.createVertexArrayOES();
ext.bindVertexArrayOES(vao);

// …
// calls to bindBuffer or vertexAttribPointer
// which will be "recorded" in the VAO
// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.vertexAttribPointer()")}}
- WebGL2 equivalent: {{domxref("WebGL2RenderingContext.createVertexArray()")}}
