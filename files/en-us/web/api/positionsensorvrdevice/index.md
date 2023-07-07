---
title: PositionSensorVRDevice
slug: Web/API/PositionSensorVRDevice
page-type: web-api-interface
status:
  - deprecated
  - non-standard
browser-compat: api.PositionSensorVRDevice
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`PositionSensorVRDevice`** interface of the [WebVR API](/en-US/docs/Web/API/WebVR_API) represents VR hardware's position sensor. You can access information such as the current position and orientation of the sensor in relation to the head mounted display through the {{domxref("PositionSensorVRDevice.getState()")}} method.

## Instance methods

- {{domxref("PositionSensorVRDevice.getState()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns the current state of the position sensor for the current frame (e.g. within the current {{domxref("window.requestAnimationFrame")}} callback) or for the previous frame, contained with a {{domxref("VRPose")}} object. This is the method you'd normally want to use, versus `getImmediateState()`.
- {{domxref("PositionSensorVRDevice.getImmediateState()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns the current instantaneous position sensor state. This is intended to only be used rarely, for certain special uses, for example sampling the immediate position of a hand orientation sensor — or at least it will be, in the future.
- {{domxref("PositionSensorVRDevice.resetSensor()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : _Can be used to reset the sensor if desired, returning the_ position and orientation values to zero.

## Instance properties

_This interface doesn't define any properties of its own, but it does inherit the properties of its parent interface, {{domxref("VRDisplay")}}._

- {{domxref("VRDisplay.hardwareUnitId")}} {{ReadOnlyInline}}
  - : Returns the distinct hardware ID for the overall hardware unit that this `VRDevice` is a part of. All devices that are part of the same physical piece of hardware will have the same `hardwareUnitId`.
- {{domxref("VRDisplay.displayId")}} {{ReadOnlyInline}}
  - : Returns the ID for this specific `VRDevice`. The ID shouldn't change across browser restarts, allowing configuration data to be saved based on it.
- {{domxref("VRDisplay.displayName")}} {{ReadOnlyInline}}
  - : A human-readable name to identify the `VRDevice`.

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

Here we are grabbing a {{domxref("VRPose")}} object using {{domxref("PositionSensorVRDevice.getState()")}} and storing it in `posState`. We then check to make sure that position and orientation info is present in the current frame using {{domxref("VRPose.hasPosition")}} and {{domxref("VRPose.hasOrientation")}} (these return `null` if, for example the head mounted display is turned off or not pointing at the position sensor, which would cause an error.)

We then output the x, y and z position and orientation values for informational purposes, and use those values to update the `xPos`, `yPos`, `zPos`, `xOrient`, `yOrient`, and `zOrient` variables, which are used to update the scene rendering on each frame.

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API).
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
