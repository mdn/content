---
title: XRLightProbe
slug: Web/API/XRLightProbe
tags:
  - API
  - Interface
  - Reference
  - WebXR
  - XR
  - AR
  - VR
browser-compat: api.XRLightProbe
---
{{APIRef("WebXR Device API")}} {{secureContext_header}}

The **`XRLightProbe`** interface contains lighting information at a given point in the user's environment. You can get an `XRLighting` object using the {{domxref("XRSession.requestLightProbe()")}} method.

This object doesn't itself contain lighting values, but it is used to collect lighting state for each {{domxref("XRFrame")}}. See {{domxref("XRLightEstimate")}} for the estimated lighting values for an `XRLightProbe`.

## Properties

- {{domxref("XRLightProbe.onreflectionchange")}}
  - : Event handler property for the {{domxref("XRLightProbe.reflectionchange_event", "reflectionchange")}} event.
- {{domxref("XRLightProbe.probeSpace")}} {{ReadOnlyInline}}
  - : An {{domxref("XRSpace")}} tracking the position and orientation the lighting estimations are being generated relative to.

## Methods

None.

## Events

- {{domxref("XRLightProbe.reflectionchange_event", "reflectionchange")}}
  - : Fired each time the estimated reflection cube map has changed (happens when the user moves around and the environment's lighting changes).

## Examples

Typical use cases of the `XRLightProbe` interface:

Get an `XRLightProbe` object for a session.

```js
const lightProbe = await xrSession.requestLightProbe();
```

Use `probeSpace` for getting a probe pose within an {{domxref("XRFrame")}}.

```js
const probePose = xrFrame.getPose(lightProbe.probeSpace, xrReferenceSpace);
```

Pass `XRLightProbe` to get a reflection cube map whenever the {{domxref("XRLightProbe.reflectionchange_event", "reflectionchange")}} event fires. See also {{domxref("XRWebGLBinding.getReflectionCubeMap()")}}.

```js
const glBinding = new XRWebGLBinding(xrSession, gl);
const lightProbe = await xrSession.requestLightProbe();
let glCubeMap = glBinding.getReflectionCubeMap(lightProbe);

lightProbe.addEventListener('reflectionchange', () => {
  glCubeMap = glBinding.getReflectionCubeMap(lightProbe);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRSession.requestLightProbe()")}}
