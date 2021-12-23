---
title: OES_vertex_array_object.deleteVertexArrayOES()
slug: Web/API/OES_vertex_array_object/deleteVertexArrayOES
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
void ext.deleteVertexArrayOES(arrayObject);
```

### Parameters

- arrayObject
  - : A {{domxref("WebGLVertexArrayObject")}} (VAO) object to delete.

### Return value

None.

## Examples

```js
var ext = gl.getExtension('OES_vertex_array_object');
var vao = ext.createVertexArrayOES();
ext.bindVertexArrayOES(vao);

// ...

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
