---
title: "Accelerometer: y property"
short-title: y
slug: Web/API/Accelerometer/y
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Accelerometer.y
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

The **`y`** read-only property of the {{domxref("Accelerometer")}} interface returns a number specifying the acceleration of the device along its y-axis.

## Value

A {{jsxref('Number')}}.

## Examples

Acceleration is typically read in the {{domxref('Sensor.reading_event', 'reading')}} event callback. In the example below this occurs sixty times a second.

```js
const accelerometer = new Accelerometer({ frequency: 60 });

accelerometer.addEventListener("reading", (e) => {
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
