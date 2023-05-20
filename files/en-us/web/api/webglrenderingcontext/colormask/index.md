---
title: "WebGLRenderingContext: colorMask() method"
short-title: colorMask()
slug: Web/API/WebGLRenderingContext/colorMask
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.colorMask
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.colorMask()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) sets which color components to
enable or to disable when drawing or rendering to a {{domxref("WebGLFramebuffer")}}.

## Syntax

```js-nolint
colorMask(red, green, blue, alpha)
```

### Parameters

- `red`
  - : A {{domxref("WebGL_API/Types", "GLboolean")}} specifying whether or not the red color component can be
    written into the frame buffer. Default value: `true`.
- `green`
  - : A {{domxref("WebGL_API/Types", "GLboolean")}} specifying whether or not the green color component can
    be written into the frame buffer. Default value: `true`.
- `blue`
  - : A {{domxref("WebGL_API/Types", "GLboolean")}} specifying whether or not the blue color component can be
    written into the frame buffer. Default value: `true`.
- `alpha`
  - : A {{domxref("WebGL_API/Types", "GLboolean")}} specifying whether or not the alpha (transparency)
    component can be written into the frame buffer. Default value: `true`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.colorMask(true, true, true, false);
```

To get the current color mask, query the `COLOR_WRITEMASK` constant which
returns an {{jsxref("Array")}}.

```js
gl.getParameter(gl.COLOR_WRITEMASK);
// [true, true, true, false]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.depthMask()")}}
- {{domxref("WebGLRenderingContext.stencilMask()")}}
