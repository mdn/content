---
title: 'XRSession: squeezestart event'
slug: Web/API/XRSession/squeezestart_event
tags:
  - API
  - AR
  - Event
  - Input Sources
  - Inputs
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
  - augmented
  - controllers
  - squeezestart
browser-compat: api.XRSession.squeezestart_event
---
{{APIRef("WebXR Device API")}}

The [WebXR](/en-US/docs/Web/API/WebXR_Device_API) event **`squeezestart`** is sent to an {{domxref("XRSession")}} when the user begins a [primary squeeze action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_actions) on one of its input sources.

Primary squeeze actions are actions which are meant to represent gripping or squeezing using your hands, and may be simulated using triggers on hand controllers.

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
        {{domxref("XRSession.onsqueezestart", "onsqueezestart")}}
      </td>
    </tr>
  </tbody>
</table>

For details on how the {{domxref("XRSession.squeezestart_event", "squeezestart")}}, {{domxref("XRSession.squeeze_event", "squeeze")}}, and {{domxref("XRSession.squeezeend_event", "squeezeend")}} events work, and how you should react to them, see {{SectionOnPage("/en-US/docs/Web/API/WebXR_Device_API/Inputs", "Primary squeeze actions")}}.

## Examples

The following example uses {{domxref("EventTarget.addEventListener", "addEventListener()")}} to establish handlers for the squeeze events: {{domxref("XRSession.squeezestart_event", "squeezestart")}}, {{domxref("XRSession.squeezeend_event", "squeezeend")}}, and {{domxref("XRSession.squeeze_event", "squeeze")}}. This snippet is the core of an event handler to allow the user to grab objects in the scene and move them around.

In this case, a single function is used to handle all three events, allowing them to share certain code that's the same regardless of which of the three events is received. Only after completing those tasks does the `onSqueezeEvent()` function below dispatch the action out to a specialized function to handle things.

After checking to ensure that the received event is a `tracked-pointer` event (the only kind we handle here), the target ray's pose is obtained using {{domxref("XRFrame.getPose", "getPose()")}}.

If the target ray pose was fetched successfully, the code then uses the value of {{domxref("Event")}} property {{domxref("Event.type", "type")}} to route control to an appropriate function to handle the event which arrived:

- For `squeezestart` events, a `myBeginTracking()` function is called with the target ray pose's {{domxref("XRRigidTransform.matrix", "matrix")}}. The `myBeginTracking()` function would presumably start the presentation of the object-dragging process, using the transform to perform a hit test, determining which object to pick up. `myBeginTracking()` returns an object representing the object the user has begun to drag.
- Upon receiving a `squeeze` event, the `myDropObject()` function is called with the target object and the current target ray pose transform as inputs. This places the object into its new position in the world and triggers any effects that may arise from doing so (like scheduling an animation of a splash if dropped in water, etc).
- The `squeezeend` event results in a `myStopTracking()` function being called with the object being dragged and the final target ray pose's transform.

```js
xrSession.addEventListener("squeezestart", onSqueezeEvent);
xrSession.addEventListener("squeeze", onSqueezeEvent);
xrSession.addEventListener("squeezeend", onSqueezeEvent);

function onSqueezeEvent(event) {
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

You can of course also set up a handler these events by setting the {{domxref("XRSession")}} object's {{domxref("XRSession.onsqueezeend", "onsqueezeend")}} event handler property to a function that handles the event:

```js
xrSession.onsqueezestart = onSqueezeEvent;
xrSession.onsqueeze = onSqueezeEvent;
xrSession.onsqueezeend = onSqueezeEvent;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
