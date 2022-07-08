---
title: OrientationSensor.quaternion
slug: Web/API/OrientationSensor/quaternion
page-type: web-api-instance-property
tags:
  - API
  - Generic Sensor API
  - Orientation Sensor API
  - OrientationSensor
  - Property
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
browser-compat: api.OrientationSensor.quaternion
---
{{APIRef("Sensor API")}}

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

```js
// TBD
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
