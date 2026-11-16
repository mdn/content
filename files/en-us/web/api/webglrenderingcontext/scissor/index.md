---
title: "WebGLRenderingContext: scissor() method"
short-title: scissor()
slug: Web/API/WebGLRenderingContext/scissor
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.scissor
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.scissor()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) sets a scissor box, which limits
the drawing to a specified rectangle.

## Syntax

```js-nolint
scissor(x, y, width, height)
```

### Parameters

- `x`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the horizontal coordinate for the lower left
    corner of the box. Default value: 0.
- `y`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the vertical coordinate for the lower left corner
    of the box. Default value: 0.
- `width`
  - : A non-negative {{domxref("WebGL_API/Types", "GLsizei")}} specifying the width of the scissor box.
    Default value: width of the canvas.
- `height`
  - : A non-negative {{domxref("WebGL_API/Types", "GLsizei")}} specifying the height of the scissor box.
    Default value: height of the canvas.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

If either _width_ or _height_ is a negative value, a
`gl.INVALID_VALUE` error is thrown.

## Examples

When the scissor test is enabled, only pixels within the scissor box can be modified by
drawing commands.

```js
// turn on scissor test
gl.enable(gl.SCISSOR_TEST);

// set the scissor rectangle
gl.scissor(x, y, width, height);

// execute drawing commands in the scissor box (e.g. clear)

// turn off scissor test again
gl.disable(gl.SCISSOR_TEST);
```

To get the current scissor box dimensions, query the `SCISSOR_BOX` constant
which returns an {{jsxref("Int32Array")}}.

```js
gl.scissor(0, 0, 200, 200);
gl.getParameter(gl.SCISSOR_BOX);
// Int32Array[0, 0, 200, 200]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.viewport()")}}
- {{domxref("WebGLRenderingContext.enable()")}}
- {{domxref("WebGLRenderingContext.disable()")}}
