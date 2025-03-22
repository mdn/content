---
title: "PositionSensorVRDevice: getImmediateState() method"
short-title: getImmediateState()
slug: Web/API/PositionSensorVRDevice/getImmediateState
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.PositionSensorVRDevice.getImmediateState
---

{{deprecated_header}}{{APIRef("WebVR API")}}{{Non-standard_header}}

The **`getImmediateState()`** method of the {{domxref("VRDisplay")}} interface returns the current instantaneous position sensor state. This is intended to only be used rarely, for certain special uses, for example sampling the immediate position of a hand orientation sensor — or at least it will be, in the future.

For most standard uses, you'll probably want to use {{domxref("PositionSensorVRDevice.getState")}} instead.

## Syntax

```js-nolint
getImmediateState()
```

### Parameters

None.

### Return value

A {{domxref("VRPose")}} object.

## Examples

The following demo uses the WebVR API to update the view of a simple {{domxref("CanvasRenderingContext2D")}} scene on each frame of a {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} loop. The main function that updates the view data is as follows:

```js
function setView() {
  const posState = gPositionSensor.getImmediateState();
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

Here we are grabbing a {{domxref("VRPose")}} object using `getImmediateState()` and storing it in `posState` (the actual live demo uses `getState()`, but both seem to do the same thing currently.) We then check to make sure that position and orientation info is present in the current frame using {{domxref("VRPose.position")}} and {{domxref("VRPose.orientation")}} (these return `null` if, for example the head mounted display is turned off or not pointing at the position sensor, which would cause an error.)

We then output the x, y and z position and orientation values for informational purposes, and use those values to update the `xPos`, `yPos`, `zPos`, `xOrient`, `yOrient`, and `zOrient` variables, which are used to update the scene rendering on each frame.

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
