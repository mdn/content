---
title: Accelerometer()
slug: Web/API/Accelerometer/Accelerometer
page-type: web-api-constructor
tags:
  - API
  - Accelerometer
  - Accelerometer API
  - Constructor
  - Generic Sensor API
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
  - Experimental
browser-compat: api.Accelerometer.Accelerometer
---
{{APIRef("Sensor API")}}{{SeeCompatTable}}

The **`Accelerometer()`** constructor creates a new {{domxref("Accelerometer")}} object which returns the acceleration of the device along all three axes at the time it is read.

If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation instructions.

## Syntax

```js
new Accelerometer()
new Accelerometer(options)
```

### Parameters

- `options` {{optional_inline}}

  - : Options are as follows:

    - `frequency`
      - : The desired number of times per second a sample should be taken, meaning the number of times per second the {{domxref('sensor.reading_event', 'reading')}} event will be called. A whole number or decimal may be used, the latter for frequencies less than a second. The actual reading frequency depends on the device hardware and consequently may be less than requested.
    - `referenceFrame`
      - : Either `'device'` or `'screen'`. The default is `'device'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('sensor.reading_event', 'reading')}} event
