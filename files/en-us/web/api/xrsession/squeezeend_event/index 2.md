---
title: 'XRSession: squeezeend event'
slug: Web/API/XRSession/squeezeend_event
tags:
  - API
  - AR
  - Event
  - Input Sources
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
  - actions
  - augmented
  - squeezeend
browser-compat: api.XRSession.squeezeend_event
---
{{APIRef("WebXR Device API")}}

The WebXR event **`squeezeend`** is sent to an {{domxref("XRSession")}} when one of its input sources ends its [primary action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_actions) or when an input source that's in the process of handling an ongoing primary action is disconnected without successfully completing the action.

Primary squeeze actions include things like users pressing triggers or buttons, tapping a touchpad, speaking a command, or performing a recognizable gesture when using a video tracking system or handheld controller with an accelerometer.

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
        {{domxref("XRSession.onsqueezeend", "onsqueezeend")}}
      </td>
    </tr>
  </tbody>
</table>

For details on how the {{domxref("XRSession.squeezestart_event", "squeezestart")}}, {{domxref("XRSession.squeeze_event", "squeeze")}}, and {{domxref("XRSession.squeezeend_event", "squeezeend")}} events work, and how you should react to them, see {{SectionOnPage("/en-US/docs/Web/API/WebXR_Device_API/Inputs", "Primary squeeze actions")}}.

## Examples

See [`squeezestart_event`](/en-US/docs/Web/API/XRSession/squeezestart_event#examples) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
