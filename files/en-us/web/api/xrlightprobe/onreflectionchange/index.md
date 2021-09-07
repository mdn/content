---
title: XRLightProbe.onreflectionchange
slug: Web/API/XRLightProbe/onreflectionchange
tags:
  - API
  - AR
  - Augmented Reality
  - Experimental
  - Property
  - Event handler
  - Reference
  - VR
  - WebXR
  - WebXR Device API
browser-compat: api.XRLightProbe.onreflectionchange
---
{{APIRef("WebXR Device API")}}

The **`onreflectionchange`** property of the {{DOMxRef("XRLightProbe")}} interface is and event handler for the {{domxref("XRLightProbe.reflectionchange_event", "reflectionchange")}} event.

## Value

A function to be invoked whenever the {{domxref("XRLightProbe")}} receives a {{domxref("XRLightProbe.reflectionchange_event", "reflectionchange")}} event.

## Examples

Whenever the `reflectionchange` event fires on a light probe, you can retrieve an updated cube map by calling {{domxref("XRWebGLBinding.getReflectionCubeMap()")}}. This is less expensive than retrieving lighting information with every {{domxref("XRFrame")}}.

```js
const glBinding = new XRWebGLBinding(xrSession, gl);

lightProbe.onreflectionchange = event => {
  glCubeMap = glBinding.getReflectionCubeMap(lightProbe);
});
```

See the {{domxref("XRLightProbe.reflectionchange_event", "reflectionchange")}} event page for an example using {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRLightProbe.reflectionchange_event", "reflectionchange")}} event
