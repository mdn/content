---
title: DeviceMotionEvent.rotationRate
slug: Web/API/DeviceMotionEvent/rotationRate
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - DOM Reference
  - Device Orientation
  - Mobile
  - Motion
  - Orientation
  - Property
  - Reference
browser-compat: api.DeviceMotionEvent.rotationRate
---
{{APIRef("Device Orientation Events")}}

The **`DeviceMotionEvent.rotationRate`** read-only property returns the rate at which the device is rotating around each of its axes in degrees per
second.

> **Note:** If the hardware isn't capable of providing this
> information, this property returns `null`.

## Value

The `rotationRate` property is a read only object describing the rotation
rates of the device around each of its axes:

- `alpha`
  - : The rate at which the device is rotating about its Z axis; that is, being twisted
    about a line perpendicular to the screen.
- `beta`
  - : The rate at which the device is rotating about its X axis; that is, front to back.
- `gamma`
  - : The rate at which the device is rotating about its Y axis; that is, side to side.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("DeviceMotionEvent") }}
- {{DOMxRef("window.devicemotion_event", "devicemotion") }} event
- {{DOMxRef("window.deviceorientation_event", "deviceorientation") }} event
- {{DOMxRef("DeviceOrientationEvent") }}
- [Detecting device orientation](/en-US/docs/Web/Events/Detecting_device_orientation)
- [Orientation and motion data explained](/en-US/docs/Web/Events/Orientation_and_motion_data_explained)
