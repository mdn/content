---
title: VRDisplay
slug: Web/API/VRDisplay
page-type: web-api-interface
status:
  - deprecated
  - non-standard
browser-compat: api.VRDisplay
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`VRDisplay`** interface of the [WebVR API](/en-US/docs/Web/API/WebVR_API) represents any VR device supported by this API. It includes generic information such as device IDs and descriptions, as well as methods for starting to present a VR scene, retrieving eye parameters and display capabilities, and other important functionality.

> **Note:** This interface was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

An array of all connected VR Devices can be returned by invoking the {{domxref("Navigator.getVRDisplays()")}} method.

## Instance properties

- {{domxref("VRDisplay.capabilities")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns a {{domxref("VRDisplayCapabilities")}} object that indicates the various capabilities of the `VRDisplay`.
- {{domxref("VRDisplay.depthFar")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gets and sets the z-depth defining the far plane of the [eye view frustum](https://en.wikipedia.org/wiki/Viewing_frustum), i.e. the furthest viewable boundary of the scene.
- {{domxref("VRDisplay.depthNear")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gets and sets the z-depth defining the near plane of the [eye view frustum](https://en.wikipedia.org/wiki/Viewing_frustum), i.e. the nearest viewable boundary of the scene.
- {{domxref("VRDisplay.displayId")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns an identifier for this particular VRDisplay, which is also used as an association point in the [Gamepad API](/en-US/docs/Web/API/Gamepad_API) (see {{domxref("Gamepad.displayId")}}).
- {{domxref("VRDisplay.displayName")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns a human-readable name to identify the `VRDisplay`.
- {{domxref("VRDisplay.isConnected")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns a boolean value indicating whether the `VRDisplay` is connected to the computer.
- {{domxref("VRDisplay.isPresenting")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns a boolean value indicating whether the `VRDisplay` is currently having content presented through it.
- {{domxref("VRDisplay.stageParameters")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns a {{domxref("VRStageParameters")}} object containing room-scale parameters, if the `VRDisplay` is capable of supporting room-scale experiences.

## Instance methods

- {{domxref("VRDisplay.getEyeParameters()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns the {{domxref("VREyeParameters")}} object containing the eye parameters for the specified eye.
- {{domxref("VRDisplay.getFrameData()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Accepts a {{domxref("VRFrameData")}} object and populates it with the information required to render the current frame.
- {{domxref("VRDisplay.getImmediatePose()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns a {{domxref("VRPose")}} object defining the current pose of the `VRDisplay`, with no prediction applied. This is no longer needed, and has been removed from the spec.
- {{domxref("VRDisplay.getLayers()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns the layers currently being presented by the `VRDisplay`.
- {{domxref("VRDisplay.getPose()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns a {{domxref("VRPose")}} object defining the future predicted pose of the `VRDisplay` as it will be when the current frame is actually presented. **This method is deprecated — instead, you should use {{domxref("VRDisplay.getFrameData()")}}, which also provides a {{domxref("VRPose")}} object.**
- {{domxref("VRDisplay.resetPose()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Resets the pose for this `VRDisplay`, treating its current {{domxref("VRPose.position")}} and {{domxref("VRPose.orientation")}} as the "origin/zero" values.
- {{domxref("VRDisplay.cancelAnimationFrame()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A special implementation of {{domxref("Window.cancelAnimationFrame")}} that allows callbacks registered with {{domxref("VRDisplay.requestAnimationFrame()")}} to be unregistered.
- {{domxref("VRDisplay.requestAnimationFrame()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A special implementation of {{domxref("Window.requestAnimationFrame")}} containing a callback function that will be called every time a new frame of the `VRDisplay` presentation is rendered.
- {{domxref("VRDisplay.requestPresent()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Starts the `VRDisplay` presenting a scene.
- {{domxref("VRDisplay.exitPresent()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Stops the `VRDisplay` presenting a scene.
- {{domxref("VRDisplay.submitFrame()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Captures the current state of the {{domxref("VRLayerInit")}} currently being presented and displays it on the `VRDisplay`.

## Examples

```js
if (navigator.getVRDisplays) {
  console.log("WebVR 1.1 supported");
  // Then get the displays attached to the computer
  navigator.getVRDisplays().then((displays) => {
    // If a display is available, use it to present the scene
    if (displays.length > 0) {
      vrDisplay = displays[0];
      // Now we have our VRDisplay object and can do what we want with it
    }
  });
}
```

> **Note:** You can see this complete code at [raw-webgl-example](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js).

## Specifications

This interface was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplay) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
