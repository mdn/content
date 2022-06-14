---
title: DeviceMotionEvent.acceleration
slug: Web/API/DeviceMotionEvent/acceleration
page-type: web-api-instance-property
tags:
  - API
  - Device Orientation
  - Mobile
  - Motion
  - Orientation
  - Property
  - Reference
browser-compat: api.DeviceMotionEvent.acceleration
---
{{APIRef("Device Orientation Events")}}

The **`acceleration`** property returns the amount of acceleration recorded by
the device, in [meters per second squared (m/s²)](https://en.wikipedia.org/wiki/Meter_per_second_squared).
The acceleration value does not include the effect of
the gravity force, in contrast to {{DOMxRef("DeviceMotionEvent.accelerationIncludingGravity")}}.

> **Note:** If the hardware doesn't know how to remove gravity from the
> acceleration data, this value may not be present in the
> {{DOMxRef("DeviceMotionEvent")}}. In this situation, you'll need to use
> {{DOMxRef("DeviceMotionEvent.accelerationIncludingGravity")}} instead.

## Value

The `acceleration` property is an object providing information about
acceleration on three axis. Each axis is represented with its own property:

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

- {{DOMxRef("DeviceMotionEvent.accelerationIncludingGravity")}}
- {{DOMxRef("window.devicemotion_event", "devicemotion") }} event
- {{DOMxRef("window.deviceorientation_event", "deviceorientation") }} event
- {{DOMxRef("DeviceOrientationEvent")}}
- {{DOMxRef("LinearAccelerationSensor")}}
- [Detecting device orientation](/en-US/docs/Web/Events/Detecting_device_orientation)
- [Orientation and motion data explained](/en-US/docs/Web/Events/Orientation_and_motion_data_explained)
