---
title: 'XRSession: select event'
slug: Web/API/XRSession/select_event
tags:
  - API
  - AR
  - Input Source
  - Inputs
  - Mixed
  - Reality
  - Reference
  - Select
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRInputSourceEvent
  - augmented
  - controllers
  - events
  - target
browser-compat: api.XRSession.select_event
---
{{APIRef("WebXR Device API")}}

The WebXR event **`select`** is sent to an {{domxref("XRSession")}} when one of the session's input sources has completed a [primary action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#Primary_actions). Examples of common kinds of primary action are users pressing triggers or buttons, tapping a touchpad, speaking a command, or performing a recognizable gesture when using a video tracking system or handheld controller with an accelerometer.

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
      <td>{{domxref("XRSession.onselect", "onselect")}}</td>
    </tr>
  </tbody>
</table>

For details on how the {{domxref("XRSession.selectstart_event", "selectstart")}}, {{domxref("XRSession.select_event", "select")}}, and {{domxref("XRSession.selectend_event", "selectend")}} events work, and how you should react to them, see {{SectionOnPage("/en-US/docs/Web/API/WebXR_Device_API/Inputs", "Primary actions")}}.

## Examples

The following example uses {{domxref("EventTarget.addEventListener", "addEventListener()")}} to set up a handler for the `select` event. The handler fetches the pose representing the target ray for `tracked-pointer` inputs and sends the pose's transform to a function called `myHandleSelectWithRay()`.

```js
xrSession.addEventListener("select", event => {
  if (event.inputSource.targetRayMode == "tracked-pointer") {
    let targetRayPose = event.frame.getPose(event.inputSource.targetRaySpace,
                              myRefSpace);
    if (targetRayPose) {
      myHandleSelectWithRay(targetRayPose.transform);
    }
  }
});
```

You can of course also set up a handler for `select` events by setting the {{domxref("XRSession")}} object's {{domxref("XRSession.onselect", "onselect")}} event handler property to a function that handles the event:

```js
xrSession.onselect = event => {
  if (event.inputSource.targetRayMode == "tracked-pointer") {
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
