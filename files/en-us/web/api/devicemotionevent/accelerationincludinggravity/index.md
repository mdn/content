---
title: DeviceMotionEvent.accelerationIncludingGravity
slug: Web/API/DeviceMotionEvent/accelerationIncludingGravity
page-type: web-api-instance-property
tags:
  - API
  - Device Orientation
  - Mobile
  - Motion
  - Orientation
  - Property
  - Reference
browser-compat: api.DeviceMotionEvent.accelerationIncludingGravity
---
{{APIRef("Device Orientation Events")}}

The **`accelerationIncludingGravity`** property returns the
amount of acceleration recorded by the device, in [meters per second squared (m/s²)](https://en.wikipedia.org/wiki/Meter_per_second_squared). Unlike {{DOMxRef("DeviceMotionEvent.acceleration")}}
which compensates for the influence of gravity, its value is the sum of the acceleration
of the device as induced by the user and an acceleration equal and opposite to that
caused by gravity. In other words, it measures the
[g-force](https://en.wikipedia.org/wiki/G-Force). In practice, this value represents
the raw data measured by an [accelerometer](https://en.wikipedia.org/wiki/Accelerometer).

This value is not typically as useful as {{DOMxRef("DeviceMotionEvent.acceleration")}},
but may be the only value available on devices that aren't able to remove gravity from
the acceleration data, such as on devices that don't have a gyroscope.

> **Note:** `accelerationIncludingGravity`'s name can be misleading. This property represents acceleration including _the effects of_ gravity. For example, if a device is lying flat on a horizontal surface with the screen pointing up, gravity would be -9.8 along the Z axis, while `acceleration.z` would be 0 and `accelerationIncludingGravity.z` would be 9.8. Similarly, if a device is in free fall with its screen horizontal and pointing up, gravity would be -9.8 along the Z axis, while `acceleration.z` would be -9.8 and `accelerationIncludingGravity.z` would be 0.

## Value

The `accelerationIncludingGravity` property is an object providing
information about acceleration on three axis. Each axis is represented with its own
property:

- `x`
  - : Represents the acceleration upon the x axis which is the west to east axis
- `y`
  - : Represents the acceleration upon the y axis which is the south to north axis
- `z`
  - : Represents the acceleration upon the z axis which is the down to up axis

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("DeviceMotionEvent.acceleration")}}
- {{DOMxRef("window.devicemotion_event", "devicemotion") }} event
- {{DOMxRef("window.deviceorientation_event", "deviceorientation") }} event
- {{DOMxRef("DeviceOrientationEvent")}}
- {{DOMxRef("Accelerometer")}}
- [Detecting device orientation](/en-US/docs/Web/Events/Detecting_device_orientation)
- [Orientation and motion data explained](/en-US/docs/Web/Events/Orientation_and_motion_data_explained)
