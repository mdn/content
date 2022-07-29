---
title: OrientationSensor
slug: Web/API/OrientationSensor
page-type: web-api-interface
tags:
  - API
  - Generic Sensor API
  - Interface
  - Orientation Sensor API
  - OrientationSensor
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
browser-compat: api.OrientationSensor
---
{{APIRef("Sensor API")}}

The **`OrientationSensor`** interface of the [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs) is the base class for orientation sensors. This interface cannot be used directly. Instead it provides properties and methods accessed by interfaces that inherit from it.

If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation instructions.

{{InheritanceDiagram}}

## Interfaces based on OrientationSensor

Below is a list of interfaces based on the OrientationSensor interface.

- {{domxref('AbsoluteOrientationSensor')}}
- {{domxref('RelativeOrientationSensor')}}

## Properties

- {{domxref("OrientationSensor.quaternion")}}
  - : Returns a four element {{jsxref('Array')}} whose elements contain the components of the unit quaternion representing the device's orientation.

## Methods

- {{domxref("OrientationSensor.populateMatrix()")}}
  - : Populates the given object with the rotation matrix based on the latest sensor reading. The rotation matrix is shown below.

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
sensor.addEventListener('error', (error) => {
   if (event.error.name === 'NotReadableError') {
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
       .then((results) => {
         if (results.every((result) => result.state === "granted")) {
           sensor.start();
           // …
         } else {
           console.log("No permissions to use AbsoluteOrientationSensor.");
         }
   });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
