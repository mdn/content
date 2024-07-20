---
title: "XRWebGLLayer: antialias property"
short-title: antialias
slug: Web/API/XRWebGLLayer/antialias
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRWebGLLayer.antialias
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The read-only {{domxref("XRWebGLLayer")}} property
**`antialias`** is a Boolean value which is `true`
if the rendering layer's frame buffer supports anti-aliasing. Otherwise, this
property's value is `false`. The specific anti-aliasing technique used is left
to the {{Glossary("user agent", "user agent's")}} discretion and cannot be specified by
the website or web app.

## Syntax

```js-nolint
xrWebGLLayer.antialias
```

### Value

A Boolean value which is `true` if the WebGL rendering layer's frame buffer
is configured to support anti-aliasing. Otherwise, this property is `false`.

When the [WebXR compositor](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals#the_webxr_compositor) is enabled, this value corresponds to the value of the
`antialias` property on the object returned by the WebGL context's
{{domxref("WebGLRenderingContext.getContextAttributes", "getContentAttributes()")}}
method.

## Usage notes

Since this is a read-only property, you can set the anti-aliasing mode only when
initially creating the `XRWebGLLayer`, by specifying the `antialias`
property in the {{domxref("XRWebGLLayer.XRWebGLLayer", "XRWebGLLayer()")}}
constructor's `options` configuration object.

## Examples

This snippet checks the value of `antialias` to see if it should perform
additional work to attempt to compensate for the lack of anti-aliasing on the WebGL
layer.

```js
let glLayer = xrSession.renderState.baseLayer;
gl.bindFrameBuffer(gl.FRAMEBUFFER, glLayer.framebuffer);

/* .. */

if (!glLayer.antialias) {
  /* compensate for lack of anti-aliasing */
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
