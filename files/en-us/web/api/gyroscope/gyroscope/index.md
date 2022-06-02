---
title: Gyroscope()
slug: Web/API/Gyroscope/Gyroscope
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Generic Sensor API
  - Gyroscope
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
browser-compat: api.Gyroscope.Gyroscope
---
{{APIRef("Sensor API")}}

The **`Gyroscope()`** constructor
creates a new {{domxref("Gyroscope")}} object which provides on each reading the
angular velocity of the device along all three axes.

If a feature policy blocks use of a feature, it is because your code is inconsistent
with the policies set on your server. This is not something that would ever be shown to
a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation instructions.

## Syntax

```js
new Gyroscope()
new Gyroscope(options)
```

### Parameters

- `options` {{optional_inline}}

  - : Options are as follows:

    - `frequency`
      - : The desired number of times per second a sample should
        be taken, meaning the number of times per second that the
        {{domxref('sensor.reading_event', 'reading')}} event will be called. A whole number or decimal may be
        used, the latter for frequencies less than a second. The actual reading frequency
        depends device hardware and consequently may be less than requested.
    - `referenceFrame`
      - : Either `'device'` or
        `'screen'`. The default is `'device'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('sensor.reading_event', 'reading')}} event
