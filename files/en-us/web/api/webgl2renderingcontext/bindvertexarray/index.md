---
title: "WebGL2RenderingContext: bindVertexArray() method"
short-title: bindVertexArray()
slug: Web/API/WebGL2RenderingContext/bindVertexArray
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.bindVertexArray
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGL2RenderingContext.bindVertexArray()`** method of
the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) binds a
passed {{domxref("WebGLVertexArrayObject")}} object to the buffer.

## Syntax

```js-nolint
bindVertexArray(vertexArray)
```

### Parameters

- `vertexArray`
  - : A {{domxref("WebGLVertexArrayObject")}} (VAO) object to bind.

### Return value

None ({{jsxref("undefined")}}).

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
