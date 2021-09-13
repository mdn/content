---
title: VRDisplay.depthNear
slug: Web/API/VRDisplay/depthNear
tags:
  - API
  - Experimental
  - Property
  - Reference
  - VR
  - VRDisplay
  - Virtual Reality
  - WebVR
  - depthNear
browser-compat: api.VRDisplay.depthNear
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}

The **`depthNear`** property of the {{domxref("VRDisplay")}} interface gets and sets the z-depth defining the near plane of the [eye view frustum](https://en.wikipedia.org/wiki/Viewing_frustum), i.e. the nearest viewable boundary of the scene.

> **Note:** This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

Generally you should leave the value as is, but you might want to increase it if you are trying to improve performance on slower computers, and/or your UI makes sense with the near boundary made further away.

## Syntax

```js
var mydepthNear = vrDisplayInstance.depthNear;

vrDisplayInstance.depthNear = 1.0;
```

### Value

A double, representing the z-depth in meters; its initial value is `0.01`.

## Examples

```js
var vrDisplay;

navigator.getVRDisplays().then(function(displays) {
  vrDisplay = displays[0];
  vrDisplay.depthNear = 1.0;
  vrDisplay.depthFar = 7500.0;
});
```

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/oculus-browser/browser-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
