---
title: VRPose.hasOrientation
slug: Web/API/VRPose/hasOrientation
tags:
  - API
  - Deprecated
  - Property
  - Reference
  - VR
  - VRPositionState
  - Virtual Reality
  - WebVR
  - hasOrientation
browser-compat: api.VRPose.hasOrientation
---
{{deprecated_header}}{{APIRef("WebVR API")}}

The **`hasOrientation`** read-only property of the {{domxref("VRPose")}} interface returns a boolean indicating whether the {{domxref("VRPose.orientation")}} property is valid (i.e. if the hardware is currently registering a valid orientation). If it is `false`, the orientation property will return `null`.

> **Note:** This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

## Value

A boolean value.

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/oculus-browser/browser-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API).
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
