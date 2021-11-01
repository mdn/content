---
title: Navigator.activeVRDisplays
slug: Web/API/Navigator/activeVRDisplays
tags:
  - API
  - Experimental
  - HTML DOM
  - Navigator
  - Property
  - Reference
  - VR
  - Virtual Reality
  - WebVR
  - activeVRDisplays
browser-compat: api.Navigator.activeVRDisplays
---
{{securecontext_header}}{{DefaultAPISidebar("WebVR API")}}{{deprecated_header}}

The **`activeVRDisplays`** read-only property of the
{{domxref("Navigator")}} interface returns an array containing every
{{domxref("VRDisplay")}} object that is currently presenting
({{domxref("VRDisplay.ispresenting")}} is `true`).

> **Note:** This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

## Syntax

```js
var myActiveDisplays = navigator.activeVRDisplays;
```

### Value

An array of {{domxref("VRDisplay")}} objects.

## Examples

```js
function showActive() {
  var displays = navigator.activeVRDisplays;
  for(var i = 0; i < displays.length; i++) {
    console.log('Display ' + displays[i].displayId + ' is active.');
  }
}
```

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/oculus-browser/browser-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> —
  demos, downloads, and other resources from the Mozilla VR team.
