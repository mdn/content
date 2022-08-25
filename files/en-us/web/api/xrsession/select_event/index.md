---
title: 'XRSession: select event'
slug: Web/API/XRSession/select_event
page-type: web-api-event
tags:
  - API
  - Reference
  - Event
  - WebXR
  - XR
  - XRInputSourceEvent
  - Experimental
browser-compat: api.XRSession.select_event
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The WebXR **`select`** event is sent to an {{domxref("XRSession")}} when one of the session's input sources has completed a [primary action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#primary_action).

The {{domxref("Element.beforexrselect_event", "beforexrselect")}} is fired before this event and can prevent this event from being raised.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('select', (event) => { })

onselect = (event) => { }
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

Triggered when a user presses triggers or buttons, taps a touchpad, speaks a command or performs a recognizable gesture when using a video tracking system or handheld controller with an accelerometer.

### Use cases

The {{domxref("XRSession.selectstart_event", "selectstart")}} and {{domxref("XRSession.selectend_event", "selectend")}} events tell you when you might want to display something to the user indicating that the primary action is going on. This might be drawing a controller with the activated button in a new color, or showing the targeted object being grabbed and moved around, starting when `selectstart` arrives and stopping when `selectend` is received.

The `select` event tells your code that the user has completed an action. This might be as simple as throwing an object or pulling the trigger of a gun in a game, or as involved as placing a dragged object at a new location.

If your primary action is a simple trigger action and you don't need to animate anything while the trigger is engaged, you can ignore the `selectstart` and `selectend` events and act on the start event.

## Examples

The following example uses {{domxref("EventTarget.addEventListener", "addEventListener()")}} to set up a handler for the `select` event. The handler fetches the pose representing the target ray for `tracked-pointer` inputs and sends the pose's transform to a function called `myHandleSelectWithRay()`.

```js
xrSession.addEventListener("select", (event) => {
  if (event.inputSource.targetRayMode === "tracked-pointer") {
    let targetRayPose = event.frame.getPose(event.inputSource.targetRaySpace,
                              myRefSpace);
    if (targetRayPose) {
      myHandleSelectWithRay(targetRayPose.transform);
    }
  }
});
```

You can also set up a handler for `select` events by setting the {{domxref("XRSession")}} object's `onselect` event handler property to a function that handles the event:

```js
xrSession.onselect = (event) => {
  if (event.inputSource.targetRayMode === "tracked-pointer") {
    let targetRayPose = event.frame.getPose(event.inputSource.targetRaySpace,
                              myRefSpace);
    if (targetRayPose) {
      myHandleSelectWithRay(targetRayPose.transform);
    }
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRSession.selectstart_event", "selectstart")}} and {{domxref("XRSession.selectend_event", "selectend")}}
- {{domxref("Element.beforexrselect_event", "beforexrselect")}}
