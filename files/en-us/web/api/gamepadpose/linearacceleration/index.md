---
title: GamepadPose.linearAcceleration
slug: Web/API/GamepadPose/linearAcceleration
tags:
  - API
  - Experimental
  - Gamepad API
  - GamepadPose
  - Property
  - Reference
  - Virtual Reality
  - WebVR
  - linearAcceleration
browser-compat: api.GamepadPose.linearAcceleration
---
{{APIRef("WebVR API")}}{{SeeCompatTable}}

The **`linearAcceleration`** read-only property of the {{domxref("GamepadPose")}} interface returns an array representing the linear acceleration vector of the {{domxref("Gamepad")}}, in meters per second per second.

In other words, the current acceleration of the sensor, along the `x`, `y`, and `z` axes.

## Syntax

```js
var myGamepadLinAcc = gamepadPoseInstance.linearAcceleration;
```

### Value

A {{jsxref("Float32Array")}}, or `null` if the gamepad is not able to provide linear acceleration data.

## Examples

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
