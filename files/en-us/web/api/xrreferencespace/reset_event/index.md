---
title: 'XRReferenceSpace: reset event'
slug: Web/API/XRReferenceSpace/reset_event
page-type: web-api-event
tags:
  - API
  - AR
  - Event
  - Graphics
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
browser-compat: api.XRReferenceSpace.reset_event
---
{{APIRef("WebXR Device API")}}

The **`reset`** event is sent to an {{domxref("XRReferenceSpace")}} object when a discontinuity is detected in either the native origin or the effective origin, causing a jump in the position or orientation of objects oriented using the reference space. This is common when the user calibrates or recalibrates an XR device, or if the device automatically changes its origin after losing tracking of the user, then re-gaining it.

In the case of {{domxref("XRBoundedReferenceSpace")}} objects, the `reset` event can also be fired when the {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} changes.

In either case, the event is sent before any WebXR animation frames which make use of the new origin are executed.

This event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('reset', (event) => { })

onreset = (event) => { }
```

## Event type

An {{domxref("XRReferenceSpaceEvent")}}. Inherits from {{domxref("Event")}}.

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("XRReferenceSpaceEvent.referenceSpace", "referenceSpace")}} {{ReadOnlyInline}}
  - : An {{domxref("XRReferenceSpace")}} indicating the reference space that generated the event.
- {{domxref("XRReferenceSpaceEvent.transform", "transform")}} {{ReadOnlyInline}}
  - : An {{domxref("XRRigidTransform")}} object indicating the position and orientation of the specified `referenceSpace` object's native origin after the event, defined relative to the coordinate system before the event.

## Description

The `reset` event indicates that the coordinate system has been reset or reconfigured by changing the reference space's origin, moving and rotating it as indicated by the event's {{domxref("XRReferenceSpaceEvent.transform", "transform")}} property. The event is sent before any animation frame callbacks are executed to render the pending frame, to ensure that those callbacks have the updated coordinate system available.

There are a number of reasons why a reset might occur. Most common among them are the following:

- The user has manually reset the coordinate system, such as by requesting that the headset recalibrate itself to ensure that the facing direction and hand controllers are synchronized with the user's actual position and facing. This is primarily an issue for `local` or `local-floor` reference spaces.
- For a `bounded-floor` reference space, the coordinate system can be reset if the user exits the boundaries of the reference space and enters a new one (such as by crossing from one level to another in a game, where each level is its own map with its own coordinate system).
- The tracking system has temporarily lost the user, then regained them, but not until after they had moved enough to leave the immediate vicinity of the last-known position. Primarily an issue for `unbounded` reference spaces.
- The user is in an `unbounded` reference space and has moved far enough from the starting position (the reference space's origin) that floating-point or other forms of error or drift are problematic. The coordinate system is thus reset with its new origin at or near the user's current position.
- The WebXR infrastructure or hardware drivers detected that the device had temporarily lost tracking, causing the hardware and software to be out of sync on position and orientation.

> **Note:** A `reset` event will _not_ occur if the reference space is able to regain tracking of its previous origin, since that means the origin has not been forced to be relocated. This event is only fired when the origin has to be relocated to recover from the tracking loss.

### Manual resets

If you've spent any time using a VR headset, you've had times when you've started it up and although you're facing straight ahead, the headset thinks you're looking at the sky or the floor; or times when you point the hand controller straight forward, but it thinks you're pointing it up and to the right somewhere. When that happens, you typically hold down a button somewhere and it causes the world to resynchronize to the device's current orientation. That works by sending a `reset` event to the reference space or reference spaces that are based on the headset's orientation.

### Handling discontinuities

You can handle jumps in the viewer's position by watching the Boolean {{domxref("XRPose")}} property {{domxref("XRPose.emulatedPosition", "emulatedPosition")}}. If a jump in the viewer's position coincides with `emulatedPosition` toggling from `true` to `false`, the viewer has regained tracking, and that their new position represents a correction from the previously emulated values. This is typically the desired behavior if your site or app doesn't simulate motion through the space by expressly changing the position and/or orientation of the viewer (rather than the user's physical movements being used by the XR device to introduce movement).

However, if that kind of "teleportation" is being used, you actually want to avoid jumping the user's position after tracking recovery, this can introduce additional and potentially jarring jumping. Instead of allowing this to happen, you can integrate the `emulatedPosition` into the teleportation offset calculated prior to calling {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} to create a new reference space whose updated effective origin is adjusted by the distance the viewer's position jumped since the previous frame. This way, the user's position only changes once rather than twice.

### The effect of discontinuity size

The `reset` event won't be fired when the discontinuity is small enough that the device is able to regain tracking within the same tracking area. Nor will be fired at an unbounded reference space as it makes small adjustments to its native origin over time to maintain the space's stability in the vicinity of the user; only large discontinuities will trigger a reset.

## Examples

To add a handler for the `reset` event, you can use either of two approaches. First, you can use the {{domxref("EventTarget.addEventListener", "addEventListener()")}} method:

```js
viewerRefSpace.addEventListener("reset", (event) => {
  /* perform reset related tasks */
});
```

The second option is to set the `XRReferenceSpace` object's `onreset` event handler property:

```js
viewerRefSpace.onreset = (event) => {
  /* perform reset related tasks */
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
