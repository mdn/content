---
title: 'XRLightProbe: reflectionchange event'
slug: Web/API/XRLightProbe/reflectionchange_event
tags:
  - API
  - AR
  - Augmented Reality
  - Experimental
  - Event
  - Reference
  - VR
  - WebXR
  - WebXR Device API
browser-compat: api.XRLightProbe.reflectionchange_event
---
{{APIRef("WebXR Device API")}}

The WebXR **`reflectionchange`** event is sent to an {{domxref("XRLightProbe")}} fires each time the estimated reflection cube map has changed (happens when the user moves around and the environment's lighting changes).

<table class="properties">
  <tbody>
    <tr>
      <th>Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>{{domxref("XRLightProbe.onreflectionchange", "onreflectionchange")}}</td>
    </tr>
  </tbody>
</table>


## Examples

You can pass an `XRLightProbe` to get a reflection cube map whenever the `reflectionchange` event fires to retrieve an updated cube map. This is less expensive than retrieving lighting information with every {{domxref("XRFrame")}}. See also {{domxref("XRWebGLBinding.getReflectionCubeMap()")}}.

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

- {{domxref("EventTarget.addEventListener", "addEventListener()")}}
- {{domxref("XRLightProbe.onreflectionchange")}}
