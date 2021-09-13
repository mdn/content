---
title: XRSession.onsqueezestart
slug: Web/API/XRSession/onsqueezestart
tags:
  - API
  - AR
  - Event Handler
  - Mixed
  - Primary Squeeze Actions
  - Reality
  - Reference
  - Squeeze Actions
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRSession
  - actions
  - augmented
  - onsqueezestart
browser-compat: api.XRSession.onsqueezestart
---
{{APIRef("WebXR Device API")}}

The {{domxref("XRSession")}} interface's
**`onsqueezestart`** event handler property can be set to a
function which is then invoked to handle the {{domxref("XRSession.squeezestart_event",
    "squeezestart")}} event that's sent when the user successfully begins a [primary
squeeze action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#Primary_squeeze_actions) on a WebXR input device. These actions represent the user
squeezing or tightly gripping an object or controller.

To learn more about how to use and handle WebXR controller inputs, see [Inputs and input sources](/en-US/docs/Web/API/WebXR_Device_API/Inputs).

## Syntax

```js
xrSession.onsqueezestart = squeezestartHandlerFunction;
```

### Value

A function to be invoked whenever the {{domxref("XRSession")}} receives a
{{domxref("XRSession.squeezestart_event", "squeezestart")}} event.

## Examples

This snippet of code adds a simple handler for the `squeezestart` event,
which responds only to events on the user's dominant hand by getting the target ray,
then calling a function `findObjectUsingRay()` to identify the object that
the user is pointing at. This object is then stored in a `heldObject`
variable in the `user` object we're using to represent user information.

```js
xrSession.onsqueezestart = event => {
  if (event.inputSource.handedness == user.handedness) {
    let targetRayPose = event.frame.getPose(event.inputSource.targetRaySpace, myRefSpace;

    if (targetRayPose) {
      user.heldObject = findObjectUsingRay(targetRayPose.transform);
    }
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Inputs and input sources](/en-US/docs/Web/API/WebXR_Device_API/Inputs)
- The other `onsqueeze*` handlers: {{DOMxRef("XRSession.onsqueeze",
    "onsqueeze")}} and {{DOMxRef("XRSession.onsqueezeend", "onsqueezeend")}}
- The {{domxref("XRSession.squeeze_event", "squeeze")}},
  {{domxref("XRSession.squeezestart_event", "squeezestart")}}, and
  {{domxref("XRSession.squeezeend_event", "squeezeend")}} events
