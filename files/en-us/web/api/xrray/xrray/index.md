---
title: "XRRay: XRRay() constructor"
short-title: XRRay()
slug: Web/API/XRRay/XRRay
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.XRRay.XRRay
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`XRRay()`** constructor creates a new {{domxref("XRRay")}} object which is a geometric ray described by an origin point and a direction vector.

## Syntax

```js-nolint
new XRRay()
new XRRay(origin)
new XRRay(origin, direction)
new XRRay(transform)
```

### Parameters

- `origin` {{Optional_Inline}}
  - : A point object defining the 3-dimensional point in space that the ray originates from, in meters. All dimensions are optional, however, if provided, the origin's `w` property must be 1.0. The object is initialized to `{ x: 0.0, y: 0.0, z: 0.0, w: 1.0 }` by default.
- `direction` {{Optional_Inline}}
  - : A vector object defining the ray's 3-dimensional directional vector. All dimensions are optional, however, if provided, the direction's `w` property must be 0.0. The object is initialized to: `{ x: 0.0, y: 0.0, z: -1.0, w: 0.0 }` by default.
- `transform` {{Optional_Inline}}
  - : An {{domxref("XRRigidTransform")}} object representing the position and orientation of the ray.

### Return value

A newly-created {{domxref("XRRay")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if one of the following conditions is met:
    - all of `direction`'s `x`, `y`, and `z` coordinates are zero.
    - `direction`'s `w` coordinate is not 0.0.
    - `origin`'s `w` coordinate is not 1.0.

## Examples

### Creating `XRRay` objects

The `XRRay()` constructor allows to creating new rays by either providing an `origin` point and a `direction` vector, or by passing in an {{domxref("XRRigidTransform")}} object.

```js
// Default configuration
let ray1 = new XRRay();

// Specifying origin, leaving direction as default
let ray2 = new XRRay({ y: 0.5 });

// Specifying both, origin and direction
let origin = { x: 10.0, y: 10.0, z: 10.0, w: 1.0 };
let direction = { x: 10.0, y: 0.0, z: 0.0, w: 0.0 };
let ray3 = new XRRay(origin, direction);

// Using DOMPoint.fromPoint
let ray4 = new XRRay(DOMPoint.fromPoint(origin), DOMPoint.fromPoint(direction));

// Using rigid transform
let rigidTransform = new XRRigidTransform(
  DOMPoint.fromPoint(origin),
  DOMPoint.fromPoint(direction),
);
let ray5 = new XRRay(rigidTransform);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMPoint")}}
- {{domxref("DOMPoint.fromPoint()")}}
