---
title: GamepadPose
slug: Web/API/GamepadPose
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GamepadPose
---

{{securecontext_header}}{{APIRef("Gamepad API")}}{{SeeCompatTable}}

The **`GamepadPose`** interface of the [Gamepad API](/en-US/docs/Web/API/Gamepad_API) represents the pose of a [WebVR](/en-US/docs/Web/API/WebVR_API) controller at a given timestamp (which includes orientation, position, velocity, and acceleration information).

This interface is accessible through the {{domxref("Gamepad.pose")}} property.

## Instance properties

- {{domxref("GamepadPose.hasOrientation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a boolean indicating whether the gamepad is capable of returning orientation information (`true`) or not (`false`).
- {{domxref("GamepadPose.hasPosition")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a boolean indicating whether the gamepad is capable of returning position information (`true`) or not (`false`).
- {{domxref("GamepadPose.position")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the position of the {{domxref("Gamepad")}} as a 3D vector.
- {{domxref("GamepadPose.linearVelocity")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the linear velocity of the {{domxref("Gamepad")}}, in meters per second.
- {{domxref("GamepadPose.linearAcceleration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the linear acceleration of the {{domxref("Gamepad")}}, in meters per second per second.
- {{domxref("GamepadPose.orientation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the orientation of the {{domxref("Gamepad")}}, as a quarternion value.
- {{domxref("GamepadPose.angularVelocity")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the angular velocity of the {{domxref("Gamepad")}}, in radians per second.
- {{domxref("GamepadPose.angularAcceleration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
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
