---
title: XRRenderState.layers
slug: Web/API/XRRenderState/layers
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - VR
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
browser-compat: api.XRRenderState.layers
---
{{APIRef("WebXR Device API")}}

The read-only **`layers`** property of the {{domxref("XRRenderState")}} interface is an ordered array containing {{domxref("XRLayer")}} objects that are displayed by the XR compositor.

## Value

An ordered array containing {{domxref("XRLayer")}} objects. The order of the layers is "back-to-front".

## Examples

### Getting render state layers

To read the WebXR layers array, use the `layers` property on {{domxref("XRRenderState")}}.
Layers can be set using the {{domxref("XRSession.updateRenderState()")}} method.

```js
const xrSession = navigator.xr.requestSession("immersive-ar", {
  optionalFeatures: ["layers"]
});

function onXRSessionStarted(xrSession) {
  const glCanvas = document.createElement("canvas");
  const gl = glCanvas.getContext("webgl", { xrCompatible: true });
  const xrGlBinding = new XRWebGLBinding(xrSession, gl);
  const projectionLayer = new XRWebGLLayer(xrSession, gl);
  const quadLayer = xrGlBinding.createQuadLayer({ pixelWidth: 1024, pixelHeight: 1024 });

  xrSession.updateRenderState({
    layers: [projectionLayer, quadLayer]
  });

  xrSession.renderState.layers; // [projectionLayer, quadLayer]
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRSession.updateRenderState()")}}
