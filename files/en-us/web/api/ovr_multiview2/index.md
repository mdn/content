---
title: OVR_multiview2
slug: Web/API/OVR_multiview2
page-type: webgl-extension
tags:
  - API
  - WebGL
  - WebGL extensions
browser-compat: api.OVR_multiview2
---
{{APIRef("WebGL")}}

The `OVR_multiview2` extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and adds support for rendering into multiple views simultaneously. This especially useful for virtual reality (VR) and WebXR.

For more information, see also:

- [Multiview on WebXR](https://blog.mozvr.com/multiview-on-webxr/)
- [three.js multiview demo](https://threejs.org/examples/webgl_multiple_views.html)
- [Multiview in babylon.js](https://doc.babylonjs.com/divingDeeper/cameras/multiViewsPart1)
- [Optimizing Virtual Reality: Understanding Multiview](https://community.arm.com/arm-community-blogs/b/graphics-gaming-and-vr-blog/posts/optimizing-virtual-reality-understanding-multiview)
- [Multiview WebGL Rendering for Oculus Browser 6.0+](https://developer.oculus.com/documentation/oculus-browser/latest/concepts/browser-multiview/)

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> **Note:** Support depends on the system's graphics driver (Windows+ANGLE and Android are supported; Windows+GL, Mac, Linux are not supported).
>
> This extension is only available to {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}} contexts as it needs GLSL 3.00 and texture arrays.
>
> Currently, there is no way to use multiview to render to a multisampled backbuffer, so you should create contexts with `antialias: false`. However, the Oculus browser (6+) also supports multisampling using the [`OCULUS_multiview`](https://developer.oculus.com/documentation/oculus-browser/latest/concepts/browser-multiview/#using-multiview-in-webgl-20) extension. See also [this WebGL issue](https://github.com/KhronosGroup/WebGL/issues/2912).

## Constants

This extension exposes 4 constants that can be used in [`getParameter()`](/en-US/docs/Web/API/WebGLRenderingContext/getParameter) or [`getFramebufferAttachmentParameter()`](/en-US/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter).

- `FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR`
  - : Number of views of the framebuffer object attachment.
- `FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR`
  - : Base view index of the framebuffer object attachment.
- `MAX_VIEWS_OVR`
  - : The maximum number of views. Most VR headsets have two views, but there are prototypes of headset with ultra-wide FOV using 4 views which is currently the maximum number of views supported by multiview.
- `FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR`
  - : If baseViewIndex is not the same for all framebuffer attachment points where the value of `FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE` is not `NONE`, the framebuffer is considered incomplete. Calling [`checkFramebufferStatus`](/en-US/docs/Web/API/WebGLRenderingContext/checkFramebufferStatus) for a framebuffer in this state returns `FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR`.

## Methods

- [`framebufferTextureMultiviewOVR()`](/en-US/docs/Web/API/OVR_multiview2/framebufferTextureMultiviewOVR)
  - : Simultaneously renders to multiple elements of a 2D texture array.

## Examples

This example is taken from the [specification](https://www.khronos.org/registry/webgl/extensions/OVR_multiview2/).

```js
const gl = document.createElement('canvas').getContext('webgl2', { antialias: false });
const ext = gl.getExtension('OVR_multiview2');
const fb = gl.createFramebuffer();
gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, fb);

const colorTex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D_ARRAY, colorTex);
gl.texStorage3D(gl.TEXTURE_2D_ARRAY, 1, gl.RGBA8, 512, 512, 2);
ext.framebufferTextureMultiviewOVR(gl.DRAW_FRAMEBUFFER, gl.COLOR_ATTACHMENT0, colorTex, 0, 0, 2);

const depthStencilTex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D_ARRAY, depthStencilTex);
gl.texStorage3D(gl.TEXTURE_2D_ARRAY, 1, gl.DEPTH32F_STENCIL8, 512, 512, 2);

ext.framebufferTextureMultiviewOVR(gl.DRAW_FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, depthStencilTex, 0, 0, 2);
gl.drawElements(/* … */);  // draw will be broadcasted to the layers of colorTex and depthStencilTex.
```

Shader code

```cpp
#version 300 es
#extension GL_OVR_multiview2 : require
precision mediump float;
layout (num_views = 2) in;
in vec4 inPos;
uniform mat4 u_viewMatrices[2];
void main() {
  gl_Position = u_viewMatrices[gl_ViewID_OVR] * inPos;
}
```

Also, see this [three.js](https://threejs.org/examples/?q=mult#webgl_multiple_views) demo for a live multiview example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
- [WebXR](/en-US/docs/Web/API/WebXR_Device_API)
- [three.js multiview demo](https://threejs.org/examples/webgl_multiple_views.html)
