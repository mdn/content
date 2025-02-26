---
title: "Magnetometer: x property"
short-title: x
slug: Web/API/Magnetometer/x
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Magnetometer.x
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

The **`x`** read-only property of the
{{domxref("Magnetometer")}} interface returns a number specifying
the magnetic field around the device's x-axis.

## Value

A {{jsxref('Number')}}.

## Examples

The magnetometer is typically read in the {{domxref('Sensor.reading_event', 'reading')}} event
callback. In the example below this occurs sixty times a second.

```js
let magSensor = new Magnetometer({ frequency: 60 });

magSensor.addEventListener("reading", (e) => {
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
