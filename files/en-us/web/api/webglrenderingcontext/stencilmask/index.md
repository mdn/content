---
title: WebGLRenderingContext.stencilMask()
slug: Web/API/WebGLRenderingContext/stencilMask
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.stencilMask
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.stencilMask()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) controls enabling and disabling of
both the front and back writing of individual bits in the stencil planes.

The {{domxref("WebGLRenderingContext.stencilMaskSeparate()")}} method can set front and
back stencil writemasks to different values.

## Syntax

```js
stencilMask(mask)
```

### Parameters

- `mask`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying a bit mask to enable or disable writing of
    individual bits in the stencil planes. By default, the mask is all 1.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.stencilMask(110101);
```

To get the current stencil masks, query the `STENCIL_WRITEMASK`,
`STENCIL_BACK_WRITEMASK`, or `STENCIL_BITS` constants.

```js
gl.getParameter(gl.STENCIL_WRITEMASK);
// 110101
gl.getParameter(gl.STENCIL_BACK_WRITEMASK);
// 110101
gl.getParameter(gl.STENCIL_BITS);
// 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.colorMask()")}}
- {{domxref("WebGLRenderingContext.depthMask()")}}
- {{domxref("WebGLRenderingContext.stencilMaskSeparate()")}}
