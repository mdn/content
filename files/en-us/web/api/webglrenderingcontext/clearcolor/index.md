---
title: "WebGLRenderingContext: clearColor() method"
short-title: clearColor()
slug: Web/API/WebGLRenderingContext/clearColor
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.clearColor
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.clearColor()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specifies the color values used
when clearing color buffers.

This specifies what color values to use when calling the
{{domxref("WebGLRenderingContext.clear", "clear()")}} method. The values are clamped
between 0 and 1.

## Syntax

```js-nolint
clearColor(red, green, blue, alpha)
```

### Parameters

- `red`
  - : A {{domxref("WebGL_API/Types", "GLclampf")}} specifying the red color value used when the color buffers
    are cleared. Default value: 0.
- `green`
  - : A {{domxref("WebGL_API/Types", "GLclampf")}} specifying the green color value used when the color
    buffers are cleared. Default value: 0.
- `blue`
  - : A {{domxref("WebGL_API/Types", "GLclampf")}} specifying the blue color value used when the color
    buffers are cleared. Default value: 0.
- `alpha`
  - : A {{domxref("WebGL_API/Types", "GLclampf")}} specifying the alpha (transparency) value used when the
    color buffers are cleared. Default value: 0.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.clearColor(1, 0.5, 0.5, 3);
```

To get the current clear color, query the `COLOR_CLEAR_VALUE` constant which
returns a {{jsxref("Float32Array")}}.

```js
gl.getParameter(gl.COLOR_CLEAR_VALUE);
// Float32Array[1, 0.5, 0.5, 1]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.clear()")}}
- {{domxref("WebGLRenderingContext.clearDepth()")}}
- {{domxref("WebGLRenderingContext.clearStencil()")}}
