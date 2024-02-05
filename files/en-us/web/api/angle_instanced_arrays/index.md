---
title: ANGLE_instanced_arrays
slug: Web/API/ANGLE_instanced_arrays
page-type: web-api-interface
browser-compat: api.ANGLE_instanced_arrays
---

{{APIRef("WebGL")}}

The **`ANGLE_instanced_arrays`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and allows to draw the same object, or groups of similar objects multiple times, if they share the same vertex data, primitive count and type.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> **Note:** This extension is only available to {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} contexts. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}, the functionality of this extension is available on the WebGL2 context by default and the constants and methods are available without the "`ANGLE`" suffix.
>
> Despite the name "ANGLE", this extension works on any device if the hardware supports it and not just on Windows when using the ANGLE library. "ANGLE" just indicates that this extension has been written by the ANGLE library authors.

## Constants

This extension exposes one new constant, which can be used in the {{domxref("WebGLRenderingContext.getVertexAttrib()", "gl.getVertexAttrib()")}} method:

- `ext.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE`
  - : Returns a {{domxref("WebGL_API/Types", "GLint")}} describing the frequency divisor used for instanced rendering when used in the {{domxref("WebGLRenderingContext.getVertexAttrib()", "gl.getVertexAttrib()")}} as the `pname` parameter.

## Instance methods

This extension exposes three new methods.

- {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()", "ext.drawArraysInstancedANGLE()")}}
  - : Behaves identically to {{domxref("WebGLRenderingContext.drawArrays()", "gl.drawArrays()")}} except that multiple instances of the range of elements are executed, and the instance advances for each iteration.
- {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()", "ext.drawElementsInstancedANGLE()")}}
  - : Behaves identically to {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}} except that multiple instances of the set of elements are executed and the instance advances between each set.
- {{domxref("ANGLE_instanced_arrays.vertexAttribDivisorANGLE()", "ext.vertexAttribDivisorANGLE()")}}
  - : Modifies the rate at which generic vertex attributes advance when rendering multiple instances of primitives with {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()", "ext.drawArraysInstancedANGLE()")}} and {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()", "ext.drawElementsInstancedANGLE()")}}.

## Examples

The following example shows how to draw a given geometry multiple times with a single draw call.

> **Warning:** The following is educational, not production level code. It should generally be avoided to construct data / buffers within the rendering loop or right before use.

```js
// enable the extension
const ext = gl.getExtension("ANGLE_instanced_arrays");

// binding the geometry buffer as usual
gl.bindBuffer(gl.ARRAY_BUFFER, geometryVertexBuffer);
gl.enableVertexAttribArray(vertexPositionAttributeLocation);
gl.vertexAttribPointer(
  vertexPositionAttributeLocation,
  3,
  gl.FLOAT,
  false,
  0,
  0,
);

// build position buffer
const instancePositions = [];
for (const instance of instances) {
  instancePositions.push(
    instance.position.x,
    instance.position.y,
    instance.position.z,
  );
}
const instancePositionBuffer = createWebGLBufferFromData(instancePositions);

// binding the instance position buffer as you would with any attribute
gl.bindBuffer(gl.ARRAY_BUFFER, instancePositionBuffer);
gl.enableVertexAttribArray(instancePositionAttributeLocation);
gl.vertexAttribPointer(
  instancePositionAttributeLocation,
  3,
  gl.FLOAT,
  false,
  0,
  0,
);

// mark the attribute as instanced and advance it every single(1) instance rather than every vertex
ext.vertexAttribDivisorANGLE(instancePositionAttributeLocation, 1);

// draw geometry for each instance
ext.drawArraysInstancedANGLE(
  gl.TRIANGLES,
  0,
  numGeometryVertices,
  instances.length,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
- {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
- {{domxref("WebGL2RenderingContext.vertexAttribDivisor()")}}
