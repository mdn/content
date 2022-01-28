---
title: Sensor
slug: Web/API/Sensor
tags:
  - API
  - Generic Sensor API
  - Interface
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
browser-compat: api.Sensor
---
{{APIRef("Sensor API")}}

The **`Sensor`** interface of the [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs) is the base class for all the other sensor interfaces. This interface cannot be used directly. Instead it provides properties, event handlers, and methods accessed by interfaces that inherit from it.

If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation instructions.

{{InheritanceDiagram}}

## Interfaces based on `Sensor`

Below is a list of interfaces based on the `Sensor` interface.

- {{domxref('Accelerometer')}}
- {{domxref('AmbientLightSensor')}}
- {{domxref('GravitySensor')}}
- {{domxref('Gyroscope')}}
- {{domxref('LinearAccelerationSensor')}}
- {{domxref('Magnetometer')}}
- {{domxref('OrientationSensor')}}

## Properties

- {{domxref('Sensor.activated')}} {{readonlyinline}}
  - : Returns a boolean value indicating whether the sensor is active.
- {{domxref('Sensor.hasReading')}} {{readonlyinline}}
  - : Returns a boolean value indicating whether the sensor has a reading.
- {{domxref('Sensor.timestamp')}} {{readonlyinline}}
  - : Returns the time stamp of the latest sensor reading.

## Methods

- {{domxref('Sensor.start()')}}
  - : Activates one of the sensors based on `Sensor`.
- {{domxref('Sensor.stop()')}}
  - : Deactivates one of the sensors based on `Sensor`.

## Events

- {{domxref('Sensor.activate_event', 'activate')}}
  - : Fired when a sensor becomes activated.
- {{domxref('Sensor.error_event', 'error')}}
  - : Fired when an exception occurs on a sensor.
- {{domxref('Sensor.reading_event', 'reading')}}
  - : Fired when a new reading is available on a sensor.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
