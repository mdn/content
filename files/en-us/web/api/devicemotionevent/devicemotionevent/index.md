---
title: DeviceMotionEvent()
slug: Web/API/DeviceMotionEvent/DeviceMotionEvent
tags:
  - API
  - Constructor
  - Device Orientation
  - Device Orientation API
  - Experimental
  - Mobile
  - Motion
  - Non-standard
  - Orientation
  - Reference
browser-compat: api.DeviceMotionEvent.DeviceMotionEvent
---
{{APIRef("Device Orientation Events")}}{{Non-standard_header}}

The **`DeviceMotionEvent()`** constructor creates a new
{{DOMxRef("DeviceMotionEvent")}}.

## Syntax

```js
var deviceMotionEvent = new DeviceMotionEvent(type[, options])
```

### Parameters

- `type`
  - : A {{domxref("DOMString")}} representing the name of the event.
- `options`{{Optional_Inline}}

  - : Options are as follows:

    - `acceleration`: An object giving the acceleration of the device on
      the three axis X, Y and Z. Acceleration is expressed in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared).
    - `accelerationIncludingGravity`: An object giving the acceleration of
      the device on the three axis X, Y and Z with the effect of gravity. Acceleration
      is expressed in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared).
    - `rotationRate`: An object giving the rate of change of the device's
      orientation on the three orientation axis alpha, beta and gamma. Rotation rate is
      express in degrees per seconds.
    - `interval`: A number representing the interval of time, in
      milliseconds, at which data is obtained from the device.

## Specifications

_Not part of any specifications._

## Browser compatibility

{{Compat}}
