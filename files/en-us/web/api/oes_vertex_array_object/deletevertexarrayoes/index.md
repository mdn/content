---
title: OES_vertex_array_object.deleteVertexArrayOES()
slug: Web/API/OES_vertex_array_object/deleteVertexArrayOES
page-type: webgl-extension-method
tags:
  - API
  - Method
  - Reference
  - VAO
  - WebGL
  - WebGL extension
browser-compat: api.OES_vertex_array_object.deleteVertexArrayOES
---
{{APIRef("WebGL")}}

The **`OES_vertex_array_object.deleteVertexArrayOES()`** method
of the [WebGL API](/en-US/docs/Web/API/WebGL_API) deletes a given
{{domxref("WebGLVertexArrayObject")}} object.

## Syntax

```js
deleteVertexArrayOES(arrayObject)
```

### Parameters

- `arrayObject`
  - : A {{domxref("WebGLVertexArrayObject")}} (VAO) object to delete.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const ext = gl.getExtension('OES_vertex_array_object');
const vao = ext.createVertexArrayOES();
ext.bindVertexArrayOES(vao);

// …

ext.deleteVertexArrayOES(vao);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.vertexAttribPointer()")}}
- WebGL2 equivalent: {{domxref("WebGL2RenderingContext.deleteVertexArray()")}}
