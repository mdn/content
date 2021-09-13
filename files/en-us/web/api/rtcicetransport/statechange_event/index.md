---
title: 'RTCIceTransport: statechange event'
slug: Web/API/RTCIceTransport/statechange_event
tags:
  - ICE
  - Negotiation
  - RTCIceTransport
  - Reference
  - SDP
  - Transport
  - WebRTC
  - WebRTC API
  - events
  - rtc
  - state
  - statechange
browser-compat: api.RTCIceTransport.statechange_event
---
{{WebRTCSidebar}}

A **`statechange`** event occurs when the {{domxref("RTCIceTransport")}} changes state. The {{domxref("RTCIceTransport.state", "state")}} can be used to determine how far through the process of examining, verifying, and selecting a valid candidate pair is prior to successfully connecting the two peers for WebRTC communications.

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
      <td>{{DOMxRef("RTCIceTransport.onstatechange")}}</td>
    </tr>
  </tbody>
</table>

## Examples

Given an {{domxref("RTCPeerConnection")}}, `pc`, the following code creates an event handler that calls a function named `handleFailure()` if the ICE transport enters a failure state.

```js
let iceTransport = pc.getSenders()[0].transport.iceTransport;

iceTransport.addEventListener("statechange", ev => {
  if (iceTransport.state === "failed") {
    handleFailure(pc);
  }
}, false);
```

The same code, using the {{domxref("RTCIceTransport.onstatechange", "onstatechange")}} event handler property, looks like this:

```js
let iceTransport = pc.getSenders()[0].transport.iceTransport;

iceTransport.onstatechange = ev => {
  if (iceTransport.state === "failed") {
    handleFailure(pc);
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [WebRTC connectivity](/en-US/docs/Web/API/WebRTC_API/Connectivity)
- {{domxref("RTCIceTransport.onstatechange")}} event handler

### Related RTCIceTransport events

- {{event("gatheringstatechange")}}
- {{event("selectedcandidatepairchange")}}

### Related RTCPeerConnection events

- {{event("negotiationneeded")}}
- {{event("signalingstatechange")}}
- {{event("iceconnectionstatechange")}}
- {{event("icegatheringstatechange")}}
- {{event("connectionstatechange")}}
