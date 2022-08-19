---
title: GamepadPose.angularAcceleration
slug: Web/API/GamepadPose/angularAcceleration
page-type: web-api-instance-property
tags:
  - API
  - Experimental
  - Gamepad API
  - GamepadPose
  - Property
  - Reference
  - Virtual Reality
  - WebVR
  - angularAcceleration
browser-compat: api.GamepadPose.angularAcceleration
---
{{APIRef("WebVR API")}}{{SeeCompatTable}}

The **`angularAcceleration`** read-only property of the {{domxref("GamepadPose")}} interface returns an array representing the angular acceleration vector of the {{domxref("Gamepad")}}, in meters per second per second.

In other words, the current acceleration of the sensor's rotation around the `x`, `y`, and `z` axes.

## Value

A {{jsxref("Float32Array")}}, or `null` if the gamepad is not able to provide angular acceleration information.

## Examples

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
