---
title: 'XRSession: squeeze event'
slug: Web/API/XRSession/squeeze_event
tags:
  - API
  - AR
  - Event
  - Input Sources
  - Inputs
  - Mixed
  - Primary Squeeze Action
  - Reality
  - Reference
  - Squeeze Action
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRSession
  - augmented
  - controllers
  - squeeze
browser-compat: api.XRSession.squeeze_event
---
{{APIRef("WebXR Device API")}}

The WebXR event **`squeeze`** is sent to an {{domxref("XRSession")}} when one of the session's input sources has completed a [primary squeeze action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#Primary_squeeze_actions). Examples of common kinds of primary action are users pressing triggers or buttons, tapping a touchpad, speaking a command, or performing a recognizable gesture when using a video tracking system or handheld controller with an accelerometer.

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
      <td>{{domxref("XRSession.onsqueeze", "onsqueeze")}}</td>
    </tr>
  </tbody>
</table>

For details on how the {{domxref("XRSession.squeezestart_event", "squeezestart")}}, {{domxref("XRSession.squeeze_event", "squeeze")}}, and {{domxref("XRSession.squeezeend_event", "squeezeend")}} events work, and how you should react to them, see {{SectionOnPage("/en-US/docs/Web/API/WebXR_Device_API/Inputs", "Primary squeeze actions")}}.

## Examples

The following example uses {{domxref("EventTarget.addEventListener", "addEventListener()")}} to set up a handler for the `squeeze` event. The handler fetches the pose representing the target ray for `tracked-pointer` inputs and sends the pose's transform to a function called `myHandleSqueezeWithRay()`.

This code treats the squeeze as an instantaneous action that doesn't involve tracking an ongoing activity. If you need to track a squeeze action that isn't instantaneous, listen for the {{domxref("XRSession.squeezestart_event", "squeezestart")}} and {{domxref("XRSession.squeezeend_event", "squeezeend")}} events to sense when the squeeze action begins and ends.

```js
xrSession.addEventListener("squeeze", event => {
  if (event.inputSource.targetRayMode == "tracked-pointer") {
    let targetRayPose = event.frame.getPose(event.inputSource.targetRaySpace,
                              myRefSpace);
    if (targetRayPose) {
      myHandleSqueezeWithRay(targetRayPose.transform);
    }
  }
});
```

You can of course also set up a handler for `squeeze` events by setting the {{domxref("XRSession")}} object's {{domxref("XRSession.onsqueeze", "onsqueeze")}} event handler property to a function that handles the event:

```js
xrSession.onsqueeze = event => {
  if (event.inputSource.targetRayMode == "tracked-pointer") {
    let targetRayPose = event.frame.getPose(event.inputSource.targetRaySpace,
                              myRefSpace);
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
