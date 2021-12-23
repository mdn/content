---
title: AmbientLightSensor.illuminance
slug: Web/API/AmbientLightSensor/illuminance
tags:
  - API
  - Ambient Light Level API
  - Generic Sensor API
  - Property
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
  - illuminance
browser-compat: api.AmbientLightSensor.illuminance
---
{{APIRef("Sensor API")}}{{SeeCompatTable}}

The **`illuminance`** property of the {{domxref("AmbientLightSensor")}} interface returns the current light level in [lux](https://en.wikipedia.org/wiki/Lux) of the ambient light level around the hosting device.

If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation instructions.

## Syntax

```js
var level = AmbientLightSensor.illuminance
```

### Value

A {{jsxref('Number')}} indicating the current light level in lux.

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
