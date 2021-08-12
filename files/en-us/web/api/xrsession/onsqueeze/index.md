---
title: XRSession.onsqueeze
slug: Web/API/XRSession/onsqueeze
tags:
  - API
  - AR
  - Event Handler
  - Mixed
  - Primary Squeeze Action
  - Reality
  - Reference
  - Squeeze Action
  - VR
  - Virtual
  - WebXR
  - XR
  - XRSession
  - actions
  - augmented
  - onsqueeze
  - squeeze
browser-compat: api.XRSession.onsqueeze
---
{{APIRef("WebXR Device API")}}

The {{domxref("XRSession")}} interface's
**`onsqueeze`** event handler property can be set to a
function which is then invoked to handle the {{domxref("XRSession.squeeze_event",
    "squeeze")}} event that's sent when the user successfully completes a [primary
squeeze action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#Primary_squeeze_actions) on a WebXR input device. These actions represent the user
squeezing or gripping an object or controller.

To learn more about how to use and handle WebXR controller inputs, see [Inputs and input sources](/en-US/docs/Web/API/WebXR_Device_API/Inputs).

## Syntax

```js
xrSession.onsqueeze = squeezeHandlerFunction;
```

### Value

A function to be invoked whenever the {{domxref("XRSession")}} receives a
{{domxref("XRSession.squeeze_event", "squeeze")}} event.

## Examples

### Handling squeeze events for a specific hand

This snippet of code adds a simple handler for the `squeeze` event, which
responds only to events on the user's off-hand (that is, the hand that isn't their
dominant hand). This is determined by comparing the input source's
{{domxref("XRInputSource.handedness", "handedness")}} against the value of a
`handedness` property on a `user` object we've established
previously.

```js
xrSession.onsqueeze = event => {
  if (event.inputSource.handedness != user.handedness) {
    handleOffhandSqueeze(event.inputSource, event.frame);
  }
};
```

### Finishing an ongoing squeeze action

This example exapnds somewhat on the previous example by demonstrating a way to
implement the ability for the user to drop an object that was previously picked up by
the user.. This is just a snippet of code, but should establish the general idea.

After checking that the event occurred on the user's dominant hand, the pose's target
ray is obtained. Then we pass the currently held object and the target ray's transform
matrix into a function we call `dropObjectUsingRay()` to drop the object,
using the target ray to determine the surface upon which the object should be placed.
This also clears the value of `heldObject` so we know that there's no longer
an object in hand.

```js
xrSession.onsqueeze = event => {
  if (event.inputSource.handedness == user.handedness) {
    let targetRayPose = event.frame.getPose(event.inputSource.targetRaySpace, myRefSpace);

    if (user.heldObject && targetRayPose) {
      dropObjectUsingRay(user.heldObject, targetRayPose.transform.matrix):
    }
  }
};
```

See the examples in the {{domxref("XRSession.onsqueezestart", "onsqueezestart")}} and
{{domxref("XRSession.onsqueezeend", "onsqueezeend")}} event handlers for the reset of
the event handling related to this approach.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Inputs and input sources](/en-US/docs/Web/API/WebXR_Device_API/Inputs)
- The other `onsqueeze*` handlers: {{DOMxRef("XRSession.onsqueezestart",
    "onsqueezestart")}} and {{DOMxRef("XRSession.onsqueezeend", "onsqueezeend")}}
- The {{domxref("XRSession.squeeze_event", "squeeze")}},
  {{domxref("XRSession.squeezestart_event", "squeezestart")}}, and
  {{domxref("XRSession.squeezeend_event", "squeezeend")}} events
