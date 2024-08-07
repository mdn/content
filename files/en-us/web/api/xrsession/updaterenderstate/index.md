---
title: "XRSession: updateRenderState() method"
short-title: updateRenderState()
slug: Web/API/XRSession/updateRenderState
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRSession.updateRenderState
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The `updateRenderState()` method of the {{DOMxRef("XRSession")}} interface of the [WebXR API](/en-US/docs/Web/API/WebXR_Device_API) schedules changes to be applied to the active render state ({{domxref("XRRenderState")}}) prior to rendering of the next frame.

## Syntax

```js-nolint
updateRenderState()
updateRenderState(state)
```

### Parameters

- `state` {{Optional_Inline}}
  - : An optional object to configure the {{domxref("XRRenderState")}}. If none is provided, a default configuration will be used.
    - `baseLayer` {{Optional_Inline}}: An {{domxref("XRWebGLLayer")}} object from which the WebXR compositor will obtain imagery. This is `null` by default. To specify other (or multiple) layers, see the `layers` option.
    - `depthFar` {{Optional_Inline}}: A floating-point value specifying the distance in meters from the viewer to the far clip plane, which is a plane parallel to the display surface beyond which no further rendering will occur. All rendering will take place between the distances specified by `depthNear` and `depthFar`. This is 1000 meters (1 kilometer) by default.
    - `depthNear` {{Optional_Inline}}: A floating-point value indicating the distance in meters from the viewer to a plane parallel to the display surface to be the **near clip plane**. No part of the scene on the viewer's side of this plane will be rendered. This is 0.1 meters (10 centimeters) by default.
    - `inlineVerticalFieldOfView` {{Optional_Inline}}: A floating-point value indicating the default field of view, in radians, to be used when computing the projection matrix for an `inline` {{domxref("XRSession")}}. The projection matrix calculation also takes into account the output canvas's {{glossary("aspect ratio")}}. This property _must not_ be specified for immersive sessions, so the value is `null` by default for immersive sessions. The default value is otherwise π \* 0.5 (half of the value of pi).
    - `layers` {{Optional_Inline}}: An ordered array of {{domxref("XRLayer")}} objects specifying the layers that should be presented to the XR device. Setting `layers` will override the `baseLayer` if one is present, with `baseLayer` reporting `null`. The order of the layers given is "back-to-front". For alpha blending of layers, see the {{domxref("XRCompositionLayer.blendTextureSourceAlpha")}} property.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}

  - : Thrown in any of the following situations:
    - The {{domxref("XRSession")}} has already ended, so you cannot change its render state.
    - The `baseLayer` was created by an `XRSession` other than the one on which `updateRenderState()` was called.
    - The `inlineVerticalFieldOfView` option was set, but the session is immersive, and therefore, does not allow this property to be used.

- `NotSupportedError` {{domxref("DOMException")}}

  - : Thrown in any of the following situations:
    - The `layers` option is used in a session that has been created without the `layers` feature.
    - Both the `baseLayer` and `layers` options are specified.

- {{jsxref("TypeError")}}
  - : Thrown if the `layers` option contains duplicate instances.

## Examples

### Adding a `baseLayer`

This example creates a WebGL context that is compatible with an immersive XR device and then uses it to create an {{DOMxRef("XRWebGLLayer")}}. The method `updateRenderState()` is then called to associate the new `XRWebGLLayer`.

```js
function onXRSessionStarted(xrSession) {
  let glCanvas = document.createElement("canvas");
  let gl = glCanvas.getContext("webgl", { xrCompatible: true });

  loadWebGLResources();

  xrSession.updateRenderState({
    baseLayer: new XRWebGLLayer(xrSession, gl),
  });
}
```

### Setting the `layers` array

To use WebXR layers, the XR session needs to be created with the `layers` feature descriptor (see {{domxref("XRSystem.requestSession()")}}). You can then create various WebXR layers such as

- {{domxref("XREquirectLayer")}}
- {{domxref("XRCubeLayer")}}
- {{domxref("XRCylinderLayer")}}
- {{domxref("XRQuadLayer")}}

Other layers, such as {{domxref("XRProjectionLayer")}} or {{domxref("XRWebGLLayer")}} are also available.

Layers will be presented in the order they are given in the `layers` array, with layers being given in "back-to-front" order.

```js
const xrSession = navigator.xr.requestSession("immersive-ar", {
  optionalFeatures: ["layers"],
});

function onXRSessionStarted(xrSession) {
  const glCanvas = document.createElement("canvas");
  const gl = glCanvas.getContext("webgl", { xrCompatible: true });
  const xrGlBinding = new XRWebGLBinding(xrSession, gl);
  const projectionLayer = new XRWebGLLayer(xrSession, gl);
  const quadLayer = xrGlBinding.createQuadLayer({
    pixelWidth: 1024,
    pixelHeight: 1024,
  });

  xrSession.updateRenderState({
    layers: [projectionLayer, quadLayer],
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
- {{domxref("XRRenderState")}}
- {{domxref("XRSession.renderState")}}
