---
title: VRPose.position
slug: Web/API/VRPose/position
page-type: web-api-instance-property
tags:
  - API
  - Deprecated
  - Position
  - Property
  - Reference
  - VR
  - VRPose
  - Virtual Reality
  - WebVR
  - Non-standard
browser-compat: api.VRPose.position
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`position`** read-only property of the {{domxref("VRPose")}} interface returns the position of the {{domxref("VRDisplay")}} at the current {{domxref("VRPose.timestamp")}} as a 3D vector.

> **Note:** This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

The coordinate system is as follows:

- Positive X is to the user's right.
- Positive Y is up.
- Positive Z is behind the user.

Positions are measured in meters from an origin point — this point is either the position the sensor was first read at, or the position of the sensor at the point that {{domxref("VRDisplay.resetPose()")}} was last called.

> **Note:** By default, all positions are given as a sitting space position. Transforming this point with {{domxref("VRStageParameters.sittingToStandingTransform")}} — when you are working with a room display for example — converts this to a standing space position.

## Value

A {{jsxref("Float32Array")}}, or null if the VR sensor is not able to provide position data.

> **Note:** User agents may provide emulated position values through techniques such as neck modeling; when doing so they should still report {{domxref("VRDisplayCapabilities.hasPosition")}} as false.

## Examples

See [`VRDisplay.getFrameData()`](/en-US/docs/Web/API/VRDisplay/getFrameData#examples) for example code.

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
