---
title: "WebGLRenderingContext: disableVertexAttribArray() method"
short-title: disableVertexAttribArray()
slug: Web/API/WebGLRenderingContext/disableVertexAttribArray
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.disableVertexAttribArray
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.disableVertexAttribArray()`**
method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) turns the generic
vertex attribute array off at a given index position.

## Syntax

```js-nolint
disableVertexAttribArray(index)
```

### Parameters

- `index`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the index of the vertex attribute to disable.

### Return value

None ({{jsxref("undefined")}}).

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
