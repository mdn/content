---
title: XRSession.updateRenderState()
slug: Web/API/XRSession/updateRenderState
tags:
  - API
  - AR
  - Augmented Reality
  - Experimental
  - Method
  - Reference
  - Update
  - VR
  - Virtual Reality
  - WebXR
  - WebXR Device API
  - XR
  - XRSession
  - render
  - state
  - updateRenderState()
browser-compat: api.XRSession.updateRenderState
---
{{APIRef("WebXR Device API")}}

The `updateRenderState()` method of the
{{DOMxRef("XRSession")}} interface of [WebXR
API](/en-US/docs/Web/API/WebXR_Device_API) schedules changes to be applied to the active render state prior to
rendering of the next frame.

## Syntax

```js
xrSession.updateRenderState(newState)
```

### Parameters

- `newState`
  - : An object specifying the properties of the session's
    {{domxref("XRSession.renderState", "renderState")}} to update before rendering the next frame.

The specified object may have any combination of the following properties:

- `baseLayer` {{optional_inline}}
  - : An {{domxref("XRWebGLLayer")}} object from which the WebXR compositor will obtain imagery. This is `null` by default.
- `depthFar` {{optional_inline}}
  - : A floating-point value specifying the distance in meters from the viewer to the **far clip plane**, which is a plane parallel to the display surface beyond which no further rendering will occur. All rendering will take place between the distances specified by `depthNear` and `depthFar`. This is 1000 meters (1 kilometer) by default.
- `depthNear` {{optional_inline}}
  - : A floating-point value indicating the distance in meters from the viewer to a plane parallel to the display surface to be the **near clip plane**. No part of the scene on the viewer's side of this plane will be rendered. This is 0.1 meters (10 centimeters) by default.
- `inlineVerticalFieldOfView` {{optional_inline}}
  - : A floating-point value indicating the default field of view, in radians, to be used when computing the projection matrix for an `inline` {{domxref("XRSession")}}. The projection matrix calculation also takes into account the output canvas's aspect ratio. This property _must not_ be specified for immersive sessions, so the value is `null` by default for immersive sessions. The default value is otherwise π \* 0.5 (half of the value of pi).

### Return value

None.

### Exceptions

This method may throw any of the following exceptions. These are true exceptions, since
this method does not return a promise.

- `InvalidStateError`

  - : This may occur for one of the following reasons:

    - The {{domxref("XRSession")}} has already ended, so you cannot change its render
      state.
    - The `baseLayer` specified
      in `newState` was created by an `XRSession` other than the
      one on which `updateRenderState()` was called.
    - The `inlineVerticalFieldOfView` property was set, but the session is immersive and
      therefore does not allow this property to be used.

## Examples

This example creates a WebGL context that is compatible with an immersive XR device and
then uses it to create an
{{DOMxRef("XRWebGLLayer")}}. `updateRenderState()` is then called to
associate the new `XRWebGLLayer`.

```js
function onXRSessionStarted(xrSession) {
  let glCanvas = document.createElement("canvas");
  let gl = glCanvas.getContext("webgl", { xrCompatible: true });

  loadWebGLResources();

  xrSession.updateRenderState({ baseLayer: new XRWebGLLayer(xrSession, gl) });
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
