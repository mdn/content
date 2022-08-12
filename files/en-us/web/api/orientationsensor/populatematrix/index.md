---
title: OrientationSensor.populateMatrix()
slug: Web/API/OrientationSensor/populateMatrix
page-type: web-api-instance-method
tags:
  - API
  - Generic Sensor API
  - Method
  - Orientation Sensor API
  - OrientationSensor
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
  - populateMatrix()
browser-compat: api.OrientationSensor.populateMatrix
---
{{APIRef("Sensor API")}}

The **`populateMatrix`** method of the
{{domxref("OrientationSensor")}} interface populates the given target matrix with the
rotation matrix based on the latest sensor reading. The rotation matrix is shown
below.

![The formulas used to convert the sensor's quaternion to the provided matrix.](quaternion_to_rotation_matrix.png)

where:

- W = cos(θ/2)
- X = Vx \* sin(θ/2)
- Y = Vy \* sin(θ/2)
- Z = Vz \* sin(θ/2)

If a feature policy blocks use of a feature it is because your code is inconsistent
with the policies set on your server. This is not something that would ever be shown to
a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation
instructions.

## Syntax

```js
populateMatrix(targetMatrix)
```

Because {{domxref('OrientationSensor')}} is a base class, `populateMatrix`
may only be read from one of its derived classes.

### Parameters

- `targetMatrix`
  - : TBD

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
// TBD
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
