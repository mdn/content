---
title: EXT_float_blend
slug: Web/API/EXT_float_blend
page-type: webgl-extension
tags:
  - 32-bit
  - API
  - Blending
  - Draw Buffer
  - EXT_float_blend
  - Floating-Point
  - Reference
  - WebGL
  - WebGL extension
  - WebGL extensions
  - float
browser-compat: api.EXT_float_blend
---
{{APIRef("WebGL")}}

The [WebGL API](/en-US/docs/Web/API/WebGL_API)'s `EXT_float_blend` extension allows blending and draw buffers with 32-bit floating-point components.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> **Note:** This extension is available to both, {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} and {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} contexts. However, to use it, you need to enable the use of 32-bit floating-point draw buffers by enabling the extension {{domxref("WEBGL_color_buffer_float")}} (for WebGL1) or {{domxref("EXT_color_buffer_float")}} (for WebGL2). Doing so automatically enables `EXT_float_blend` as well.

With this extension enabled, calling {{domxref("WebGLRenderingContext.drawArrays", "drawArrays()")}} or {{domxref("WebGLRenderingContext.drawElements", "drawElements()")}} with blending enabled and a draw buffer with 32-bit floating-point components will no longer result in an `INVALID_OPERATION` error.

## Usage notes

On devices that support the `EXT_float_blend` extension, it is automatically, implicitly, enabled when any one or more of {{domxref("EXT_color_buffer_float")}}, {{domxref("OES_texture_float")}}, or {{domxref("WEBGL_color_buffer_float")}} are enabled. This ensures that content written before `EXT_float_blend` was exposed by WebGL will function as expected.

## Examples

```js
const gl = canvas.getContext('webgl2');

// enable necessary extensions
gl.getExtension('EXT_color_buffer_float');
gl.getExtension('EXT_float_blend');

const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);

// use floating point format
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, 1, 1, 0, gl.RGBA, gl.FLOAT, null);

const fb = gl.createFramebuffer();
gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);

// enable blending
gl.enable(gl.BLEND);

gl.drawArrays(gl.POINTS, 0, 1);
// won't throw gl.INVALID_OPERATION with the extension enabled
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebGL API](/en-US/docs/Web/API/WebGL_API)
- [Using WebGL extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions)
- [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial)
- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("EXT_color_buffer_float")}}
- {{domxref("WEBGL_color_buffer_float")}}
- {{domxref("WebGLRenderingContext.drawArrays()")}}
- {{domxref("WebGLRenderingContext.drawElements()")}}
