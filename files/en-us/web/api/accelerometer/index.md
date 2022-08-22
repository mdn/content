---
title: Accelerometer
slug: Web/API/Accelerometer
page-type: web-api-interface
tags:
  - API
  - Accelerometer
  - Accelerometer API
  - Generic Sensor API
  - Interface
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
  - Experimental
browser-compat: api.Accelerometer
---
{{APIRef("Sensor API")}}{{SeeCompatTable}}

The **`Accelerometer`** interface of the [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs) provides on each reading the acceleration applied to the device along all three axes.

To use this sensor, the user must grant permission to the `'accelerometer'`, device sensor through the [Permissions API](/en-US/docs/Web/API/Permissions_API).

If a feature policy blocks the use of a feature, it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation instructions.

{{InheritanceDiagram}}

## Constructor

- {{domxref("Accelerometer.Accelerometer()", "Accelerometer()")}} {{Experimental_Inline}}
  - : Creates a new `Accelerometer` object.

## Properties

_In addition to the properties listed below, `Accelerometer` inherits properties from its parent interfaces, {{domxref("Sensor")}} and {{domxref("EventTarget")}}._

- {{domxref('Accelerometer.x')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a double containing the acceleration of the device along the device's x axis.
- {{domxref('Accelerometer.y')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a double containing the acceleration of the device along the device's y axis.
- {{domxref('Accelerometer.z')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a double containing the acceleration of the device along the device's z axis.

## Methods

_`Accelerometer` doesn't have own methods. However, it inherits methods from its parent interfaces, {{domxref("Sensor")}} and {{domxref("EventTarget")}}._

## Events

_`Accelerometer` doesn't have own events. However, it inherits events from its parent interface, {{domxref('Sensor')}}._

## Example

Acceleration is typically read in the {{domxref('Sensor.reading_event', 'reading')}} event callback. In the example below this occurs sixty times a second.

```js
let acl = new Accelerometer({frequency: 60});
acl.addEventListener('reading', () => {
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
