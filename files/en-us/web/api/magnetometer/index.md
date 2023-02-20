---
title: Magnetometer
slug: Web/API/Magnetometer
page-type: web-api-interface
status:
  - experimental
browser-compat: api.Magnetometer
---

{{APIRef("Sensor API")}}{{SeeCompatTable}}

The **`Magnetometer`** interface of the [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs) provides information about the magnetic field as detected by the device's primary magnetometer sensor.

To use this sensor, the user must grant permission to the `'magnetometer'` device sensor through the [Permissions API](/en-US/docs/Web/API/Permissions_API). In addition, this feature may be blocked by a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set on your server.

{{InheritanceDiagram}}

## Constructor

- {{domxref("Magnetometer.Magnetometer", "Magnetometer()")}} {{Experimental_Inline}}
  - : Creates a new `Magnetometer` object.

## Instance properties

- {{domxref('Magnetometer.x')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a double containing the magnetic field around the device's x axis.
- {{domxref('Magnetometer.y')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a double containing the magnetic field around the device's y axis.
- {{domxref('Magnetometer.z')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a double containing the magnetic field around the device's z axis.

## Instance methods

_`Magnetometer` doesn't have own methods. However, it inherits methods from its parent interfaces, {{domxref("Sensor")}} and {{domxref("EventTarget")}}._

## Events

_`Magnetometer` doesn't have own events. However, it inherits events from its parent interface, {{domxref('Sensor')}}._

## Example

The magnetometer is typically read in the {{domxref('Sensor.reading_event', 'reading')}} event callback. In the example below this occurs sixty times a second.

```js
let magSensor = new Magnetometer({ frequency: 60 });

magSensor.addEventListener("reading", (e) => {
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
