---
title: "LinearAccelerationSensor: LinearAccelerationSensor() constructor"
short-title: LinearAccelerationSensor()
slug: Web/API/LinearAccelerationSensor/LinearAccelerationSensor
page-type: web-api-constructor
browser-compat: api.LinearAccelerationSensor.LinearAccelerationSensor
---

{{APIRef("Sensor API")}}

The **`LinearAccelerationSensor()`**
constructor creates a new {{domxref("LinearAccelerationSensor")}} object which
provides on each reading the acceleration applied to the device along all three axes,
but without the contribution of gravity.

## Syntax

```js-nolint
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

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Use of this feature was blocked by a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('sensor.reading_event', 'reading')}} event
