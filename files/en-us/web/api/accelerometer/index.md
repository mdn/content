---
title: Accelerometer
slug: Web/API/Accelerometer
tags:
  - API
  - Accelerometer
  - Accelerometer API
  - Generic Sensor API
  - Interface
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
browser-compat: api.Accelerometer
---
{{APIRef("Sensor API")}}{{SeeCompatTable}}

The **`Accelerometer`** interface of the [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs) provides on each reading the acceleration applied to the device along all three axes.

To use this sensor, the user must grant permission to the `'accelerometer'`, device sensor through the [Permissions API](/en-US/docs/Web/API/Permissions_API).

If a feature policy blocks the use of a feature, it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation instructions.

## Constructor

- {{domxref("Accelerometer.Accelerometer()", "Accelerometer()")}}
  - : Creates a new `Accelerometer` object.

## Properties

- {{domxref('Accelerometer.x')}} {{readonlyinline}}
  - : Returns a double containing the acceleration of the device along the device's x axis.
- {{domxref('Accelerometer.y')}} {{readonlyinline}}
  - : Returns a double containing the acceleration of the device along the device's y axis.
- {{domxref('Accelerometer.z')}} {{readonlyinline}}
  - : Returns a double containing the acceleration of the device along the device's z axis.

## Example

Acceleration is typically read in the {{domxref('Sensor.onreading')}} event callback. In the example below this occurs sixty times a second.

```js
let acl = new Accelerometer({frequency: 60});
acl.addEventListener('reading', () => {
  console.log("Acceleration along the X-axis " + acl.x);
  console.log("Acceleration along the Y-axis " + acl.y);
  console.log("Acceleration along the Z-axis " + acl.z);
});

acl.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
