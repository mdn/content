---
title: "Gamepad: pose property"
short-title: pose
slug: Web/API/Gamepad/pose
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Gamepad.pose
---

{{APIRef("Gamepad")}}{{SeeCompatTable}}

The **`pose`** read-only property of the {{domxref("Gamepad")}} interface returns a {{domxref("GamepadPose")}} object representing the pose information associated with a WebVR controller (e.g., its position and orientation in 3D space).

## Value

A {{domxref("GamepadPose")}} object.

## Examples

### Reading controller pose data

```js
window.addEventListener("gamepadconnected", (event) => {
  const pose = event.gamepad.pose;
  if (!pose) {
    return;
  }

  console.log("Position:", pose.position); // e.g., [0, 0, 0]
  console.log("Orientation:", pose.orientation); // e.g., [0, 0, 0, 1]
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
- [WebVR API](/en-US/docs/Web/API/WebVR_API)
