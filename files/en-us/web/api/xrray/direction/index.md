---
title: XRRay.direction
slug: Web/API/XRRay/direction
page-type: web-api-instance-property
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
browser-compat: api.XRRay.direction
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The _read-only_ **`direction`** property of the {{DOMxRef("XRRay")}} interface is a {{domxref("DOMPointReadOnly")}} representing the ray's 3-dimensional directional vector, normalized to a [unit vector](https://en.wikipedia.org/wiki/Unit_vector) with a length of 1.0.

## Value

A {{domxref("DOMPointReadOnly")}} object.

## Examples

### Using the `direction` property

The `direction` property contains the normalized ray's 3-dimensional directional vector.

```js
let origin = {x : 10.0, y : 10.0, z : 10.0, w : 1.0};
let direction = {x : 10.0, y : 0.0, z : 0.0, w : 0.0};
let ray = new XRRay(origin, direction);

ray.direction;
// returns DOMPointReadOnly {x : 1.0, y : 0.0, z : 0.0, w : 0.0}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMPointReadOnly")}}
