---
title: "Accelerometer: Accelerometer() constructor"
short-title: Accelerometer()
slug: Web/API/Accelerometer/Accelerometer
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.Accelerometer.Accelerometer
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

The **`Accelerometer()`** constructor creates a new {{domxref("Accelerometer")}} object which returns the acceleration of the device along all three axes at the time it is read.

## Syntax

```js-nolint
new Accelerometer()
new Accelerometer(options)
```

### Parameters

- `options` {{optional_inline}}

  - : Options are as follows:

    - `frequency` {{optional_inline}}
      - : The desired number of times per second a sample should be taken, meaning the number of times per second the {{domxref('sensor.reading_event', 'reading')}} event will be called. A whole number or decimal may be used, the latter for frequencies less than a second. The actual reading frequency depends on the device hardware and consequently may be less than requested.
    - `referenceFrame` {{optional_inline}}
      - : Either `'device'` or `'screen'`. The default is `'device'`.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Use of this feature was blocked by a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('sensor.reading_event', 'reading')}} event
