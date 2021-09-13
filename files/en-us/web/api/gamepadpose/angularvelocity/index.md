---
title: GamepadPose.angularVelocity
slug: Web/API/GamepadPose/angularVelocity
tags:
  - API
  - Experimental
  - Gamepad API
  - GamepadPose
  - Property
  - Reference
  - Virtual Reality
  - WebVR
  - angularVelocity
browser-compat: api.GamepadPose.angularVelocity
---
{{APIRef("WebVR API")}}{{SeeCompatTable}}

The **`angularVelocity`** read-only property of the {{domxref("GamepadPose")}} interface returns an array representing the angular velocity vector of the {{domxref("Gamepad")}}, in radians per second.

In other words, the current velocity at which the sensor is rotating around the `x`, `y`, and `z` axes.

## Syntax

```js
var myGamepadAngVel = gamepadPoseInstance.angularVelocity;
```

### Value

A {{jsxref("Float32Array")}}, or `null` if the gamepad is not able to provide angular velocity information.

## Examples

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
