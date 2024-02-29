---
title: "OrientationSensor: populateMatrix() method"
short-title: populateMatrix()
slug: Web/API/OrientationSensor/populateMatrix
page-type: web-api-instance-method
browser-compat: api.OrientationSensor.populateMatrix
---

{{securecontext_header}}{{APIRef("Sensor API")}}

The **`populateMatrix()`** method of the
{{domxref("OrientationSensor")}} interface populates the given target matrix with the
rotation matrix based on the latest sensor reading. The rotation matrix is shown
below.

![The formulas used to convert the sensor's quaternion to the provided matrix.](quaternion_to_rotation_matrix.png)

where:

- W = cos(θ/2)
- X = Vx \* sin(θ/2)
- Y = Vy \* sin(θ/2)
- Z = Vz \* sin(θ/2)

## Syntax

```js-nolint
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
