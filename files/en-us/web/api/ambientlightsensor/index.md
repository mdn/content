---
title: AmbientLightSensor
slug: Web/API/AmbientLightSensor
tags:
  - API
  - Ambient Light Sensor API
  - AmbientLightSensor
  - Generic Sensor API
  - Interface
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
browser-compat: api.AmbientLightSensor
---
{{APIRef("Sensor API")}}{{SeeCompatTable}}

The **`AmbientLightSensor`** interface of the [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs) returns the current light level or illuminance of the ambient light around the hosting device.

To use this sensor, the user must grant permission to the `'ambient-light-sensor'` device sensor through the [Permissions API](/en-US/docs/Web/API/Permissions_API).

If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation instructions.

## Constructor

- {{domxref("AmbientLightSensor.AmbientLightSensor()", "AmbientLightSensor()")}}
  - : Creates a new `AmbientLightSensor` object.

## Properties

- {{domxref('AmbientLightSensor.illuminance')}}
  - : Returns the current light level in [lux](https://en.wikipedia.org/wiki/Lux) of the ambient light level around the hosting device.

## Example

```js
if ( 'AmbientLightSensor' in window ) {
  const sensor = new AmbientLightSensor();
  sensor.onreading = () => {
    console.log('Current light level:', sensor.illuminance);
  };
  sensor.onerror = (event) => {
    console.log(event.error.name, event.error.message);
  };
  sensor.start();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
