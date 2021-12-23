---
title: GamepadPose
slug: Web/API/GamepadPose
tags:
  - API
  - Experimental
  - Gamepad
  - GamepadPose
  - Interface
  - Reference
  - VR
  - Virtual Reality
  - WebVR
browser-compat: api.GamepadPose
---
{{securecontext_header}}{{APIRef("Gamepad API")}}{{SeeCompatTable}}

The **`GamepadPose`** interface of the [Gamepad API](/en-US/docs/Web/API/Gamepad_API) represents the pose of a [WebVR](/en-US/docs/Web/API/WebVR_API) controller at a given timestamp (which includes orientation, position, velocity, and acceleration information.)

This interface is accessible through the {{domxref("Gamepad.pose")}} property.

## Properties

- {{domxref("GamepadPose.hasOrientation")}} {{readonlyInline}}
  - : Returns a boolean indicating whether the gamepad is capable of returning orientation information (`true`) or not (`false`).
- {{domxref("GamepadPose.hasPosition")}} {{readonlyInline}}
  - : Returns a boolean indicating whether the gamepad is capable of returning position information (`true`) or not (`false`).
- {{domxref("GamepadPose.position")}} {{readonlyInline}}
  - : Returns the position of the {{domxref("Gamepad")}} as a 3D vector.
- {{domxref("GamepadPose.linearVelocity")}} {{readonlyInline}}
  - : Returns the linear velocity of the {{domxref("Gamepad")}}, in meters per second.
- {{domxref("GamepadPose.linearAcceleration")}} {{readonlyInline}}
  - : Returns the linear acceleration of the {{domxref("Gamepad")}}, in meters per second per second.
- {{domxref("GamepadPose.orientation")}} {{readonlyInline}}
  - : Returns the orientation of the {{domxref("Gamepad")}}, as a quarternion value.
- {{domxref("GamepadPose.angularVelocity")}} {{readonlyInline}}
  - : Returns the angular velocity of the {{domxref("Gamepad")}}, in radians per second.
- {{domxref("GamepadPose.angularAcceleration")}} {{readonlyInline}}
  - : Returns the angular acceleration of the {{domxref("Gamepad")}}, in meters per second per second.

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
