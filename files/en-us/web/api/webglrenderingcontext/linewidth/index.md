---
title: "WebGLRenderingContext: lineWidth() method"
short-title: lineWidth()
slug: Web/API/WebGLRenderingContext/lineWidth
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.lineWidth
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.lineWidth()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) sets the line width of rasterized
lines.

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
