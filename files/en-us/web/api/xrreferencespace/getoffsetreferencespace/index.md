---
title: "XRReferenceSpace: getOffsetReferenceSpace() method"
short-title: getOffsetReferenceSpace()
slug: Web/API/XRReferenceSpace/getOffsetReferenceSpace
page-type: web-api-instance-method
browser-compat: api.XRReferenceSpace.getOffsetReferenceSpace
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

The {{domxref("XRReferenceSpace")}}
interface's **`getOffsetReferenceSpace()`** method returns a
new reference space object which describes the relative difference in position between
the object on which the method is called and a given point in 3D space. The
object returned by `getOffsetReferenceSpace()` is an
{{domxref("XRReferenceSpace")}} if called on an `XRReferenceSpace`, or an
{{domxref("XRBoundedReferenceSpace")}} if called on an object of that type.

In other words, when you have an object in 3D space and need to position another object
relative to that one, you can call `getOffsetReferenceSpace()`, passing into
it the position and orientation you want the second object to have
_relative to the position and orientation of the object on which you call `getOffsetReferenceSpace()`_.

Then, when drawing the scene, you can use the offset reference space to not only
position objects relative to one another, but to apply the needed transforms to render
objects properly based upon the viewer's position. This is demonstrated in the example
[Implementing rotation based on non-XR inputs](#implementing_rotation_based_on_non-xr_inputs), which demonstrates a way to
use this method to let the user use their mouse to pitch and yaw their viewing angle.

## Syntax

```js-nolint
getOffsetReferenceSpace(originOffset)
```

### Parameters

- `originOffset`
  - : An {{domxref("XRRigidTransform")}} specifying the offset to the origin of the new
    reference space. These values are added to the position and orientation of the current
    reference space and then the result is used as the position and orientation of the
    newly created {{domxref("XRReferenceSpace")}}.

### Return value

A new {{domxref("XRReferenceSpace")}} object describing a reference space with the same
native origin as the reference space on which the method was called, but with an origin
offset indicating the distance from the object to the point given
by `originOffset`.

If the object on which you call this method is an
{{domxref("XRBoundedReferenceSpace")}}, the returned object is one as well. The
{{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} of the new
reference space is set to the original object's `boundsGeometry` with each of
its points multiplied by the inverse of `originOffset`.

## Examples

Below are some examples showing how to use `getOffsetReferenceSpace()`.

### Teleporting or setting the position of the viewer

Upon first creating a scene, you may need to set the user's position within the 3D
world. You can do that using `getOffsetReferenceSpace()`.

```js
xrSession.requestReferenceSpace("local").then((refSpace) => {
  xrReferenceSpace = refSpace;
  xrReferenceSpace = xrReferenceSpace.getOffsetReferenceSpace(
    new XRRigidTransform(startPosition, { x: 0, y: 0, z: 1.0, w: 1.0 }),
  );
  xrSession.requestAnimationFrame(drawFrame);
});
```

In this code, we obtain a local reference space, then
use `getOffsetReferenceSpace()` to create a new space whose origin is
adjusted to a position given by `startPosition` and whose orientation is
looking directly along the Z axis. Then the first animation frame is requested using
{{domxref("XRSession")}}'s {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}}.

### Implementing rotation based on non-XR inputs

The input controls supported directly by WebXR are all dedicated VR or AR input
devices. In order to use mouse, keyboard, or other input devices to move or otherwise
transform objects in the 3D space—or to allow the user to move through the space—you'll
need to write some code to read the inputs and move perform the movements.

This is another good use case for `getOffsetReferenceSpace()`. In this
example, we'll show code that lets the user look around by right-clicking and moving the
mouse to change the viewing angle.

First, we add an event handler for {{domxref("Element.mousemove_event", "mousemove")}}
events, which calls our code to perform the rotation if the right mouse button is down.
Note also that we set {{domxref("Element.contextmenu_event", "oncontextmenu")}} up to be
ignored by calling {{domxref("Event.preventDefault", "preventDefault()")}} on those
events. This prevents the right-clicks from causing the context menu from appearing in
the browser.

```js
canvas.oncontextmenu = (event) => {
  event.preventDefault();
};
canvas.addEventListener("mousemove", (event) => {
  if (event.buttons & 2) {
    rotateViewBy(event.movementX, event.movementY);
  }
});
```

Next, the `rotateViewBy()` function, which updates the mouse look
direction's yaw and pitch based on the mouse delta values from
the `mousemove` event. The pitch is restricted so that you can't look beyond
straight up and straight down. Each time this is called, the new offsets are used to
update the current values of `mousePitch` and `mouseYaw`.

```js
let mouseYaw = 0.0;
let mousePitch = 0.0;
const inverseOrientation = quat.create();
const MOUSE_SPEED = 0.003;

function rotateViewBy(dx, dy) {
  mouseYaw += dx * MOUSE_SPEED;
  mousePitch += dy * MOUSE_SPEED;

  if (mousePitch < -Math.PI * 0.5) {
    mousePitch = -Math.PI * 0.5;
  } else if (mousePitch > Math.PI * 0.5) {
    mousePitch = Math.PI * 0.5;
  }
}
```

Finally, we need code that actually applies the computed yaw and pitch to the viewer's
orientation. This function, `applyMouseMovement()`, handles that:

```js
function applyMouseMovement(refSpace) {
  if (!mouseYaw && !mousePitch) {
    return refSpace;
  }

  quat.identity(inverseOrientation);
  quat.rotateX(inverseOrientation, inverseOrientation, -mousePitch);
  quat.rotateY(inverseOrientation, inverseOrientation, -mouseYaw);

  let newTransform = new XRRigidTransform(
    { x: 0, y: 0, z: 0 },
    {
      x: inverseOrientation[0],
      y: inverseOrientation[1],
      z: inverseOrientation[2],
      w: inverseOrientation[3],
    },
  );

  return refSpace.getOffsetReferenceSpace(newTransform);
}
```

This function creates an inverse orientation matrix—used to orient the viewer—from the
current pitch and yaw values, then uses that matrix as the source of the orientation
when calling {{domxref("XRRigidTransform.XRRigidTransform", "XRRigidTransform()")}}.
The new {{domxref("XRRigidTransform")}}'s reference space is then fetched and returned
to the caller.

This new reference space is one in which the viewer's position is unchanged, but their
orientation has been altered based on the pitch and yaw values generated from the
accumulated mouse inputs. `applyMouseMovement()` should be called when
drawing a frame, immediately before fetching the viewer's pose using
{{domxref("XRFrame.getViewerPose", "getViewerPose()")}}, and the rendering should be
performed in this reference space.

You can see code similar to this in use in our broader WebXR tutorial article called [Movement, orientation, and motion](/en-US/docs/Web/API/WebXR_Device_API/Movement_and_motion). In particular, check out the section called [Starting up the WebXR session](/en-US/docs/Web/API/WebXR_Device_API/Movement_and_motion#starting_up_the_webxr_session).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
