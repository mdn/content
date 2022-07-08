---
title: LinearAccelerationSensor()
slug: Web/API/LinearAccelerationSensor/LinearAccelerationSensor
page-type: web-api-constructor
tags:
  - API
  - Accelerometer
  - Constructor
  - Generic Sensor API
  - LinearAccelerationSensor
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
browser-compat: api.LinearAccelerationSensor.LinearAccelerationSensor
---
{{APIRef("Sensor API")}}

The **`LinearAccelerationSensor()`**
constructor creates a new {{domxref("LinearAccelerationSensor")}} object which
provides on each reading the acceleration applied to the device along all three axes,
but without the contribution of gravity.

If a feature policy blocks use of a feature, it is because your code is inconsistent
with the policies set on your server. This is not something that would ever be shown to
a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation instructions.

## Syntax

```js
new LinearAccelerationSensor()
new LinearAccelerationSensor(options)
```

### Parameters

- `options` {{optional_inline}}

  - : Options are as follows:

    - `frequency`
      - : The desired number of times per second a sample should
        be taken, meaning the number of times per second that the
        {{domxref('sensor.reading_event', 'reading')}} event will be called. A whole number or decimal may be
        used, the latter for frequencies less than a second. The actual reading frequency
        depends on device hardware and consequently may be less than requested.
    - `referenceFrame`
      - : Either `'device'` or
        `'screen'`. The default is `'device'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('sensor.reading_event', 'reading')}} event
