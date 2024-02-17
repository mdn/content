---
title: OrientationSensor
slug: Web/API/OrientationSensor
page-type: web-api-interface
browser-compat: api.OrientationSensor
---

{{securecontext_header}}{{APIRef("Sensor API")}}

The **`OrientationSensor`** interface of the [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs) is the base class for orientation sensors. This interface cannot be used directly. Instead it provides properties and methods accessed by interfaces that inherit from it.

This feature may be blocked by a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set on your server.

{{InheritanceDiagram}}

## Interfaces based on OrientationSensor

Below is a list of interfaces based on the OrientationSensor interface.

- {{domxref('AbsoluteOrientationSensor')}}
- {{domxref('RelativeOrientationSensor')}}

## Instance properties

- {{domxref("OrientationSensor.quaternion")}} {{ReadOnlyInline}}
  - : Returns a four element {{jsxref('Array')}} whose elements contain the components of the unit quaternion representing the device's orientation.

## Instance methods

- {{domxref("OrientationSensor.populateMatrix()")}}
  - : Populates the given object with the rotation matrix based on the latest sensor reading.

## Examples

### Basic Example

The following example, which is loosely based on [Intel's Orientation Phone demo](https://intel.github.io/generic-sensor-demos/orientation-phone/), instantiates an `AbsoluteOrientationSensor` with a frequency of 60 times a second. On each reading it uses {{domxref('OrientationSensor.quaternion')}} to rotate a visual model of a phone.

```js
const options = { frequency: 60, referenceFrame: "device" };
const sensor = new AbsoluteOrientationSensor(options);

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
const sensor = new AbsoluteOrientationSensor();
Promise.all([
  navigator.permissions.query({ name: "accelerometer" }),
  navigator.permissions.query({ name: "magnetometer" }),
  navigator.permissions.query({ name: "gyroscope" }),
]).then((results) => {
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
