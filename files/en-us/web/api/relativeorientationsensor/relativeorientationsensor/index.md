---
title: "RelativeOrientationSensor: RelativeOrientationSensor() constructor"
short-title: RelativeOrientationSensor()
slug: Web/API/RelativeOrientationSensor/RelativeOrientationSensor
page-type: web-api-constructor
browser-compat: api.RelativeOrientationSensor.RelativeOrientationSensor
---

{{securecontext_header}}{{APIRef("Sensor API")}}

The **`RelativeOrientationSensor()`**
constructor creates a new {{domxref("RelativeOrientationSensor")}} object which
describes the device's physical orientation.

## Syntax

```js-nolint
new RelativeOrientationSensor()
new RelativeOrientationSensor(options)
```

### Parameters

- `options` {{optional_inline}}

  - : Options are as follows:

    - `frequency` {{optional_inline}}
      - : The desired number of times per second a sample
        should be taken, meaning the number of times per second that the
        {{domxref('sensor.reading_event', 'reading')}} event will be called. A whole number or decimal
        may be used, the latter for frequencies less than a second. The actual
        reading frequency depends device hardware and consequently may be less
        than requested.
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
