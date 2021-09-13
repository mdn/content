---
title: AbsoluteOrientationSensor
slug: Web/API/AbsoluteOrientationSensor
tags:
  - API
  - AbsoluteOrientationSensor
  - Generic Sensor API
  - Interface
  - Orientation Sensor API
  - OrientationSensor
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
browser-compat: api.AbsoluteOrientationSensor
---
{{APIRef("Sensor API")}}

The **`AbsoluteOrientationSensor`** interface of the [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs) describes the device's physical orientation in relation to the Earth's reference coordinate system.

To use this sensor, the user must grant permission to the `'accelerometer'`, `'gyroscope'`, and `'magnetometer'` device sensors through the [Permissions API](/en-US/docs/Web/API/Permissions_API).

If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation instructions.

## Constructor

- {{domxref("AbsoluteOrientationSensor.AbsoluteOrientationSensor", "AbsoluteOrientationSensor()")}}
  - : Creates a new `AbsoluteOrientationSensor` object.

## Properties

_No specific properties; inherits methods from its ancestors {{domxref('OrientationSensor')}} and {{domxref('Sensor')}}._

### Event handlers

_No specific event handlers; inherits methods from its ancestor, {{domxref('Sensor')}}._

## Methods

_No specific methods; inherits methods from its ancestors {{domxref('OrientationSensor')}} and {{domxref('Sensor')}}._

## Examples

### Basic Example

The following example, which is loosely based on [Intel's Orientation Phone demo](https://intel.github.io/generic-sensor-demos/orientation-phone/), instantiates an `AbsoluteOrientationSensor` with a frequency of 60 times a second. On each reading it uses {{domxref('OrientationSensor.quaternion')}} to rotate a visual model of a phone.

```js
const options = { frequency: 60, referenceFrame: 'device' };
const sensor = new AbsoluteOrientationSensor(options);

sensor.addEventListener('reading', () => {
  // model is a Three.js object instantiated elsewhere.
  model.quaternion.fromArray(sensor.quaternion).inverse();
});
sensor.addEventListener('error', error => {
  if (event.error.name == 'NotReadableError') {
    console.log("Sensor is not available.");
  }
});
sensor.start();
```

### Permissions Example

Using orientation sensors requires requesting permissions for multiple device sensors. Because the {{domxref('Permissions')}} interface uses promises, a good way to request permissions is to use {{jsxref('Promise.all')}}.

```js
const sensor = new AbsoluteOrientationSensor();
Promise.all([navigator.permissions.query({ name: "accelerometer" }),
             navigator.permissions.query({ name: "magnetometer" }),
             navigator.permissions.query({ name: "gyroscope" })])
       .then(results => {
         if (results.every(result => result.state === "granted")) {
           sensor.start();
           ...
         } else {
           console.log("No permissions to use AbsoluteOrientationSensor.");
         }
   });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
