---
title: "WebGL2RenderingContext: drawBuffers() method"
short-title: drawBuffers()
slug: Web/API/WebGL2RenderingContext/drawBuffers
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.drawBuffers
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGL2RenderingContext.drawBuffers()`** method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) defines draw buffers to which
fragment colors are written into. The draw buffer settings are part of the state of the
currently bound framebuffer or the drawing buffer if no framebuffer is bound.

## Syntax

```js-nolint
drawBuffers(buffers)
```

### Parameters

- `buffers`

  - : An {{jsxref("Array")}} of {{domxref("WebGL_API/Types", "GLenum")}} specifying the buffers into which
    fragment colors will be written. Possible values are:

    - `gl.NONE`
      - : Fragment shader output is not written into any color
        buffer.
    - `gl.BACK`
      - : Fragment shader output is written into the back color
        buffer.
    - `gl.COLOR_ATTACHMENT{0-15}`
      - : Fragment shader output is written in the
        nth color attachment of the current framebuffer.

### Return value

None ({{jsxref("undefined")}}).

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

- {{domxref("WebGL2RenderingContext.clearBuffer", "WebGL2RenderingContext.clearBuffer[fiuv]()")}}
