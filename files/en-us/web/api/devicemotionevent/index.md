---
title: DeviceMotionEvent
slug: Web/API/DeviceMotionEvent
page-type: web-api-interface
browser-compat: api.DeviceMotionEvent
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

The **`DeviceMotionEvent`** interface of the {{domxref("Device Orientation Events", "", "", "nocode")}} provides web developers with information about the speed of changes for the device's position and orientation.

> [!WARNING]
> Currently, Firefox and Chrome do not handle the coordinates the same way. Take care about this while using them.

{{InheritanceDiagram}}

## Constructor

- {{domxref("DeviceMotionEvent.DeviceMotionEvent", "DeviceMotionEvent()")}}
  - : Creates a new `DeviceMotionEvent`.

## Instance properties

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
window.addEventListener("devicemotion", (event) => {
  console.log(`${event.acceleration.x} m/s2`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Device orientation events/Detecting device orientation", "Detecting device orientation", "", "nocode")}}
- {{domxref("Device orientation events/Orientation and motion data explained", "Orientation and motion data explained", "", "nocode")}}
- {{DOMxRef("DeviceOrientationEvent")}}
- {{DOMxRef("Window.deviceorientation_event", "deviceorientation")}} event
- {{DOMxRef("Window.deviceorientationabsolute_event", "deviceorientationabsolute")}} event
- {{DOMxRef("Window/devicemotion_event", "devicemotion")}} event
- {{DOMxRef("Accelerometer")}}
- {{DOMxRef("LinearAccelerationSensor")}}
