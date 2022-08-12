---
title: GamepadPose.linearVelocity
slug: Web/API/GamepadPose/linearVelocity
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
  - linearVelocity
browser-compat: api.GamepadPose.linearVelocity
---
{{APIRef("WebVR API")}}{{SeeCompatTable}}

The **`linearVelocity`** read-only property of the {{domxref("GamepadPose")}} interface returns an array representing the linear velocity vector of the {{domxref("Gamepad")}}, in meters per second.

In other words, the current velocity at which the sensor is moving along the `x`, `y`, and `z` axes.

## Value

A {{jsxref("Float32Array")}}, or `null` if the gamepad is not able to provide linear velocity data.

## Examples

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
