---
title: 'XRSession: selectend event'
slug: Web/API/XRSession/selectend_event
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
  - selectend
browser-compat: api.XRSession.selectend_event
---
{{APIRef("WebXR Device API")}}

The WebXR event **`selectend`** is sent to an {{domxref("XRSession")}} when one of its input sources ends its [primary action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#primary_actions) or when an input source that's in the process of handling an ongoing primary action is disconnected without successfully completing the action.

Primary actions include things like users pressing triggers or buttons, tapping a touchpad, speaking a command, or performing a recognizable gesture when using a video tracking system or handheld controller with an accelerometer.

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
        {{domxref("XRSession.onselectend", "onselectend")}}
      </td>
    </tr>
  </tbody>
</table>

For details on how the {{domxref("XRSession.selectstart_event", "selectstart")}}, {{domxref("XRSession.select_event", "select")}}, and {{domxref("XRSession.selectend_event", "selectend")}} events work, and how you should react to them, see {{SectionOnPage("/en-US/docs/Web/API/WebXR_Device_API/Inputs", "Primary actions")}}.

## Examples

See [`selectstart_event`](/en-US/docs/Web/API/XRSession/selectstart_event#examples) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
