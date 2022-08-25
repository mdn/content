---
title: Magnetometer.y
slug: Web/API/Magnetometer/y
page-type: web-api-instance-property
tags:
  - API
  - Generic Sensor API
  - Magnetometer
  - Property
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
  - 'y'
  - Experimental
browser-compat: api.Magnetometer.y
---
{{APIRef("Sensor API")}}{{SeeCompatTable}}

The **`y`** read-only property of the
{{domxref("Magnetometer")}} interface returns a double precision integer containing
the magnetic field around the device's y axis.

If a feature policy blocks use of a feature it is because your code is inconsistent
with the policies set on your server. This is not something that would ever be shown to
a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation
instructions.

## Value

A {{jsxref('Number')}}.

## Examples

The magnetometer is typically read in the {{domxref('Sensor.reading_event', 'reading')}} event
callback. In the example below this occurs sixty times a second.

```js
let magSensor = new Magnetometer({frequency: 60});

magSensor.addEventListener('reading', (e) => {
  console.log(`Magnetic field along the X-axis ${magSensor.x}`);
  console.log(`Magnetic field along the Y-axis ${magSensor.y}`);
  console.log(`Magnetic field along the Z-axis ${magSensor.z}`);
});
magSensor.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
