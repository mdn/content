---
title: XRSession.onsqueezeend
slug: Web/API/XRSession/onsqueezeend
tags:
  - API
  - AR
  - Event Handler
  - Primary
  - Reality
  - Reference
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRSession
  - action
  - augmented
  - onsqueezeend
  - squeeze
browser-compat: api.XRSession.onsqueezeend
---
{{APIRef("WebXR Device API")}}

The {{domxref("XRSession")}} interface's
**`onsqueezeend`** event handler property is a function to be
invokedn when the {{domxref("XRSession.squeezeend_event", "squeezeend")}} event sent
to an `XRSession` when a [primary
squeeze action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#Primary_squeeze_actions) ends. This is sent immediately after the
{{domxref("XRSession.squeeze_event", "squeeze")}} event, which announces the
_successful_ completion of the squeeze action. The `squeezeend` event
handler is where you handle closing out a squeeze action whether it was successfully
completed or not.

To learn more about how the sequence of squeeze events works, see
{{SectionOnPage("/en-US/docs/Web/API/WebXR_Device_API/Inputs", "Primary squeeze
  actions")}}.

## Syntax

```js
xrSession.onsqueezeend = squeezeendHandlerFunction;
```

### Value

A function to be invoked whenever the {{domxref("XRSession")}} receives a
{{domxref("XRSession.squeezeend_event", "squeezestart")}} event, indicating the ending
of a primary squeeze action.

## Examples

This snippet of code adds a simple handler for the `squeezeend` event, which
responds only to events on the user's dominant hand. In response to the end of the
squeeze operation, this code looks to see if there is an object currently being held by
the user by checking to see if the variable `user.heldObject` contains a
reference to an object representing the held item.

If `heldObject` has an object reference, that object is passed to a function
called `cancelObjectDrag()`, which would be written to return the object to
its original position. This takes care of the situation in which the drag is aborted or
canceled.

```js
xrSession.onsqueezeend = event => {
  if (event.inputSource.handedness == user.handedness) {
    let targetRayPose = event.frame.getPose(event.inputSource.targetRaySpace, myRefSpace;

    if (user.heldObject) {
       cancelObjectDrag(user.heldObject);
    }
  }
};
```

This code presumes that if the user actually intentionally completed the drag,
`user.heldObject` will be `null` here. That's because (in this
example, at least) the handler for the {{domxref("XRSession.squeeze_event", "squeeze")}}
event has already dropped the object into its new location and then cleared the value of
`heldObject` to indicate that the user is no longer holding anything.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Inputs and input sources](/en-US/docs/Web/API/WebXR_Device_API/Inputs)
- The other `onsqueeze*` handlers: {{DOMxRef("XRSession.onsqueezestart",
    "onsqueezestart")}} and {{DOMxRef("XRSession.onsqueeze", "onsqueeze")}}
- The {{domxref("XRSession.squeeze_event", "squeeze")}},
  {{domxref("XRSession.squeezestart_event", "squeezestart")}}, and
  {{domxref("XRSession.squeezeend_event", "squeezeend")}} events
