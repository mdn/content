---
title: 'RTCPeerConnection: signalingstatechange event'
slug: Web/API/RTCPeerConnection/signalingstatechange_event
tags:
  - API
  - Event
  - Media
  - Reference
  - Signaling
  - WebRTC
  - WebRTC API
  - signalingState
  - signalingstatechange
  - state
browser-compat: api.RTCPeerConnection.signalingstatechange_event
---
{{APIRef("WebRTC")}}

An **`signalingstatechange`** event is sent to an {{domxref("RTCPeerConnection")}} to notify it that its signaling state, as indicated by the {{domxref("RTCPeerConnection.signalingState", "signalingState")}} property, has changed.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{DOMxRef("RTCPeerConnection.onsignalingstatechange")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

Given an {{domxref("RTCPeerConnection")}}, `pc`, and an `updateStatus()` function that presents status information to the user, this code sets up an event handler to let the user know when the ICE negotiation process finishes up.

```js
pc.addEventListener("signalingstatechange", ev => {
  switch(pc.signalingState) {
    case "stable":
      updateStatus("ICE negotiation complete");
      break;
  }
}, false);
```

Using {{domxref("RTCPeerConnection.onsignalingstatechange", "onsignalingstatechange")}}, it looks like this:

```js
pc.onsignalingstatechange = ev => {
  switch(pc.signalingState) {
    case "stable":
      updateStatus("ICE negotiation complete");
      break;
    }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.signalingState")}}
