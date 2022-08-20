---
title: GamepadPose
slug: Web/API/GamepadPose
page-type: web-api-interface
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

The **`GamepadPose`** interface of the [Gamepad API](/en-US/docs/Web/API/Gamepad_API) represents the pose of a [WebVR](/en-US/docs/Web/API/WebVR_API) controller at a given timestamp (which includes orientation, position, velocity, and acceleration information).

This interface is accessible through the {{domxref("Gamepad.pose")}} property.

## Properties

- {{domxref("GamepadPose.hasOrientation")}} {{ReadOnlyInline}}
  - : Returns a boolean indicating whether the gamepad is capable of returning orientation information (`true`) or not (`false`).
- {{domxref("GamepadPose.hasPosition")}} {{ReadOnlyInline}}
  - : Returns a boolean indicating whether the gamepad is capable of returning position information (`true`) or not (`false`).
- {{domxref("GamepadPose.position")}} {{ReadOnlyInline}}
  - : Returns the position of the {{domxref("Gamepad")}} as a 3D vector.
- {{domxref("GamepadPose.linearVelocity")}} {{ReadOnlyInline}}
  - : Returns the linear velocity of the {{domxref("Gamepad")}}, in meters per second.
- {{domxref("GamepadPose.linearAcceleration")}} {{ReadOnlyInline}}
  - : Returns the linear acceleration of the {{domxref("Gamepad")}}, in meters per second per second.
- {{domxref("GamepadPose.orientation")}} {{ReadOnlyInline}}
  - : Returns the orientation of the {{domxref("Gamepad")}}, as a quarternion value.
- {{domxref("GamepadPose.angularVelocity")}} {{ReadOnlyInline}}
  - : Returns the angular velocity of the {{domxref("Gamepad")}}, in radians per second.
- {{domxref("GamepadPose.angularAcceleration")}} {{ReadOnlyInline}}
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
