---
title: WebGL2RenderingContext.readBuffer()
slug: Web/API/WebGL2RenderingContext/readBuffer
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.readBuffer
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.readBuffer()`** method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) selects a color buffer as the
source for pixels for subsequent calls to
{{domxref("WebGLRenderingContext.copyTexImage2D", "copyTexImage2D")}},
{{domxref("WebGLRenderingContext.copyTexSubImage2D", "copyTexSubImage2D")}},
{{domxref("WebGL2RenderingContext.copyTexSubImage3D", "copyTexSubImage3D")}} or
{{domxref("WebGLRenderingContext.readPixels", "readPixels")}}.

## Syntax

```js
void gl.readBuffer(src);
```

### Parameters

- `src`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying a color buffer. Possible values:

    - `gl.BACK`: Reads from the back color buffer.
    - `gl.NONE`: Reads from no color buffer.
    - `gl.COLOR_ATTACHMENT{0-15}`: Reads from one of the 16 color
      attachment buffers.

### Return value

None.

## Examples

```js
gl.readBuffer(gl.COLOR_ATTACHMENT0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexSubImage2D()")}}
- {{domxref("WebGL2RenderingContext.copyTexSubImage3D()")}}
- {{domxref("WebGLRenderingContext.readPixels()")}}
