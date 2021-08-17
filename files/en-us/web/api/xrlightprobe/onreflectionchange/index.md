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

### Value

A function to be invoked whenever the {{domxref("XRLightProbe")}} receives a {{domxref("XRLightProbe.reflectionchange_event", "reflectionchange")}} event.

## Examples


```js
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
