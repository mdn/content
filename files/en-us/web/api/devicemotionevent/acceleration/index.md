---
title: "DeviceMotionEvent: acceleration property"
short-title: acceleration
slug: Web/API/DeviceMotionEvent/acceleration
page-type: web-api-instance-property
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
acceleration on three axes. There are a couple of things that we need to make sure we understand before we can start using these events: which end is up, and what are the axes we're going to use?
The easiest way to answer the first question is to take your device and put it on flat, level surface in its "resting" position, the position it will be most stable in. For a mobile phone, that's probably on the table, with the screen facing up and the the bottom of the phone closest to you. For a laptop, that's probably on a deck with its screen open facing you, and the keyboard in line with the surface.

- `x`
  - : The x-axis runs side-to-side across the mobile phone screen or the laptop keyboard and is positive toward the right side.
- `y`
  - : The y-axis runs front-to-back across the mobile phone screen or the laptop keyboard and is positive as it moves away from you.
- `z`
  - : The z-axis comes straight up out of the mobile phone screen or the laptop keyboard and is positive as it moves up.

>**Note:** The rotation data uses Euler angles to represent the difference between the device in its normal position and its current position. With the HTML5 device orientation events, the data is returned as the number of degrees different from normal. An easier way to think about it is how much the device is tilted side-to-side, usually referred to as beta, how much it is tilted front-to-back, known as gamma, and how much it is rotated around the z-axis, known as alpha.

>**Note:** For a mobile device such as a phone or tablet, the device coordinate frame is defined relative to the screen in its standard orientation, typically portrait. This means that slide-out elements such as keyboards are not deployed, and swiveling elements such as displays are folded to their default position. If the orientation of the screen changes when the device is rotated or a slide-out keyboard is deployed, this does not affect the orientation of the coordinate frame relative to the device.

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
- [Detecting device orientation](/en-US/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Orientation and motion data explained](/en-US/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
