---
title: Gyroscope.x
slug: Web/API/Gyroscope/x
page-type: web-api-instance-property
tags:
  - API
  - Generic Sensor API
  - Gyroscope
  - Property
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
  - x
browser-compat: api.Gyroscope.x
---
{{APIRef("Sensor API")}}

The **`x`** read-only property of the
{{domxref("Gyroscope")}} interface returns a double precision integer containing the
angular velocity of the device along the its x axis.

If a feature policy blocks use of a feature it is because your code is inconsistent
with the policies set on your server. This is not something that would ever be shown to
a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation instructions.

## Value

A {{jsxref('Number')}}.

## Examples

The gyroscope is typically read in the {{domxref('Sensor.reading_event', 'reading')}} event callback.
In the example below this occurs sixty times a second.

```js
let gyroscope = new Gyroscope({frequency: 60});

gyroscope.addEventListener('reading', (e) => {
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
