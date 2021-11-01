---
title: WebGLRenderingContext.getVertexAttribOffset()
slug: Web/API/WebGLRenderingContext/getVertexAttribOffset
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.getVertexAttribOffset
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.getVertexAttribOffset()`** method
of the [WebGL API](/en-US/docs/Web/API/WebGL_API) returns the address of a
specified vertex attribute.

## Syntax

```js
GLintptr gl.getVertexAttribOffset(index, pname);
```

### Parameters

- index
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the index of the vertex attribute.
- pname
  - : A {{domxref("WebGL_API/Types", "GLenum")}} which must be `gl.VERTEX_ATTRIB_ARRAY_POINTER`.

### Return value

A {{domxref("WebGL_API/Types", "GLintptr")}} indicating the address of the vertex attribute.

## Examples

```js
gl.getVertexAttribOffset(i, gl.VERTEX_ATTRIB_ARRAY_POINTER);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.vertexAttribPointer()")}}
