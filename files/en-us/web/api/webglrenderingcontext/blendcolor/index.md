---
title: WebGLRenderingContext.blendColor()
slug: Web/API/WebGLRenderingContext/blendColor
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.blendColor
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.blendColor()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) is used to set the source and
destination blending factors.

## Syntax

```js
void gl.blendColor(red, green, blue, alpha);
```

### Parameters

- `red`
  - : A {{domxref("WebGL_API/Types", "GLclampf")}} for the red component in the range of 0 to 1.
- `green`
  - : A {{domxref("WebGL_API/Types", "GLclampf")}} for the green component in the range of 0 to 1.
- blue
  - : A {{domxref("WebGL_API/Types", "GLclampf")}} for the blue component in the range of 0 to 1.
- alpha
  - : A {{domxref("WebGL_API/Types", "GLclampf")}} for the alpha component (transparency) in the range of 0
    to 1.

### Return value

None.

## Examples

To set the blend color, use:

```js
gl.blendColor(0, 0.5, 1, 1);
```

To get the blend color, query the `BLEND_COLOR` constant which returns a
{{jsxref("Float32Array")}}.

```js
gl.getParameter(gl.BLEND_COLOR);
// Float32Array[0, 0.5, 1, 1]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.blendEquation()")}}
- {{domxref("WebGLRenderingContext.blendFunc()")}}
