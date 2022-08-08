---
title: WebGLVertexArrayObject
slug: Web/API/WebGLVertexArrayObject
page-type: web-api-interface
tags:
  - API
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGLVertexArrayObject
---
{{APIRef("WebGL")}}

The **`WebGLVertexArrayObject`** interface is part of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API), represents vertex array objects (VAOs) pointing to vertex array data, and provides names for different sets of vertex data.

{{InheritanceDiagram}}

When working with `WebGLVertexArrayObject` objects, the following methods are useful:

- {{domxref("WebGL2RenderingContext.createVertexArray()")}}
- {{domxref("WebGL2RenderingContext.deleteVertexArray()")}}
- {{domxref("WebGL2RenderingContext.isVertexArray()")}}
- {{domxref("WebGL2RenderingContext.bindVertexArray()")}}

> **Note:** The {{domxref("OES_vertex_array_object")}} extension allows you to use vertex array objects in a WebGL 1 context.

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

- {{domxref("OES_vertex_array_object")}}
