---
title: "WebGL2RenderingContext: isVertexArray() method"
short-title: isVertexArray()
slug: Web/API/WebGL2RenderingContext/isVertexArray
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.isVertexArray
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGL2RenderingContext.isVertexArray()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) returns `true` if the
passed object is a valid {{domxref("WebGLVertexArrayObject")}} object.

## Syntax

```js-nolint
isVertexArray(vertexArray)
```

### Parameters

- `vertexArray`
  - : A {{domxref("WebGLVertexArrayObject")}} (VAO) object to test.

### Return value

A {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether the given object is a valid
{{domxref("WebGLVertexArrayObject")}} object (`true`) or not
(`false`).

## Examples

```js
const vao = gl.createVertexArray();
gl.bindVertexArray(vao);

// …

gl.isVertexArray(vao);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLVertexArrayObject")}}
