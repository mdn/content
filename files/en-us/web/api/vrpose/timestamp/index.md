---
title: VRPose.timestamp
slug: Web/API/VRPose/timeStamp
page-type: web-api-instance-property
tags:
  - API
  - Deprecated
  - Property
  - Reference
  - VR
  - VRPose
  - Virtual Reality
  - WebVR
  - timeStamp
  - Non-standard
browser-compat: api.VRPose.timestamp
---
{{Deprecated_Header}}{{APIRef("WebVR API")}}{{Non-standard_Header}}

The **`timestamp`** read-only property of the {{domxref("VRPose")}} interface returns the current time stamp of the system — a monotonically increasing value representing the time since the current app was started.

> **Note:** This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

This property is useful for determining if position data has been updated, and what order updates have occurred in.

> **Warning:** This version of `timestamp` has been removed from the spec — instead, timestamps are returned when {{domxref("VRDisplay.getFrameData()")}} is called — see {{domxref("VRFrameData.timestamp")}}.

## Value

A {{domxref("DOMHighResTimeStamp")}} representing the timestamp, in seconds.

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API).
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
