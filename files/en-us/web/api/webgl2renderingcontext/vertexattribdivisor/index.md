---
title: WebGL2RenderingContext.vertexAttribDivisor()
slug: Web/API/WebGL2RenderingContext/vertexAttribDivisor
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.vertexAttribDivisor
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.vertexAttribDivisor()`** method
of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) modifies the rate at
which generic vertex attributes advance when rendering multiple instances of primitives
with {{domxref("WebGL2RenderingContext.drawArraysInstanced()",
  "gl.drawArraysInstanced()")}} and
{{domxref("WebGL2RenderingContext.drawElementsInstanced()",
  "gl.drawElementsInstanced()")}}.

> **Note:** When using {{domxref("WebGLRenderingContext", "WebGL 1", "",
    1)}}, the {{domxref("ANGLE_instanced_arrays")}} extension can provide this method,
> too.

## Syntax

```js
vertexAttribDivisor(index, divisor)
```

### Parameters

- `index`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the index of the generic vertex attributes.
- `divisor`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the number of instances that will pass between
    updates of the generic attribute.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.vertexAttribDivisor(0, 2);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ANGLE_instanced_arrays.vertexAttribDivisorANGLE()")}}
