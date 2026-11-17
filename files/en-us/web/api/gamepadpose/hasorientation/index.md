---
title: "GamepadPose: hasOrientation property"
short-title: hasOrientation
slug: Web/API/GamepadPose/hasOrientation
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GamepadPose.hasOrientation
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

The **`hasOrientation`** read-only property of the {{domxref("GamepadPose")}} interface returns a boolean value stating whether the {{domxref("Gamepad")}} can track and return orientation information.

## Value

A boolean value.

## Examples

### Checking orientation tracking

```js
window.addEventListener("gamepadconnected", (event) => {
  const pose = event.gamepad.pose;
  if (!pose) {
    return;
  }

  if (pose.hasOrientation) {
    // Use orientation for controls
  } else {
    // Use some other control mechanism, like thumbstick
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
