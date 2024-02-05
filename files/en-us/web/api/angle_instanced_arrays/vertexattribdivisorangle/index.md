---
title: "ANGLE_instanced_arrays: vertexAttribDivisorANGLE() method"
short-title: vertexAttribDivisorANGLE()
slug: Web/API/ANGLE_instanced_arrays/vertexAttribDivisorANGLE
page-type: web-api-instance-method
browser-compat: api.ANGLE_instanced_arrays.vertexAttribDivisorANGLE
---

{{APIRef("WebGL")}}

The **ANGLE_instanced_arrays.vertexAttribDivisorANGLE()** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) modifies the rate at which generic vertex attributes advance when rendering multiple instances of primitives with {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()", "ext.drawArraysInstancedANGLE()")}} and {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()", "ext.drawElementsInstancedANGLE()")}}.

> **Note:** When using {{domxref("WebGL2RenderingContext", "WebGL2")}}, this method is available as {{domxref("WebGL2RenderingContext.vertexAttribDivisor()", "gl.vertexAttribDivisor()")}} by default.

## Syntax

```js-nolint
vertexAttribDivisorANGLE(index, divisor)
```

### Parameters

- `index`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the index of the generic vertex attributes.
- `divisor`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the number of instances that will pass between updates of the generic attribute.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const ext = gl.getExtension("ANGLE_instanced_arrays");
ext.vertexAttribDivisorANGLE(0, 2);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()", "ext.drawArraysInstancedANGLE()")}}
- {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()", "ext.drawElementsInstancedANGLE()")}}
- {{domxref("WebGLRenderingContext.drawArrays()")}}
- {{domxref("WebGLRenderingContext.drawElements()")}}
- {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
- {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
- {{domxref("WebGL2RenderingContext.vertexAttribDivisor()")}}
