---
title: XRRay.matrix
slug: Web/API/XRRay/matrix
tags:
  - API
  - AR
  - Augmented Reality
  - Experimental
  - Property
  - Reference
  - VR
  - WebXR
  - WebXR Device API
browser-compat: api.XRRay.matrix
---
{{APIRef("WebXR Device API")}}

The _read-only_ **`matrix`** property of the {{DOMxRef("XRRay")}} interface is a {{jsxref("Float32Array")}} matrix which represents a transform that can be used to position objects along the `XRRay`.

The transform from a ray originates at [0, 0, 0] and extends down the negative z-axis to the ray described by the `XRRay`'s `origin` and `direction`.

## Value

A {{jsxref("Float32Array")}} object.

## Examples

### Using the `matrix` property

The `matrix` property can be used to position graphical representations of the ray when rendering.

```js
let origin = {x : 10.0, y : 10.0, z : 10.0, w : 1.0};
let direction = {x : 10.0, y : 0.0, z : 0.0, w : 0.0};
let ray = new XRRay(origin, direction);

// Render the ray using the `ray.matrix` transform
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Float32Array")}}
