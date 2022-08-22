---
title: WEBGL_draw_buffers.drawBuffersWEBGL()
slug: Web/API/WEBGL_draw_buffers/drawBuffersWEBGL
page-type: webgl-extension-method
tags:
  - API
  - Method
  - Reference
  - WebGL
browser-compat: api.WEBGL_draw_buffers.drawBuffersWEBGL
---
{{APIRef("WebGL")}}

The **`WEBGL_draw_buffers.drawBuffersWEBGL()`** method is part
of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and allows you to define
the draw buffers to which all fragment colors are written.

This method is part of the {{domxref("WEBGL_draw_buffers")}} extension.

> **Note:** When using {{domxref("WebGL2RenderingContext", "WebGL2")}},
> this method is available as {{domxref("WebGL2RenderingContext.drawBuffers()",
    "gl.drawBuffers()")}} by default and the constants are named
> `gl.COLOR_ATTACHMENT1` etc. without the "WEBGL" suffix.

## Syntax

```js
drawBuffersWEBGL(buffers)
```

### Parameters

- `buffers`

  - : An {{jsxref("Array")}} of {{domxref("WebGL_API/Types", "GLenum")}} constants defining drawing buffers.
    Possible values:

    - `gl.NONE`: The fragment shader is not written to any color buffer.
    - `gl.BACK`: The fragment shader is written to the back color buffer.
    - `ext.COLOR_ATTACHMENT0_WEBGL` The fragment shader is written the
      *n*th color attachment of the framebuffer.
    - `ext.COLOR_ATTACHMENT1_WEBGL`
    - `ext.COLOR_ATTACHMENT2_WEBGL`
    - `ext.COLOR_ATTACHMENT3_WEBGL`
    - `ext.COLOR_ATTACHMENT4_WEBGL`
    - `ext.COLOR_ATTACHMENT5_WEBGL`
    - `ext.COLOR_ATTACHMENT6_WEBGL`
    - `ext.COLOR_ATTACHMENT7_WEBGL`
    - `ext.COLOR_ATTACHMENT8_WEBGL`
    - `ext.COLOR_ATTACHMENT9_WEBGL`
    - `ext.COLOR_ATTACHMENT10_WEBGL`
    - `ext.COLOR_ATTACHMENT11_WEBGL`
    - `ext.COLOR_ATTACHMENT12_WEBGL`
    - `ext.COLOR_ATTACHMENT13_WEBGL`
    - `ext.COLOR_ATTACHMENT14_WEBGL`
    - `ext.COLOR_ATTACHMENT15_WEBGL`

### Return value

None ({{jsxref("undefined")}}).

## Examples

See {{domxref("WEBGL_draw_buffers")}} for more context with this example code.

```js
ext.drawBuffersWEBGL([
  ext.COLOR_ATTACHMENT0_WEBGL, // gl_FragData[0]
  ext.COLOR_ATTACHMENT1_WEBGL, // gl_FragData[1]
  ext.COLOR_ATTACHMENT2_WEBGL, // gl_FragData[2]
  ext.COLOR_ATTACHMENT3_WEBGL  // gl_FragData[3]
]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WEBGL_draw_buffers")}}
- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.framebufferRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.framebufferTexture2D()")}}
- {{domxref("WebGLRenderingContext.getFramebufferAttachmentParameter()")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
- [WebGL deferred shading - Mozilla Hacks blog](https://hacks.mozilla.org/2014/01/webgl-deferred-shading/)
