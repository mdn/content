---
title: "VRDisplay: getPose() method"
short-title: getPose()
slug: Web/API/VRDisplay/getPose
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.VRDisplay.getPose
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`getPose()`** method of the {{domxref("VRDisplay")}} interface returns a {{domxref("VRPose")}} object defining the future predicted pose of the `VRDisplay` as it will be when the current frame is actually presented.

> **Note:** This method was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).
>
> It was even deprecated there — instead, you should use {{domxref("VRDisplay.getFrameData()")}}, which also provides a {{domxref("VRPose")}} object.

## Syntax

```js-nolint
getPose()
```

### Parameters

None.

### Return value

A {{domxref("VRPose")}} object.

## Examples

Once we have a reference to a {{domxref("VRDisplay")}} object, we can retrieve the {{domxref("VRPose")}} representing the current pose of the display.

```js
if (navigator.getVRDisplays) {
  console.log("WebVR 1.1 supported");
  // Then get the displays attached to the computer
  navigator.getVRDisplays().then((displays) => {
    // If a display is available, use it to present the scene
    if (displays.length > 0) {
      vrDisplay = displays[0];
      console.log("Display found");

      // Return the current VRPose object for the display
      const pose = vrDisplay.getPose();

      // …
    }
  });
}
```

It is however recommended that you use the non-deprecated {{domxref("VRFrameData.pose", "pose")}} property of the {{domxref("VRFrameData")}} object (retrieved via {{domxref("VRDisplay.getFrameData()")}}) to retrieve the current pose for each frame before it is submitted to the display to be presented. This happens on each iteration of the rendering loop for your app, so you can be sure the pose data is current.

## Specifications

This method was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
