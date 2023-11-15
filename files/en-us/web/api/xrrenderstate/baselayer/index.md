---
title: "XRRenderState: baseLayer property"
short-title: baseLayer
slug: Web/API/XRRenderState/baseLayer
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRRenderState.baseLayer
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The read-only **`baseLayer`** property of the
{{domxref("XRRenderState")}} interface returns the {{domxref("XRWebGLLayer")}} instance
that is the source of bitmap images and a description of how the image is to be rendered
in the device.

This property is read-only; however, you can indirectly change its
value using {{domxref("XRSession.updateRenderState")}}.

## Value

A {{domxref("XRWebGLLayer")}} object which is used as the source of the world's
contents when rendering each frame of the scene.

See the examples below to see how to use {{domxref("XRSession.updateRenderState",
  "updateRenderState()")}} to set the current `XRWebGLLayer` used for rendering
the scene.

## Examples

You can set the `XRWebGLLayer` used for rendering by calling
{{domxref("XRSession.updateRenderState", "updateRenderState()")}}, like this:

```js
let canvas = document.querySelector("canvas");
gl = canvas.getContext("webgl", { xrCompatible: true });
setNewWebGLLayer();

function setNewWebGLLayer(gl) {
  if (!gl) {
    /* WebGL not available */
    return;
  }

  xrSession.updateRenderState({
    baseLayer: new XRWebGLLayer(xrSession, gl),
  });
}
```

Here, the canvas obtained in the first line is the canvas into which WebGL is going to
draw. That context is passed into {{domxref("XRWebGLLayer.XRWebGLLayer", "new
  XRWebGLLayer()")}} to create an `XRWebGLLayer` which uses the contents of the
WebGL context `gl` as the source of the world's image during presentation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
