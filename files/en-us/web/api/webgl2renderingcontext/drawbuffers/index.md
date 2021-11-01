---
title: WebGL2RenderingContext.drawBuffers()
slug: Web/API/WebGL2RenderingContext/drawBuffers
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.drawBuffers
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.drawBuffers()`** method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) defines draw buffers to which
fragment colors are written into. The draw buffer settings are part of the state of the
currently bound framebuffer or the drawingbuffer if no framebuffer is bound.

## Syntax

```js
void gl.drawBuffers(buffers);
```

### Parameters

- `buffers`

  - : An {{jsxref("Array")}} of {{domxref("WebGL_API/Types", "GLenum")}} specifying the buffers into which
    fragment colors will be written. Possible values are:

    - `gl.NONE`: Fragment shader output is not written into any color
      buffer.
    - `gl.BACK`: Fragment shader output is written into the back color
      buffer.
    - `gl.COLOR_ATTACHMENT{0-15}`: Fragment shader output is written in the
      nth color attachment of the current framebuffer.

### Return value

None.

### Exceptions

- If `buffers` contains not one of the accepted values, a
  `gl.INVALID_ENUM` error is thrown.

## Examples

```js
gl.drawBuffers([gl.NONE, gl.COLOR_ATTACHMENT1]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGL2RenderingContext.clearBuffer",
    "WebGL2RenderingContext.clearBuffer[fiuv]()")}}
