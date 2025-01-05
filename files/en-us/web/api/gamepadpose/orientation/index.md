---
title: "GamepadPose: orientation property"
short-title: orientation
slug: Web/API/GamepadPose/orientation
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GamepadPose.orientation
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

The **`orientation`** read-only property of the {{domxref("GamepadPose")}} interface returns the orientation of the {{domxref("Gamepad")}}, as a quarternion value.

The value is a {{jsxref("Float32Array")}}, made up of the following values:

- pitch — rotation around the X axis.
- yaw — rotation around the Y axis.
- roll — rotation around the Z axis.
- w — the fourth dimension (usually 1).

The orientation yaw (rotation around the y axis) is relative to the initial yaw of the sensor when it was first read.

## Value

A {{jsxref("Float32Array")}}, or `null` if the VR sensor is not able to provide orientation data.

## Examples

TBD

> [!NOTE]
> An orientation of `{ x: 0, y: 0, z: 0, w: 1 }` is considered to be "forward".

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
