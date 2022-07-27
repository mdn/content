---
title: RTCPeerConnectionIceEvent.candidate
slug: Web/API/RTCPeerConnectionIceEvent/candidate
page-type: web-api-instance-property
tags:
  - Candidate
  - Negotiation
  - Networking
  - Property
  - RTCPeerConnectionIceEvent
  - Reference
  - SDP
  - WebRTC
  - WebRTC API
  - rtc
browser-compat: api.RTCPeerConnectionIceEvent.candidate
---
{{APIRef("WebRTC")}}

The read-only **`candidate`** property
of the {{domxref("RTCPeerConnectionIceEvent")}} interface returns the
{{domxref("RTCIceCandidate")}} associated with the event.

## Value

An {{domxref("RTCIceCandidate")}} object representing the ICE candidate that has been
received, or `null` to indicate that there are no further candidates for this
negotiation session.

## Example

```js
pc.onicecandidate = (ev) => {
  alert(`The ICE candidate (transport address: '${ev.candidate.candidate}') has been added to this connection.`);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}
- {{domxref("RTCPeerConnection")}}
