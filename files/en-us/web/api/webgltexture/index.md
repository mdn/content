---
title: WebGLTexture
slug: Web/API/WebGLTexture
page-type: web-api-interface
tags:
  - API
  - Reference
  - WebGL
browser-compat: api.WebGLTexture
---
{{APIRef("WebGL")}}

The **WebGLTexture** interface is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and represents an opaque texture object providing storage and state for texturing operations.

{{InheritanceDiagram}}

## WebGL textures

The `WebGLTexture` object does not define any methods or properties of its own and its content is not directly accessible. When working with `WebGLTexture` objects, the following methods of the {{domxref("WebGLRenderingContext")}} are useful:

- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}

See also the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial) on [Using textures in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).

## WebXR opaque textures

When using [WebXR](/en-US/docs/Web/API/WebXR_Device_API) layers, the {{domxref("XRWebGLBinding")}} object will return instances of an _opaque_ `WebGLTexture` for the color and depth/stencil attachments.

WebXR methods that return _opaque_ `WebGLTexture` objects:

- {{domxref("XRWebGLBinding.getSubImage()")}}
- {{domxref("XRWebGLBinding.getViewSubImage()")}}

The WebXR _opaque texture_ is identical to the standard `WebGLTexture` with the following exceptions:

- A WebXR opaque texture is invalid outside a WebXR [`requestAnimationFrame()` callback](/en-US/docs/Web/API/XRSession/requestAnimationFrame) for its session.
- A WebXR opaque texture is invalid until it is returned by {{domxref("XRWebGLBinding.getSubImage()")}} or {{domxref("XRWebGLBinding.getViewSubImage()")}}.
- A WebXR opaque texture for the color attachment contains colors with premultiplied alpha.
- At the end of a [`requestAnimationFrame()` callback](/en-US/docs/Web/API/XRSession/requestAnimationFrame) a WebXR opaque texture is unbounded and detached from all {{domxref("WebGLShader")}} objects.
- A WebXR opaque texture behaves as though it was allocated with {{domxref("WebGL2RenderingContext.texStorage2D", "texStorage2D")}} or {{domxref("WebGL2RenderingContext.texStorage3D", "texStorage3D")}}, as appropriate, even when using a WebGL 1.0 context.
- If a WebXR opaque texture calls {{domxref("WebGLRenderingContext.deleteTexture()")}}, an `INVALID_OPERATION` error is thrown.
- Changes to the dimension or format of a WebXR opaque texture are not allowed. GL functions may only alter the texel values and texture parameters.

## Examples

### Creating a texture

```js
const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');
const texture = gl.createTexture();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.generateMipmap()")}}
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("WebGLRenderingContext/texParameter", "WebGLRenderingContext.texParameterf()")}}
- {{domxref("WebGLRenderingContext/texParameter", "WebGLRenderingContext.texParameteri()")}}
