---
title: Gyroscope
slug: Web/API/Gyroscope
tags:
  - API
  - Generic Sensor API
  - Gyroscope
  - Gyroscope API
  - Interface
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
browser-compat: api.Gyroscope
---
{{APIRef("Sensor API")}}

The **`Gyroscope`** interface of the [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs) provides on each reading the angular velocity of the device along all three axes.

To use this sensor, the user must grant permission to the `'gyroscope'` device sensor through the [Permissions API](/en-US/docs/Web/API/Permissions_API).

If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation instructions.

## Constructor

- {{domxref("Gyroscope.Gyroscope", "Gyroscope()")}}
  - : Creates a new `Gyroscope` object.

## Properties

- {{domxref('Gyroscope.x')}} {{readonlyinline}}
  - : Returns a double, containing the angular velocity of the device along the device's x axis.
- {{domxref('Gyroscope.y')}} {{readonlyinline}}
  - : Returns a double, containing the angular velocity of the device along the device's y axis.
- {{domxref('Gyroscope.z')}} {{readonlyinline}}
  - : Returns a double, containing the angular velocity of the device along the device's z axis.

## Example

The gyroscope is typically read in the {{domxref('Sensor.onreading')}} event callback. In the example below this occurs sixty times a second.

```js
let gyroscope = new Gyroscope({frequency: 60});

gyroscope.addEventListener('reading', e => {
  console.log("Angular velocity along the X-axis " + gyroscope.x);
  console.log("Angular velocity along the Y-axis " + gyroscope.y);
  console.log("Angular velocity along the Z-axis " + gyroscope.z);
});
gyroscope.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
