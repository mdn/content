---
title: Accelerometer.x
slug: Web/API/Accelerometer/x
page-type: web-api-instance-property
tags:
  - API
  - Accelerometer
  - Accelerometer API
  - Generic Sensor API
  - Property
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
  - x
  - Experimental
browser-compat: api.Accelerometer.x
---
{{APIRef("Sensor API")}}{{SeeCompatTable}}

The **`x`** read-only property of the {{domxref("Accelerometer")}} interface returns a double precision integer containing the acceleration of the device along its x axis.

If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation instructions.

## Value

A {{jsxref('Number')}}.

## Examples

Acceleration is typically read in the {{domxref('Sensor.reading_event', 'reading')}} event callback. In the example below this occurs sixty times a second.

```js
let accelerometer = new Accelerometer({frequency: 60});

accelerometer.addEventListener('reading', (e) => {
  console.log(`Acceleration along the X-axis ${accelerometer.x}`);
  console.log(`Acceleration along the Y-axis ${accelerometer.y}`);
  console.log(`Acceleration along the Z-axis ${accelerometer.z}`);
});
accelerometer.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
