---
title: WebGLRenderingContext.stencilMaskSeparate()
slug: Web/API/WebGLRenderingContext/stencilMaskSeparate
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.stencilMaskSeparate
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.stencilMaskSeparate()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) controls enabling and
disabling of front and/or back writing of individual bits in the stencil planes.

The {{domxref("WebGLRenderingContext.stencilMask()")}} method can set both, the front
and back stencil writemasks to one value at the same time.

## Syntax

```js
stencilMaskSeparate(face, mask)
```

### Parameters

- `face`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying whether the front and/or back stencil writemask
    is updated. The possible values are:

    - `gl.FRONT`
    - `gl.BACK`
    - `gl.FRONT_AND_BACK`

- `mask`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying a bit mask to enable or disable writing of
    individual bits in the stencil planes. By default, the mask is all 1.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.stencilMaskSeparate(gl.FRONT, 110101);
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
- {{domxref("WebGLRenderingContext.stencilMask()")}}
