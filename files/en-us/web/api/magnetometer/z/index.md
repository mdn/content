---
title: Magnetometer.z
slug: Web/API/Magnetometer/z
tags:
  - API
  - Generic Sensor API
  - Magnetometer
  - Property
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
  - z
browser-compat: api.Magnetometer.z
---
{{APIRef("Sensor API")}}

The **`z`** read-only property of the
{{domxref("Magnetometer")}} interface returns a double-precision integer containing
the magnetic field around the device's z axis.

If a feature policy blocks use of a feature it is because your code is inconsistent
with the policies set on your server. This is not something that would ever be shown to
a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation
instructions.

## Syntax

```js
var magnetometerz = magnetometer.z
```

### Value

A {{jsxref('Number')}}.

## Example

The magnetometer is typically read in the {{domxref('Sensor.onreading')}} event
callback. In the example below this occurs sixty times a second.

```js
let magSensor = new Magnetometer({frequency: 60});

magSensor.addEventListener('reading', e => {
  console.log("Magnetic field along the X-axis " + magSensor.x);
  console.log("Magnetic field along the Y-axis " + magSensor.y);
  console.log("Magnetic field along the Z-axis " + magSensor.z);
});
magSensor.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
