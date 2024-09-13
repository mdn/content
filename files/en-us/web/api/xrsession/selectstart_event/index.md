---
title: "XRSession: selectstart event"
short-title: selectstart
slug: Web/API/XRSession/selectstart_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.XRSession.selectstart_event
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The [WebXR](/en-US/docs/Web/API/WebXR_Device_API) **`selectstart`** event is sent to an {{domxref("XRSession")}} when the user begins a [primary action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#primary_action) on one of its input sources.

The {{domxref("Element.beforexrselect_event", "beforexrselect")}} is fired before this event and can prevent this event from being raised.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("selectstart", (event) => {});

onselectstart = (event) => {};
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

Triggered when the user presses triggers or buttons, taps a touchpad, speaks a command, or performs a recognizable gesture when using a video tracking system or handheld controller with an accelerometer.

### Use cases

The `selectstart` and {{domxref("XRSession.selectend_event", "selectend")}} events tell you when you might want to display something to the user indicating that the primary action is going on. This might be drawing a controller with the activated button in a new color, or showing the targeted object being grabbed and moved around, starting when `selectstart` arrives and stopping when `selectend` is received.

The {{domxref("XRSession.select_event", "select")}} event tells your code that the user has completed the action they want to complete. This might be as simple as throwing an object or pulling the trigger of a gun in a game, or as involved as placing a dragged object in a new location.

If your primary action is a simple trigger action and you don't need to animate anything while the trigger is engaged, you can ignore the `selectstart` and `selectend` events and act on the start event.

## Examples

The following example uses {{domxref("EventTarget.addEventListener", "addEventListener()")}} to establish handlers for the selection events: `selectstart`, {{domxref("XRSession.selectend_event", "selectend")}}, and {{domxref("XRSession.select_event", "select")}}. This snippet is the core of an event handler to allow the user to grab objects in the scene and move them around.

In this case, a single function is used to handle all three events, allowing them to share certain code that's the same regardless of which of the three events is received. Only after completing those tasks does the `onSelectionEvent()` function below dispatch the action out to a specialized function to handle things.

After checking to ensure that the received event is a `tracked-pointer` event (the only kind we handle here), the target ray's pose is obtained using {{domxref("XRFrame.getPose", "getPose()")}}.

If the target ray pose was fetched successfully, the code then uses the value of {{domxref("Event")}} property {{domxref("Event.type", "type")}} to route control to an appropriate function to handle the event which arrived:

- For `selectstart` events, a `myBeginTracking()` function is called with the target ray pose's {{domxref("XRRigidTransform.matrix", "matrix")}}. The `myBeginTracking()` function would presumably start the presentation of the object-dragging process, using the transform to perform a hit test, determining which object to pick up. `myBeginTracking()` returns an object representing the object the user has begun to drag.
- Upon receiving a `select` event, the `myDropObject()` function is called with the target object, and the current target ray pose transform as inputs. This places the object into its new position in the world and triggers any effects that may arise, like scheduling an animation of a splash if dropped in water, etc.
- The `selectend` event results in a `myStopTracking()` function being called with the object being dragged and the final target ray pose's transform.

```js
xrSession.addEventListener("selectstart", onSelectionEvent);
xrSession.addEventListener("select", onSelectionEvent);
xrSession.addEventListener("selectend", onSelectionEvent);

function onSelectionEvent(event) {
  let source = event.inputSource;
  let targetObj = null;

  if (source.targetRayMode !== "tracked-pointer") {
    return;
  }

  let targetRayPose = event.frame.getPose(source.targetRaySpace, myRefSpace);
  if (!targetRayPose) {
    return;
  }

  switch (event.type) {
    case "selectstart":
      targetObj = myBeginTracking(targetRayPose.matrix);
      break;
    case "select":
      myDropObject(targetObj, targetRayPose.matrix);
      break;
    case "selectend":
      myStopTracking(targetObj, targetRayPose.matrix);
      break;
  }
}
```

You can also set up a handler for `selectend` events by setting the {{domxref("XRSession")}} object's `onselectend` event handler property to a function that handles the event:

```js
xrSession.onselectstart = onSelectionEvent;
xrSession.onselect = onSelectionEvent;
xrSession.onselectend = onSelectionEvent;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRSession.select_event", "select")}} and {{domxref("XRSession.selectend_event", "selectend")}}
- {{domxref("Element.beforexrselect_event", "beforexrselect")}}
