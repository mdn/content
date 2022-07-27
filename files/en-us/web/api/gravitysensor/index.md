---
title: GravitySensor
slug: Web/API/GravitySensor
page-type: web-api-interface
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

{{InheritanceDiagram}}

## Constructor

- {{domxref("GravitySensor.GravitySensor", "GravitySensor()")}}
  - : Creates a new `GravitySensor` object.

## Properties

_Inherits properties from its ancestors, {{domxref('Accelerometer')}}, {{domxref('Sensor')}}, and {{domxref('EventTarget')}}._

## Methods

_`GravitySensor` doesn't have own methods. However, it inherits methods from its parent interfaces, {{domxref("Sensor")}} and {{domxref("EventTarget")}}._

## Events

_`GravitySensor` doesn't have own events. However, it inherits events from its parent interface, {{domxref('Sensor')}}._

## Example

Gravity is typically read in the {{domxref('Sensor.reading_event', 'reading')}} event callback. In the example below this occurs sixty times a second.

```js
let gravitySensor = new GravitySensor({frequency: 60});

gravitySensor.addEventListener("reading", (e) => {
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
