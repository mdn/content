---
title: VRPose.angularAcceleration
slug: Web/API/VRPose/angularAcceleration
tags:
  - API
  - Experimental
  - Property
  - Reference
  - VR
  - VRPose
  - Virtual Reality
  - WebVR
  - angularAcceleration
browser-compat: api.VRPose.angularAcceleration
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}

The **`angularAcceleration`** read-only property of the {{domxref("VRPose")}} interface returns an array representing the angular acceleration vector of the {{domxref("VRDisplay")}} at the current {{domxref("VRPose.timestamp")}}, in meters per second per second.

> **Note:** This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

In other words, the current acceleration of the sensor's rotation around the `x`, `y`, and `z` axes.

## Syntax

```js
var myAngularAcceleration = VRPose.angularAcceleration;
```

### Value

A {{jsxref("Float32Array")}}, or `null` if the VR sensor is not able to provide angular acceleration information.

## Examples

```js
// rendering loop for a VR scene
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);

  // Populate frameData with the data of the next frame to display
  vrDisplay.getFrameData(frameData);

  // Retrieve the angular acceleration values for use in rendering
  // curFramePose is a VRPose object
  var curFramePose = frameData.pose;
  var angAcc = curFramePose.angularAcceleration;
  var aax = angAcc[0];
  var aay = angAcc[1];
  var aaz = angAcc[2];

  // render the scene
  ...

  // WebVR: submit the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/oculus-browser/browser-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
