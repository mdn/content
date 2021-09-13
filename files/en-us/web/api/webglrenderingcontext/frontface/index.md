---
title: WebGLRenderingContext.frontFace()
slug: Web/API/WebGLRenderingContext/frontFace
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.frontFace
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.frontFace()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specifies whether polygons are
front- or back-facing by setting a winding orientation.

## Syntax

```js
void gl.frontFace(mode);
```

### Parameters

- mode

  - : A [GLenum](/en-US/docs/Web/API/WebGL_API/Types) type winding orientation.
    The default value is `gl.CCW`. Possible values:

    - `gl.CW`: Clock-wise winding.
    - `gl.CCW`: Counter-clock-wise winding.

### Return value

None.

## Examples

```js
gl.frontFace(gl.CW);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.cullFace()")}}
