---
title: "GamepadPose: linearAcceleration property"
short-title: linearAcceleration
slug: Web/API/GamepadPose/linearAcceleration
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GamepadPose.linearAcceleration
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

The **`linearAcceleration`** read-only property of the {{domxref("GamepadPose")}} interface returns an array representing the linear acceleration vector of the {{domxref("Gamepad")}}, in meters per second per second.

In other words, the current acceleration of the sensor, along the `x`, `y`, and `z` axes.

## Value

A {{jsxref("Float32Array")}}, or `null` if the gamepad is not able to provide linear acceleration data.

## Examples

### Reading the linear acceleration

Run this code before connecting a WebVR controller, then connect the controller and press a button to make it available to the page. The event supplies the {{domxref("Gamepad")}}. The output depends on the controller and its current pose.

```js
window.addEventListener("gamepadconnected", (event) => {
  const pose = event.gamepad.pose;
  if (!pose || !pose.linearAcceleration) {
    return;
  }

  console.log(pose.linearAcceleration); // e.g., [0, 0, 0]
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
