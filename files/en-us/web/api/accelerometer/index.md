---
title: Accelerometer
slug: Web/API/Accelerometer
page-type: web-api-interface
status:
  - experimental
browser-compat: api.Accelerometer
---

{{APIRef("Sensor API")}}{{SeeCompatTable}}

The **`Accelerometer`** interface of the [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs) provides on each reading the acceleration applied to the device along all three axes.

To use this sensor, the user must grant permission to the `'accelerometer'`, device sensor through the [Permissions API](/en-US/docs/Web/API/Permissions_API).

This feature may be blocked by a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set on your server.

{{InheritanceDiagram}}

## Constructor

- {{domxref("Accelerometer.Accelerometer()", "Accelerometer()")}} {{Experimental_Inline}}
  - : Creates a new `Accelerometer` object.

## Instance properties

_In addition to the properties listed below, `Accelerometer` inherits properties from its parent interfaces, {{domxref("Sensor")}} and {{domxref("EventTarget")}}._

- {{domxref('Accelerometer.x')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a double containing the acceleration of the device along the device's x axis.
- {{domxref('Accelerometer.y')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a double containing the acceleration of the device along the device's y axis.
- {{domxref('Accelerometer.z')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a double containing the acceleration of the device along the device's z axis.

## Instance methods

_`Accelerometer` doesn't have own methods. However, it inherits methods from its parent interfaces, {{domxref("Sensor")}} and {{domxref("EventTarget")}}._

## Events

_`Accelerometer` doesn't have own events. However, it inherits events from its parent interface, {{domxref('Sensor')}}._

## Example

Acceleration is typically read in the {{domxref('Sensor.reading_event', 'reading')}} event callback. In the example below this occurs sixty times a second.

```js
const acl = new Accelerometer({ frequency: 60 });
acl.addEventListener("reading", () => {
  console.log(`Acceleration along the X-axis ${acl.x}`);
  console.log(`Acceleration along the Y-axis ${acl.y}`);
  console.log(`Acceleration along the Z-axis ${acl.z}`);
});

acl.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
