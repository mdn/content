---
title: "WebGL2RenderingContext: createVertexArray() method"
short-title: createVertexArray()
slug: Web/API/WebGL2RenderingContext/createVertexArray
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.createVertexArray
---

{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.createVertexArray()`** method of
the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) creates and initializes a
{{domxref("WebGLVertexArrayObject")}} object that represents a vertex array object (VAO)
pointing to vertex array data and which provides names for different sets of vertex
data.

## Syntax

```js-nolint
createVertexArray()
```

### Parameters

None.

### Return value

A {{domxref("WebGLVertexArrayObject")}} representing a vertex array object (VAO) which
points to vertex array data.

## Examples

```js
const vao = gl.createVertexArray();
gl.bindVertexArray(vao);

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

- {{domxref("WebGLVertexArrayObject")}}
