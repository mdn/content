---
title: "XRRay: matrix property"
short-title: matrix
slug: Web/API/XRRay/matrix
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRRay.matrix
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The _read-only_ **`matrix`** property of the {{DOMxRef("XRRay")}} interface is a transform that can be used to position objects along the `XRRay`. This is a 4 by 4 matrix given as a 16 element {{jsxref("Float32Array")}} in column major order.

The transform from a ray originates at [0, 0, 0] and extends down the negative z-axis to the ray described by the `XRRay`'s `origin` and `direction`.

## Value

A 16 element {{jsxref("Float32Array")}} object representing a 4 by 4 matrix in column major order.

## Examples

### Using the `matrix` property

The `matrix` property can be used to position graphical representations of the ray when rendering.

```js
let origin = { x: 10.0, y: 10.0, z: 10.0, w: 1.0 };
let direction = { x: 10.0, y: 0.0, z: 0.0, w: 0.0 };
let ray = new XRRay(origin, direction);

// Render the ray using the `ray.matrix` transform
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Float32Array")}}
