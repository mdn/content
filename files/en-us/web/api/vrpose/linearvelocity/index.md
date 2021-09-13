---
title: VRPose.linearVelocity
slug: Web/API/VRPose/linearVelocity
tags:
  - API
  - Experimental
  - Property
  - Reference
  - VR
  - VRPose
  - Virtual Reality
  - WebVR
  - linearVelocity
browser-compat: api.VRPose.linearVelocity
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}

The **`linearVelocity`** read-only property of the {{domxref("VRPose")}} interface returns an array representing the linear velocity vector of the {{domxref("VRDisplay")}} at the current {{domxref("VRPose.timestamp")}}, in meters per second.

> **Note:** This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

In other words, the current velocity at which the sensor is moving along the `x`, `y`, and `z` axes.

## Syntax

```js
var myLinearVelocity = VRPose.linearVelocity;
```

### Value

A {{jsxref("Float32Array")}}, or `null` if the VR sensor is not able to provide linear velocity data.

## Examples

```js
// rendering loop for a VR scene
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);

  // Populate frameData with the data of the next frame to display
  vrDisplay.getFrameData(frameData);

  // Retrieve the linear velocity values for use in rendering
  // curFramePose is a VRPose object
  var curFramePose = frameData.pose;
  var linVel = curFramePose.linearVelocity;
  var lvx = linVel[0];
  var lvy = linVel[1];
  var lvz = linVel[2];

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
