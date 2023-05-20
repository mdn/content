---
title: "OES_draw_buffers_indexed: disableiOES() method"
short-title: disableiOES()
slug: Web/API/OES_draw_buffers_indexed/disableiOES
page-type: web-api-instance-method
browser-compat: api.OES_draw_buffers_indexed.disableiOES
---

{{APIRef("WebGL")}}

The `disableiOES()` method of the {{DOMxRef("OES_draw_buffers_indexed")}} WebGL extension enables blending for a particular draw buffer.

## Syntax

```js-nolint
disableiOES(target, index)
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

### Disabling blending for draw buffers

The following two calls disable blending for the draw buffers `gl.DRAW_BUFFER0` and `gl.DRAW_BUFFER1`.

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.disableiOES(gl.BLEND, 0);
ext.disableiOES(gl.BLEND, 1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("OES_draw_buffers_indexed.enableiOES()")}}
- [WebGL draw buffer constants](/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
