---
title: "WebGLRenderingContext: viewport() method"
short-title: viewport()
slug: Web/API/WebGLRenderingContext/viewport
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.viewport
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.viewport()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) sets the viewport, which specifies
the affine transformation of x and y from normalized device coordinates to window
coordinates.

## Syntax

```js-nolint
viewport(x, y, width, height)
```

### Parameters

- `x`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the horizontal coordinate for the lower left
    corner of the viewport origin. Default value: 0.
- `y`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the vertical coordinate for the lower left corner
    of the viewport origin. Default value: 0.
- `width`
  - : A non-negative {{domxref("WebGL_API/Types", "GLsizei")}} specifying the width of the viewport. Default
    value: width of the canvas.
- `height`
  - : A non-negative {{domxref("WebGL_API/Types", "GLsizei")}} specifying the height of the viewport. Default
    value: height of the canvas.

### Return value

None ({{jsxref("undefined")}}).

### Errors thrown

If either _width_ or _height_ is a negative value, a
`gl.INVALID_VALUE` error is thrown.

## Examples

When you first create a WebGL context, the size of the viewport will match the size of
the canvas. However, if you resize the canvas, you will need to tell the WebGL context a
new viewport setting. In this situation, you can use `gl.viewport`.

```js
gl.viewport(0, 0, canvas.width, canvas.height);
```

The viewport width and height are clamped to a range that is implementation dependent.
To get this range, you can use the `MAX_VIEWPORT_DIMS` constant, which
returns an {{jsxref("Int32Array")}}.

```js
gl.getParameter(gl.MAX_VIEWPORT_DIMS);
// e.g. Int32Array[16384, 16384]
```

To get the current viewport, query the `VIEWPORT` constant.

```js
gl.getParameter(gl.VIEWPORT);
// e.g. Int32Array[0, 0, 640, 480]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.scissor()")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
