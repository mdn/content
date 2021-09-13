---
title: WebGLRenderingContext.depthRange()
slug: Web/API/WebGLRenderingContext/depthRange
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.depthRange
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.depthRange()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specifies the depth range mapping
from normalized device coordinates to window or viewport coordinates.

## Syntax

```js
void gl.depthRange(zNear, zFar);
```

### Parameters

- `zNear`
  - : A {{domxref("WebGL_API/Types", "GLclampf")}} specifying the mapping of the near clipping plane to
    window or viewport coordinates. Clamped to the range 0 to 1 and must be less than or
    equal to `zFar`. The default value i`s 0.`
- `zFar`
  - : A {{domxref("WebGL_API/Types", "GLclampf")}} specifying the mapping of the far clipping plane to window
    or viewport coordinates. Clamped to the range 0 to 1. The default value
    i`s 1.`

### Return value

None.

## Examples

```js
gl.depthRange(0.2, 0.6);
```

To check the current depth range, query the `DEPTH_RANGE` constant which
returns a {{jsxref("Float32Array")}}

```js
gl.getParameter(gl.DEPTH_RANGE);
// Float32Array[0.2, 0.6]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.viewport()")}}
- {{domxref("WebGLRenderingContext.depthFunc()")}}
