---
title: "XRSession: squeezestart event"
short-title: squeezestart
slug: Web/API/XRSession/squeezestart_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.XRSession.squeezestart_event
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The [WebXR](/en-US/docs/Web/API/WebXR_Device_API) event **`squeezestart`** is sent to an {{domxref("XRSession")}} when the user begins a [primary squeeze action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_actions) on one of its input sources.

Primary squeeze actions are actions which are meant to represent gripping or squeezing using your hands, and may be simulated using triggers on hand controllers.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("squeezestart", (event) => {});

onsqueezestart = (event) => {};
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

Triggered when users begin squeezing the controller, making a hand gesture that mimes grabbing something, or using (squeezing) a trigger.

### Use cases

The `squeezestart` event is sent indicating that the user has begun a squeeze action.

If the primary squeeze action ends successfully, the session is sent a {{domxref("XRSession.squeeze_event", "squeeze")}} event.

A {{domxref("XRSession.squeezeend_event", "squeezeend")}} event is sent to indicate that the squeeze action is no longer underway. This is sent whether the squeeze action succeeded or not.

## Examples

The following example uses {{domxref("EventTarget.addEventListener", "addEventListener()")}} to establish handlers for the squeeze events: `squeezestart`, {{domxref("XRSession.squeezeend_event", "squeezeend")}}, and {{domxref("XRSession.squeeze_event", "squeeze")}}. This snippet is the core of an event handler to allow the user to grab objects in the scene and move them around.

In this case, a single function is used to handle all three events, allowing them to share certain code that's the same regardless of which of the three events is received. Only after completing those tasks does the `onSqueezeEvent()` function below dispatch the action out to a specialized function to handle things.

After checking to ensure that the received event is a `tracked-pointer` event (the only kind we handle here), the target ray's pose is obtained using {{domxref("XRFrame.getPose", "getPose()")}}.

If the target ray pose was fetched successfully, the code then uses the value of {{domxref("Event")}} property {{domxref("Event.type", "type")}} to route control to an appropriate function to handle the event which arrived:

- For `squeezestart` events, a `myBeginTracking()` function is called with the target ray pose's {{domxref("XRRigidTransform.matrix", "matrix")}}. The `myBeginTracking()` function would presumably start the presentation of the object-dragging process, using the transform to perform a hit test, determining which object to pick up. `myBeginTracking()` returns an object representing the object the user has begun to drag.
- Upon receiving a `squeeze` event, the `myDropObject()` function is called with the target object, and the current target ray pose transform as inputs. This places the object into its new position in the world and triggers any effects that may arise, like scheduling an animation of a splash if dropped in water, etc.
- The `squeezeend` event results in a `myStopTracking()` function being called with the object being dragged and the final target ray pose's transform.

```js
xrSession.addEventListener("squeezestart", onSqueezeEvent);
xrSession.addEventListener("squeeze", onSqueezeEvent);
xrSession.addEventListener("squeezeend", onSqueezeEvent);

function onSqueezeEvent(event) {
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
    case "squeezestart":
      targetObj = myBeginTracking(targetRayPose.matrix);
      break;
    case "squeeze":
      myDropObject(targetObj, targetRayPose.matrix);
      break;
    case "squeezeend":
      myStopTracking(targetObj, targetRayPose.matrix);
      break;
  }
}
```

You can also set up a handler for these events by setting the {{domxref("XRSession")}} object's event handler properties to a function that handles the event:

```js
xrSession.onsqueezestart = onSqueezeEvent;
xrSession.onsqueeze = onSqueezeEvent;
xrSession.onsqueezeend = onSqueezeEvent;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
