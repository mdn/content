---
title: "XRSession: squeeze event"
short-title: squeeze
slug: Web/API/XRSession/squeeze_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.XRSession.squeeze_event
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The WebXR **`squeeze`** event is sent to an {{domxref("XRSession")}} when one of the session's input sources has completed a [primary squeeze action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_action). Examples of common kinds of primary action are users pressing triggers or buttons, tapping a touchpad, speaking a command, or performing a recognizable gesture when using a video tracking system or handheld controller with an accelerometer.

For details on how the {{domxref("XRSession.squeezestart_event", "squeezestart")}}, `squeeze`, and {{domxref("XRSession.squeezeend_event", "squeezeend")}} events work, and how you should react to them, see [Inputs and input sources](/en-US/docs/Web/API/WebXR_Device_API/Inputs#input_sources).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("squeeze", (event) => {});

onsqueeze = (event) => {};
```

## Event type

An {{domxref("XRInputSourceEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("XRInputSourceEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("XRInputSourceEvent.frame", "frame")}} {{ReadOnlyInline}}
  - : An {{domxref("XRFrame")}} object providing the needed information about the event frame during which the event occurred. This frame may have been rendered in the past rather than being a current frame. Because this is an _event_ frame, not an _animation_ frame, you cannot call {{domxref("XRFrame.getViewerPose", "XRFrame.getViewerPose()")}} on it; instead, use {{domxref("XRFrame.getPose", "getPose()")}}.
- {{domxref("XRInputSourceEvent.inputSource", "inputSource")}} {{ReadOnlyInline}}
  - : An {{domxref("XRInputSource")}} object indicating which input source generated the input event.

## Description

### Trigger

Triggered when users are squeezing the controller, making a hand gesture that mimes grabbing something, or using (squeezing) a trigger.

### Use cases

The {{domxref("XRSession.squeezestart_event", "squeezestart")}} event indicates that the user has begun a squeeze action.

If the primary squeeze action ends successfully, the session is sent a `squeeze` event.

A {{domxref("XRSession.squeezeend_event", "squeezeend")}} event is sent to indicate that the squeeze action is no longer underway. This is sent whether the squeeze action succeeded or not.

## Examples

The following example uses {{domxref("EventTarget.addEventListener", "addEventListener()")}} to set up a handler for the `squeeze` event. The handler fetches the pose representing the target ray for `tracked-pointer` inputs and sends the pose's transform to a function called `myHandleSqueezeWithRay()`.

This code treats the squeeze as an instantaneous action that doesn't involve tracking an ongoing activity. If you need to track a squeeze action that isn't instantaneous, listen for the {{domxref("XRSession.squeezestart_event", "squeezestart")}} and {{domxref("XRSession.squeezeend_event", "squeezeend")}} events to sense when the squeeze action begins and ends.

```js
xrSession.addEventListener("squeeze", (event) => {
  if (event.inputSource.targetRayMode === "tracked-pointer") {
    let targetRayPose = event.frame.getPose(
      event.inputSource.targetRaySpace,
      myRefSpace,
    );
    if (targetRayPose) {
      myHandleSqueezeWithRay(targetRayPose.transform);
    }
  }
});
```

You can also set up a handler for `squeeze` events by setting the {{domxref("XRSession")}} object's `onsqueeze` event handler property to a function that handles the event:

```js
xrSession.onsqueeze = (event) => {
  if (event.inputSource.targetRayMode === "tracked-pointer") {
    let targetRayPose = event.frame.getPose(
      event.inputSource.targetRaySpace,
      myRefSpace,
    );
    if (targetRayPose) {
      myHandleSqueezeWithRay(targetRayPose.transform);
    }
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRSession.squeezestart_event", "squeezestart")}} and {{domxref("XRSession.squeezeend_event", "squeezeend")}} event
