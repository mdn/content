---
title: "GamepadPose: hasPosition property"
short-title: hasPosition
slug: Web/API/GamepadPose/hasPosition
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GamepadPose.hasPosition
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

The **`hasPosition`** read-only property of the {{domxref("GamepadPose")}} interface returns a boolean value stating whether the {{domxref("Gamepad")}} can track and return position information.

## Value

A boolean value.

## Examples

### Checking position tracking

```js
window.addEventListener("gamepadconnected", (event) => {
  const pose = event.gamepad.pose;
  if (!pose) {
    return;
  }

  if (pose.hasPosition) {
    // Use position for controls
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
