---
title: RTCPeerConnectionIceEvent.candidate
slug: Web/API/RTCPeerConnectionIceEvent/candidate
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

## Syntax

```js
 var candidate = event.candidate;
```

### Value

An {{domxref("RTCIceCandidate")}} object representing the ICE candidate that has been
received, or `null` to indicate that there are no further candidates for this
negotiation session.

## Example

```js
pc.onicecandidate = function( ev ) {
  alert("The ICE candidate (transport address: '" +
    ev.candidate.candidate +
    "') has been added to this connection.");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("icecandidate")}}
- {{domxref("RTCPeerConnection")}}
