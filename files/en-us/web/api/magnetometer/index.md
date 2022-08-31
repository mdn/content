---
title: Magnetometer
slug: Web/API/Magnetometer
page-type: web-api-interface
tags:
  - API
  - Generic Sensor API
  - Interface
  - Magnetometer
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
  - Experimental
browser-compat: api.Magnetometer
---
{{APIRef("Sensor API")}}{{SeeCompatTable}}

The **`Magnetometer`** interface of the [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs) provides information about the magnetic field as detected by the device's primary magnetometer sensor.

To use this sensor, the user must grant permission to the `'magnetometer'` device sensor through the [Permissions API](/en-US/docs/Web/API/Permissions_API).

If a feature policy blocks use of a feature, it's because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation instructions.

{{InheritanceDiagram}}

## Constructor

- {{domxref("Magnetometer.Magnetometer", "Magnetometer()")}} {{Experimental_Inline}}
  - : Creates a new `Magnetometer` object.

## Properties

- {{domxref('Magnetometer.x')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a double containing the magnetic field around the device's x axis.
- {{domxref('Magnetometer.y')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a double containing the magnetic field around the device's y axis.
- {{domxref('Magnetometer.z')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a double containing the magnetic field around the device's z axis.

## Methods

_`Magnetometer` doesn't have own methods. However, it inherits methods from its parent interfaces, {{domxref("Sensor")}} and {{domxref("EventTarget")}}._

## Events

_`Magnetometer` doesn't have own events. However, it inherits events from its parent interface, {{domxref('Sensor')}}._

## Example

The magnetometer is typically read in the {{domxref('Sensor.reading_event', 'reading')}} event callback. In the example below this occurs sixty times a second.

```js
let magSensor = new Magnetometer({frequency: 60});

magSensor.addEventListener('reading', (e) => {
  console.log(`Magnetic field along the X-axis ${magSensor.x}`);
  console.log(`Magnetic field along the Y-axis ${magSensor.y}`);
  console.log(`Magnetic field along the Z-axis ${magSensor.z}`);
});
magSensor.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
