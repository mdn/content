---
title: Sensor APIs
slug: Web/API/Sensor_APIs
tags:
  - API
  - Generic Sensor API
  - Overview
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
---
{{APIRef("Sensor API")}}

The **Sensor APIs** are a set of interfaces built to a common design that expose device sensors in a consistent way to the web platform.

## Sensor APIs concepts and usage

Although the Generic Sensor API specification defines a {{domxref('Sensor')}} interface, as a web developer you will never use it. Instead you'll use one of its subclasses to retrieve specific kinds of sensor data. For example, the {{domxref('accelerometer')}} interface returns the acceleration of the device along all three axes at the time it is read.

Sensors may or may not correspond exactly to a physical device sensor. For example, the {{domxref('Gyroscope')}} interface corresponds exactly to a physical device interface. Alternatively, the {{domxref('AbsoluteOrientationSensor')}} interface provides information that is algorithmically agregated from two or more device sensors. These sensor types are referred to as _low-level_ and _high-level_ respectively. The latter type of sensor is also called a fusion sensor (alternatively, virtual or synthetic sensors).

### Feature detection

Sensor interfaces are only proxies for the underlying device sensors. Consequently, feature detection is more complicated for sensors than it is for other APIs. The presence of a sensor API does not tell you whether that API is connected to a real hardware sensor, whether that sensor works, if it's still connected, or even whether the user has granted access to it. Making all this information consistently available is costly to performance and battery life.

