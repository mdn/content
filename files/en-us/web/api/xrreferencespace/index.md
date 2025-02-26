---
title: XRReferenceSpace
slug: Web/API/XRReferenceSpace
page-type: web-api-interface
browser-compat: api.XRReferenceSpace
---

{{APIRef("WebXR Device API")}}{{secureContext_header}}

The WebXR Device API's **`XRReferenceSpace`** interface describes the coordinate system for a specific tracked entity or object within the virtual world using a specified tracking behavior. The tracking behavior is defined by the selected [reference space type](#reference_space_types). It expands upon the base class, {{domxref("XRSpace")}}, by adding support for several different tracking behaviors as well as to request a new reference space which describes the offset transform between the tracked object and another location in the world.

All reference spaces—with the sole exception being bounded reference spaces—are described using the `XRReferenceSpace` type. Bounded spaces are implemented as {{domxref("XRBoundedReferenceSpace")}} objects. These are special spaces which let you establish a perimeter within which it's "safe" for the viewer to move. For XR systems that allow the user to physically move around, such as those that track movement with a real-world camera, this boundary establishes the edges of the area the user is able to move around in, whether due to physical obstacles or due to limitations of the XR hardware. See the article [Using bounded reference spaces to protect the viewer](/en-US/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces) for more on using boundaries to keep the user from colliding with obstacles both physical and virtual.

{{InheritanceDiagram}}

## Instance properties

_`XRReferenceSpace` inherits the properties of {{domxref("EventTarget")}} but defines no additional properties._

## Instance methods

_`XRReferenceSpace` also inherits methods from {{domxref("EventTarget")}} in addition to the following methods._

- {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}}
  - : Creates and returns a new reference space object as the same type as the one on which you call the method (so, either `XRReferenceSpace` or {{domxref("XRBoundedReferenceSpace")}}). The new reference space can be used to transform a coordinate from the reference space of the object on which the method is called into a different coordinate space. This is useful for positioning objects while rendering, and to perform the needed transforms when changing the viewer's position and/or orientation in 3D space.

## Events

- {{domxref("XRReferenceSpace.reset_event", "reset")}}

  - : The `reset` event is sent to an `XRReferenceSpace` object when the browser detects a discontinuity between the tracked object's origin and the user's environment or location. This can happen, for example, after the user recalibrates their XR device, or if the device automatically adjusts its origin after losing and regaining tracking.

## Reference space types

The types of reference space are listed in the table below, with brief information about their use cases and which interface is used to implement them.

- `bounded-floor`
  - : An {{domxref("XRBoundedReferenceSpace")}} similar to the `local` type, except the user is not expected to move outside a predetermined boundary, given by the {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} in the returned object.
- `local`
  - : An `XRReferenceSpace` tracking space whose native origin is located near the viewer's position at the time the session was created. The exact position depends on the underlying platform and implementation. The user isn't expected to move much if at all beyond their starting position, and tracking is optimized for this use case. For devices with six degrees of freedom (6DoF) tracking, the `local` reference space tries to keep the origin stable relative to the environment.
- `local-floor`
  - : An `XRReferenceSpace` similar to the `local` type, except the starting position is placed in a safe location for the viewer to stand, where the value of the y axis is 0 at floor level. If that floor level isn't known, the {{Glossary("user agent")}} will estimate the floor level. If the estimated floor level is non-zero, the browser is expected to round it such a way as to avoid [fingerprinting](/en-US/docs/Glossary/Fingerprinting) (likely to the nearest centimeter).
- `unbounded`
  - : An `XRReferenceSpace` tracking space which allows the user total freedom of movement, possibly over extremely long distances from their origin point. The viewer isn't tracked at all; tracking is optimized for stability around the user's current position, so the native origin may drift as needed to accommodate that need.
- `viewer`
  - : An `XRReferenceSpace` tracking space whose native origin tracks the viewer's position and orientation. This is used for environments in which the user can physically move around, and is supported by all instances of {{domxref("XRSession")}}, both immersive and inline, though it's most useful for inline sessions. It's particularly useful when determining the distance between the viewer and an input, or when working with offset spaces. Otherwise, typically, one of the other reference space types will be used more often.

## Usage notes

### Creating an XRReferenceSpace

There are two situations in which you need to obtain an `XRReferenceSpace`. The first is when you set up your scene and need to obtain a reference space to represent the user's viewpoint on the world for the duration of the {{domxref("XRSession")}}. To do that, call the {{domxref("XRSession")}} method {{domxref("XRSession.requestReferenceSpace", "requestReferenceSpace()")}}, specifying the reference space type you wish to obtain.

```js
xrSession.requestReferenceSpace("local").then((refSpace) => {
  xrReferenceSpace = refSpace;
  // …
});
```

The other situation in which you may need to acquire a new reference space is if you need to move the origin to a new position; this is commonly done, for example, when your project allows the user to move through the environment using input devices such as the keyboard, mouse, touchpad, or game controls that are not connected through the XR device. Since the origin will typically be the user's location in the space, you need to change the origin to reflect their movement and any orientation changes they make.

To move or rotate the user's view of the world, you need to change the `XRReferenceSpace` used to represent that viewpoint. However, `XRReferenceSpace` is immutable, so you need to instead create a new reference space representing the changed viewpoint. This is easily done using the {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} method.

```js
let offsetTransform = new XRRigidTransform(
  { x: 2, y: 0, z: 1 },
  { x: 0, y: 0, z: 0, w: 1 },
);
xrReferenceSpace = xrReferenceSpace.getOffsetReferenceSpace(offsetTransform);
```

This replaces the `XRReferenceSpace` with a new one whose origin and orientation are adjusted to place the new origin at (2, 0, 1) relative to the current origin and rotated given a unit {{Glossary("quaternion")}} that orients the space to put the viewer facing straight up relative to the previous world orientation.

### Geometry

The native origin of any `XRReferenceSpace` is always configured so that +X is considered to be to the right, +Y is upward, and +Z is "backward" or toward the user.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fundamentals of WebXR](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Geometry and reference spaces in WebXR](/en-US/docs/Web/API/WebXR_Device_API/Geometry)
- [Viewpoints and viewers: Simulating cameras in WebXR](/en-US/docs/Web/API/WebXR_Device_API/Cameras)
- [Matrix math for the web](/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [Movement, orientation, and motion](/en-US/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Using bounded reference spaces to protect the user](/en-US/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
