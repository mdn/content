---
title: "OrientationSensor: quaternion property"
short-title: quaternion
slug: Web/API/OrientationSensor/quaternion
page-type: web-api-instance-property
browser-compat: api.OrientationSensor.quaternion
---

{{securecontext_header}}{{APIRef("Sensor API")}}

The **`quaternion`** read-only
property of the {{domxref("OrientationSensor")}} interface returns a four element
{{jsxref('Array')}} whose elements contain the components of the unit
{{Glossary("quaternion")}} representing the device's orientation.

Because {{domxref('OrientationSensor')}} is a base class, `quaternion` may
only be read from one of its derived classes.

## Value

An {{jsxref('Array')}} whose values are the x, y, z, and w components of the quaternion
representing the device orientation.

## Examples

### Reading an orientation quaternion

```js
const sensor = new AbsoluteOrientationSensor({ frequency: 30 });

sensor.addEventListener("reading", () => {
  console.log(sensor.quaternion); // e.g., [0, 0, 0, 1]
});
sensor.addEventListener("error", (event) => {
  console.error(event.error);
});
sensor.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
