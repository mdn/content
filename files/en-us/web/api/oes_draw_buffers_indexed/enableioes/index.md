---
title: "OES_draw_buffers_indexed: enableiOES() method"
short-title: enableiOES()
slug: Web/API/OES_draw_buffers_indexed/enableiOES
page-type: web-api-instance-method
browser-compat: api.OES_draw_buffers_indexed.enableiOES
---

{{APIRef("WebGL")}}

The `enableiOES()` method of the {{DOMxRef("OES_draw_buffers_indexed")}} WebGL extension enables blending for a particular draw buffer.

## Syntax

```js-nolint
enableiOES(target, index)
```

### Parameters

- `target`
  - : Must be `gl.BLEND`.
- `index`
  - : An integer `i` specifying the draw buffer associated with the constant `gl.DRAW_BUFFERi`, see [WebGL draw buffer constants](/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers).

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- If `target` is not `gl.BLEND`, a `gl.INVALID_ENUM` error is thrown.
- If `index` is not a valid value, a `gl.INVALID_VALUE` error is thrown.

## Examples

### Enabling blending for draw buffers

The following two calls enable blending for the draw buffers `gl.DRAW_BUFFER0` and `gl.DRAW_BUFFER1`.

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.enableiOES(gl.BLEND, 0);
ext.enableiOES(gl.BLEND, 1);
```

You can use {{domxref("WebGLRenderingContext.getParameter()")}} to see how many draw buffers are available.

```js
const maxDrawBuffers = gl.getParameter(gl.MAX_DRAW_BUFFERS);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("OES_draw_buffers_indexed.disableiOES()")}}
- [WebGL draw buffer constants](/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
