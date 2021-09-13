---
title: VRDisplay.getFrameData()
slug: Web/API/VRDisplay/getFrameData
tags:
  - API
  - Experimental
  - Method
  - Reference
  - VR
  - VRDisplay
  - Virtual Reality
  - WebVR
  - getFrameData
browser-compat: api.VRDisplay.getFrameData
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}

The **`getFrameData()`** method of the {{domxref("VRDisplay")}} interface accepts a {{domxref("VRFrameData")}} object and populates it with the information required to render the current frame.

> **Note:** This method was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

This includes the {{domxref("VRPose")}} and view and projection matrices for the current frame.

## Syntax

```js
vrDisplayInstance.getFrameData(frameData);
```

### Parameters

- frameData
  - : The {{domxref("VRFrameData")}} object you want to populate.

### Return value

A boolean value — a value of `true` is returned if the {{domxref("VRFrameData")}} object was successfully populated, or `false` if it wasn't.

## Examples

```js
var frameData = new VRFrameData();
var vrDisplay;

navigator.getVRDisplays().then(function(displays) {
  vrDisplay = displays[0];
  console.log('Display found');
  // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
  btn.addEventListener('click', function() {
    vrDisplay.requestPresent([{ source: canvas }]).then(function() {
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

  // You can get the position, orientation, etc. of the display from the current frame's pose
  // curFramePose is a VRPose object
  var curFramePose = frameData.pose;
  var curPos = curFramePose.position;
  var curOrient = curFramePose.orientation;

  // Clear the canvas before we start drawing on it.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // WebVR: Create the required projection and view matrix locations needed
  // for passing into the uniformMatrix4fv methods below

  var projectionMatrixLocation = gl.getUniformLocation(shaderProgram, "projMatrix");
  var viewMatrixLocation = gl.getUniformLocation(shaderProgram, "viewMatrix");

  // WebVR: Render the left eye’s view to the left half of the canvas
  gl.viewport(0, 0, canvas.width * 0.5, canvas.height);
  gl.uniformMatrix4fv(projectionMatrixLocation, false, frameData.leftProjectionMatrix);
  gl.uniformMatrix4fv(viewMatrixLocation, false, frameData.leftViewMatrix);
  drawGeometry();

  // WebVR: Render the right eye’s view to the right half of the canvas
  gl.viewport(canvas.width * 0.5, 0, canvas.width * 0.5, canvas.height);
  gl.uniformMatrix4fv(projectionMatrixLocation, false, frameData.rightProjectionMatrix);
  gl.uniformMatrix4fv(viewMatrixLocation, false, frameData.rightViewMatrix);
  drawGeometry();

  function drawGeometry() {
    // draw the view for each eye
  }

    ...

  // WebVR: Indicate that we are ready to present the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

> **Note:** You can see this complete code at [raw-webgl-example](https://github.com/mdn/webvr-tests/blob/master/raw-webgl-example/webgl-demo.js).

## Specifications

This method was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/oculus-browser/browser-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
