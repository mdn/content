---
title: LinearAccelerationSensor
slug: Web/API/LinearAccelerationSensor
tags:
  - API
  - Accelerometer
  - Accelerometer API
  - Generic Sensor API
  - Interface
  - LinearAccelerationSensor
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
browser-compat: api.LinearAccelerationSensor
---
{{APIRef("Sensor API")}}

The **`LinearAccelerationSensor`** interface of the [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs) provides on each reading the acceleration applied to the device along all three axes, but without the contribution of gravity.

To use this sensor, the user must grant permission to the `'accelerometer'` device sensor through the [Permissions API](/en-US/docs/Web/API/Permissions_API).

If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation instructions.

## Constructor

- {{domxref("LinearAccelerationSensor.LinearAccelerationSensor", "LinearAccelerationSensor()")}}
  - : Creates a new `LinearAccelerationSensor` object.

## Properties

_Inherits properties from its ancestor, {{domxref('Accelerometer')}}._

## Example

Linear acceleration is typically read in the {{domxref('Sensor.onreading')}} event callback. In the example below this occurs sixty times a second.

```js
let laSensor = new LinearAccelerationSensor({frequency: 60});

laSensor.addEventListener('reading', e => {
  console.log("Linear acceleration along the X-axis " + laSensor.x);
  console.log("Linear acceleration along the Y-axis " + laSensor.y);
  console.log("Linear acceleration along the Z-axis " + laSensor.z);
});
laSensor.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
