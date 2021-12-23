---
title: WebGLRenderingContext.disableVertexAttribArray()
slug: Web/API/WebGLRenderingContext/disableVertexAttribArray
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.disableVertexAttribArray
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.disableVertexAttribArray()`**
method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) turns the generic
vertex attribute array off at a given index position.

## Syntax

```js
void gl.disableVertexAttribArray(index);
```

### Parameters

- index
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the index of the vertex attribute to disable.

### Return value

None.

## Examples

```js
gl.disableVertexAttribArray(0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.enableVertexAttribArray()")}}
