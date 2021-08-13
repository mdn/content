---
title: XRSession.onselect
slug: Web/API/XRSession/onselect
tags:
  - API
  - AR
  - Augmented Reality
  - Event Handler
  - Experimental
  - Reference
  - VR
  - Virtual Reality
  - WebXR
  - WebXR Device API
  - XR
  - XRSession
  - onselect
browser-compat: api.XRSession.onselect
---
{{APIRef("WebXR Device API")}}

The **`onselect`** property of the
{{DOMxRef("XRSession")}} object is the event handler for the
{{DOMxRef("XRSession.select_event", "select")}} event, which is dispatched when a [primary action](en-US/docs/Web/API/WebXR_Device_API/Inputs#Primary_actions)
is completed successfully by the user. This typically represents the pressing
of a button or trigger, a hand gesture, or a spoken command.

The {{domxref("XRSession.select_event", "select")}} event is sent after tracking of the
primary action begins, as announced by the {{domxref("XRSession.selectstart_event",
  "selectstart")}} event, and immediately before the tracking of the primary action ends,
which is announced by the {{domxref("XRSession.selectend_event", "selectend")}} event.

To learn more about how WebXR actions work, see [Inputs and input sources](/en-US/docs/Web/API/WebXR_Device_API/Inputs).

## Syntax

```js
xrSession.onselect = selectHandlerFunction;
```

### Value

An event handler function to be invoked when the {{domxref("XRSession")}} receives a
{{domxref("XRSession.select_event", "select")}} event.

## Example

This example handles `select` event which occur on the user's main hand (as
given by a `user` object's `handedness` property); if that value
matches the value of the {{domxref("XRInputSource")}} property
{{domxref("XRInputSource.handedness", "handedness")}}, we know that the device is held
in the user's main hand.

```js
xrSession.onselect = event => {
  let source = event.inputSource;

  if (source.handedness == user.handedness) {
    if (source.targetRayMode == "tracked-pointer") {
      let targetRayPose = event.frame.getPose(source.targetRaySpace, myRefSpace);

      if (targetRayPose) {
        myHandleSelectWithRay(targetRayPose);
      }
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
- {{DOMxRef("XRSession.onselectstart")}}
- {{DOMxRef("XRSession.onselectend")}}
