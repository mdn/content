---
title: 'XRSession: inputsourceschange event'
slug: Web/API/XRSession/inputsourceschange_event
tags:
  - API
  - AR
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
  - XRInputSources
  - XRSession
  - augmented
  - events
  - inputsourceschange
browser-compat: api.XRSession.inputsourceschange_event
---
{{APIRef("WebXR Device API")}}

The **`inputsourceschange`** event is sent to an {{domxref("XRSession")}} when the set of available WebXR input devices changes.

The received event, of type {{domxref("XRInputSourcesChangeEvent")}}, contains a list of any newly {{domxref("XRInputSourcesChangeEvent.added", "added")}} and/or {{domxref("XRInputSourcesChangeEvent.removed", "removed")}} input devices.

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
      <td>{{domxref("XRInputSourcesChangeEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{domxref("XRSession.oninputsourceschange", "oninputsourceschange")}}
      </td>
    </tr>
  </tbody>
</table>

The event object contains lists of the newly-added and/or removed input devices in its {{domxref("XRInputSourcesChangeEvent.added", "added")}} and {{domxref("XRInputSourcesChangeEvent.removed", "removed")}} properties.

## Examples

See [`XRInputSourcesChangeEvent`](/en-US/docs/Web/API/XRInputSourcesChangeEvent#examples) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
