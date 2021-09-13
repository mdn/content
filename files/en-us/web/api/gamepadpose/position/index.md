---
title: GamepadPose.position
slug: Web/API/GamepadPose/position
tags:
  - API
  - Experimental
  - Gamepad API
  - GamepadPose
  - Position
  - Property
  - Reference
  - Virtual Reality
  - WebVR
browser-compat: api.GamepadPose.position
---
{{APIRef("WebVR API")}}{{SeeCompatTable}}

The **`position`** read-only property of the {{domxref("GamepadPose")}} interface returns the position of the {{domxref("Gamepad")}} as a 3D vector.

The coordinate system is as follows:

- Positive X is to the user’s right.
- Positive Y is up.
- Positive Z is behind the user.

Positions are measured in meters from an origin point — this point is the position the sensor was first read at.

## Syntax

```js
var myGamepadPosition = gamepadPoseInstance.position;
```

### Value

A {{jsxref("Float32Array")}}, or `null` if the gamepad is not able to provide position data.

> **Note:** User agents may provide emulated position values through certain techniques; when doing so they should still report {{domxref("GamepadPose.hasPosition")}} as false.

## Examples

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
