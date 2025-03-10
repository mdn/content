---
title: "Magnetometer: Magnetometer() constructor"
short-title: Magnetometer()
slug: Web/API/Magnetometer/Magnetometer
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.Magnetometer.Magnetometer
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

The **`Magnetometer()`** constructor
creates a new {{domxref("Magnetometer")}} object which returns information about the
magnetic field as detected by a device's primary magnetometer sensor.

## Syntax

```js-nolint
new Magnetometer()
new Magnetometer(options)
```

### Parameters

- `options` {{optional_inline}}

  - : Options are as follows:

    - `frequency` {{optional_inline}}
      - : The desired number of times per second a sample should
        be taken, meaning the number of times per second that the
        {{domxref('sensor.reading_event', 'reading')}} event will be called. A whole number or decimal may be
        used, the latter for frequencies less than a second. The actual reading frequency
        depends on device hardware and consequently may be less than requested.
    - `referenceFrame` {{optional_inline}}
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
