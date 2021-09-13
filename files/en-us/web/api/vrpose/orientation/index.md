---
title: VRPose.orientation
slug: Web/API/VRPose/orientation
tags:
  - API
  - Experimental
  - Orientation
  - Property
  - Reference
  - VR
  - VRPose
  - Virtual Reality
  - WebVR
browser-compat: api.VRPose.orientation
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}

The **`orientation`** read-only property of the {{domxref("VRPose")}} interface returns the orientation of the sensor at the current {{domxref("VRPose.timestamp")}}, as a quarternion value.

> **Note:** This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

The value is a {{jsxref("Float32Array")}}, made up of the following values:

- pitch — rotation around the X axis.
- yaw — rotation around the Y axis.
- roll — rotation around the Z axis.
- w — the fourth dimension (usually 1).

The orientation yaw (rotation around the y axis) is relative to the initial yaw of the sensor when it was first read or the yaw of the sensor at the point that {{domxref("VRDisplay.resetPose()")}} was last called.

## Syntax

```js
var myOrientation = VRPose.orientation;
```

### Value

A {{jsxref("Float32Array")}}, or `null` if the VR sensor is not able to provide orientation data.

## Examples

See [`VRDisplay.getFrameData()`](/en-US/docs/Web/API/VRDisplay/getFrameData#examples) for example code.

> **Note:** An orientation of `{ x: 0, y: 0, z: 0, w: 1 }` is considered to be "forward".

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/oculus-browser/browser-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
