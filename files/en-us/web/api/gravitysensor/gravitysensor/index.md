---
title: GravitySensor()
slug: Web/API/GravitySensor/GravitySensor
tags:
  - API
  - Accelerometer
  - Constructor
  - Generic Sensor API
  - GravitySensor
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
browser-compat: api.GravitySensor.GravitySensor
---
{{APIRef("Sensor API")}}

The **`GravitySensor()`**
constructor creates a new {{domxref("GravitySensor")}} object which
provides on each reading the gravity applied to the device along all three axes.

## Syntax

```js
let gravitySensor = new GravitySensor([options])
```

### Parameters

- _options_ {{optional_inline}}

  - : Options are as follows:

    - `frequency`: The desired number of times per second a sample should
      be taken, meaning the number of times per second that
      {{domxref('sensor.onreading')}} will be called. A whole number or decimal may be
      used, the latter for frequencies less than a second. The actual reading frequency
      depends on device hardware and consequently may be less than requested. The default
      frequency is the one defined by the underlying platform.
    - `referenceFrame`: The local coordinate system representing
      the reference frame. It can be either `'device'` or
      `'screen'`. The default is `'device'`.

### Exceptions

- SecurityError
  - : Use of this feature was blocked by a feature policy. If a feature policy blocks use of a feature,
    it is because your code is inconsistent with the policies set on your server.
    This is not something that would ever be shown to a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation instructions.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
