---
title: "OES_vertex_array_object: isVertexArrayOES() method"
short-title: isVertexArrayOES()
slug: Web/API/OES_vertex_array_object/isVertexArrayOES
page-type: webgl-extension-method
browser-compat: api.OES_vertex_array_object.isVertexArrayOES
---

{{APIRef("WebGL")}}

The **`OES_vertex_array_object.isVertexArrayOES()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) returns `true` if
the passed object is a {{domxref("WebGLVertexArrayObject")}} object.

## Syntax

```js-nolint
isVertexArrayOES(arrayObject)
```

### Parameters

- `arrayObject`
  - : A {{domxref("WebGLVertexArrayObject")}} (VAO) object to test.

### Return value

A {{domxref("WebGL_API.Types")}} indicating whether the given object is a
{{domxref("WebGLVertexArrayObject")}} object (`true`) or not
(`false`).

## Examples

```js
const ext = gl.getExtension("OES_vertex_array_object");
const vao = ext.createVertexArrayOES();
ext.bindVertexArrayOES(vao);

// …

ext.isVertexArrayOES(vao);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.vertexAttribPointer()")}}
- WebGL2 equivalent: {{domxref("WebGL2RenderingContext.isVertexArray()")}}
