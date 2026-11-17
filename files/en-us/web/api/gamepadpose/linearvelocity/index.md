---
title: "GamepadPose: linearVelocity property"
short-title: linearVelocity
slug: Web/API/GamepadPose/linearVelocity
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GamepadPose.linearVelocity
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

The **`linearVelocity`** read-only property of the {{domxref("GamepadPose")}} interface returns an array representing the linear velocity vector of the {{domxref("Gamepad")}}, in meters per second.

In other words, the current velocity at which the sensor is moving along the `x`, `y`, and `z` axes.

## Value

A {{jsxref("Float32Array")}}, or `null` if the gamepad is not able to provide linear velocity data.

## Examples

### Reading the linear velocity

Run this code before connecting a WebVR controller, then connect the controller and press a button to make it available to the page. The event supplies the {{domxref("Gamepad")}}. The output depends on the controller and its current pose.

```js
window.addEventListener("gamepadconnected", (event) => {
  const pose = event.gamepad.pose;
  if (!pose || !pose.linearVelocity) {
    return;
  }

  console.log(pose.linearVelocity); // e.g., [0, 0, 0]
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
