---
title: XRLightProbe
slug: Web/API/XRLightProbe
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - WebXR
  - XR
  - AR
  - VR
  - Experimental
browser-compat: api.XRLightProbe
---
{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

The **`XRLightProbe`** interface of the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) contains lighting information at a given point in the user's environment. You can get an `XRLighting` object using the {{domxref("XRSession.requestLightProbe()")}} method.

This object doesn't itself contain lighting values, but it is used to collect lighting states for each {{domxref("XRFrame")}}. See {{domxref("XRLightEstimate")}} for the estimated lighting values for an `XRLightProbe`.

{{InheritanceDiagram}}

## Properties

- `XRLightProbe.onreflectionchange`
  - : Event handler property for the {{domxref("XRLightProbe.reflectionchange_event", "reflectionchange")}} event.
- {{domxref("XRLightProbe.probeSpace")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : An {{domxref("XRSpace")}} tracking the position and orientation the lighting estimations are relative to.

## Methods

None.

## Events

- {{domxref("XRLightProbe.reflectionchange_event", "reflectionchange")}} {{Experimental_Inline}}
  - : Fired each time the estimated reflection cube map changes. (This happens when the user moves around and the environment's lighting changes.)

## Examples

### Getting an `XRLightProbe` object for a session

Use the {{domxref("XRSession.requestLightProbe()")}} method to get a light probe.

```js
const lightProbe = await xrSession.requestLightProbe();
```

### Getting a probe pose within an `XRFrame`

Pass the light probe's `probeSpace` to {{domxref("XRFrame.getPose()")}} to get a light probe for a pose.

```js
const probePose = xrFrame.getPose(lightProbe.probeSpace, xrReferenceSpace);
```

### Using the `reflectionchange` event

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
