---
title: "WebGLRenderingContext: activeTexture() method"
short-title: activeTexture()
slug: Web/API/WebGLRenderingContext/activeTexture
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.activeTexture
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.activeTexture()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) specifies which texture unit to
make active.

## Syntax

```js-nolint
activeTexture(texture)
```

### Parameters

- `texture`
  - : The texture unit to make active. The value is a `gl.TEXTUREI`
    where _I_ is within the range from 0 to
    `gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1`.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

If _texture_ is not one of `gl.TEXTUREI`, where _I_
is within the range from 0 to `gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1`, a
`gl.INVALID_ENUM` error is thrown.

## Examples

The following call selects `gl.TEXTURE1` as the current texture. Subsequent
calls that modify the texture state will affect this texture.

```js
gl.activeTexture(gl.TEXTURE1);
```

The number of texture units is implementation dependent, you can get this number with
the help of the `MAX_COMBINED_TEXTURE_IMAGE_UNITS` constant. It is, per
specification, at least 8.

```js
gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
```

To get the active texture, query the `ACTIVE_TEXTURE` constant.

```js
gl.activeTexture(gl.TEXTURE0);
gl.getParameter(gl.ACTIVE_TEXTURE);
// returns "33984" (0x84C0, gl.TEXTURE0 enum value)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getParameter()")}}
