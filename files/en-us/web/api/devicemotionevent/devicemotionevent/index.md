---
title: DeviceMotionEvent()
slug: Web/API/DeviceMotionEvent/DeviceMotionEvent
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Device Orientation
  - Device Orientation API
  - Mobile
  - Motion
  - Orientation
  - Reference
browser-compat: api.DeviceMotionEvent.DeviceMotionEvent
---
{{APIRef("Device Orientation Events")}}

The **`DeviceMotionEvent()`** constructor creates a new {{DOMxRef("DeviceMotionEvent")}} object.

## Syntax

```js
new DeviceMotionEvent(type)
new DeviceMotionEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `devicemotion`.
- `options` {{Optional_Inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `acceleration`
      - : A {{domxref("DeviceMotionEventAcceleration")}} object giving the acceleration of the device on the three axis X, Y and Z.
        Acceleration is expressed in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared).
    - `accelerationIncludingGravity`
      - : A {{domxref("DeviceMotionEventAcceleration")}} object giving the acceleration of the device on the three axis X, Y and Z with the effect of gravity.
        Acceleration is expressed in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared).
    - `rotationRate`
      - : A {{domxref("DeviceMotionEventRotationRate")}} object giving the rate of change of the device's orientation on the three orientation axis alpha, beta and gamma.
        Rotation rate is express in degrees per seconds.
    - `interval` {{Optional_Inline}}
      - : A number representing the interval of time, in milliseconds, at which data is obtained from the device. It defaults to `0`.

### Return value

A new {{domxref("DeviceMotionEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
