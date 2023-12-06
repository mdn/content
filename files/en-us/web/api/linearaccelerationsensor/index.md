---
title: LinearAccelerationSensor
slug: Web/API/LinearAccelerationSensor
page-type: web-api-interface
browser-compat: api.LinearAccelerationSensor
---

{{APIRef("Sensor API")}}

The **`LinearAccelerationSensor`** interface of the [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs) provides on each reading the acceleration applied to the device along all three axes, but without the contribution of gravity.

To use this sensor, the user must grant permission to the `'accelerometer'` device sensor through the [Permissions API](/en-US/docs/Web/API/Permissions_API). In addition, this feature may be blocked by a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set on your server.

{{InheritanceDiagram}}

## Constructor

- {{domxref("LinearAccelerationSensor.LinearAccelerationSensor", "LinearAccelerationSensor()")}}
  - : Creates a new `LinearAccelerationSensor` object.

## Instance properties

_Inherits properties from its ancestors, {{domxref('Accelerometer')}}, {{domxref("Sensor")}}, and {{domxref("EventTarget")}}._

## Instance methods

_`LinearAccelerationSensor` doesn't have own methods. However, it inherits methods from its parent interfaces, {{domxref("Sensor")}} and {{domxref("EventTarget")}}._

## Events

_`LinearAccelerationSensor` doesn't have own events. However, it inherits events from its parent interface, {{domxref('Sensor')}}._

## Example

Linear acceleration is typically read in the {{domxref('Sensor.reading_event', 'reading')}} event callback. In the example below this occurs sixty times a second.

```js
let laSensor = new LinearAccelerationSensor({ frequency: 60 });

laSensor.addEventListener("reading", (e) => {
  console.log(`Linear acceleration along the X-axis ${laSensor.x}`);
  console.log(`Linear acceleration along the Y-axis ${laSensor.y}`);
  console.log(`Linear acceleration along the Z-axis ${laSensor.z}`);
});
laSensor.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
