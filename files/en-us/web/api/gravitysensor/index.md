---
title: GravitySensor
slug: Web/API/GravitySensor
tags:
  - API
  - Accelerometer
  - Accelerometer API
  - Generic Sensor API
  - GravitySensor
  - Interface
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
browser-compat: api.GravitySensor
---
{{APIRef("Sensor API")}}

The **`GravitySensor`** interface of the [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs) provides on each reading the gravity applied to the device along all three axes.

To use this sensor, the user must grant permission to the `'accelerometer'` device sensor through the [Permissions API](/en-US/docs/Web/API/Permissions_API).

## Constructor

- {{domxref("GravitySensor.GravitySensor", "GravitySensor()")}}
  - : Creates a new `GravitySensor` object.

## Properties

_Inherits properties from its ancestor, {{domxref('Accelerometer')}}._

## Example

Gravity is typically read in the {{domxref('Sensor.onreading')}} event callback. In the example below this occurs sixty times a second.

```js
let gravitySensor = new GravitySensor({frequency: 60});

gravitySensor.addEventListener("reading", e => {
  console.log(`Gravity along the X-axis ${gravitySensor.x}`);
  console.log(`Gravity along the Y-axis ${gravitySensor.y}`);
  console.log(`Gravity along the Z-axis ${gravitySensor.z}`);
});

gravitySensor.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
