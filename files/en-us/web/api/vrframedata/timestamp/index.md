---
title: "VRFrameData: timestamp property"
short-title: timestamp
slug: Web/API/VRFrameData/timestamp
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.VRFrameData.timestamp
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`timestamp`** read-only property of the {{domxref("VRFrameData")}} interface returns a constantly increasing timestamp value representing the time a frame update occurred.

> **Note:** This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

Timestamps are useful for determining if position state data has been updated from the hardware. Since values are monotonically increasing, they can be compared to determine the ordering of updates — newer values will always be greater than or equal to older values.

The timestamp starts at 0 the first time {{domxref("VRDisplay.getFrameData()")}} is invoked for a given {{domxref("VRDisplay")}}.

## Value

A {{domxref("DOMHighResTimeStamp")}} object.

## Examples

```js
const frameData = new VRFrameData();
let vrDisplay;

navigator.getVRDisplays().then((displays) => {
  vrDisplay = displays[0];
  console.log("Display found");
  // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
  btn.addEventListener("click", () => {
    vrDisplay.requestPresent([{ source: canvas }]).then(() => {
      drawVRScene();
    });
  });
});

// WebVR: Draw the scene for the WebVR display.
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);

  // Populate frameData with the data of the next frame to display
  vrDisplay.getFrameData(frameData);

  // grab the current timestamp on each run of the rendering loop
  // and do something with it
  framedata.timestamp;

  // …

  // WebVR: Indicates that we are ready to present the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

## Specifications

This property was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
