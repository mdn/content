---
title: "XRRay: origin property"
short-title: origin
slug: Web/API/XRRay/origin
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRRay.origin
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The _read-only_ **`origin`** property of the {{DOMxRef("XRRay")}} interface is a {{domxref("DOMPointReadOnly")}} representing the 3-dimensional point in space that the ray originates from, in meters.

## Value

A {{domxref("DOMPointReadOnly")}} object.

## Examples

### Using the `origin` property

The `origin` property contains the 3-dimensional point in space that the ray originates from, in meters.

```js
let origin = { x: 10.0, y: 10.0, z: 10.0, w: 1.0 };
let direction = { x: 10.0, y: 0.0, z: 0.0, w: 0.0 };
let ray = new XRRay(origin, direction);

ray.origin;
// returns DOMPointReadOnly {x : 10.0, y : 10.0, z : 10.0, w : 1.0}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMPointReadOnly")}}
