---
title: RelativeOrientationSensor
slug: Web/API/RelativeOrientationSensor
page-type: web-api-interface
browser-compat: api.RelativeOrientationSensor
---

{{APIRef("Sensor API")}}

The **`RelativeOrientationSensor`** interface of the [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs) describes the device's physical orientation without regard to the Earth's reference coordinate system.

To use this sensor, the user must grant permission to the `'accelerometer'`, and `'gyroscope'` device sensors through the [Permissions API](/en-US/docs/Web/API/Permissions_API). In addition, this feature may be blocked by a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set on your server.

{{InheritanceDiagram}}

## Constructor

- {{domxref("RelativeOrientationSensor.RelativeOrientationSensor", "RelativeOrientationSensor()")}}
  - : Creates a new `RelativeOrientationSensor` object.

## Instance properties

_No specific properties; inherits properties from its ancestors {{domxref('OrientationSensor')}} and {{domxref('Sensor')}}._

## Instance methods

_No specific methods; inherits methods from its ancestors {{domxref('OrientationSensor')}} and {{domxref('Sensor')}}._

## Events

_No specific events; inherits events from its ancestor, {{domxref('Sensor')}}._

## Examples

### Basic Example

The following example, which is loosely based on [Intel's Orientation Phone demo](https://intel.github.io/generic-sensor-demos/orientation-phone/), instantiates an `RelativeOrientationSensor` with a frequency of 60 times a second.

> **Note:** The Intel demo this is based on uses the `AbsoluteOrientationSensor`. On each reading it uses {{domxref('OrientationSensor.quaternion')}} to rotate a visual model of a phone.

```js
const options = { frequency: 60, referenceFrame: "device" };
const sensor = new RelativeOrientationSensor(options);

sensor.addEventListener("reading", () => {
  // model is a Three.js object instantiated elsewhere.
  model.quaternion.fromArray(sensor.quaternion).inverse();
});
sensor.addEventListener("error", (error) => {
  if (event.error.name === "NotReadableError") {
    console.log("Sensor is not available.");
  }
});
sensor.start();
```

### Permissions Example

Using orientation sensors requires requesting permissions for multiple device sensors. Because the {{domxref('Permissions')}} interface uses promises, a good way to request permissions is to use {{jsxref('Promise.all')}}.

```js
const sensor = new RelativeOrientationSensor();
Promise.all([
  navigator.permissions.query({ name: "accelerometer" }),
  navigator.permissions.query({ name: "gyroscope" }),
]).then((results) => {
  if (results.every((result) => result.state === "granted")) {
    sensor.start();
    // ...
  } else {
    console.log("No permissions to use RelativeOrientationSensor.");
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
