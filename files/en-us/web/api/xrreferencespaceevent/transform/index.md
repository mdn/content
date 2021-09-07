---
title: XRReferenceSpaceEvent.transform
slug: Web/API/XRReferenceSpaceEvent/transform
tags:
  - API
  - AR
  - Coordinate System
  - Coordinates
  - Event
  - Mixed
  - Orientation
  - Position
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
  - XRReferenceSpace
  - augmented
  - reset
  - transform
browser-compat: api.XRReferenceSpaceEvent.transform
---
{{APIRef("WebXR Device API")}}

The read-only {{domxref("XRReferenceSpaceEvent")}} property
**`transform`** indicates the position and orientation of the
affected {{domxref("XRReferenceSpaceEvent.referenceSpace", "referenceSpace")}}'s
native origin after the changes the event represents are applied. The
`transform` is defined using the old coordinate system, which allows it to be
used to convert coordinates from the pre-event coordinate system to the post-event
coordiante system.

## Value

An {{domxref("XRRigidTransform")}} object providing a transform that can be used to
convert coordinates from the pre-event coordinate system to the post-event coordinate
system.

## Usage notes

Upon receiving a `reset` event, you can apply the `transform` to
cached position or orientation information to shift them into the updated coordinate
system. Alternatively, you can just discard any cached positional information and
recompute from scratch. The approach you take will depend on your needs.

For details on what causes a `reset` event and how to respond, see the
{{domxref("XRReferenceSpaceEvent.reset_event", "reset")}} event's documentation.

## Examples

This example handles the `reset` event by walking through all the objects in
a scene, updating each object's position by multiplying it with the event's given
`transform`. The scene is represented by a `scene` object, with
all the objects in an array called `objects` within it.

```js
xrReferenceSpace.addEventListener("reset", event => {
  for (let obj of scene.objects) {
    mat4.multiply(obj.transform, obj.transform, event.transform);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
