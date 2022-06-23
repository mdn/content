---
title: XRPose.emulatedPosition
slug: Web/API/XRPose/emulatedPosition
page-type: web-api-instance-property
tags:
  - API
  - AR
  - Orientation
  - Position
  - Property
  - Read-only
  - Reality
  - Reference
  - VR
  - Viewpoint
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRPose
  - augmented
  - emulatedPosition
  - offset
  - pose
  - tracking
browser-compat: api.XRPose.emulatedPosition
---
{{APIRef}}

The `emulatedPosition` read-only attribute of the
{{DOMxRef("XRPose")}} interface is a Boolean value indicating whether or not both the
{{domxref("XRRigidTransform.position", "position")}} component of the pose's
{{domxref("XRPose.transform", "transform")}} is directly taken from the XR device, or
it's simulated or computed based on other sources.

## Value

A Boolean which is `true` if the pose's position is computed based on
estimates or is derived from sources other than direct sensor data. If the position is
precisely based on direct sensor inputs, the value is `false`.

## Usage notes

There are two basic categories of XR tracking systems. A basic XR headset provides
three degrees of freedom (3DoF), tracking the pitch, yaw, and roll of the user's head.
No information is available about movement forward, backward, or to the sides. Any such
data is taken from other sources, such as keyboard or mouse inputs or game controllers.
As such, the position is considered to be emulated, so the `emulatedPosition`
property is `true`.

Contrariwise, XR devices which can also track movement forward and backward as well as
laterally—six degree of freedom (6DoF) devices—don't require any information from other
sources to determine the user's position, so the value of `emulatedPosition`
is `false`.

The same notion applies not just to the user's head, but to any object. A hand
controller that can directly report its position would have a value of
`false` for this property as well. If its position is computed as an offset
from another object (such as by basing it off the model representing the user's body),
then this value is `true`.

This information is important because devices whose position is emulated are prone to
their offset drifting relative to the real world space over time. This is because
emulating a position based on accelerometer inputs and models tends to introduce minor
errors which accumulate over time.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
