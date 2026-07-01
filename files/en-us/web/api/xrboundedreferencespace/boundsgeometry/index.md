---
title: "XRBoundedReferenceSpace: boundsGeometry property"
short-title: boundsGeometry
slug: Web/API/XRBoundedReferenceSpace/boundsGeometry
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRBoundedReferenceSpace.boundsGeometry
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The read-only {{domxref("XRBoundedReferenceSpace")}}
property **`boundsGeometry`** is an array of
{{domxref("DOMPointReadOnly")}} objects which specifies the points making up a polygon
inside which the viewer is allowed to move. Each point is treated as a
two-dimensional point, and must be located at ground level (that is,
its `y` coordinate must be 0).

This boundary is typically configured by the user, using the software that controls
their XR hardware. This may be done by walking the border of the space they wish to use,
or by drawing the shape of their room using their XR input device. Theoretically, a more
advanced system might use sensors or other detection methods to determine the bounds of
a dedicated XR room (notice how we carefully don't call it a holodeck?).

## Value

The `boundsGeometry` property is an array of {{domxref("DOMPointReadOnly")}}
objects, each of which defines one vertex in a polygon inside which the viewer is
required to remain. Each point must be at floor level, with
its `y` coordinate's value set to 0. Additionally, the value
of `w` is always 1 in every point in the array. Additionally, the
points _must_ be listed in clockwise order.

Each entry in `boundsGeometry` is equal to an entry in the list of native
bounds geometry points for the room, premultiplied by the inverse of the origin offset.
In other words, the bounds are the physical limitations of the available space, shifted
so that the reference space's bounds points are all defined relative to the
`XRBoundedReferenceSpace`'s effective origin.

## Usage notes

Bounded reference spaces always have their origin located at ground level,
where `y` is 0. As a general rule, with the origin
for `x` and `z` located in or near the center of the space, and
with the orientation set facing in a logical forward direction, as appropriate for the
underlying platform or XR hardware.

In order to reduce the risk of the room boundaries being used for [fingerprinting](/en-US/docs/Glossary/Fingerprinting)
purposes, each point in the `boundsGeometry` array may be rounded or adjusted
by some amount. The specification recommends that browsers shift the points to the
nearest 5 centimeters (while avoiding going outside the physical limitations of the
hardware).

### Boundary size

`XRBoundedReferenceSpace` is not intended to be used for very large bounded
areas. Instead, it's meant to be used for one-room spaces with no more than around 15
meters of available movement space in any direction from the native origin. That said,
the bounds extend upward indefinitely, since the bounds are defined in only two
dimensions.

If you need to create a multi-room space, or a space which is very large or needs to
have varying floor levels, you should instead use an unbounded
{{domxref("XRReferenceSpace")}} and enforce the bounds on your own, as appropriate.

### Boundary shape

The shape defined by `boundsGeometry` may be as simple as a square or as
complex as is needed, potentially including concave and/or convex sections. However,
you can't represent spaces with uneven floor levels
using `XRBoundedReferenceSpace`. The ground is _always_
at `y` = 0.

It's important that your content not be designed to require the user to exit the bounds
specified by `boundsGeometry`. However, if the user's surroundings permit
them to move in such a way as to exit the defined bounds, your content must be able to
gracefully handle the situation, which is not considered an error condition.

Although some samples render a mesh or other shape to display the bounds to the user,
in a real-world application, you shouldn't do this. The browser, however, should provide
appropriate warnings to the user about any risks (such as the risk that they might run
into a physical wall if they keep moving).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
