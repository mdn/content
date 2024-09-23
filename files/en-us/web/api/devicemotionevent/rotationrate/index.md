---
title: "DeviceMotionEvent: rotationRate property"
short-title: rotationRate
slug: Web/API/DeviceMotionEvent/rotationRate
page-type: web-api-instance-property
browser-compat: api.DeviceMotionEvent.rotationRate
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

The **`rotationRate`** read-only property of the {{domxref("DeviceMotionEvent")}} interface returns the rate at which the device is rotating around each of its axes in degrees per
second.

> [!NOTE]
> If the hardware isn't capable of providing this
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

- {{domxref("Device orientation events/Detecting device orientation", "Detecting device orientation", "", "nocode")}}
- {{domxref("Device orientation events/Orientation and motion data explained", "Orientation and motion data explained", "", "nocode")}}
- {{DOMxRef("Window/devicemotion_event", "devicemotion")}} event
