---
title: "WebGL2RenderingContext: deleteVertexArray() method"
short-title: deleteVertexArray()
slug: Web/API/WebGL2RenderingContext/deleteVertexArray
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.deleteVertexArray
---

{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.deleteVertexArray()`** method of
the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) deletes a given
{{domxref("WebGLVertexArrayObject")}} object.

## Syntax

```js-nolint
deleteVertexArray(vertexArray)
```

### Parameters

- `vertexArray`
  - : A {{domxref("WebGLVertexArrayObject")}} (VAO) object to delete.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const vao = gl.createVertexArray();
gl.bindVertexArray(vao);

// …

gl.deleteVertexArray(vao);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLVertexArrayObject")}}
