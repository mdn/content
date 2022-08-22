---
title: XRRigidTransform.orientation
slug: Web/API/XRRigidTransform/orientation
page-type: web-api-instance-property
tags:
  - API
  - AR
  - Orientation
  - Property
  - Read-only
  - Reality
  - Reference
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRRigidTransform
  - augmented
  - rotation
browser-compat: api.XRRigidTransform.orientation
---
{{APIRef("WebXR Device API")}}

The read-only {{domxref("XRRigidTransform")}} property
**`orientation`** is a {{domxref("DOMPointReadOnly")}}
containing a normalized {{Glossary("quaternion")}} (also called a **unit
quaternion** or **[versor](https://en.wikipedia.org/wiki/Versor)**)
specifying the rotational component of the transform represented by the object.
If you specify a quaternion whose length is not exactly 1.0 meters, it will be
normalized for you.

## Value

A {{domxref("DOMPointReadOnly")}} object which contains a unit quaternion providing the
orientation component of the transform. As a unit quaternion, the length of the returned
quaternion is always 1.0 meters.

## Examples

To create a reference space which is oriented to look straight up, positioned 2 meters
off of ground level:

```js
xrReferenceSpace = refSpace.getOffsetReferenceSpace(
  new XRRigidTransform({y: -2}, {x: 0.0, y: 1.0, z: 0.0, w: 1.0})
);
```

The unit quaternion specified here is \[0.0, 1.0, 0.0, 1.0] to indicate that the object
should be facing directly along the _y_ axis.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Movement, orientation, and motion](/en-US/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Unit quaternions](https://en.wikipedia.org/wiki/Versor)
- [Quaternions and spatial rotation](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation)
