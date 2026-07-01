---
title: "DeviceMotionEvent: acceleration property"
short-title: acceleration
slug: Web/API/DeviceMotionEvent/acceleration
page-type: web-api-instance-property
browser-compat: api.DeviceMotionEvent.acceleration
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

The **`acceleration`** read-only property of the {{domxref("DeviceMotionEvent")}} interface returns the acceleration recorded by
the device, in [meters per second squared (m/s²)](https://en.wikipedia.org/wiki/Meter_per_second_squared).
This value does not include the effect of
the gravitational force, in contrast to {{DOMxRef("DeviceMotionEvent.accelerationIncludingGravity")}}.

> [!NOTE]
> If the hardware does not know how to remove gravity from the
> acceleration data, this value may not be present in the
> {{DOMxRef("DeviceMotionEvent")}}. In this situation, you'll need to use
> {{DOMxRef("DeviceMotionEvent.accelerationIncludingGravity")}} instead.

## Value

The `acceleration` property is an object providing information about
acceleration on the three axes in the [Device coordinate frame](/en-US/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained#device_coordinate_frame). Each axis is represented with its own property:

- `x`
  - : Represents the acceleration along the x axis
- `y`
  - : Represents the acceleration along the y axis
- `z`
  - : Represents the acceleration along the z axis

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Device orientation events/Detecting device orientation", "Detecting device orientation", "", "nocode")}}
- {{domxref("Device orientation events/Orientation and motion data explained", "Orientation and motion data explained", "", "nocode")}}
- {{DOMxRef("Window/devicemotion_event", "devicemotion")}} event
