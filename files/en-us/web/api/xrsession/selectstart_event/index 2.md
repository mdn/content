---
title: 'XRSession: selectstart event'
slug: Web/API/XRSession/selectstart_event
tags:
  - API
  - AR
  - Event
  - Input Sources
  - Inputs
  - Mixed
  - Reality
  - Reference
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRSession
  - augmented
  - controllers
  - selectstart
browser-compat: api.XRSession.selectstart_event
---
{{APIRef("WebXR Device API")}}

The [WebXR](/en-US/docs/Web/API/WebXR_Device_API) event **`selectstart`** is sent to an {{domxref("XRSession")}} when the user begins a [primary action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#Primary_actions) on one of its input sources. Primary actions include things like users pressing triggers or buttons, tapping a touchpad, speaking a command, or performing a recognizable gesture when using a video tracking system or handheld controller with an accelerometer.

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("XRInputSourceEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{domxref("XRSession.onselectstart", "onselectstart")}}
      </td>
    </tr>
  </tbody>
</table>

For details on how the {{domxref("XRSession.selectstart_event", "selectstart")}}, {{domxref("XRSession.select_event", "select")}}, and {{domxref("XRSession.selectend_event", "selectend")}} events work, and how you should react to them, see {{SectionOnPage("/en-US/docs/Web/API/WebXR_Device_API/Inputs", "Primary actions")}}.

## Examples

The following example uses {{domxref("EventTarget.addEventListener", "addEventListener()")}} to establish handlers for the selection events: {{domxref("XRSession.selectstart_event", "selectstart")}}, {{domxref("XRSession.selectend_event", "selectend")}}, and {{domxref("XRSession.select_event", "select")}}. This snippet is the core of an event handler to allow the user to grab objects in the scene and move them around.

In this case, a single function is used to handle all three events, allowing them to share certain code that's the same regardless of which of the three events is received. Only after completing those tasks does the `onSelectionEvent()` function below dispatch the action out to a specialized function to handle things.

After checking to ensure that the received event is a `tracked-pointer` event (the only kind we handle here), the target ray's pose is obtained using {{domxref("XRFrame.getPose", "getPose()")}}.

If the target ray pose was fetched successfully, the code then uses the value of {{domxref("Event")}} property {{domxref("Event.type", "type")}} to route control to an appropriate function to handle the event which arrived:

- For `selectstart` events, a `myBeginTracking()` function is called with the target ray pose's {{domxref("XRRigidTransform.matrix", "matrix")}}. The `myBeginTracking()` function would presumably start the presentation of the object-dragging process, using the transform to perform a hit test, determining which object to pick up. `myBeginTracking()` returns an object representing the object the user has begun to drag.
- Upon receiving a `select` event, the `myDropObject()` function is called with the target object and the current target ray pose transform as inputs. This places the object into its new position in the world and triggers any effects that may arise from doing so (like scheduling an animation of a splash if dropped in water, etc).
- The `selectend` event results in a `myStopTracking()` function being called with the object being dragged and the final target ray pose's transform.

```js
xrSession.addEventListener("selectstart", onSelectionEvent);
xrSession.addEventListener("select", onSelectionEvent);
xrSession.addEventListener("selectend", onSelectionEvent);

function onSelectionEvent(event) {
  let source = event.inputSource;
  let targetObj = null;

  if (source.targetRayMode != "tracked-pointer") {
    return;
  }

  let targetRayPose = event.frame.getPose(source.targetRaySpace, myRefSpace);
  if (!targetRayPose) {
    return;
  }

  switch(event.type) {
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

You can of course also set up a handler for `selectend` events by setting the {{domxref("XRSession")}} object's {{domxref("XRSession.onselectend", "onselectend")}} event handler property to a function that handles the event:

```js
xrSession.onselectstart = onSelectionEvent;
xrSession.onselect = onSelectionEvent;
xrSession.onselectend = onSelectionEvent;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
