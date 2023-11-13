---
title: WEBGL_multi_draw extension
short-title: WEBGL_multi_draw
slug: Web/API/WEBGL_multi_draw
page-type: webgl-extension
browser-compat: api.WEBGL_multi_draw
---

{{APIRef("WebGL")}}

The **`WEBGL_multi_draw`** extension is part of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) and allows to render more
than one primitive with a single function call. This can improve a WebGL application's performance
as it reduces binding costs in the renderer and speeds up GPU thread time with uniform data.

When this extension is enabled:

- New methods that handle multiple lists of arguments in one call are added
  (see method list below).
- The `gl_DrawID` built-in is added to the shading language.

> **Note:** This extension is available to both,
> {{domxref("WebGLRenderingContext", "WebGL 1", "", 1)}} and
> {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}} contexts.
>
> In shader code, the directive `#extension GL_ANGLE_multi_draw`
> needs to be called to enable the extension.
>
> This extension enables the {{domxref("ANGLE_instanced_arrays")}} extension implicitly.

## Instance methods

- [`ext.multiDrawArraysWEBGL()`](/en-US/docs/Web/API/WEBGL_multi_draw/multiDrawArraysWEBGL)
  - : Renders multiple primitives from array data (identical to multiple calls to
    [`drawArrays`](/en-US/docs/Web/API/WebGLRenderingContext/drawArrays)).
- [`ext.multiDrawElementsWEBGL()`](/en-US/docs/Web/API/WEBGL_multi_draw/multiDrawElementsWEBGL)
  - : Renders multiple primitives from element array data (identical to multiple calls to
    [`drawElements`](/en-US/docs/Web/API/WebGLRenderingContext/drawElements)).
- [`ext.multiDrawArraysInstancedWEBGL()`](/en-US/docs/Web/API/WEBGL_multi_draw/multiDrawArraysInstancedWEBGL)
  - : Renders multiple primitives from array data (identical to multiple calls to
    [`drawArraysInstanced`](/en-US/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced)).
- [`ext.multiDrawElementsInstancedWEBGL()`](/en-US/docs/Web/API/WEBGL_multi_draw/multiDrawElementsInstancedWEBGL)
  - : Renders multiple primitives from element array data (identical to multiple calls to
    [`drawElementsInstanced`](/en-US/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced)).

## Shader extension

Note: Although the extension name is named `WEBGL_multi_draw`,
the extension must be enabled with the `#extension GL_ANGLE_multi_draw`
directive to use the extension in a shader.

When this extension is enabled, the `gl_DrawID` built-in can be used
in shader code. For any `multi*` draw call variant,
the index of the draw `i` may be read by the vertex shader
as `gl_DrawID`. For non-`multi*` calls, the value of
`gl_DrawID` is `0`.

```html
<script type="x-shader/x-vertex">
  #extension GL_ANGLE_multi_draw : require
  void main() {
    gl_Position = vec4(gl_DrawID, 0, 0, 1);
  }
</script>
```

## Examples

### Enabling the extension

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method.
For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions)
in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

```js
let ext = gl.getExtension("WEBGL_multi_draw");
```

### Drawing multiple arrays

Example calls for [`ext.multiDrawArraysWEBGL()`](/en-US/docs/Web/API/WEBGL_multi_draw/multiDrawArraysWEBGL)
and [`ext.multiDrawArraysInstancedWEBGL()`](/en-US/docs/Web/API/WEBGL_multi_draw/multiDrawArraysInstancedWEBGL):

```js
// multiDrawArrays variant
const firsts = new Int32Array(/* … */);
const counts = new Int32Array(/* … */);
ext.multiDrawArraysWEBGL(gl.TRIANGLES, firsts, 0, counts, 0, firsts.length);
```

```js
// multiDrawArraysInstanced variant
const firsts = new Int32Array(/* … */);
const counts = new Int32Array(/* … */);
const instanceCounts = new Int32Array(/* … */);
ext.multiDrawArraysInstancedWEBGL(
  gl.TRIANGLES,
  firsts,
  0,
  counts,
  0,
  instanceCounts,
  0,
  firsts.length,
);
```

### Drawing multiple elements

Example calls for [`ext.multiDrawElementsWEBGL()`](/en-US/docs/Web/API/WEBGL_multi_draw/multiDrawElementsWEBGL)
and [`ext.multiDrawElementsInstancedWEBGL()`](/en-US/docs/Web/API/WEBGL_multi_draw/multiDrawElementsInstancedWEBGL).

Assumes that the indices which have been previously uploaded to the
`ELEMENT_ARRAY_BUFFER` are to be treated as `UNSIGNED_SHORT`.

```js
// multiDrawElements variant
const counts = new Int32Array(/* … */);
const offsets = new Int32Array(/* … */);
ext.multiDrawElementsWEBGL(
  gl.TRIANGLES,
  counts,
  0,
  gl.UNSIGNED_SHORT,
  offsets,
  0,
  counts.length,
);
```

```js
// multiDrawElementsInstanced variant
const counts = new Int32Array(/* … */);
const offsets = new Int32Array(/* … */);
const instanceCounts = new Int32Array(/* … */);
ext.multiDrawElementsInstancedWEBGL(
  gl.TRIANGLES,
  counts,
  0,
  gl.UNSIGNED_SHORT,
  offsets,
  0,
  instanceCounts,
  0,
  counts.length,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.drawArrays()")}}
- {{domxref("WebGLRenderingContext.drawElements()")}}
- {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()")}} or
  in WebGL 2: {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
- {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()")}} or
  in WebGL 2: {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
