---
title: WebGLRenderingContext.clearDepth()
slug: Web/API/WebGLRenderingContext/clearDepth
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.clearDepth
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.clearDepth()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specifies the clear value for the
depth buffer.

This specifies what depth value to use when calling the
{{domxref("WebGLRenderingContext.clear", "clear()")}} method. The value is clamped
between 0 and 1.

## Syntax

```js
void gl.clearDepth(depth);
```

### Parameters

- `depth`
  - : A {{domxref("WebGL_API/Types", "GLclampf")}} specifying the depth value used when the depth buffer is
    cleared. Default value: 1.

### Return value

None.

## Examples

```js
gl.clearDepth(0.5);
```

To get the current depth clear value, query the `DEPTH_CLEAR_VALUE`
constant.

```js
gl.getParameter(gl.DEPTH_CLEAR_VALUE);
// 0.5
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.clear()")}}
- {{domxref("WebGLRenderingContext.clearColor()")}}
- {{domxref("WebGLRenderingContext.clearStencil()")}}
