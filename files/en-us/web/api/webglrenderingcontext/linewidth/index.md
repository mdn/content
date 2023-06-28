---
title: "WebGLRenderingContext: lineWidth() method"
short-title: lineWidth()
slug: Web/API/WebGLRenderingContext/lineWidth
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.lineWidth
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.lineWidth()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) sets the line width of rasterized
lines.

> **Warning:** The webgl spec, based on the OpenGL ES 2.0/3.0 specs points out that the minimum and
> maximum width for a line is implementation defined. The maximum minimum width is
> allowed to be 1.0. The minimum maximum width is also allowed to be 1.0. Because of
> these implementation defined limits it is not recommended to use line widths other
> than 1.0 since there is no guarantee any user's browser will display any other width.
>
> As of January 2017 most implementations of WebGL only support a minimum of 1 and a
> maximum of 1 as the technology they are based on has these same limits.

## Syntax

```js-nolint
lineWidth(width)
```

### Parameters

- `width`
  - : A {{domxref("WebGL_API/Types", "GLfloat")}} specifying the width of rasterized lines. Default value: 1.

### Return value

None ({{jsxref("undefined")}}).

## Examples

Setting the line width:

```js
gl.lineWidth(5);
```

Getting the line width:

```js
gl.getParameter(gl.LINE_WIDTH);
```

Getting the range of available widths. Returns a {{jsxref("Float32Array")}}.

```js
gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext")}}
