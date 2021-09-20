---
title: Magnetometer()
slug: Web/API/Magnetometer/Magnetometer
tags:
  - API
  - Constructor
  - Generic Sensor API
  - Magnetometer
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
browser-compat: api.Magnetometer.Magnetometer
---
{{APIRef("Sensor API")}}

The **`Magnetometer()`** constructor
creates a new {{domxref("Magnetometer")}} object which returns information about the
magnetic field as detected by a device's primary magnetometer sensor.

If a feature policy blocks use of a feature it is because your code is inconsistent
with the policies set on your server. This is not something that would ever be shown to
a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation
instructions.

## Syntax

```js
var magnetometer = new Magnetometer([options])
```

### Parameters

- _options_ {{optional_inline}}

  - : Options are as follows:

    - `frequency`: The desired number of times per second a sample should
      be taken, meaning the number of times per second that
      {{domxref('sensor.onreading')}} will be called. A whole number or decimal may be
      used, the latter for frequencies less than a second. The actual reading frequency
      depends on device hardware and consequently may be less than requested.
    - `referenceFrame`: Either `'device'` or
      `'screen'`. The default is `'device'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
