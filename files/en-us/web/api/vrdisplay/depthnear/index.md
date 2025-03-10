---
title: "VRDisplay: depthNear property"
short-title: depthNear
slug: Web/API/VRDisplay/depthNear
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.VRDisplay.depthNear
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`depthNear`** property of the {{domxref("VRDisplay")}} interface gets and sets the z-depth defining the near plane of the [eye view frustum](https://en.wikipedia.org/wiki/Viewing_frustum), i.e. the nearest viewable boundary of the scene.

> [!NOTE]
> This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

Generally you should leave the value as is, but you might want to increase it if you are trying to improve performance on slower computers, and/or your UI makes sense with the near boundary made further away.

## Value

A double, representing the z-depth in meters; its initial value is `0.01`.

## Examples

```js
let vrDisplay;

navigator.getVRDisplays().then((displays) => {
  vrDisplay = displays[0];
  vrDisplay.depthNear = 1.0;
  vrDisplay.depthFar = 7500.0;
});
```

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers. Read [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) guide for more information.

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