Therefore, feature detection for sensor APIs must include both detection of the APIs themselves and [defensive programming strategies (see below)](#defensive_programming).

The examples below show three methods for detecting sensor APIs. Additionally you can put object instantiation inside a {{jsxref('statements/try...catch', 'try...catch')}} block. Notice that detection through the {{domxref('Navigator')}} interface is not one of the available options.

```js
if (typeof Gyroscope === "function") {
    // run in circles...
}

if ("ProximitySensor" in window) {
    // watch out!
}

if (window.AmbientLightSensor) {
    // go dark...
}
```

### Defensive programming

As stated in Feature Detection, checking for a particular sensor API is insufficient for feature detection. The existence of an actual sensor must be confirmed as well. This is where defensive programming is needed. Defensive programming requires three strategies.

- Checking for thrown errors when instantiating a sensor object.
- Listening for errors thrown during its use.
- Handling the errors gracefully so that the user experience is enhanced rather than degraded.

The code example below illustrates these principles. The {{jsxref('statements/try...catch', 'try...catch')}} block catches errors thrown during sensor instantiation. It implements a handler for {{domxref('Sensor.onerror')}} to catch errors thrown during use. The only time anything is shown to the user is when [permissions](/en-US/docs/Web/API/Permissions_API) need to be requested and when the sensor type isn't supported by the device.

> **Note:** If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation instructions.

```js
let accelerometer = null;
try {
    accelerometer = new Accelerometer({ referenceFrame: 'device' });
    accelerometer.addEventListener('error', event => {
        // Handle runtime errors.
        if (event.error.name === 'NotAllowedError') {
            // Branch to code for requesting permission.
        } else if (event.error.name === 'NotReadableError' ) {
            console.log('Cannot connect to the sensor.');
        }
    });
    accelerometer.addEventListener('reading', () => reloadOnShake(accelerometer));
    accelerometer.start();
} catch (error) {
    // Handle construction errors.
    if (error.name === 'SecurityError') {
        // See the note above about feature policy.
        console.log('Sensor construction was blocked by a feature policy.');
    } else if (error.name === 'ReferenceError') {
        console.log('Sensor is not supported by the User Agent.');
    } else {
        throw error;
    }
}
```

### Permissions and Feature Policy

Sensor readings may not be taken unless the user grants permission to a specific sensor type. Do this using the [Permissions API](/en-US/docs/Web/API/Permissions_API). A brief example, shown below, requests permission before attempting to use the sensor.

```js
navigator.permissions.query({ name: 'accelerometer' })
.then(result => {
  if (result.state === 'denied') {
    console.log('Permission to use accelerometer sensor is denied.');
    return;
  }
  // Use the sensor.
});
```

An alternative approach is to attempt to use the error and listen for the `SecurityError`.

```js
const sensor = new AbsoluteOrientationSensor();
sensor.start();
sensor.onerror = event => {
  if (event.error.name === 'SecurityError')
    console.log("No permissions to use AbsoluteOrientationSensor.");
};
```

The following table describes for each sensor type, the name required for the Permissions API, the {{HTMLElement('iframe')}} element's `allow` attribute and the {{httpheader('Feature-Policy')}} directive.

| Sensor                      | Permission/Feature Policy Name                         |
| --------------------------- | ------------------------------------------------------ |
| `AbsoluteOrientationSensor` | `'accelerometer'`, `'gyroscope'`, and `'magnetometer'` |
| `Accelerometer`             | `'accelerometer'`                                      |
| `AmbientLightSensor`        | `'ambient-light-sensor'`                               |
| `GravitySensor`             | `'accelerometer'`                                      |
| `Gyroscope`                 | `'gyroscope'`                                          |
| `LinearAccelerationSensor`  | `'accelerometer'`                                      |
| `Magnetometer`              | `'magnetometer'`                                       |
| `RelativeOrientationSensor` | `'accelerometer'`, and `'gyroscope'`                   |

### Readings

Sensor readings are received through the {{domxref('Sensor.onreading')}} callback which is inherited by all sensor types. Reading frequency is decided by you, accomplished with an option passed to a sensor's constructor. The option is a number that specifies the number of readings per second. A whole number or decimal may be used, the latter for frequencies less than a second. The actual reading frequency depends device hardware and consequently may be less than requested.

The following example illustrates this using the {{domxref('Magnetometer')}} sensor.

```js
let magSensor = new Magnetometer({frequency: 60});

magSensor.addEventListener('reading', e => {
  console.log("Magnetic field along the X-axis " + magSensor.x);
  console.log("Magnetic field along the Y-axis " + magSensor.y);
  console.log("Magnetic field along the Z-axis " + magSensor.z);
})
magSensor.addEventListener('error', event => {
  console.log(event.error.name, event.error.message);
})
magSensor.start();
```

## Interfaces

- {{domxref('AbsoluteOrientationSensor')}}{{securecontext_inline}}
  - : Describes the device's physical orientation in relation to the Earth's reference coordinate system.
- {{domxref('Accelerometer')}}{{securecontext_inline}}
  - : Provides the acceleration applied to the device along all three axes.
- {{domxref('AmbientLightSensor')}}{{securecontext_inline}}
  - : Returns the current light level or illuminance of the ambient light around the hosting device.
- {{domxref('GravitySensor')}}{{securecontext_inline}}
  - : Provides the gravity applied to the device along all three axes.
- {{domxref('Gyroscope')}}{{securecontext_inline}}
  - : Provides the angular velocity of the device along all three axes.
- {{domxref('LinearAccelerationSensor')}}{{securecontext_inline}}
  - : Provides the acceleration applied to the device along all three axes, but without the contribution of gravity.
- {{domxref('Magnetometer')}}{{securecontext_inline}}
  - : Provides information about the magnetic field as detected by the device's primary magnetometer sensor.
- {{domxref('OrientationSensor')}}{{securecontext_inline}}
  - : The base class for the {{domxref('AbsoluteOrientationSensor')}}. This interface cannot be used directly, instead it provides properties and methods accessed by interfaces that inherit from it.
- {{domxref('RelativeOrientationSensor')}}{{securecontext_inline}}
  - : Describes the device's physical orientation without regard to the Earth's reference coordinate system.
- {{domxref('Sensor')}}{{securecontext_inline}}
  - : The base class for all the other sensor interfaces. This interface cannot be used directly. Instead it provides properties, event handlers, and methods accessed by interfaces that inherit from it.
- {{domxref('SensorErrorEvent')}}{{securecontext_inline}}
  - : Provides information about errors thrown by a {{domxref('Sensor')}} or related interface.

## Specifications

| Specification                                                   |
| --------------------------------------------------------------- |
| [Generic Sensor API](https://w3c.github.io/sensors/)            |
| [Accelerometer](https://w3c.github.io/accelerometer/)           |
| [Ambient Light Sensor](https://w3c.github.io/ambient-light/)    |
| [Gyroscope](https://w3c.github.io/gyroscope/)                   |
| [Magnetometer](https://w3c.github.io/magnetometer/)             |
| [Orientation Sensor](https://w3c.github.io/orientation-sensor/) |

## Browser compatibility

{{Compat("api.Sensor")}}
