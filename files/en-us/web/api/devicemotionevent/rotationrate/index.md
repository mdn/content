---
title: DeviceMotionEvent.rotationRate
slug: Web/API/DeviceMotionEvent/rotationRate
tags:
  - API
  - DOM
  - DOM Reference
  - Device Orientation
  - Experimental
  - Mobile
  - Motion
  - NeedsExample
  - Orientation
  - Property
  - Reference
browser-compat: api.DeviceMotionEvent.rotationRate
---
{{APIRef("Device Orientation Events")}}

Returns the rate at which the device is rotating around each of its axes in degrees per
second.

> **Note:** If the hardware isn't capable of providing this
> information, this property returns `null`.

## Syntax

```js
var rotationRate = deviceMotionEvent.rotationRate;
```

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
- {{Event("devicemotion") }}
- {{DOMxRef("window.ondevicemotion") }}
- {{Event("deviceorientation") }}
- {{DOMxRef("DeviceOrientationEvent") }}
- [Detecting device
  orientation](/en-US/docs/Web/API/Detecting_device_orientation)
- [Orientation and motion data
  explained](/en-US/docs/Web/Guide/Events/Orientation_and_motion_data_explained "Orientation and motion data explained")
