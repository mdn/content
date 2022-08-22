---
title: DeviceMotionEvent
slug: Web/API/DeviceMotionEvent
page-type: web-api-interface
tags:
  - API
  - Device Orientation
  - DeviceMotionEvent
  - Interface
  - Mobile
  - Motion
  - Orientation
  - Reference
browser-compat: api.DeviceMotionEvent
---
{{APIRef("Device Orientation Events")}}

The **`DeviceMotionEvent`** interface provides web developers with information about the speed of changes for the device's position and orientation.

> **Warning:** Currently, Firefox and Chrome do not handle the coordinates the same way. Take care about this while using them.

{{InheritanceDiagram}}

## Constructor

- {{domxref("DeviceMotionEvent.DeviceMotionEvent", "DeviceMotionEvent()")}}
  - : Creates a new `DeviceMotionEvent`.

## Properties

- {{DOMxRef("DeviceMotionEvent.acceleration")}} {{ReadOnlyInline}}
  - : An object giving the acceleration of the device on the three axis X, Y and Z. Acceleration is expressed in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared).
- {{DOMxRef("DeviceMotionEvent.accelerationIncludingGravity")}} {{ReadOnlyInline}}
  - : An object giving the acceleration of the device on the three axis X, Y and Z with the effect of gravity. Acceleration is expressed in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared).
- {{DOMxRef("DeviceMotionEvent.rotationRate")}} {{ReadOnlyInline}}
  - : An object giving the rate of change of the device's orientation on the three orientation axis alpha, beta and gamma. Rotation rate is expressed in degrees per seconds.
- {{DOMxRef("DeviceMotionEvent.interval")}} {{ReadOnlyInline}}
  - : A number representing the interval of time, in milliseconds, at which data is obtained from the device.

## Example

```js
window.addEventListener('devicemotion', (event) => {
  console.log(`${event.acceleration.x} m/s2`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window/deviceorientation_event", "deviceorientation")}}
- {{DOMxRef("DeviceOrientationEvent")}}
- {{domxref("Window/devicemotion_event", "devicemotion")}}
- {{DOMxRef("Accelerometer")}}
- {{DOMxRef("LinearAccelerationSensor")}}
- [Detecting device orientation](/en-US/docs/Web/Events/Detecting_device_orientation)
- [Orientation and motion data explained](/en-US/docs/Web/Events/Orientation_and_motion_data_explained)
