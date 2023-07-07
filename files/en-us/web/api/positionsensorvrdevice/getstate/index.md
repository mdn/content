---
title: "PositionSensorVRDevice: getState() method"
short-title: getState()
slug: Web/API/PositionSensorVRDevice/getState
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.PositionSensorVRDevice.getState
---

{{deprecated_header}}{{APIRef("WebVR API")}}{{Non-standard_header}}

The **`getState()`** method of the {{domxref("PositionSensorVRDevice")}} interface returns the current state of the position sensor for the current frame (e.g. within the current {{domxref("window.requestAnimationFrame")}} callback) or for the previous frame, contained with a {{domxref("VRPose")}} object. This is the method you'd normally want to use, vs. {{domxref("PositionSensorVRDevice.getImmediateState")}}.

## Syntax

```js-nolint
getState()
```

### Parameters

None.

### Return value

A {{domxref("VRPose")}} object.

## Examples

The following example uses the WebVR API to update the view of a simple {{domxref("CanvasRenderingContext2D","2D canvas")}} scene on each frame of a {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} loop.

```js
function setView() {
  const posState = gPositionSensor.getState();
  if (posState.hasPosition) {
    posPara.textContent = `Position: x${roundToTwo(
      posState.position.x,
    )} y${roundToTwo(posState.position.y)} z${roundToTwo(posState.position.z)}`;
    xPos = -posState.position.x * WIDTH * 2;
    yPos = posState.position.y * HEIGHT * 2;
    zPos = -posState.position.z > 0.01 ? -posState.position.z : 0.01;
  }

  if (posState.hasOrientation) {
    orientPara.textContent = `Orientation: x${roundToTwo(
      posState.orientation.x,
    )} y${roundToTwo(posState.orientation.y)} z${roundToTwo(
      posState.orientation.z,
    )}`;
    xOrient = posState.orientation.x * WIDTH;
    yOrient = -posState.orientation.y * HEIGHT * 2;
    zOrient = posState.orientation.z * 180;
  }
}
```

Here we are grabbing a {{domxref("VRPose")}} object using `getState()` and storing it in `posState`. We then check to make sure that position and orientation info is present in the current frame using {{domxref("VRPose.hasPosition")}} and {{domxref("VRPose.hasOrientation")}} (these return `null` if, for example the head mounted display is turned off or not pointing at the position sensor, which would cause an error.)

We then output the x, y and z position and orientation values for informational purposes, and use those values to update the `xPos`, `yPos`, `zPos`, `xOrient`, `yOrient`, and `zOrient` variables, which are used to update the scene rendering on each frame.

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API).
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
