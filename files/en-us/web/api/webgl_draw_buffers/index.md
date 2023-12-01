---
title: WEBGL_draw_buffers extension
short-title: WEBGL_draw_buffers
slug: Web/API/WEBGL_draw_buffers
page-type: webgl-extension
browser-compat: api.WEBGL_draw_buffers
---

{{APIRef("WebGL")}}

The **`WEBGL_draw_buffers`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and enables a fragment shader to write to several textures, which is useful for [deferred shading](https://hacks.mozilla.org/2014/01/webgl-deferred-shading/), for example.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> **Note:** This extension is only available to {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} contexts. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}, the functionality of this extension is available on the WebGL2 context by default. In WebGL 2, the constants are available without the "WEBGL" suffix and the new GLSL built-ins require GLSL `#version 300 es`.

## Constants

This extension exposes new constants, which can be used in the {{domxref("WebGLRenderingContext.framebufferRenderbuffer()", "gl.framebufferRenderbuffer()")}}, {{domxref("WebGLRenderingContext.framebufferTexture2D()", "gl.framebufferTexture2D()")}}, {{domxref("WebGLRenderingContext.getFramebufferAttachmentParameter()", "gl.getFramebufferAttachmentParameter()")}} {{domxref("WEBGL_draw_buffers.drawBuffersWEBGL()", "ext.drawBuffersWEBGL()")}}, and {{domxref("WebGLRenderingContext.getParameter()", "gl.getParameter()")}} methods.

- `ext.COLOR_ATTACHMENT0_WEBGL ext.COLOR_ATTACHMENT1_WEBGL ext.COLOR_ATTACHMENT2_WEBGL ext.COLOR_ATTACHMENT3_WEBGL ext.COLOR_ATTACHMENT4_WEBGL ext.COLOR_ATTACHMENT5_WEBGL ext.COLOR_ATTACHMENT6_WEBGL ext.COLOR_ATTACHMENT7_WEBGL ext.COLOR_ATTACHMENT8_WEBGL ext.COLOR_ATTACHMENT9_WEBGL ext.COLOR_ATTACHMENT10_WEBGL ext.COLOR_ATTACHMENT11_WEBGL ext.COLOR_ATTACHMENT12_WEBGL ext.COLOR_ATTACHMENT13_WEBGL ext.COLOR_ATTACHMENT14_WEBGL ext.COLOR_ATTACHMENT15_WEBGL`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying a color buffer.
- `ext.DRAW_BUFFER0_WEBGL ext.DRAW_BUFFER1_WEBGL ext.DRAW_BUFFER2_WEBGL ext.DRAW_BUFFER3_WEBGL ext.DRAW_BUFFER4_WEBGL ext.DRAW_BUFFER5_WEBGL ext.DRAW_BUFFER6_WEBGL ext.DRAW_BUFFER7_WEBGL ext.DRAW_BUFFER8_WEBGL ext.DRAW_BUFFER9_WEBGL ext.DRAW_BUFFER10_WEBGL ext.DRAW_BUFFER11_WEBGL ext.DRAW_BUFFER12_WEBGL ext.DRAW_BUFFER13_WEBGL ext.DRAW_BUFFER14_WEBGL ext.DRAW_BUFFER15_WEBGL`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} returning a draw buffer.
- `ext.MAX_COLOR_ATTACHMENTS_WEBGL`
  - : A {{domxref("WebGL_API/Types", "GLint")}} indicating the maximum number of framebuffer color attachment points.
- `ext.MAX_DRAW_BUFFERS_WEBGL`
  - : A {{domxref("WebGL_API/Types", "GLint")}} indicating the maximum number of draw buffers.

## Instance methods

This extension exposes one new method.

- {{domxref("WEBGL_draw_buffers.drawBuffersWEBGL()", "ext.drawBuffersWEBGL()")}}
  - : Defines the draw buffers to which all fragment colors are written. (When using {{domxref("WebGL2RenderingContext", "WebGL2")}}, this method is available as {{domxref("WebGL2RenderingContext.drawBuffers()", "gl.drawBuffers()")}} by default).

## Examples

Enabling the extension:

```js
const ext = gl.getExtension("WEBGL_draw_buffers");
```

Binding multiple textures (to a `tx[]` array) to different framebuffer color attachments:

```js
const fb = gl.createFramebuffer();
gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
gl.framebufferTexture2D(
  gl.FRAMEBUFFER,
  ext.COLOR_ATTACHMENT0_WEBGL,
  gl.TEXTURE_2D,
  tx[0],
  0,
);
gl.framebufferTexture2D(
  gl.FRAMEBUFFER,
  ext.COLOR_ATTACHMENT1_WEBGL,
  gl.TEXTURE_2D,
  tx[1],
  0,
);
gl.framebufferTexture2D(
  gl.FRAMEBUFFER,
  ext.COLOR_ATTACHMENT2_WEBGL,
  gl.TEXTURE_2D,
  tx[2],
  0,
);
gl.framebufferTexture2D(
  gl.FRAMEBUFFER,
  ext.COLOR_ATTACHMENT3_WEBGL,
  gl.TEXTURE_2D,
  tx[3],
  0,
);
```

Mapping the color attachments to draw buffer slots that the fragment shader will write to using `gl_FragData`:

```js
ext.drawBuffersWEBGL([
  ext.COLOR_ATTACHMENT0_WEBGL, // gl_FragData[0]
  ext.COLOR_ATTACHMENT1_WEBGL, // gl_FragData[1]
  ext.COLOR_ATTACHMENT2_WEBGL, // gl_FragData[2]
  ext.COLOR_ATTACHMENT3_WEBGL, // gl_FragData[3]
]);
```

Shader code that writes to multiple textures:

```html
<script type="x-shader/x-fragment">
  #extension GL_EXT_draw_buffers : require

  precision highp float;

  void main(void) {
    gl_FragData[0] = vec4(0.25);
    gl_FragData[1] = vec4(0.5);
    gl_FragData[2] = vec4(0.75);
    gl_FragData[3] = vec4(1.0);
  }
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGL2RenderingContext.drawBuffers()")}}
- [WebGL deferred shading - Mozilla Hacks blog](https://hacks.mozilla.org/2014/01/webgl-deferred-shading/)
