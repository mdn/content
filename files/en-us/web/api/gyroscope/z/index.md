---
title: "Gyroscope: z property"
short-title: z
slug: Web/API/Gyroscope/z
page-type: web-api-instance-property
browser-compat: api.Gyroscope.z
---

{{APIRef("Sensor API")}}

The **`z`** read-only property of the
{{domxref("Gyroscope")}} interface returns a number specifying the
angular velocity of the device along its z-axis.

## Value

A {{jsxref('Number')}}.

## Examples

The gyroscope is typically read in the {{domxref('Sensor.reading_event', 'reading')}} event callback.
In the example below this occurs sixty times a second.

```js
let gyroscope = new Gyroscope({ frequency: 60 });

gyroscope.addEventListener("reading", (e) => {
  console.log(`Angular velocity along the X-axis ${gyroscope.x}`);
  console.log(`Angular velocity along the Y-axis ${gyroscope.y}`);
  console.log(`Angular velocity along the Z-axis ${gyroscope.z}`);
});
gyroscope.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
