---
title: XRWebGLLayer.antialias
slug: Web/API/XRWebGLLayer/antialias
page-type: web-api-instance-property
tags:
  - API
  - AR
  - Drawing
  - Graphics
  - Quality
  - Reality
  - Reference
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRWebGLLayer
  - anti-aliasing
  - antialias
  - appearance
  - augmented
  - rendering
browser-compat: api.XRWebGLLayer.antialias
---
{{APIRef("WebXR Device API")}}

The read-only {{domxref("XRWebGLLayer")}} property
**`antialias`** is a Boolean value which is `true`
if the rendering layer's frame buffer supports antialiasing. Otherwise, this
property's value is `false`. The specific antialiasing technique used is left
to the {{Glossary("user agent", "user agent's")}} discretion and cannot be specified by
the web site or web app.

## Syntax

```js
let antialiasingSupported = xrWebGLLayer.antialias;
```

### Value

A Boolean value which is `true` if the WebGL rendering layer's frame buffer
is configured to support antialiasing. Otherwise, this property is `false`.

When the [WebXR compositor](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals#the_webxr_compositor) is enabled, this value corresponds to the value of the
`antialias` property on the object returned by the WebGL context's
{{domxref("WebGLRenderingContext.getContextAttributes", "getContentAttributes()")}}
method.

## Usage notes

Since this is a read-only property, you can set the antialiasing mode only when
initially creating the `XRWebGLLayer`, by specifying the `antialias`
property in the {{domxref("XRWebGLLayer.XRWebGLLayer", "XRWebGLLayer()")}}
constructor's `layerInit` configuration object.

## Examples

This snippet checks the value of `antialias` to see if it should perform
additional work to attempt to compensate for the lack of antialiasing on the WebGL
layer.

```js
let glLayer = xrSession.renderState.baseLayer;
gl.bindFrameBuffer(gl.FRAMEBUFFER, glLayer.framebuffer);

/* .. */

if (!glLayer.antialias) {
  /* compensate for lack of antialiasing */
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
- {{domxref("WebGLLayerInit")}}
